import { Injectable } from '@angular/core';
import { Armor } from './armor';
import { ARMORS } from './mock-armors';

@Injectable({
  providedIn: 'root'
})
export class ArmorServiceService {

  constructor() { }

  getArmors(): Armor[]{
    return ARMORS
  }
}
