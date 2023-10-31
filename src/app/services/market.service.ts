import { Injectable, OnInit } from "@angular/core";
import { MarketItemType } from "../market/MarketItemType";
import { SelectItem } from "primeng/api";

@Injectable()
export class MarketService {
    MarketItemTypes = MarketItemType;
    cartItems: MarketItem[] = [];

    setItems(): MarketItem[] {
        return [
            {
                name: 'Белый хлеб',
                type: MarketItemType.BREAD,
                price: 100,
                imageUrl: 'Bread.webp',
                description: '',
                hasDiscount: false,
                onSale: true,
                amount: 200
            },
            {
                name: 'Молоко',
                type: MarketItemType.DAIRY,
                price: 30,
                imageUrl: 'moloko.jpg',
                description: 'Класс. Напиток бомба',
                hasDiscount: false,
                onSale: true,
                amount: 300
            },
            {
                name: 'Масло',
                type: MarketItemType.DAIRY,
                price: 1,
                imageUrl: 'butter.jpg',
                description: 'Жирнющее масло',
                hasDiscount: false,
                onSale: false,
                amount: 100
            },
            {
                name: 'Баскин Робинс',
                type: MarketItemType.ICE_CREAM,
                price: 500000,
                imageUrl: 'br.jpg',
                description: 'Райское наслаждение',
                hasDiscount: false,
                onSale: true,
                amount: 500
            },
            {
                name: 'Juice',
                type: MarketItemType.JUICE,
                price: 0,
                imageUrl: 'juice.jpg',
                description: 'Репер просто класс. Лайк. Подписка',
                hasDiscount: false,
                onSale: true,
                amount: 'rip'
            }
        ];
    }

    getItemTypes(): SelectItem[] {
        let types: SelectItem[] = [];
        // console.log(Object.keys(MarketItemType));
        Object.keys(MarketItemType)
        .filter((key: string) => !isNaN(+key))
        .map((key: string) => +key)
        .forEach((key: number) => {
            // console.log(key);
            switch (key) {
                case MarketItemType.DAIRY:
                    types.push({ label: 'Молочные продукты', value: key});
                    break;
                case MarketItemType.BREAD:
                    types.push({ label: 'Хлеб', value: key});
                    break;
                case MarketItemType.ICE_CREAM:
                    types.push({ label: 'Мороженное', value: key});
                    break;
                case MarketItemType.JUICE:
                    types.push({ label: 'Соки', value: key});
                    break;
            }
        });
        return types;
    }


    getItemTypeLabel(type: MarketItemType): string {
        return this.getItemTypes().find((element: SelectItem) => element.value === type)?.label || 'Не указан';
    }
}

export class MarketItem {
    name: string;
    type: MarketItemType;
    price: number;
    imageUrl: string;
    description: string
    hasDiscount: boolean;
    onSale: boolean;
    amount: any;
}