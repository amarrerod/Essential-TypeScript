

const printType = (variable: number) => console.log(`${variable} = ${typeof variable}`);
/*
let myVar;
myVar = 12;
printType(myVar);
myVar = "Hello";
printType(myVar);
myVar = true;
printType(myVar);*/

const calculateTaxes = (amount: number): number => amount * 1.2;
printType(calculateTaxes(12));

/**
 * La función devuelve una cadena o un número.
 * Las propiedades del valor devuelto son la intersección de las propiedades
 * de las cadenas y los números.
 * @param amount 
 * @param format 
 */
const calculateTaxesUnion = (amount: number, format: boolean): string | number => {
    const calculatedAmount = amount * 1.2;
    return format ? `$${calculatedAmount.toFixed(2)}` : calculatedAmount;
}

let taxNumber = calculateTaxesUnion(100, false);
let taxString = calculateTaxesUnion(100, true);

/**
 * Type Assertions --> le dicen al compilador como tratar un cierto valor
 * De esta manera podemos reducir el tipo de una union
 * 
 * as = keyword seguido del tipo
 * let taxString = <string> (...) es una sintáxis alternativa
 */
taxNumber = calculateTaxesUnion(100, false) as number;
taxString = calculateTaxesUnion(100, true) as string;