import { Injectable, OnInit } from "@angular/core";
import { MarketItemType } from "../market/MarketItemType";
import { SelectItem } from "primeng/api";

@Injectable()
export class MarketService {
    MarketItemTypes = MarketItemType;

    setItems(): MarketItem[] {
        return [
            {
                name: 'Белый хлеб',
                type: MarketItemType.BREAD,
                price: 100,
                imageUrl: 'Bread.webp',
                description: '',
                hasDiscount: false,
                onSale: true
            },
            {
                name: 'Молоко',
                type: MarketItemType.DAIRY,
                price: 30,
                imageUrl: '',
                description: 'Класс. Напиток бомба',
                hasDiscount: false,
                onSale: true
            },
            {
                name: 'Масло',
                type: MarketItemType.DAIRY,
                price: 1,
                imageUrl: '',
                description: 'Жирнющее масло',
                hasDiscount: false,
                onSale: false
            },
            {
                name: 'Баскин Робинс',
                type: MarketItemType.ICE_CREAM,
                price: 500000,
                imageUrl: '',
                description: 'Райское наслаждение',
                hasDiscount: false,
                onSale: true
            },
            {
                name: '',
                type: MarketItemType.BREAD,
                price: 100,
                imageUrl: '',
                description: '',
                hasDiscount: false,
                onSale: true
            },
        ]
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
    onSale: boolean
}