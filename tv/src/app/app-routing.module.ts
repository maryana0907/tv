import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPageComponent} from './components/main-page/main-page.component';
import {TvComponent} from './components/tv/tv.component';
import {AddServicesComponent} from './components/add-services/add-services.component';
import {OrderComponent} from './components/order/order.component';
import {SupportComponent} from './components/support/support.component';
import {ServiceOblComponent} from './components/services/service-obl/service-obl.component';
import {ServiceBysinesComponent} from './components/services/service-bysines/service-bysines.component';
import {ServiceInternetTvComponent} from './components/services/service-internet-tv/service-internet-tv.component';
import {ServiceInternetComponent} from './components/services/service-internet/service-internet.component';
import {ServiceTVComponent} from './components/services/service-tv/service-tv.component';
import {SingleTVComponent} from './components/single-tv/single-tv.component';


const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'tv', component: TvComponent},
  {path: 'tv/:id', component: SingleTVComponent},
  {path: 'service', component: ServiceOblComponent},
  {path: 'add-services', component: AddServicesComponent},
  {path: 'order', component: OrderComponent},
  {path: 'support', component: SupportComponent},
  {path: 'tvS', component: ServiceTVComponent},
  {path: 'internet', component: ServiceInternetComponent},
  {path: 'obl', component: ServiceOblComponent},
  {path: 'internet_tv', component: ServiceInternetTvComponent},
  {path: 'business', component: ServiceBysinesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
