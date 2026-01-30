export class Player{
  name: string;
  outside: boolean;
  middle: boolean;
  opposite: boolean; // dia
  setter: boolean;
  libero: boolean;

  constructor(
    name:string, 
    outside: boolean = false,
    middle: boolean = false,
    opposite: boolean = false, // dia
    setter: boolean = false,
    libero: boolean = false,
  ){
    this.name = name;
    this.outside = outside;
    this.middle = middle;
    this.opposite = opposite;
    this.setter = setter;
    this.libero = libero;
  }
  serialize(): string[] {
    const values = 'OOOO'
    return [this.name, values];
  }
  static deSerialize(name: string, values: string): Player{
    return new Player(name);
  }
}
