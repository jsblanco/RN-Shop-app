import {takeLatest, call, put, select} from "redux-saga/effects";
import * as constants from "../constants/products.constants";
import {createProductInDb, deleteProductInDb, fetchProductsFromDb, updateProductInDb} from "../api/products.queries"
import {createProduct, deleteProduct, fetchProducts, updateProduct} from "../actions/products.actions";
import {ProductAdapter} from "../../models/Product/Product.adapter";
import {RootState} from "../store";

const productAdapter = new ProductAdapter()
const getToken = (state: RootState) => state.auth.token
const getUserId = (state: RootState) => state.auth.userId

function* fetchProductsEffect() {
    try {
        const products = [];
        const fetchedProducts = yield call(fetchProductsFromDb);
        for (let key in fetchedProducts) {
            const product = productAdapter.adapt({id: key, userId: 'u3', ...fetchedProducts[key]})
            products.push(product)
        }
        const userId = yield select(getUserId)
        yield put(fetchProducts.success({products, userId}));
    } catch (e) {
        console.error(e);
        yield put(fetchProducts.failure(e));
    }
}

function* createProductEffect({payload}: { type: string, payload: { userId: string, title: string, price: string, description: string, imageUrl: string } }) {
    try {
        const token = yield select(getToken)
        const userId = yield select(getUserId)
        const productId = yield call(createProductInDb, {...payload, userId, token});
        const product = productAdapter.adapt({id: productId, ...payload})
        yield put(createProduct.success(product));
    } catch (e) {
        console.error(e);
        yield put(createProduct.failure(e));
    }
}

function* updateProductEffect({payload}: { type: string, payload: { id: string, title: string, description: string, imageUrl: string } }) {
    try {
        const token = yield select(getToken)
        yield call(updateProductInDb, {...payload, token});
        yield put(updateProduct.success(payload));
    } catch (e) {
        console.error(e);
        yield put(updateProduct.failure(e));
    }
}

function* deleteProductEffect({payload}: { type: string, payload: { id: string } }) {
    try {
        const token = yield select(getToken)
        yield call(deleteProductInDb, {id: payload.id, token});
        yield put(deleteProduct.success(payload.id));
    } catch (e) {
        console.error(e);
        yield put(deleteProduct.failure(e));
    }
}

function* productSagas() {
    yield takeLatest(constants.CREATE_PRODUCT_REQUEST, createProductEffect);
    yield takeLatest(constants.UPDATE_PRODUCT_REQUEST, updateProductEffect);
    yield takeLatest(constants.DELETE_PRODUCT_REQUEST, deleteProductEffect);
    yield takeLatest(constants.FETCH_PRODUCTS_REQUEST, fetchProductsEffect);
}

export default productSagas;

