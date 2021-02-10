
import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";

let toDos: TodoItem[] = [
    new TodoItem(1, "Buy Flowers"),
    new TodoItem(2, "Get Shoes"),
    new TodoItem(3, "Collect tickets"),
    new TodoItem(4, "Call Joe", true)
];

let collectionOfToDos: TodoCollection = new TodoCollection("Marrero", toDos);
console.clear();
console.log(`${collectionOfToDos.userName}'s ToDo List`
    + ` (${collectionOfToDos.getItemCounts().incomplete} items to do)`);
collectionOfToDos.getTodoItems(false).forEach(item => item.printDetails());

/* collectionOfToDos.getTodoItems(true).forEach(item => item.printDetails());
console.log('Removing completed tasks');
collectionOfToDos.removeComplete();
collectionOfToDos.getTodoItems(true).forEach(item => item.printDetails()); */
