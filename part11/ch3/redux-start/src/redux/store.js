import { applyMiddleware, createStore } from "redux";
// import todoApp from "./reducers";
import todoApp from "./modules/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import history from "../history";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./modules/rootSaga";

// function middleware1(store) {
//     console.log("middleware 1", 0);
//     return (next) => {
//         console.log("middleware 1", 1);
//         return (action) => {
//             console.log("middleware 1", 2);
//             const returnValue = next(action);
//             console.log("middleware 1", 3);
//             return returnValue;
//         };
//     };
// }

// function middleware2(store) {
//     console.log("middleware 2", 0);
//     return (next) => {
//         console.log("middleware 2", 1);
//         return (action) => {
//             console.log("middleware 2", 2);
//             const returnValue = next(action);
//             console.log("middleware 2", 3);
//             return returnValue;
//         };
//     };
// }
// const store = createStore(todoApp, applyMiddleware(middleware1, middleware2));

// const store = createStore(todoApp, composeWithDevTools(applyMiddleware(thunk)));

/*// react-router-dom 전
const store = createStore(
    todoApp,
    composeWithDevTools(applyMiddleware(thunk, promise))
);
*/

//react-router-dom
const store = createStore(
    todoApp,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument({ history }), promise)
    )
);

/*//redux-saga
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    todoApp,
    composeWithDevTools(
        applyMiddleware(
            thunk.withExtraArgument({ history }),
            promise,
            sagaMiddleware
        )
    )
);

sagaMiddleware.run(rootSaga);
*/

export default store;
