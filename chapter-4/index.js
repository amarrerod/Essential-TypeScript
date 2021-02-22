
let hat = { // --> El prototipo es Object
    name : "Hat",
    price: 100,

    getPriceIncTax() {
        return Number(this.price) * 1.2; 
    }
};

let boots = {
    name: "Boots",
    price: 100,
    
    getPriceIncTax() {
        return Number(this.price) * 1.2;
    }
};

console.log(`Hat: ${hat.price}, ${hat.getPriceIncTax()}`);
console.log(`toString: ${hat.toString()}`);

let hatProto = Object.getPrototypeOf(hat);
let bootsProt = Object.getPrototypeOf(boots);
console.log(`Hats Prototype: ${hatProto}, Boots Prototype: ${bootsProt}, Equal?: ${hatProto === bootsProt}`);