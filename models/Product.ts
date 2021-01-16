export class Product {

    private readonly _id: string
    private _ownersId: string
    private _title: string
    private _description: string
    private _imageUrl: string
    private _price: number

    constructor(id: string, ownersId: string, title: string, description: string, imageUrl: string, price: number) {
        this._id = id;
        this._ownersId = ownersId;
        this._title = title;
        this._description = description;
        this._imageUrl = imageUrl;
        this._price = price;
    }

    get id(): string {
        return this._id;
    }

    get ownersId(): string {
        return this._ownersId;
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

    set ownersId(value: string) {
        this._ownersId = value;
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
