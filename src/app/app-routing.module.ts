import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { IntegrationComponent } from './components/integration/integration.component';
import { OfferComponent } from './components/offer/offer.component';
import { PodioreiproAllCrmFeaturesComponent } from './components/podioreipro-all-crm-features/podioreipro-all-crm-features.component';
import { PricingComponent } from './components/pricing/pricing.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'all-features', component: PodioreiproAllCrmFeaturesComponent},
  {path: 'integration', component: IntegrationComponent},
  {path: 'pricing', component: PricingComponent},
  {path: 'markmonroe', component: OfferComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
