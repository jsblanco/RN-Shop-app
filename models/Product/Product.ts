export class Product {

    private readonly _id: string
    private _userId: string
    private _title: string
    private _description: string
    private _imageUrl: string
    private _price: number

    constructor(id: string, userId: string, title: string, description: string, imageUrl: string, price: number) {
        this._id = id;
        this._userId = userId;
        this._title = title;
        this._description = description;
        this._imageUrl = imageUrl;
        this._price = price;
    }

    get id(): string {
        return this._id;
    }

    get userId(): string {
        return this._userId;
    }

    get title(): string {
        return this._title;
    }

    get description(): string {
        return this._description;
    }

    get imageUrl(): string {
        return this._imageUrl;
    }

    get price(): number {
        return this._price;
    }

    set userId(value: string) {
        this._userId = value;
    }

    set title(value: string) {
        this._title = value;
    }

    set description(value: string) {
        this._description = value;
    }

    set price(value: number) {
        this._price = value;
    }

    set imageUrl(value: string) {
        this._imageUrl = value;
    }
}
