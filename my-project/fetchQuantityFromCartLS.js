import { getCartProductFromLs } from "./getCartProducts";

export const fetchQuantityFromCartLS = (id) => {
    // Ensure cartProducts is always an array
    let cartProducts = getCartProductFromLs() || [];

    // Find the product with the matching id
    let existingProduct = cartProducts.find((curProd) => curProd.id === id);

    // Set default values
    let quantity = 1;
    let price = 0;

    // Update values if the product exists in the cart
    if (existingProduct) {
        quantity = existingProduct.quantity;
        price = existingProduct.price;
    }

    // Return both quantity and price
    return { quantity, price };
};



