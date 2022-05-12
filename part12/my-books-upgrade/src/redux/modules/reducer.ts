import { combineReducers } from "redux";
import auth from "./auth";
import books from "./books";
import { History } from "history";
import { connectRouter } from "connected-react-router";

const reducer = (history: History<unknown>) =>
    combineReducers({
        auth,
        books,
    });

export default reducer;
//
