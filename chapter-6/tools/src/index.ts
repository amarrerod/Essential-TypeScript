
import { sum } from "./calculator";

let printMessage = (message: string): void => console.log(`Message is ${message}`);

let message = ('Hello, TypeScript');
printMessage(message);

let data = new Map();
data.set('Bob', 'London');
data.set('Alice', 'Paris');
data.forEach((value, key) => console.log(`${key} lives in ${value}`));
debugger;
let total = sum(100, 200, 300);
console.log(`Total: ${total}`);