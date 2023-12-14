import { Component, OnInit } from '@angular/core';
import {
  CartItem,
  MarketItem,
  MarketService,
} from '../services/market.service';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  storageCart: CartItem[];

  constructor(
    public marketService: MarketService,
    public dialog: DynamicDialogRef,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.storageCart = this.marketService.cartItems;
  }
  returnToMarket() {
    this.dialog.close();
    this.router.navigate(['/market']);
  }
  getSumItems(item: CartItem): number {
    return item.cartAmount * item.price;
  }
  buyItems() {
    console.log(this.storageCart);
  }
  allSum(): number {
    let sum: number = 0;
    this.storageCart.forEach((finalItem: CartItem) => {
      sum += this.getSumItems(finalItem);
    });
    return sum;
  }
}
