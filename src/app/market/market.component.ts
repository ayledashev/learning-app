import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { MarketItem, MarketService } from '../services/market.service';
import { MarketItemType } from './MarketItemType';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent implements OnInit{
  searchControl: FormControl;
  typeControl: FormControl;

  marketItems: MarketItem[] = [];

  marketTypes: SelectItem[] = [];

  constructor(public marketService: MarketService) {

  }

  ngOnInit(): void {
      this.searchControl = new FormControl("");
      this.typeControl = new FormControl(null);

      this.marketItems = this.marketService.setItems();
      console.log(this.marketItems);
      this.marketTypes = this.marketService.getItemTypes();
  }
}
