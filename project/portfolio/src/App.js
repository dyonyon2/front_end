import Header from "./components/Header";
import Profile from "./components/Profile";
import Compotency from "./components/Compotency";
import Site from "./components/Site";
import BackgroundStar from "./components/BackgroundStar";
import Work from "./components/Work";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
    const [scrollY, setScrollY] = useState(0);
    const listener = (e) => {
        setScrollY(window.scrollY);
    };
    useEffect(() => {
        window.addEventListener("scroll", listener);
        return () => {
            window.removeEventListener("scroll", listener);
        };
    }, [setScrollY]);

    return (
        <div
            className={
                scrollY > 2600
                    ? "mainContainerWhite mainContainer"
                    : "mainContainer"
            }
        >
            <BackgroundStar></BackgroundStar>
            <Header></Header>
            <Profile></Profile>
            <Compotency></Compotency>
            <Work></Work>
            <Site></Site>
        </div>
    );
}

export default App;
