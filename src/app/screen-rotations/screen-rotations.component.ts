// Team Generation Screen respecting volleyball roles as defined by `../model/Player`
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Player } from '../model';
import { NgbAccordionBody, NgbAccordionCollapse, NgbAccordionHeader, NgbAccordionItem, NgbAccordionButton, NgbAccordionDirective, NgbAccordionToggle } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-screen-rotations',
  imports: [FormsModule, NgbAccordionButton, NgbAccordionDirective, NgbAccordionItem, NgbAccordionHeader, NgbAccordionToggle, NgbAccordionBody, NgbAccordionCollapse,],
  templateUrl: './screen-rotations.component.html',
  styleUrl: './screen-rotations.component.less'
})
export class ScreenRotationsComponent {
  @Input() players!: Player[];
  get outsidePlayers(): Player[] {
    return this.players.filter(player => !player.outside);
  }
  get middlePlayers(): Player[] {
    return this.players.filter(player => player.middle);
  }
  get oppositePlayers(): Player[] {
    return this.players.filter(player => player.opposite);
  }
  get SetterPlayers(): Player[] {
    return this.players.filter(player => player.setter);
  }
  get LiberoPlayers(): Player[] {
    return this.players.filter(player => player.libero);
  }
}