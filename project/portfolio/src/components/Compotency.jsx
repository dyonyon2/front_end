import styles from "./Compotency.module.scss";
import { useState, useEffect } from "react";

export default function Compotency() {
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

    console.log(scrollY);

    return (
        <div className={styles.container}>
            <div className={styles.headerContainer}>
                <div className={styles.headerMain}>Strengths.</div>
                <div className={styles.headerItems}>
                    <div className={styles.headerItem}>React</div>
                    <div className={styles.headerItem}>Vue</div>
                    <div className={styles.headerItem}>Next.js</div>
                    <div className={styles.headerItem}>Svelte</div>
                    <div className={styles.headerItem}>Typescript</div>
                    <div className={styles.headerItem}>GraphQL</div>
                    <div className={styles.headerItem}>SCSS</div>
                    <div className={styles.headerItem}>Styled</div>
                    <div className={styles.headerItem}>Git</div>
                    <div className={styles.headerItem}>Netlify</div>
                </div>
            </div>
            <div className={styles.skils}>
                <div className={styles.contentContainer}>
                    <div
                        className={
                            scrollY > 1400
                                ? `${styles.active} ${styles.content}`
                                : styles.content
                        }
                    >
                        <div className={styles.name}>React</div>
                        <div className={styles.contentText}>
                            React를 활용한 SPA 개발 경험이 있습니다.
                            <br />
                            next.js를 활용한 SSR 개발 경험이 있습니다.
                            <br />
                            Redux, Mobx 상태관리 라이브러리 사용 경험이
                            있습니다.
                        </div>
                    </div>
                </div>
                <div className={styles.contentContainer}>
                    <div
                        className={
                            scrollY > 1400
                                ? `${styles.active} ${styles.content}`
                                : styles.content
                        }
                    >
                        <div className={styles.name}>Vue</div>
                        <div className={styles.contentText}>
                            vue.js를 활용한 SPA 개발 경험이 있습니다.
                            <br />
                            vue3 composition api를 사용할 수 있습니다. <br />
                            vuex 상태관리 라이브러리 사용 경험이 있습니다.{" "}
                        </div>
                    </div>
                </div>
                <div className={styles.contentContainer}>
                    <div
                        className={
                            scrollY > 1700
                                ? `${styles.active} ${styles.content}`
                                : styles.content
                        }
                    >
                        <div className={styles.name}>HTML/CSS</div>
                        <div className={styles.contentText}>
                            CSS, SCSS 문법에 익숙합니다. <br />
                            CSS/SCSS module, styled-component을 활용할 수
                            있습니다. <br />
                            antd, Bootstrap 등의 라이브러리를 활용할 수
                            있습니다. <br />
                            BEM 방법론을 적용할 수 있습니다. <br />
                        </div>
                    </div>
                </div>
                <div className={styles.contentContainer}>
                    <div
                        className={
                            scrollY > 1700
                                ? `${styles.active} ${styles.content}`
                                : styles.content
                        }
                    >
                        <div className={styles.name}>Javascript</div>
                        <div className={styles.contentText}>
                            Svelte를 활용한 사이트 개발 경험이 있습니다.
                            <br />
                            typescript를 사용할 수 있습니다.
                            <br />
                            webpack, parcel 번들러 사용 경험이 있습니다. <br />
                            snowpack 빌드 도구 사용 경험이 있습니다. <br />
                            Jest, VTU, cypress Unit {"&"} E2E 테스트 코드를
                            작성할 수 있습니다.
                            <br />
                            Sanity를 통해 content를 가공할 수 있습니다. <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
