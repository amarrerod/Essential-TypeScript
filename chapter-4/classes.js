

class Product {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    toString() {
        return `toString: Name: ${this.name}, Price: ${this.price}`;
    }
}


class TaxedProduct extends Product {
    constructor(name, price, taxRate = 1.2){
        super(name, price);
        this.taxRate = taxRate;
    }

    getPriceInTax() {
        return Number(this.price) * this.taxRate;
    }

    toString() {
        let chainResult = super.toString();
        return `${chainResult}, Tax: ${this.getPriceInTax()}`;
    }

    static process(...products) {
        products.forEach(p => console.log(p.toString()));
    }
}

let hat = new TaxedProduct("Hat", 100);
let boots = new TaxedProduct("Boots", 100, 1.3);
console.log(hat);
console.log(boots);
TaxedProduct.process(new TaxedProduct('Hat', 100, 1.2), new TaxedProduct('Boots', 100));