import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisrtyComponent } from './regisrty/regisrty.component';
import { MarketComponent } from './market/market.component';
import { KalComponent } from './kal/kal.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  { path: "", component: RegisrtyComponent, pathMatch: "full"},
  { path: "market", component: MarketComponent},
  { path: "kal", component: KalComponent},
  { path: "contacts", component: ContactsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

