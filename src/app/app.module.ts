import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NetworkCardComponent } from './components/network-card/network-card.component';
import { NetworksListComponent } from './components/networks-list/networks-list.component';
import { HttpClientModule } from '@angular/common/http';
import { StationsListComponent } from './components/stations-list/stations-list.component';
import { StationCardComponent } from './components/station-card/station-card.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    HeaderComponent,
    NetworkCardComponent,
    NetworksListComponent,
    StationsListComponent,
    StationCardComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
