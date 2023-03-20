import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LandingComponent} from "./components/landing/landing.component";
import {FooterContentComponent} from "./components/footer-content/footer-content.component";
import {TeamInfoComponent} from "./components/team-info/team-info.component";
import {PanelComponent} from "./components/panel/panel.component";
import {CountdownComponent} from "./components/countdown/countdown.component";

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    FooterContentComponent,
    TeamInfoComponent,
    PanelComponent,
    CountdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
