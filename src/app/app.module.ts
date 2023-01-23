import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArmorListComponent } from './armor-list/armor-list.component';
import { ArmorSelectorComponent } from './armor-selector/armor-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    ArmorListComponent,
    ArmorSelectorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
