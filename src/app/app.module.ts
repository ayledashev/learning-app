import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule} from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// PRIME NG IMPORTS
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { AccordionModule } from 'primeng/accordion';
import { DataViewModule } from 'primeng/dataview';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
// COMPONENT IMPORTS
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './services/user.service';

import { AppComponent } from './app.component';
import { RegisrtyComponent } from './regisrty/regisrty.component';
import { MarketComponent } from './market/market.component';
import { MarketService } from './services/market.service';
import { InputSwitchModule } from 'primeng/inputswitch';
import { MenuComponent } from './menu/menu.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { CartComponent } from './cart/cart.component';
import { KalComponent } from './kal/kal.component';
import { TestModuleComponentComponent } from './test-module/test-module-component/test-module-component.component';
import { TestDriveComponent } from './test-drive/test-drive.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisrtyComponent,
    MarketComponent,
    MenuComponent,
    TestComponentComponent,
    CartComponent,
    KalComponent,
    TestModuleComponentComponent,
    TestDriveComponent
  ],
  imports: [
    ButtonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    BrowserModule,
    AppRoutingModule,
    InputSwitchModule,
    AccordionModule,
    DropdownModule,
    DataViewModule,
    DynamicDialogModule 
  ],
  providers: [UserService, MarketService, DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
