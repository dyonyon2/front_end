import { writable, get } from "svelte/store";

// get(todos) === $todos
export const todos = writable([]);

export function saveStorage() {
    localStorage.setItem("todos", JSON.stringify(get(todos)));
}

//
