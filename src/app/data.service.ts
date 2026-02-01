import { Injectable } from '@angular/core';
import { Player } from './model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private players: Player[] = [];

  setPlayers(players: Player[]){
    for (let player of players){
      this.addPlayer(player);
    }
  }
  
  addPlayer(player: Player): boolean{
    if (player.name.trim() && Player.isNew(player, this.players)){
      this.players.push(player);
      return true
    }
    return false
  }
  removePlayer(player: Player){
    const index = this.players.indexOf(player);
    if (index !== -1) {
      this.players.splice(index, 1);
    }
  }
  getPlayers(): Player[] {
    let clone =Object.assign([],this.players);
    return clone
  }
}
