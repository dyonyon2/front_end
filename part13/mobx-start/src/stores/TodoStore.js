const { observable, makeObservable } = require("mobx");

export default class TodoStore {
    @observable
    todos = [];

    @action
    add(text) {
        this.todos.push({ text, done: false });
    }

    constructor() {
        makeObservable(this);
    }
}
