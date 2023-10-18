import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[];

  constructor(public dialogService: DialogService) {}
  ngOnInit(): void {
    this.menuItems =[
      {
        name: "Market",
        icon: "pi pi-truck",
        route: "/market"
      },
      {
        name: "Sales",
        icon: "pi pi-percentage",
        route: ""
      },
      {
        name: "Contacts",
        icon: "pi pi-users",
        route: ""
      }

    ]
  }
  openDialog() {
    const ref =this.dialogService.open(CartComponent, { header: 'Корзина'});
    
  }
}


export class MenuItem {
  name: string;
  icon: string;
  route: string;
}
