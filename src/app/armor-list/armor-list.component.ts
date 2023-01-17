import { Component, OnInit } from '@angular/core';
import { Armor } from '../armor';
import { ArmorServiceService } from '../armor-service.service';

@Component({
  selector: 'app-armor-list',
  templateUrl: './armor-list.component.html',
  styleUrls: ['./armor-list.component.css']
})
export class ArmorListComponent implements OnInit{
  armors: Armor[] = []
  constructor(private armorService: ArmorServiceService){}

  filterByRank(rank: String){
    let filtered: Armor[] = []
    this.armors.forEach((value) => {
      if(value.rank === rank) filtered.push(value)
    })
    this.armors = filtered
  }

  ngOnInit(): void {
    this.armors = this.armorService.getArmors()
  }
}
