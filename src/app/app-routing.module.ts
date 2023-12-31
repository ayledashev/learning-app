import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisrtyComponent } from './regisrty/regisrty.component';
import { MarketComponent } from './market/market.component';
import { KalComponent } from './kal/kal.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SalesComponent } from './sales/sales.component';

const routes: Routes = [
  { path: "", component: RegisrtyComponent, pathMatch: "full"},
  { path: "market", component: MarketComponent},
  { path: "kal", component: KalComponent},
  { path: "contacts", component: ContactsComponent},
  { path: "sales", component: SalesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

