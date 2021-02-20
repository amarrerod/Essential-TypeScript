
import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";
import * as inquirer from 'inquirer';
import { JsonTodoCollection } from "./jsonTodoCollection";


let toDos: TodoItem[] = [
    new TodoItem(1, "Buy Flowers"),
    new TodoItem(2, "Get Shoes"),
    new TodoItem(3, "Collect tickets"),
    new TodoItem(4, "Call Joe", true)
];

let collectionOfToDos: TodoCollection = new JsonTodoCollection("Marrero", toDos);
let showCompleted = true;
console.clear();
console.log(`${collectionOfToDos.userName}'s ToDo List`
    + ` (${collectionOfToDos.getItemCounts().incomplete} items to do)`);
collectionOfToDos.getTodoItems(false).forEach(item => item.printDetails());

/* collectionOfToDos.getTodoItems(true).forEach(item => item.printDetails());
console.log('Removing completed tasks');
collectionOfToDos.removeComplete();
collectionOfToDos.getTodoItems(true).forEach(item => item.printDetails()); */

// Gestion de los comandos de los usuarios
function displayTodoList(): void {
    console.log(`${collectionOfToDos.userName}'s TodoList` + ` (${collectionOfToDos.getItemCounts().incomplete} items to do)`);
    collectionOfToDos.getTodoItems(showCompleted).forEach(item => item.printDetails());
}

enum Commands {
    Add = 'Add New Task',
    Complete = 'Complete Task',
    Toggle = 'Show/Hide Completed Tasks',
    Purge = 'Remove Completed Tasks',
    Quit = 'Quit'
}

const promptAdd = (): void => {
    console.clear();
    inquirer.prompt({
        type: 'input', name: 'add', message: 'Enter new task: '
    }).then(answers => {
        if (answers['add'] != "") {
            collectionOfToDos.addTodo(answers['add']);
        }
        promptUser();
    })
}

const promptComplete = (): void => {
    console.clear();
    inquirer.prompt({
        type: 'checkbox', name: 'complete',
        message: 'Mark Tasks Completed',
        choices: collectionOfToDos.getTodoItems(showCompleted).map(item => (
            { name: item.task, value: item.id, checked: item.complete }))
    }).then(answers => {
        let completedTasks = answers['complete'] as number[];
        collectionOfToDos.getTodoItems(true).forEach(item =>
            collectionOfToDos.markComplete(item.id, completedTasks.find(id => id === item.id) != undefined));
        promptUser();
    })
}


const promptUser = (): void => {
    console.clear();
    displayTodoList();
    inquirer.prompt({
        type: 'list',
        name: 'command',
        message: 'Choose an option',
        choices: Object.values(Commands)
    }).then(answers => {
        switch (answers['command']) {
            case Commands.Toggle:
                showCompleted = !showCompleted;
                promptUser();
                break;
            case Commands.Add:
                promptAdd();
                break;
            case Commands.Complete:
                if (collectionOfToDos.getItemCounts().incomplete > 0) {
                    promptComplete();
                } else {
                    promptUser();
                }
                break;
            case Commands.Purge:
                collectionOfToDos.removeComplete();
                promptUser();
                break;
            case Commands.Quit:
                break;
        }
    })
}

promptUser();