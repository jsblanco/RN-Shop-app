import {Adapter} from "../Adapter";
import {Product} from "../Product/Product";
import {Order} from "./Order";
import {ProductAdapter} from "../Product/Product.adapter";

const productAdapter = new ProductAdapter()

export class OrderAdapter implements Adapter<Order> {
    adapt(item: { id: string, userId: string, purchases: { product: Product, amount: number }[], date: Date, price: number }): Order {

        const purchases: { product: Product, amount: number }[] = []
        item.purchases.map((item: { product: any, amount: number }) => {
            const product = productAdapter.adapt({
                id: item.product._id,
                title: item.product._title,
                description: item.product._description,
                imageUrl: item.product._imageUrl,
                userId: item.product._userId,
                price: item.product._price
            })
            purchases.push({amount: item.amount, product: product})
        })
        return new Order(
            item.id,
            item.userId,
            purchases,
            item.date,
            item.price
        )
    }
}
