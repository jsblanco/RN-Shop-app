import {takeLatest, call, put} from "redux-saga/effects";
import * as constants from "../constants/products.constants";
import {createProductInDb, fetchProductsFromDb} from "../api/products.queries"
import {createProduct, fetchProducts} from "../actions/products.actions";
import {Product} from "../../models/Product/Product";
import {ProductAdapter} from "../../models/Product/Product.adapter";
const productAdapter = new ProductAdapter()

function* createProductEffect({payload}: { type: string, payload: any }) {
    try {
        const productId = yield call(createProductInDb, payload);
        yield put(createProduct.success({...payload, id: productId}));
    } catch (e) {
        console.error(e);
        yield put(createProduct.failure(e));
    }
}

function* fetchProductsEffect() {
    try {
        const productArr = [];
        const fetchedProducts = yield call(fetchProductsFromDb);
        for (let key in fetchedProducts) {
            const product = productAdapter.adapt({id: key, userId: 'u3', ...fetchedProducts[key]})
            productArr.unshift(product)
        }
        yield put(fetchProducts.success(productArr));
    } catch (e) {
        console.error(e);
        yield put(fetchProducts.failure(e));
    }
}


function* productSagas() {
    yield takeLatest(constants.CREATE_PRODUCT_REQUEST, createProductEffect);
    yield takeLatest(constants.FETCH_PRODUCTS_REQUEST, fetchProductsEffect);
}

export default productSagas;

