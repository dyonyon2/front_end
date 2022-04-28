import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import { observer } from "mobx-react";
import { personStore } from "./index";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Button />
                {/* <p>{personStore.age}</p> */}
            </header>
        </div>
    );
}

export default observer(App);
