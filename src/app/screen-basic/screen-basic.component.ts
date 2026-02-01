// Original Team Generation Screen for arbitrary size and number of teams
import { Component, inject} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, ActivatedRoute } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { Player } from '../model';
import { iter } from '../util';
import { DataService } from '../data.service';

@Component({
  selector: 'app-screen-basic',
  imports: [NgbModule, RouterOutlet, CommonModule, FormsModule],
  templateUrl: './screen-basic.component.html',
  styleUrl: './screen-basic.component.less'
})
export class ScreenBasicComponent {
  data = inject(DataService);
  numTeamsSelectorValue = "2";
  numTeamsSelected = 2;
  nTeamsValue = "4";
  
  onButtonGenerate(): void{
    if(this.numTeamsSelectorValue === 'n'){
      this.numTeamsSelected  = Number(this.nTeamsValue);
    }
    else{
      this.numTeamsSelected = Number(this.numTeamsSelectorValue);
    }
    
    let teams = Array.from({ length: this.numTeamsSelected }, () => []);
    // clone array here
    let localPlayers: Player[] = this.data.getPlayers();

    let nameslen = localPlayers.length;
    let iterator = iter(teams);
    for(let i =0; i < nameslen; i++){
        let index = Math.floor(Math.random()* localPlayers.length);
        let n = localPlayers[index];
        localPlayers.splice(index,1);
        let team = iterator.next().value;
        team.push(n);

    }
    this.data.teams = teams;
  }

}