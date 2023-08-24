import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisrtyComponent } from './regisrty/regisrty.component';

const routes: Routes = [
  { path: "", component: RegisrtyComponent, pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
