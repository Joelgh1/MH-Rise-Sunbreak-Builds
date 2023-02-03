import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  equipmentFilter?: string

  setFilter(filter: string) {
    this.equipmentFilter = filter
  }
}
