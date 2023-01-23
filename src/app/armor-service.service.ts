import { Injectable } from '@angular/core';
import { Armor } from './armor';
import { ARMORS } from './mock-armors';
import { WEAPONS } from './mock-weapons';
import { Weapon } from './weapon';

@Injectable({
  providedIn: 'root'
})
export class ArmorServiceService {

  constructor() { }

  getArmors(): Armor[]{
    return ARMORS
  }

  getWeapons(): Weapon[]{
    return WEAPONS
  }

}
