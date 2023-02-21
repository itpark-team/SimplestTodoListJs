class TodoItem {
    #id;
    #date;
    #description;

    constructor(id, date, description) {
        this.#id = id;
        this.#date = date;
        this.#description = description;
    }

    getId() {
        return this.#id;
    }

    getDate() {
        return this.#date;
    }

    getDescription() {
        return this.#description;
    }
}

class TodoItemsManager {
    #globalId;
    #todoItems;

    constructor() {
        this.#globalId = 0;
        this.#todoItems = [];
    }

    addNewTodoItem(date, description) {
        this.#globalId++;

        let todoItem = new TodoItem(this.#globalId, date, description);

        this.#todoItems.push(todoItem);
    }

    getAllTodoItems() {
        return this.#todoItems;
    }
}

let todoItemsManager = new TodoItemsManager();

let inputDateField = document.getElementById("input-date-field");
let inputDescriptionField = document.getElementById("input-description-field");
let tableTodoItemsDiv = document.getElementById("table-todo-items-div");

function buttonAddTodoItem_Click() {
    let date = new Date(inputDateField.value);
    let description = inputDescriptionField.value;

    //todo сделать проверку что введённая дата должна быть больше либо равна текущей дате

    if (description === "") {
        alert("Ошибка. Поле с текстом задачи должно быть заполнено");
        return;
    }

    todoItemsManager.addNewTodoItem(date, description);

    inputDateField.value = new Date();
    inputDescriptionField.value = "";

    console.log(todoItemsManager.getAllTodoItems());
}