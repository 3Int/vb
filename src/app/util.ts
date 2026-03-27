import { Player } from "./model";

export function* iter(list: any[]){
    let index = 0;
    while(true){
        yield list[index % list.length];
        index++;
    }
}
export function assignPlayersRandomly(players: Player[], teams: Player[][]){
    let nameslen = players.length;
    let iterator = iter(teams);
    for(let i =0; i < nameslen; i++){
        let index = Math.floor(Math.random()* players.length);
        let n = players[index];
        players.splice(index,1);
        let team = iterator.next().value;
        team.push(n);
    }
    return teams;
}