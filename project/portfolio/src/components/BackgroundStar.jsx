import styles from "./BackgroundStar.module.scss";
import { useState, useEffect } from "react";

export default function BackgroundStar() {
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
        <div className={styles.background}>
            <div
                className={
                    scrollY > 3000
                        ? `${styles.disActive} ${styles.stars}`
                        : styles.stars
                }
            ></div>
            <div
                className={
                    scrollY > 3000
                        ? `${styles.disActive} ${styles.stars2}`
                        : styles.stars2
                }
            ></div>
            <div
                className={
                    scrollY > 3000
                        ? `${styles.disActive} ${styles.stars3}`
                        : styles.stars3
                }
            ></div>
        </div>
    );
}
