import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { autorun, makeObservable, observable } from "mobx";
import { Provider } from "mobx-react";
import PersonContext from "./contexts/PersonContext";
import PersonStore from "./stores/PersonStore";
import RootStore from "./stores/RootStore";

/*// mobx
const isLogin = observable(true);
const person = observable({
    name: "dyonyon",
    age: 26,
});
class PersonStore {
    @observable
    name = "dyonyon";
    @observable
    age = 26;
    constructor() {
        makeObservable(this);
    }
}
const personStore = new PersonStore();

// 최초 실행 1번, set 후에 한번
autorun(() => {
    console.log(isLogin.get());
    console.log(person.age);
    console.log(personStore.age);
});
isLogin.set(false);
person.age = 25;
personStore.age = 30;
*/

/*//mobx-react

class PersonStore {
    @observable
    name = "dyonyon";
    @observable
    age = 26;
    constructor() {
        makeObservable(this);
    }
    plus() {
        this.age++;
    }
}
export const personStore = new PersonStore();

// setInterval(() => {
//     personStore.age++;
// }, 1000);
*/

// const personStore = new PersonStore();
const rootStore = new RootStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // <React.StrictMode>
    //     <PersonContext.Provider value={personStore}>
    //         <App />
    //     </PersonContext.Provider>
    // </React.StrictMode>

    // <React.StrictMode>
    //     <Provider personStore={personStore}>
    //         <App />
    //     </Provider>
    // </React.StrictMode>

    <React.StrictMode>
        <Provider {...rootStore}>
            <App />
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
