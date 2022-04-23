import logo from "./logo.svg";
import root from "react-shadow";

const styled = `
  .App {
  text-align: center;
}
`;

function App() {
    return (
        <root.div>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                </header>
            </div>
        </root.div>
    );
}

export default App;
