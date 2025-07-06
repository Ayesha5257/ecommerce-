import { getCartProductFromLs } from "./getCartProducts";
// import { UpdateCartValue } from "./updateCartValue";

export const incrementDecrement = (event, id, stock, price) => {
    // Ensure that the element with ID 'card${id}' exists
    const currentCardElement = document.querySelector(`#card${id}`);
    if (!currentCardElement) {
        console.log(`Card with ID ${id} not found in DOM.`);
        return; // Exit function if the card is not found
    }

    const productQuantity = currentCardElement.querySelector(".productQuantity");
    const productPrice = currentCardElement.querySelector(".productPrice");

    // Default values
    let quantity = 1;
    let localStoragePrice = price;

    // Fetch cart products from localStorage and ensure it's an array
    let LocalCartProducts = getCartProductFromLs() || [];

    // Find the existing product in the cart
    let existingProduct = LocalCartProducts.find((curProd) => curProd.id === id);

    if (existingProduct) {
        quantity = existingProduct.quantity;
        localStoragePrice = existingProduct.price; // Ensure the correct price from the existing cart item
    }

    // Increment the quantity
    if (event.target.className === "cartIncrement") {
        if (quantity < stock) {
            quantity += 1;
        } else if (quantity === stock) {
            quantity = stock; // Ensure quantity does not exceed stock
            localStoragePrice = price * stock;
        }
    }

    // Decrement the quantity
    if (event.target.className === "cartDecrement") {
        if (quantity > 1) {
            quantity -= 1;
        }
    }

    // Update the localStoragePrice based on the final quantity and round to 2 decimal places
    localStoragePrice = parseFloat((price * quantity).toFixed(2));

    // Prepare the updated cart product object
    const updatedCartProduct = { id, quantity, price: localStoragePrice };

    // Update the cart data (map over existing products and update the one with the matching ID)
    LocalCartProducts = LocalCartProducts.map((curProd) =>
        curProd.id === id ? updatedCartProduct : curProd
    );

    // Save the updated cart to localStorage
    localStorage.setItem("cartProductLs", JSON.stringify(LocalCartProducts));

    // Update the UI with the new quantity and price
    productQuantity.innerText = quantity;
    productPrice.innerText = localStoragePrice;
};

