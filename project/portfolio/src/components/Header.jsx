import styles from "./Header.module.scss";
// import { useScroll } from "../hooks/scrollHook";
// import { useCallback } from "react";
import { useState, useEffect } from "react";

export default function Header() {
    // Scroll Y event
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

    // View Size event
    const [viewSize, setViewSize] = useState({
        viewWidth: window.innerWidth,
        viewHeight: window.innerHeight,
    });
    const resize = (e) => {
        setViewSize({
            viewWidth: window.innerWidth,
            viewHeight: window.innerHeight,
        });
    };
    useEffect(() => {
        window.addEventListener("resize", resize);
        return () => {
            window.removeEventListener("resize", resize);
        };
    }, [setViewSize]);

    return (
        <div className={styles.container}>
            <div
                className={
                    scrollY > viewSize.viewHeight - 460
                        ? styles.displaynone
                        : styles.fixedcontainer
                }
            >
                <div
                    className={
                        scrollY > 100
                            ? `${styles.name} ${styles.nameout}`
                            : styles.name
                    }
                    style={{ left: scrollY * 4 }}
                >
                    CHOI JONG-YOUNG
                </div>
                <div
                    className={
                        scrollY > 110
                            ? `${styles.frontend} ${styles.frontendout}`
                            : styles.frontend
                    }
                    style={{ right: scrollY * 4 }}
                >
                    FRONTEND
                </div>
            </div>
        </div>
    );
}
