import { Injectable, OnInit } from '@angular/core';
import { MarketItemType, SalesMarketItemType } from '../market/MarketItemType';
import { SelectItem } from 'primeng/api';

@Injectable()
export class MarketService {
  MarketItemTypes = MarketItemType;
  cartItems: CartItem[] = [];
  marketTypes: SelectItem[] = [];

  setItems(isSales = true): MarketItem[] {
    let items: MarketItem[] = [
      {
        name: 'Белый хлеб',
        type: MarketItemType.BREAD,
        price: 100,
        imageUrl: 'Bread.webp',
        description: '',
        discount: 0,
        onSale: true,
        amount: 200,
      },
      {
        name: 'Молоко',
        type: MarketItemType.DAIRY,
        price: 30,
        imageUrl: 'moloko.jpg',
        description: 'Класс. Напиток бомба',
        discount: 0,
        onSale: true,
        amount: 300,
      },
      {
        name: 'Масло',
        type: MarketItemType.DAIRY,
        price: 1,
        imageUrl: 'butter.jpg',
        description: 'Жирнющее масло',
        discount: 0,
        onSale: false,
        amount: 100,
      },
      {
        name: 'Баскин Робинс',
        type: MarketItemType.ICE_CREAM,
        price: 500000,
        imageUrl: 'br.jpg',
        description: 'Райское наслаждение',
        discount: 0,
        onSale: true,
        amount: 500,
      },
      {
        name: 'Juice',
        type: MarketItemType.JUICE,
        price: 0,
        imageUrl: 'juice.jpg',
        description: 'Репер просто класс. Лайк. Подписка',
        discount: 0,
        onSale: true,
        amount: 3,
      },

      {
        name: 'Торт',
        type: SalesMarketItemType.Cake,
        price: 3000,
        imageUrl: 'cake.jpg',
        description: '',
        discount: 10,
        onSale: false,
        amount: 100,
      },
      {
        name: 'Сыр',
        type: SalesMarketItemType.Cheese,
        price: 500,
        imageUrl: 'cheese.webp',
        description: '',
        discount: 30,
        onSale: true,
        amount: 500,
      },
      {
        name: 'Соус',
        type: SalesMarketItemType.Sauce,
        price: 200,
        imageUrl: 'sauce.jpg',
        description: '',
        discount: 15,
        onSale: true,
        amount: 50,
      },
      {
        name: 'Кола',
        type: SalesMarketItemType.Cola,
        price: 100,
        imageUrl: 'cola.jpg',
        description: '',
        discount: 15,
        onSale: true,
        amount: 100,
      },
    ];
    if (isSales) {
      items = items.filter((item: MarketItem) => item.discount > 0);
    }
    return items;
  }

  getItemTypes(isSales = false) {
    let types: SelectItem[] = [];
    let typeEnum = isSales
      ? SalesMarketItemType
      : Object.assign({}, MarketItemType, SalesMarketItemType);
    Object.keys(typeEnum).forEach((key: any) => {
      switch (key) {
        case MarketItemType.DAIRY:
          types.push({ label: 'Молочные продукты', value: key });
          break;
        case MarketItemType.BREAD:
          types.push({ label: 'Хлеб', value: key });
          break;
        case MarketItemType.ICE_CREAM:
          types.push({ label: 'Мороженное', value: key });
          break;
        case MarketItemType.JUICE:
          types.push({ label: 'Соки', value: key });
          break;
        case SalesMarketItemType.Sauce:
          types.push({ label: 'Соус', value: key });
          break;
        case SalesMarketItemType.Cheese:
          types.push({ label: 'Сыр', value: key });
          break;
        case SalesMarketItemType.Cake:
          types.push({ label: 'Торт', value: key });
          break;
        case SalesMarketItemType.Cola:
          types.push({ label: 'Кола', value: key });
          break;
      }
    });
    this.marketTypes = types;
  }

  getItemTypeLabel(type: string): string {
    return (
      this.marketTypes.find((element: SelectItem) => element.value === type)
        ?.label || 'Не указан'
    );
  }

  addCartItem(item: MarketItem) {
    let cartItem = this.cartItems.find((i: CartItem) => i.name === item.name);
    if (cartItem) {
      cartItem.cartAmount += 1;
      return;
    }

    this.cartItems.push({ ...item, cartAmount: 1 });
  }
}

export class MarketItem {
  name: string;
  type: string;
  price: number;
  imageUrl: string;
  description: string;
  discount: number;
  onSale: boolean;
  amount: number;
}

export class CartItem extends MarketItem {
  cartAmount: number;
}
