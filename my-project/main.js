import './src/style.css';

import products from "./api/products.json";
import { showProductContainer } from './homeProductCards';


console.log(products);
// DEfine a function named 'showProductContainer' that take a arry of product input.
showProductContainer(products);