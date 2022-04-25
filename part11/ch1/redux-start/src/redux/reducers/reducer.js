import { combineReducers } from "redux";
import todos from "./todo";
import filter from "./fliter";

const reducer = combineReducers({
    todos,
    filter,
});

export default reducer;
