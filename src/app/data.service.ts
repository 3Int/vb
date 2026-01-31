import { Injectable } from '@angular/core';
import { Player } from './model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private players: Player[] = [];

  setPlayers(players: Player[]){
    this.players = players;
  }
  
  addPlayer(player: Player): boolean{
    if (Player.isNew(player, this.players)){
      this.players.push(player);
      return true
    }
    return false
  }
  getPlayers(): Player[] {
    let clone =Object.assign([],this.players);
    return clone
  }
}
