
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


let ProductPrototype = {
    toString: function () {
        return `toString: Name: ${this.name}, Price: ${this.price}`;
    }
}

console.log(`Hat: ${hat.price}, ${hat.getPriceIncTax()}`);
console.log(`toString: ${hat.toString()}`);

let hatProto = Object.getPrototypeOf(hat);
hatProto.toString = function () {
    return `toString: Name: ${this.name}, Price: ${this.price}`;
}
let bootsProt = Object.getPrototypeOf(boots);
console.log(`Hats Prototype: ${hatProto}, Boots Prototype: ${bootsProt}, Equal?: ${hatProto === bootsProt}`);
console.log(hat.toString());
// Los objetos mantienen un enlace a su prototipo por eso se actualiza tambien para boots
console.log(boots.toString());

Object.setPrototypeOf(hat, ProductPrototype);
Object.setPrototypeOf(boots, ProductPrototype);