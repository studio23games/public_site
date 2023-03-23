import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LandingComponent} from "./components/landing/landing.component";
import {FooterContentComponent} from "./components/footer-content/footer-content.component";
import {TeamInfoComponent} from "./components/team-info/team-info.component";
import {PanelComponent} from "./components/panel/panel.component";
import {CountdownComponent} from "./components/countdown/countdown.component";
import {SocialHeroComponent} from "./components/social-hero/social-hero.component";
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ReactiveFormsModule} from "@angular/forms";
import {ModalComponent} from "./components/modal/modal.component";
import {FormLabelComponent} from "./components/form-label/form-label.component";
import {ConfirmationComponent} from "./components/confirmation/confirmation.component";
import {OutletProviderDirective} from "./directives/outlet-provider.directive";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    FooterContentComponent,
    TeamInfoComponent,
    PanelComponent,
    CountdownComponent,
    SocialHeroComponent,
    ModalComponent,
    FormLabelComponent,
    ConfirmationComponent,
    OutletProviderDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
