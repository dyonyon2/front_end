import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import { Provider } from "react-redux";

// import ReduxContext from "./contexts/ReduxContext";
// import { addToDo, completeTodo, showComplete } from "./redux/actions";

// // store의 상태가 변경되면 함수 실행
// const unsubscribe = store.subscribe(() => {
//     console.log(store.getState());
// });

// // console.log(store);
// // console.log(store.getState());
// store.dispatch(addToDo("coding"));
// // console.log(store.getState());
// store.dispatch(addToDo("read book"));
// store.dispatch(addToDo("eat"));
// store.dispatch(completeTodo(0));
// store.dispatch(showComplete());
// unsubscribe();
// store.dispatch(addToDo("sleep"));
// store.dispatch(addToDo("game"));
// store.dispatch(addToDo("singing"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        {/* <ReduxContext.Provider value={store}>
            <App />
        </ReduxContext.Provider> */}

        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
