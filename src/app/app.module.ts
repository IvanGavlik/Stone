import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './firstSimpleImpl/ui/card/card.component';
import { AppCardComponent } from './firstSimpleImpl/app-card/app-card.component';
import { StoneCardComponent } from './secondSimpleImpl/ui/stone-card/stone-card.component';
import { CardV2Component } from './secondSimpleImpl/components/card-v2/card-v2.component';
import { AppV2Component } from './secondSimpleImpl/app-v2/app-v2.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    AppCardComponent,
    StoneCardComponent,
    CardV2Component,
    AppV2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
