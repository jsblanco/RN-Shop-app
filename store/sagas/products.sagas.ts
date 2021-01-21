import {takeLatest, call, put} from "redux-saga/effects";
import * as constants from "../constants/products.constants";
import {createProductInDb, fetchProductsFromDb, updateProductInDb} from "../api/products.queries"
import {createProduct, fetchProducts} from "../actions/products.actions";
import {ProductAdapter} from "../../models/Product/Product.adapter";

const productAdapter = new ProductAdapter()


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

function* createProductEffect({payload}: { type: string, payload: { userId: string, title: string, price: string, description: string, imageUrl: string } }) {
    try {
        const productId = yield call(createProductInDb, payload);
        const product = productAdapter.adapt({id: productId, ...payload})
        yield put(createProduct.success(product));
    } catch (e) {
        console.error(e);
        yield put(createProduct.failure(e));
    }
}

function* updateProductEffect({payload}: { type: string, payload: { id: string, title: string, userId: string, description: string, imageUrl: string } }) {
    try {
        yield call(updateProductInDb, payload);
        const product = productAdapter.adapt({...payload})
        yield put(createProduct.success(product));
    } catch (e) {
        console.error(e);
        yield put(createProduct.failure(e));
    }
}

function* productSagas() {
    yield takeLatest(constants.CREATE_PRODUCT_REQUEST, createProductEffect);
    yield takeLatest(constants.UPDATE_PRODUCT_REQUEST, updateProductEffect);
    yield takeLatest(constants.FETCH_PRODUCTS_REQUEST, fetchProductsEffect);
}

export default productSagas;

