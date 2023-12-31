import { Component, OnInit } from '@angular/core';
import { MarketItem, MarketService } from '../services/market.service';
import { FormControl } from '@angular/forms';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss'],
})
export class SalesComponent implements OnInit {
  searchControl: FormControl;
  typeControl: FormControl;
  salesList: MarketItem[] = [];
  filteredSalesMarketItems: MarketItem[] = [];
  marketTypes: SelectItem[] = [];


  ngOnInit(): void {
    this.searchControl = new FormControl('');
    this.typeControl = new FormControl('');
    this.salesList = this.marketService.setItems();
    this.filteredSalesMarketItems = this.marketService.setItems();
    this.marketService.getItemTypes(true);
    this.marketTypes = this.marketService.marketTypes;
    this.searchControl.valueChanges.subscribe((val: string) => {
      if (val) {
        this.filteredSalesMarketItems = this.salesList.filter(
          (item: MarketItem) => {
            let itemString = val.toUpperCase();
            if (
              item.name?.toUpperCase()?.includes(itemString) ||
              item.description?.toUpperCase()?.includes(itemString)
            ) {
              return true;
            }
            return false;
          }
        );
      }
    });
    this.typeControl.valueChanges.subscribe((value: string) => {
      if (value) {
        this.filteredSalesMarketItems = this.salesList.filter(
          (item: MarketItem) => item.type === value
        );
      }
    });
  }


  constructor(public marketService: MarketService) {}

  clearFilters() {
    this.filteredSalesMarketItems = this.salesList;
    this.typeControl.setValue(null);
    this.searchControl.setValue('');
  }

}
