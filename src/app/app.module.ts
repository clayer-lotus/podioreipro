import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SubIntroFeaturesComponent } from './components/sub-intro-features/sub-intro-features.component';
import { WhatSystemOffersComponent } from './components/what-system-offers/what-system-offers.component';
import { WhyChooseUsComponent } from './components/why-choose-us/why-choose-us.component';
import { PodioreiproAllCrmFeaturesComponent } from './components/podioreipro-all-crm-features/podioreipro-all-crm-features.component';
import { PageIntroComponent } from './components/page-intro/page-intro.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SubIntroFeaturesComponent,
    WhatSystemOffersComponent,
    WhyChooseUsComponent,
    PodioreiproAllCrmFeaturesComponent,
    PageIntroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
