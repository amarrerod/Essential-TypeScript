

let Product = function(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.toString = function () {
    return `toString => Name: ${this.name}, Price: ${this.price}`;
}

let TaxedProduct = function(name, price, taxRate = 1.2) {
    Product.call(this, name, price);
    this.taxRate = taxRate;
}

Object.setPrototypeOf(TaxedProduct.prototype, Product.prototype);
TaxedProduct.prototype.getPriceIncTax = function () {
    return Number(this.price) * this.taxRate;
}

TaxedProduct.prototype.toTaxString = function() {
    return `${this.toString()}, Tax: ${this.getPriceIncTax()}`;
}

Product.process = (...products) => products.forEach(p => console.log(p.toString()));

let hat = new TaxedProduct("Hat", 100);
let hat2 = new TaxedProduct("Hat-1.5", 100, 1.5);
let boots = new Product("Boots", 100);

console.log(hat.toTaxString());
console.log(hat2.toTaxString());
Product.process(new Product("Hat", 100), new Product("Boots", 100));
