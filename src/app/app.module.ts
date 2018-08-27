import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClockDirective } from './directives/clock.directive';
import { TickDirective } from './directives/tick.directive';

@NgModule({
  declarations: [
    AppComponent,
    ClockDirective,
    TickDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
