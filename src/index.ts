
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
console.log(`${collectionOfToDos.userName}'s ToDo List`);
let newId: number = collectionOfToDos.addTodo("Go for run");
let todoItem: TodoItem = collectionOfToDos.getTodoById(newId);
todoItem.printDetails();