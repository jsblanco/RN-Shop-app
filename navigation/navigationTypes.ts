type ShoppingStackNavigation = {
    Catalogue: undefined;
    ProductDetails: {
        productId: string,
    };
    ShoppingCart: undefined;
    OrderDetails: undefined;
};

type OrderStackNavigation = {
    Orders: undefined;
    OrderDetails: undefined;
};

type ProductsStackNavigation = {
    Products: undefined;
    ProductDetails: {
        productId: string,
    };
    EditProduct: undefined;
};
