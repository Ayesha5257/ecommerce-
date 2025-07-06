import { UpdateCartValue } from "./updateCartValue";

export const getCartProductFromLs = () => {
    let cartProducts = localStorage.getItem("cartProductLs");
    if (!cartProducts) {
        return [];
    }

    cartProducts = JSON.parse(cartProducts);

    UpdateCartValue(cartProducts);

    return cartProducts;
};