import { addToCart } from "./addToCard";
import { homeQuantityToggle } from "./homeQuantityToggle";

const ProductContainer = document.querySelector("#productContainer");
const productTemplate = document.querySelector("#productTemplate");

export const showProductContainer = (products) => {
    if (!products) {
        return false;
    }
    products.forEach((curElem) => {
        const { brand, category, description, id, name, image, price, stock } = curElem;

        const productClone = document.importNode(productTemplate.content, true);


        productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);

        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productImage").src = image;
        productClone.querySelector(".productImage").alt = image;
        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".productDescription").textContent = description;
        productClone.querySelector(".productStock").textContent = stock;
        productClone.querySelector(".productPrice").textContent = `Rs.${price}`;
        productClone.querySelector(".productActualPrice").textContent = `Rs.${price * 4}`;

        productClone.querySelector(".stockElement").addEventListener('click', (event) => {
            homeQuantityToggle(event, id, stock);

        });
        productClone.querySelector(".add-to-cart-button").addEventListener("click", (event) => {
            addToCart(event, id, stock);
        });


        ProductContainer.append(productClone);
    });
};