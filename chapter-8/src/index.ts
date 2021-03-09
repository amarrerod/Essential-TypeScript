
//function calculateTax(amount: number, discount: number): number {
//    return (amount * 1.2) - discount;
//}

/**
 * Podemos definir argumentos opcionales
 *
function calculateTax(amount: number, discount?: number): number {
    // La funcion tiene que ser capaz de trabajar con la posibilidad de un valor undefined
    return (amount * 1.2) - (discount || 0); // Juntamos el parametro discount con 0 para evitar undefined

}*/

/**
 * Funcion con un valor por defecto
 *
function calculateTax(amount: number, discount: number = 0): number {
    return (amount * 1.2) - discount;

}*/

/**
 * Usando "El resto de parametros"
 */
function calculateTax(amount: number, discount: number = 0, ...extraFees: number[]): number {
    return (amount * 1.2) - discount + extraFees.reduce((total, value) => total + value, 0);
}

let taxValue = calculateTax(100, 0);
console.log(`2 args: ${taxValue}`);
taxValue = calculateTax(100);
console.log(`1 arg: ${taxValue}`);
taxValue = calculateTax(100, 10, 20);
console.log(`3 args: ${taxValue}`);
taxValue = calculateTax(100, 10, 20, 1, 30, 7);
console.log(`6 args: ${taxValue}`);