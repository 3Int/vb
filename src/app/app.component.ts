import { Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, ActivatedRoute } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CommonModule } from '@angular/common';
import { filter, take } from 'rxjs';
import { ScreenBasicComponent } from "./screen-basic/screen-basic.component";
import { ScreenRotationsComponent } from './screen-rotations/screen-rotations.component';

@Component({
  selector: 'app-root',
  imports: [NgbModule, RouterOutlet, CommonModule, FormsModule, ScreenBasicComponent, ScreenRotationsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent implements OnInit {
  title = 'vb';
  playerNamesValue = "";
  numTeamsSelectorValue = "2";
  numTeamsSelected = 2;
  nTeamsValue = "4";
  teamsArray: string[][] = [];
  duplicateNames: string[] = [];

  constructor(private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.queryParams.pipe(
      filter(params => Object.keys(params).length > 0), // Only proceed if params are not empty
      take(1)
    ).subscribe(params => {
      const names = params['names']?.replaceAll(',', '\n');
      if (names) {
        this.playerNamesValue = names;
      }
    });
  }

onButtonGenerate(textinput: string): void{
    if(this.numTeamsSelectorValue === 'n'){
      this.numTeamsSelected  = Number(this.nTeamsValue);
    }
    else{
      this.numTeamsSelected = Number(this.numTeamsSelectorValue);
    }
    let nameslist = this.playerNamesValue
        .split('\n')
        .map(function(str){return str.trim();})
        .filter(function(str){return str}); // boolean interpretation is same as non-empty
    // remove duplicates by using a Set
    let namesset = new Set(nameslist);
    let names = [...namesset];

    
    let teams = Array.from({ length: this.numTeamsSelected }, () => []);
    let playersPerTeam = Math.floor(names.length / this.numTeamsSelected);

    let nameslen = names.length;
    function* iter(list: any[]){
        let index = 0;
        while(true){
            yield list[index % list.length];
            index++;
        }
    }
    let iterator = iter(teams);
    for(let i =0; i < nameslen; i++){
        let index = Math.floor(Math.random()* names.length);
        let n = names[index]; 
        names.splice(index,1);
        let team = iterator.next().value;
        team.push(n);

    }
    this.teamsArray = teams;
  }

}
