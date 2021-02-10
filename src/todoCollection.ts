
import { TodoItem } from "./todoItem";

export class TodoCollection {
    private nextId: number = 1;
    private itemMap = new Map<number, TodoItem>();

    constructor(public userName: string,
        todoItems: TodoItem[] = []) {
        todoItems.forEach(item => this.itemMap.set(item.id, item));
    }
    addTodo(task: string): number {
        while (this.getTodoById(this.nextId)) {
            this.nextId++;
        }
        this.itemMap.set(this.nextId, new TodoItem(this.nextId, task));
        return this.nextId;
    }

    getTodoById(id: number): TodoItem {
        return this.itemMap.get(id);
    }

    markComplete(id: number, complete: boolean) {
        const TodoItem = this.getTodoById(id);
        if (TodoItem) {
            TodoItem.complete = complete;
        }
    }

    getTodoItems(includeComplete: boolean): TodoItem[] {
        // Spread parameter
        // https://bit.ly/3aTceFe --> Convertir un iterable en un array
        return [...this.itemMap.values()].filter(item => includeComplete || !item.complete);
    }
}