import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddServicesComponent } from './components/add-services/add-services.component';
import { SupportComponent } from './components/support/support.component';
import { TvComponent } from './components/tv/tv.component';
import { OrderComponent } from './components/order/order.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
import { ServiceTVComponent } from './components/services/service-tv/service-tv.component';
import { ServiceInternetComponent } from './components/services/service-internet/service-internet.component';
import { ServiceInternetTvComponent } from './components/services/service-internet-tv/service-internet-tv.component';
import { ServiceBysinesComponent } from './components/services/service-bysines/service-bysines.component';
import { ServiceOblComponent } from './components/services/service-obl/service-obl.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { SingleTVComponent } from './components/single-tv/single-tv.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { SortPipe } from './pipes/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddServicesComponent,
    SupportComponent,
    TvComponent,
    OrderComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    MainPageComponent,
    TopMenuComponent,
    ServiceTVComponent,
    ServiceInternetComponent,
    ServiceInternetTvComponent,
    ServiceBysinesComponent,
    ServiceOblComponent,
    SingleTVComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    HttpClientModule,
    MatMenuModule,
    MatIconModule,
    MatButtonToggleModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
