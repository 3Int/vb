import { Component, inject, Input, ViewChild } from '@angular/core';
import { NgbAlert, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Player } from '../model';
import { ModalRotationsComponent } from '../modal-rotations/modal-rotations.component';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs/internal/Subject';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { debounceTime, tap } from 'rxjs/operators';
import { DataService } from '../data.service';

@Component({
  selector: 'app-screen-edit',
  imports: [FormsModule, NgbAlert],
  templateUrl: './screen-edit.component.html',
  styleUrl: './screen-edit.component.less'
})
export class ScreenEditComponent {
  data = inject(DataService);
  @ViewChild('selfClosingAlert', { static: false })selfClosingAlert!: NgbAlert;
  private _message$ = new Subject<string>();
  newItem: string = "";
  alertMessage = '';

  constructor(private modalService: NgbModal) {
    this._message$
			.pipe(
				takeUntilDestroyed(),
				tap((message) => (this.alertMessage = message)),
				debounceTime(5000),
			)
			.subscribe(() => this.selfClosingAlert?.close());
  }

  addItem() {
    const name = this.newItem.trim()
    if (name) {
      let newPlayer = new Player(name);
      if(this.data.addPlayer(newPlayer)){
        this.newItem = '';
        return
      }
      else{
        this.setAlertMessage(newPlayer.name);
      }
    }
  }
  removeItem(player: Player){
    this.data.removePlayer(player);
  }

  openPlayerModal(player: Player){
    const modalRef = this.modalService.open(ModalRotationsComponent);
    modalRef.componentInstance.player = player;
    /*
    modalRef.result.then((updatedPlayer) => {
      // Handle the updated player data if needed
      console.log('Player updated:', updatedPlayer);
    }).catch((error) => {
      console.log('Modal dismissed');
    });
    */
  }
  public setAlertMessage(s: string) {
		this._message$.next(`"${s}" already exists. Please choose a unique name.`);
	}

}
