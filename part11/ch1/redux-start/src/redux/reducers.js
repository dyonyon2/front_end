import { ADD_TODO, COMPLETE_TODO, SHOW_ALL, SHOW_COMPLETE } from "./actions";
import { combineReducers } from "redux";

// state
// ['씻기', '밥먹기']
// [{text: '코딩', done:false},{text: '씻기', done:false},]
// const initialState = [];

// {todos:[{text: '코딩', done:false},{text: '씻기', done:false},], filter:'ALL' }
const initialState = { todos: [], filter: "ALL" };
const todosinitialState = initialState.todos;
const filterinitialState = initialState.filter;

const reducer = combineReducers({
    todos: todosReducer,
    filter: filterReducer,
});

export default reducer;

// [{text: '코딩', done:false},{text: '씻기', done:false},]
function todosReducer(previousState = todosinitialState, action) {
    if (action.type === ADD_TODO) {
        return [...previousState, { text: action.text, done: false }];
    }

    if (action.type === COMPLETE_TODO) {
        return previousState.map((todo, index) => {
            if (index === action.index) {
                return { ...todo, done: true };
            }
            return todo;
        });
    }

    return previousState;
}

function filterReducer(previousState = filterinitialState, action) {
    if (action.type === SHOW_COMPLETE) {
        return "COMPLETE";
    }

    if (action.type === SHOW_ALL) {
        return "ALL";
    }

    return previousState;
}
