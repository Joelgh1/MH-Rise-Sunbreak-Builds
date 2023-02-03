import { Component, Input, OnInit } from '@angular/core';
import { Armor } from '../armor';
import { ArmorServiceService } from '../armor-service.service';

@Component({
  selector: 'app-armor-list',
  templateUrl: './armor-list.component.html',
  styleUrls: ['./armor-list.component.css']
})
export class ArmorListComponent implements OnInit {
  armors: Armor[] = []
  selectedArmor?: Armor
  @Input() equipmentFilter?: string

  constructor(private armorService: ArmorServiceService) { }

  filterByRank(rank: String) {
    let filtered: Armor[] = []
    this.armors.forEach((value) => {
      if (value.rank === rank) filtered.push(value)
    })
    this.armors = filtered
  }

  ngOnInit(): void {
    this.armors = this.armorService.getArmors()
  }

  changeSelected(armor: Armor) {
    if (this.selectedArmor === armor) {
      this.selectedArmor = undefined
    } else {
      this.selectedArmor = armor
    }
  }

  setIcon(armorType: string): string {
    switch (armorType) {
      case "HEAD": return "https://static.wikia.nocookie.net/monsterhunter/images/8/88/MHRise_Item_Icon-Helmet_Grey.svg"; break;
      case "CHEST": return "https://static.wikia.nocookie.net/monsterhunter/images/e/e1/MHRise_Item_Icon-Chestplate_Grey.svg"; break;
      case "ARMS": return "https://static.wikia.nocookie.net/monsterhunter/images/5/55/MHRise_Item_Icon-Armguard_Grey.svg"; break;
      case "WAIST": return "https://static.wikia.nocookie.net/monsterhunter/images/8/84/MHRise_Item_Icon-Waist_Grey.svg"; break;
      case "LEGS": return "https://static.wikia.nocookie.net/monsterhunter/images/3/32/MHRise_Item_Icon-Leggings_Grey.svg"; break;
      default: return ""
    }
  }

}
