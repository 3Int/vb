import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Player } from '../model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalRotationsComponent } from '../modal-rotations/modal-rotations.component';

@Component({
  selector: 'app-screen-rotations',
  imports: [FormsModule],
  templateUrl: './screen-rotations.component.html',
  styleUrl: './screen-rotations.component.less'
})
export class ScreenRotationsComponent {
  players: Player[] = [];
  newItem: string = "";

  constructor(private modalService: NgbModal) {}

  addItem() {
    if (this.newItem.trim()) {
      this.players.push( new Player(this.newItem));
      this.newItem = "";
    }
  }

  openPlayerDialog(player: Player) {
    const modalRef = this.modalService.open(ModalRotationsComponent);
    modalRef.componentInstance.player = player;

    modalRef.result.then((updatedPlayer) => {
      // Handle the updated player data if needed
      console.log('Player updated:', updatedPlayer);
    }).catch((error) => {
      console.log('Modal dismissed');
    });
  }

}