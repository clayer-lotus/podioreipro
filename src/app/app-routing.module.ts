import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PodioreiproAllCrmFeaturesComponent } from './components/podioreipro-all-crm-features/podioreipro-all-crm-features.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'all-features', component: PodioreiproAllCrmFeaturesComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
