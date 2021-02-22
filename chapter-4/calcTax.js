
import calcTaxandSum, { calculateTax } from "./tax";
import {printDetails, applyDiscount} from "./utils";

class Product {
    constructor(name, price){
        this.id = Symbol();
        this.name = name;
        this.price = price;
    }
}

let product = new Product("Hat", 100);
applyDiscount(product, 10);
let taxedPrice = calculateTax(product.price);
printDetails(product);
let products = [new Product("Gloves", 23), new Product("Boots", 100)];
let TotalPrice = calcTaxandSum(...products.map(p => p.price));
console.log(`Total Price: ${TotalPrice}`);
console.log(`Id: ${product.id.toString()}, Name: ${product.name}, Taxed Price: ${taxedPrice}`);
