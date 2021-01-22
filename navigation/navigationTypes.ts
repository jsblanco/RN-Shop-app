type AuthStackNavigation = {
    Auth: undefined;
};


type ShoppingStackNavigation = {
    Catalogue: undefined;
    ProductDetails: {
        productId: string,
    }
    ShoppingCart: undefined;
    OrderDetails: {
        orderId: string,
    }
};

type OrderStackNavigation = {
    Orders: undefined;
    OrderDetails: {
        orderId: string,
    }
    ProductDetails: {
        productId: string,
    }
};

type ProductsStackNavigation = {
    Products: undefined;
    ProductDetails: {
        productId: string,
    }
    EditProduct: {
        productId?: string,
    }
};
