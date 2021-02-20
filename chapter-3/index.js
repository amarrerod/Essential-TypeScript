
let hatPrice = 100;
console.log(`Hat price: ${hatPrice}`);

let bootsPrice = '100';
console.log(`Boots price: ${bootsPrice}`);

// Comparamos usando el Abstract Equality Comparison
if (hatPrice == bootsPrice){
    console.log('The prices are the same');
} else {
    console.log('The prices are different');
}
// Comparación estricta que solo devuelve TRUE si
// los valores tienen el mismo tipo y son iguales
if (hatPrice === bootsPrice){
    console.log('The prices are the same');
} else {
    console.log('The prices are different');
}
// Cuando sumamos un numero y una cadena, el numero
// se convierte a cadena y se realiza la operacion de
// concatenación
let totalPrice = hatPrice + bootsPrice;
console.log(`Total Price: ${totalPrice}`);
totalPrice = Number(hatPrice) + Number(bootsPrice);
console.log(`Total Price: ${totalPrice}`);

let myVariable = 'Turing';
console.log(`Type: ${typeof myVariable}`);
myVariable = 100;
console.log(`Type: ${typeof myVariable}`);

// Aplicando la conversion de tipos a proposito
let firstCity; // --> valor undefined
let secondCity = firstCity || 'London';
console.log(`City: ${secondCity}`);

function sumPrices(first, second, third) {
    return first + second + third;
}

function sumPricesWithDefault(first, second, third = 0) {
    return first + second + third;
}

// A rest parameter is an array containing all the arguments for which parameters are not defined
function sumPricesWithRest(...numbers){
    return numbers.reduce( (total, value) => 
        total + (Number.isNaN(Number(value))? 0 : Number(value)));
        // Solo incluimos {} y return si tenemos que ejecutar más de una sentencia
}

let sumPricesWithArrow = (...numbers) => numbers.reduce((total, value) => total + (Number.isNaN(Number(value)) ?0 : Number(value)));

totalPrice = sumPrices(hatPrice, bootsPrice);
console.log(`Total Price: ${totalPrice}`); // 100100undefined
console.log(`Total: ${totalPrice} ${typeof totalPrice}`);
totalPrice = sumPrices(100, 200, 300);
console.log(`Total: ${totalPrice} ${typeof totalPrice}`);
totalPrice = sumPrices(100, 200);
console.log(`Total: ${totalPrice} ${typeof totalPrice}`);
// Con el argumento por defecto
totalPrice = sumPricesWithDefault(hatPrice, bootsPrice);
console.log(`Total Price: ${totalPrice}`); // 100100undefined
console.log(`Total: ${totalPrice} ${typeof totalPrice}`);
totalPrice = sumPricesWithDefault(100, 200, 300);
console.log(`Total: ${totalPrice} ${typeof totalPrice}`);
totalPrice = sumPricesWithDefault(100, 200);
console.log(`Total: ${totalPrice} ${typeof totalPrice}`);

// Usando 'el resto de argumentos'
totalPrice = sumPricesWithRest(hatPrice, bootsPrice);
console.log(`Total Price: ${totalPrice}`); // 100100undefined
console.log(`Total: ${totalPrice} ${typeof totalPrice}`);
totalPrice = sumPricesWithRest(100, 200, 300);
console.log(`Total: ${totalPrice} ${typeof totalPrice}`);
totalPrice = sumPricesWithRest(100, 200);
console.log(`Total: ${totalPrice} ${typeof totalPrice}`);
totalPrice = sumPricesWithRest(100, 200, undefined, false, 'hello');
console.log(`Total: ${totalPrice} ${typeof totalPrice}`);

// Usando arrow function
totalPrice = sumPricesWithArrow(hatPrice, bootsPrice);
console.log(`Total Price: ${totalPrice}`); // 100100undefined
console.log(`Total: ${totalPrice} ${typeof totalPrice}`);
totalPrice = sumPricesWithArrow(100, 200, 300);
console.log(`Total: ${totalPrice} ${typeof totalPrice}`);
totalPrice = sumPricesWithArrow(100, 200);
console.log(`Total: ${totalPrice} ${typeof totalPrice}`);
totalPrice = sumPricesWithArrow(100, 200, undefined, false, 'hello');
console.log(`Total: ${totalPrice} ${typeof totalPrice}`);
