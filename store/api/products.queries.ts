const apiUrl = 'https://jorge-shop-app-default-rtdb.europe-west1.firebasedatabase.app/products.json';
export const createProductInDb = async ({
                               title,
                               description,
                               imageUrl,
                               price
                           }: { title: string, description: string, imageUrl: string, price: string }) => {

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title,
            description,
            imageUrl,
            price
        })
    });
    const resData = await response.json();
    return resData.name;
}
