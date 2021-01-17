type ShoppingStackNavigation = {
    Catalogue: undefined;
    ProductDetails: {
        productId: string,
    }
    ShoppingCart: undefined;
    OrderDetails: {
        orderId: string,
        justOrdered: boolean
    }
};

type OrderStackNavigation = {
    Orders: undefined;
    OrderDetails: {
        orderId: string,
        justOrdered: boolean
    }
    ProductDetails: {
        productId: string,
    }
};

type ProductsStackNavigation = {
    Products: undefined;
    ProductDetails: {
        productId: string,
    };
    EditProduct: undefined;
};
