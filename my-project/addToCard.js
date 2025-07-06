import { getCartProductFromLs } from "./getCartProducts";
import { showToast } from "./showToast";
import { UpdateCartValue } from "./updateCartValue";
getCartProductFromLs();

export const addToCart = (event, id, stock) => {
    // Ensure arrLocalStorageProduct is always an array (defaulting to [] if nothing is found)
    let arrLocalStorageProduct = getCartProductFromLs() || [];

    const currentProElement = document.querySelector(`#card${id}`);

    // Check if the product element exists
    if (!currentProElement) {
        console.error(`Product with ID #card${id} not found`);
        return;
    }

    // Get quantity and price for the product
    let quantity = parseInt(currentProElement.querySelector(".productQuantity").innerText) || 1;
    let price = currentProElement.querySelector(".productPrice").innerText;

    // Clean price (remove "Rs" and any commas, then convert to float)
    price = price.replace("Rs", "").replace(",", "").trim();
    price = parseFloat(price);

    let existingProd = arrLocalStorageProduct.find(
        (curProd) => curProd.id === id

    );
    console.log(existingProd);

    if (existingProd && quantity > 1) {
        quantity = Number(existingProd.quantity) + Number(quantity);
        price = Number(price * quantity);
        localStorage.setItem

        let updateCart = { id, quantity, price };

        updateCart = arrLocalStorageProduct.map((curProd) => {
            return curProd.id === id ? updateCart : curProd;
        });

        localStorage.setItem("cartProductLs", JSON.stringify(updateCart));
        showToast("add", id);
    }
    if (existingProd) {
        return false;
    }

    // If the price is invalid, log an error and exit
    if (isNaN(price)) {
        console.error("Invalid price value");
        return;
    }

    // Calculate total price for the quantity
    let totalPrice = price * quantity;

    // Add the product to the cart (array)
    arrLocalStorageProduct.push({ id, quantity, price: totalPrice });

    // Update localStorage with the new cart data
    localStorage.setItem("cartProductLs", JSON.stringify(arrLocalStorageProduct));
    UpdateCartValue(arrLocalStorageProduct);

    showToast("add", id);
};
