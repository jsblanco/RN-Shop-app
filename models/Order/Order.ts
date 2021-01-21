import {Product} from "../Product/Product";

export class Order {
    private readonly _id: string
    private readonly _userId: string
    private readonly _purchases: { product: Product, amount: number }[]
    private readonly _price: number
    private readonly _date: Date

    constructor(id: string, userId: string, purchases: { product: Product; amount: number }[], date: Date, price: number) {
        this._id = id;
        this._userId = userId;
        this._purchases = purchases;
        this._date = new Date(date);
        this._price = price;
    }

    get id(): string {
        return this._id;
    }

    get userId(): string {
        return this._userId;
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
