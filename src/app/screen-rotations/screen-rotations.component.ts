// Team Generation Screen respecting volleyball roles as defined by `../model/Player`
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Player } from '../model';
import { NgbAccordionBody, NgbAccordionCollapse, NgbAccordionHeader, NgbAccordionItem, NgbAccordionButton, NgbAccordionDirective, NgbAccordionToggle } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../data.service';
import { assignPlayersRandomly } from '../util';
import  SWIPL  from 'swipl-wasm';

@Component({
  selector: 'app-screen-rotations',
  imports: [FormsModule, NgbAccordionButton, NgbAccordionDirective, NgbAccordionItem, NgbAccordionHeader, NgbAccordionToggle, NgbAccordionBody, NgbAccordionCollapse,],
  templateUrl: './screen-rotations.component.html',
  styleUrl: './screen-rotations.component.less'
})
export class ScreenRotationsComponent{
  data = inject(DataService);
  async generateTeams(){
    // https://de.wikipedia.org/wiki/Volleyball#Spielpositionen
    // we want 2 outside, 1 opp, 1 set and either 2*middle or middle + libero
    const teamCount = Math.floor(this.data.getPlayers().length / 6);
    const swipl = await SWIPL({ arguments: ["-q"] });
    console.log(swipl);
  }

  get OutsidePlayers(): Player[] {
    return this.data.getPlayers().filter(player => player.outside);
  }
  get MiddlePlayers(): Player[] {
    return this.data.getPlayers().filter(player => player.middle);
  }
  get OppositePlayers(): Player[] {
    return this.data.getPlayers().filter(player => player.opposite);
  }
  get SetterPlayers(): Player[] {
    return this.data.getPlayers().filter(player => player.setter);
  }
  get LiberoPlayers(): Player[] {
    return this.data.getPlayers().filter(player => player.libero);
  }
  get NoRolePlayers(): Player[] {
    return this.data.getPlayers().filter(
      player => !player.outside && !player.middle && !player.opposite && !player.setter && !player.libero
      );
  }
}