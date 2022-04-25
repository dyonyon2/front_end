import { combineReducers } from "redux";
import todos from "./todo";
import filter from "./fliter";
import users from "./users";

const reducer = combineReducers({
    todos,
    filter,
    users,
});

export default reducer;
