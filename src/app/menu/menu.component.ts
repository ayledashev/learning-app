import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[];

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


}

export class MenuItem {
  name: string;
  icon: string;
  route: string;
}
