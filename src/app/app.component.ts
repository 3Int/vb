import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonToggleChange, MatButtonToggleModule} from '@angular/material/button-toggle'; 
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonToggleModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatTableModule, MatGridListModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'vb';
  numTeamsSelectorValue = "2";
  numTeamsSelected = 2;
  teamsArray: string[][] = [];
  displayedColumns = ["teamCount", "teamNames"];

  onNumTeamsSelector(event: MatButtonToggleChange): void{
    this.numTeamsSelectorValue = event.value;
    if(this.numTeamsSelectorValue === 'n'){
      this.numTeamsSelected  = 4; //TODO
    }
    else{
      this.numTeamsSelected = Number(this.numTeamsSelectorValue);
    }
  }

  onButtonGenerate(textinput: string): void{
    let names = textinput
        .split('\n')
        .map(function(str){return str.trim();})
        .filter(function(str){return str}); // boolean interpretation is same as non-empty
    // remove duplicates by using a Set
    names = [...new Set(names)];
    
    var teams = Array.from({ length: this.numTeamsSelected }, () => []);
    var playersPerTeam = Math.floor(names.length / this.numTeamsSelected);

    let nameslen = names.length;
    function* iter(list: any){
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
