import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisrtyComponent } from './regisrty/regisrty.component';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { MarketComponent } from './market/market.component';
import { MarketService } from './services/market.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisrtyComponent,
    MarketComponent
  ],
  imports: [
    ButtonModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UserService, MarketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
