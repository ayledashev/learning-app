import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { forkJoin } from 'rxjs';
import { MarketItem, MarketService } from '../services/market.service';
import { MarketItemType } from './MarketItemType';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent implements OnInit {
  searchControl: FormControl;
  typeControl: FormControl;

  filteredMarketItems: MarketItem[] = [];
  marketItems: MarketItem[] = [];
 
  marketTypes: SelectItem[] = [];

  childValue = '';

  constructor(public marketService: MarketService) {

  }

  ngOnInit(): void {
      this.searchControl = new FormControl("");
      this.typeControl = new FormControl("");

      this.marketItems = this.filteredMarketItems = this.marketService.setItems();
      console.warn(this.marketItems,this.filteredMarketItems);this.marketTypes = this.marketService.getItemTypes();

      this.searchControl.valueChanges.subscribe((val: string) => {
        if (val) {
          this.filteredMarketItems = this.marketItems.filter((item: MarketItem) => {
            let itemString = val.toUpperCase();
            if (item.name?.toUpperCase()?.includes(itemString) || item.description?.toUpperCase()?.includes(itemString)) {
              return true;
            }
            return false;
          });
        }
      });

      this.typeControl.valueChanges.subscribe((value: number) => {
        if (value) {
          this.filteredMarketItems = this.marketItems.filter((item: MarketItem) => item.type === value);
        }
      });
  }

  clearFilters() {
    this.filteredMarketItems = this.marketItems;
    this.typeControl.setValue(null);
    this.searchControl.setValue('');
  }

  fillData(value: string) {
    console.log('ЗНАЧЕНИЕ', value);
    this.searchControl.patchValue(value);
  }
  addToCart(product: MarketItem) {
    if (!product.onSale || product.amount === 0) {
      return;
    }
    this.marketService.cartItems.push(product);
    console.log(this.marketService.cartItems);
  }
}
