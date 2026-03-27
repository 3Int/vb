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
  getRoles(): string[] {
    const roles = [];
    if (this.outside){roles.push('OH')}
    if (this.middle){roles.push('M')}
    if (this.opposite){roles.push('OPP')}
    if (this.setter){roles.push('S')}
    if (this.libero){roles.push('L')}
    return roles;
  }
  
  toString(): string{
    return this.name;
  }
  static deSerialize(name: string, values: string): Player{
    return new Player(name);
  }
  static isNew(newplayer:Player, players: Player[]): boolean {
  const seen = new Set<string>(players.map(p => p.name));
  if (seen.has(newplayer.name)){
    return false
  }
  return true
}
}
