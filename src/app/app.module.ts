import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './firstSimpleImpl/ui/card/card.component';
import { AppCardComponent } from './firstSimpleImpl/app-card/app-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    AppCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
