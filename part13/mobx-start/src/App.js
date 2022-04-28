import logo from "./logo.svg";
import "./App.css";
import { inject, observer } from "mobx-react";
import { personStore } from "./index";
import React, { useContext } from "react";
import PersonContext from "./contexts/PersonContext";
import autobind from "autobind-decorator";
import { action, runInAction } from "mobx";
import PersonContainer from "./containers/PersonContainer";
import TodoContainer from "./containers/TodoContainer";
import TodoFormContainer from "./containers/TodoFormContainer";
import UserListContainer from "./containers/UserListContainer";

/* //function
function App({ personStore }) {

    const age10 = computed(() => {
        return Math.floor(personStore.age / 10) * 10;
    }).get();

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    {personStore.age},{personStore.name}
                </p>
                <p>
                    <button onClick={click}>plus</button>
                </p>
            </header>
        </div>
    );

    function click() {
        // personStore.plus();

        //action
        // setTimeout(
        //     action(() => {
        //         personStore.age = 25;
        //         personStore.name = "sojoong";
        //     }),
        //     500
        // );

        //runInAction
        setTimeout(() => {
            runInAction(() => {
                personStore.age = 25;
                personStore.name = "sojoong";
            });
        }, 500);

        setTimeout(() => {
            personStore.testAction();
        }, 500);
    }
}
export default inject("personStore")(observer(App));
*/

/*//class
@inject("personStore")
@observer
class App extends React.Component {
    render() {
        const { personStore } = this.props;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>{personStore.age10}</p>
                    <p>
                        <button onClick={this.click}>plus</button>
                    </p>
                </header>
            </div>
        );
    }

    @autobind
    click() {
        this.props.personStore.plus();
    }
}

export default App;
*/

/*//container내에 component를 가져오며 props를 넘겨주는 방식
@inject("personStore")
@observer
class AppContainer extends React.Component {
    render() {
        const { personStore } = this.props;
        return <App age10={personStore.age10} plus={this.plus} />;
    }

    @autobind
    plus() {
        this.props.personStore.plus();
    }
}

function App({ age10, plus }) {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>{age10}</p>
                <p>
                    <button onClick={click}>plus</button>
                </p>
            </header>
        </div>
    );
    function click() {
        plus();
    }
}

export default AppContainer;
*/

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <PersonContainer />
                <TodoContainer />
                <TodoFormContainer />
                <UserListContainer />
            </header>
        </div>
    );
}

export default App;
