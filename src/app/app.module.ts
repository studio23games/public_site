import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LandingComponent} from "./components/landing/landing.component";
import {FooterContentComponent} from "./components/footer-content/footer-content.component";

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    FooterContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
