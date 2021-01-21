import {Adapter} from "../Adapter";
import {Product} from "./Product";

export class ProductAdapter implements Adapter<Product>{

    adapt(item: any): Product{
        return new Product(
            item.id,
            item.userId,
            item.title,
            item.description,
            item.imageUrl,
            +item.price
        )
    }
}
