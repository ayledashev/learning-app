import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisrtyComponent } from './regisrty/regisrty.component';
import { MarketComponent } from './market/market.component';

const routes: Routes = [
  { path: "", component: RegisrtyComponent, pathMatch: "full"},
  { path: "market", component: MarketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
