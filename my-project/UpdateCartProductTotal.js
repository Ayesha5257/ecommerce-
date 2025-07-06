import { getCartProductFromLs } from "./getCartProducts";

export const UpdateCartProductTotal = () => {
    let productSubTotal = document.querySelector(".productSubTotal");
    let productFinalTotal = document.querySelector(".productFinalTotal");

    let localCartProduct = getCartProductFromLs();
    let initialValue = 0;
    let totalProductPrice = localCartProduct.reduce((accum, curElem) => {
        let productPrice = parseInt(curElem.price) || 0;
        return accum + productPrice;

    }, initialValue);
    productSubTotal.textContent = totalProductPrice;
    productFinalTotal.textContent = `Rs${totalProductPrice + 50}`;

};