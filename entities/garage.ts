import { Rest } from './rest';

export class Garage extends Rest {
  public name: string;
  public level: number;
  public xp: number;

  constructor(
    name: string,
    uid?: string,
    created?: Date,
    updated?: Date,
    level?: number, 
    xp?: number
  ) {
    super(uid, created, updated);

    this.name = name.toUpperCase();
    this.level = level || 1;
    this.xp = xp || 0;
  }

  
}