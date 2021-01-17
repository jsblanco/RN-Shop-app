import {Product} from "./Product";

export class Order {
    private readonly _id: string
    // private userId: string
    private readonly _purchases: { product: Product, amount: number }[]
    private _price: number
    private readonly _date: Date

    constructor(id: string, purchases: { product: Product; amount: number }[], date: Date) {
        this._id = id;
        this._purchases = purchases;
        this._date = date;
        this._price = 0;
        purchases.map(purchase => {
            this._price += (purchase.product.price * purchase.amount)
        })
    }


    get id(): string {
        return this._id;
    }

    get purchases(): { product: Product; amount: number }[] {
        return this._purchases;
    }

    get date(): Date {
        return this._date;
    }

    get price(): string {
        return this._price.toFixed(2);
    }
}
