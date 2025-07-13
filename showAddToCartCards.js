import products from "./api/products.json";
import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS";
import { getCartProductFromLs } from "./getCartProducts";
import { incrementDecrement } from "./incrementDecrement";
import { removeProdFromCart } from "./removeProdFromCart";
import { UpdateCartProductTotal } from "./UpdateCartProductTotal";
import { UpdateCartValue } from "./updateCartValue";

let cartProducts = getCartProductFromLs();
let filterProducts = products.filter((curProd) => {
    return cartProducts.some((curElem) => curElem.id === curProd.id);
});


// add to cart page
const cartElement = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productCartTemplate");

const showCartProduct = () => {
    filterProducts.forEach((curProd) => {
        const { category, id, image, name, stock, price } = curProd;
        let productClone = document.importNode(templateContainer.content, true);

        const lsActualData = fetchQuantityFromCartLS(id, price);

        // Assign unique ID for the card (important for querying the button)
        productClone.querySelector(".cards").setAttribute("id", `card${id}`);

        // Fill data in the cloned template
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productImage").src = image;
        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".productQuantity").textContent = lsActualData.quantity;
        productClone.querySelector(".productPrice").textContent = lsActualData.price;


        productClone.querySelector(".stockElement")
        addEventListener("click", (event) => {
            incrementDecrement(event, id, stock, price);
        });


        // Select the "Remove" button using dynamic ID
        productClone.querySelector('.remove-to-cart-button').addEventListener("click", () => removeProdFromCart(id));
        cartElement.appendChild(productClone);


    });
};

// showing the cartproduct

showCartProduct();

// calculating the card total in our cartProducts page

UpdateCartProductTotal();
