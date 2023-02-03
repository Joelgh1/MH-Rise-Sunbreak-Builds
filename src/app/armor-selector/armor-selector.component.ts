import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-armor-selector',
  templateUrl: './armor-selector.component.html',
  styleUrls: ['./armor-selector.component.css']
})
export class ArmorSelectorComponent {
  @Output() selectedSlot = new EventEmitter<string>()

  selectSlot(slot: string) {
    this.selectedSlot.emit(slot)
  }
}
