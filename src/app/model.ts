export class Player{
  name: string;
  outside: boolean = false;
  middle: boolean = false;
  opposite: boolean = false; // dia
  setter: boolean = false;
  libero: boolean = false;
  constructor( name: string){
    this.name = name;
  }
}
