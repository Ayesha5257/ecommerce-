import { getCartProductFromLs } from "./getCartProducts";
import { showToast } from "./showToast";
import { UpdateCartValue } from "./updateCartValue";

export const removeProdFromCart = (id) => {
    let cartProducts = getCartProductFromLs();
    cartProducts = cartProducts.filter((curProd) => curProd.id !== id);

    localStorage.setItem("cartProductLs", JSON.stringify(cartProducts));
    let removeDiv = document.getElementById(`card${id}`);
    if (removeDiv) {
        removeDiv.remove();
        showToast("delete", id);
    }
    UpdateCartValue(cartProducts);
};


