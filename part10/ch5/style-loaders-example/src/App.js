import logo from "./logo.svg";
// import "./App.scss";
// import "./App.css";
import styles from "./App.module.css";
import Button from "./components/Button";

function App() {
    return (
        <div className={styles.App}>
            <header className={styles["header"]}>
                <img src={logo} className={styles["logo"]} alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <Button> Button </Button>
            </header>
        </div>
    );
}

export default App;
