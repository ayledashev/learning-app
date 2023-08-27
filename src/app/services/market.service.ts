import { Injectable, OnInit } from "@angular/core";
import { MarketItemType } from "../market/MarketItemType";

@Injectable()
export class MarketService implements OnInit {
    marketItems: MarketItem[];

    ngOnInit(): void {
        this.marketItems = [
            {
                name: '',
                type: MarketItemType.BREAD,
                price: 100,
                imageUrl: '',
                description: '',
                hasDiscount: false
            },
            {
                name: '',
                type: MarketItemType.BREAD,
                price: 100,
                imageUrl: '',
                description: '',
                hasDiscount: false
            },
            {
                name: '',
                type: MarketItemType.BREAD,
                price: 100,
                imageUrl: '',
                description: '',
                hasDiscount: false
            },
            {
                name: '',
                type: MarketItemType.BREAD,
                price: 100,
                imageUrl: '',
                description: '',
                hasDiscount: false
            },
            {
                name: '',
                type: MarketItemType.BREAD,
                price: 100,
                imageUrl: '',
                description: '',
                hasDiscount: false
            },
        ]
    }
}

export class MarketItem {
    name: string;
    type: MarketItemType;
    price: number;
    imageUrl: string;
    description: string
    hasDiscount: boolean;
}