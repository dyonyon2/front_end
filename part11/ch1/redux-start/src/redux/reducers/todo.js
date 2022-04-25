import { ADD_TODO, COMPLETE_TODO } from "../actions";

// state
// ['씻기', '밥먹기']
// [{text: '코딩', done:false},{text: '씻기', done:false},]
// const initialState = [];

// {todos:[{text: '코딩', done:false},{text: '씻기', done:false},], filter:'ALL' }
const initialState = [];

// [{text: '코딩', done:false},{text: '씻기', done:false},]
export default function todos(previousState = initialState, action) {
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
