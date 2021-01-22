import {axiosInstance} from "./axios/axios";

export const fetchProductsFromDb = () => {
    return axiosInstance.get("/products.json")
}

export const createProductInDb = ({title, userId, description, imageUrl, price}:
                                      { title: string, userId: string, description: string, imageUrl: string, price: string }) => {
    return axiosInstance.post("/products.json", {title, userId, description, imageUrl, price})
}

export const updateProductInDb = ({title, description, imageUrl, id}:
                                      { title: string, description: string, imageUrl: string, id: string }) => {
    return axiosInstance.patch(`/products/${id}.json`, {title, description, imageUrl})
}

export const deleteProductInDb = (id: string) => {
    return axiosInstance.delete(`/products/${id}.json`)
}

/*/
const apiUrl = 'https://jorge-shop-app-default-rtdb.europe-west1.firebasedatabase.app/products.json';


export const fetchProductsFromDb = async ()=> {
    const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    });
    return await response.json();
}

export const createProductInDb = async ({title, userId, description, imageUrl, price}:
                                            { title: string, userId: string, description: string, imageUrl: string, price: string }) => {
    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({title, userId, description, imageUrl, price})
    });
    const resData = await response.json();
    return resData.name;
}

export const updateProductInDb = async ({id, title, userId, description, imageUrl}:
                                            { id: string, title: string, userId: string, description: string, imageUrl: string}) => {
    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({title, userId, description, imageUrl})
    });
    const resData = await response.json();
    return resData.name;
}/*
*/
