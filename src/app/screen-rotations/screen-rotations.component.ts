// Team Generation Screen respecting volleyball roles as defined by `../model/Player`
import { Component, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Player } from '../model';
import { NgbAccordionBody, NgbAccordionCollapse, NgbAccordionHeader, NgbAccordionItem, NgbAccordionButton, NgbAccordionDirective, NgbAccordionToggle } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../data.service';

@Component({
  selector: 'app-screen-rotations',
  imports: [FormsModule, NgbAccordionButton, NgbAccordionDirective, NgbAccordionItem, NgbAccordionHeader, NgbAccordionToggle, NgbAccordionBody, NgbAccordionCollapse,],
  templateUrl: './screen-rotations.component.html',
  styleUrl: './screen-rotations.component.less'
})
export class ScreenRotationsComponent {
  data = inject(DataService);

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
}