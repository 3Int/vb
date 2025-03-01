import {  AfterViewInit, Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, ActivatedRoute } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NgbModule, RouterOutlet, CommonModule, FormsModule],
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
  displayedColumns = ["teamCount", "teamNames"];

  constructor(private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    //consiedr using Angular's ActivatedRoute here instead
    const params = new URLSearchParams(window.location.search);
    const names = params.get('names')?.replaceAll(',', '\n');
    if (names) this.playerNamesValue = names;
  }

  onButtonGenerate(textinput: string): void{
    if(this.numTeamsSelectorValue === 'n'){
      this.numTeamsSelected  = Number(this.nTeamsValue);
    }
    else{
      this.numTeamsSelected = Number(this.numTeamsSelectorValue);
    }
    let names = this.playerNamesValue
        .split('\n')
        .map(function(str){return str.trim();})
        .filter(function(str){return str}); // boolean interpretation is same as non-empty
    // remove duplicates by using a Set
    names = [...new Set(names)];
    
    var teams = Array.from({ length: this.numTeamsSelected }, () => []);
    var playersPerTeam = Math.floor(names.length / this.numTeamsSelected);

    let nameslen = names.length;
    function* iter(list: any[]){
        let index = 0;
        while(true){
            yield list[index % list.length];
            index++;
        }
    }
    var iterator = iter(teams);
    for(let i =0; i < nameslen; i++){
        var index = Math.floor(Math.random()* names.length);
        var n = names[index]; 
        names.splice(index,1);
        var team = iterator.next().value;
        team.push(n);

    }
    this.teamsArray = teams;
  }

}
