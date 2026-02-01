import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Player} from '../model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-rotations',
  imports: [FormsModule],
  templateUrl: './modal-rotations.component.html',
  styleUrl: './modal-rotations.component.less'
})
export class ModalRotationsComponent {
 @Input() player!: Player;

  constructor(public activeModal: NgbActiveModal) {}

  savePlayer() {
    // You can emit an event or handle the save logic here
    this.activeModal.close(this.player);
  }
}
