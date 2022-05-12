import styles from "./Work.module.scss";
import { useState, useEffect } from "react";

export default function Work() {
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
        <div className={styles.mainContainer}>
            <div
                className={
                    scrollY > 2800
                        ? `${styles.active} ${styles.frontend}`
                        : styles.frontend
                }
            >
                <div className={styles.header}>Frontend.</div>
                <div className={styles.contents}>
                    <div className={styles.content}>
                        <span className={styles.title}>
                            Frontend 기초 강의 수강
                        </span>
                        <span className={styles.date}>2022.03 ~ 2022.04</span>
                        <br />
                        <span className={styles.text}>
                            FastCampus의 "한 번에 끝내는 프론트엔드 개발"
                            100시간 강의 수강
                        </span>
                    </div>
                    <div className={styles.content}>
                        <span className={styles.title}>Notion 정리</span>
                        <span className={styles.date}>2022.04</span>
                        <br />
                        <span className={styles.text}>
                            위 강의를 들으며 강의 내용 Notion에 정리
                        </span>
                    </div>
                    <div className={styles.content}>
                        <span className={styles.title}>Portfolio 개발</span>
                        <span className={styles.date}>2022.05</span>
                        <br />
                        <span className={styles.text}>
                            {" "}
                            배운 내용을 기반으로 Portfolio 제작
                        </span>
                    </div>
                    <div className={styles.content}>
                        <span className={styles.title}>
                            React 프로젝트 강의 수강
                        </span>
                        <span className={styles.date}>2022.05 ~ 현재</span>
                        <br />
                        <span className={styles.text}>
                            FastCampus의 "30개 프로젝트로 배우는 프론트엔드 with
                            React" 강의 수강중
                        </span>
                    </div>
                </div>
            </div>
            <div
                className={
                    scrollY > 2700
                        ? `${styles.active} ${styles.previousWork}`
                        : styles.previousWork
                }
            >
                <div className={styles.header}>Previous Work.</div>
                <div className={styles.contents}>
                    <div className={styles.content}>
                        <span className={styles.title}>
                            스마트 도로조명 프로젝트
                        </span>
                        <span className={styles.date}>2020.03 ~ 2020.11</span>
                        <br />
                        <span className={styles.text}>
                            메인 개발자로서 국가 연구소 ETRI와 프로젝트 진행
                            (1차년도)
                        </span>
                    </div>
                    <div className={styles.content}>
                        <span className={styles.title}>
                            ICACT 국제 컨퍼런스 발표
                        </span>
                        <span className={styles.date}>2020.09 ~ 2021.02</span>
                        <br />
                        <span className={styles.text}>
                            ETRI 프로젝트를 발전시켜 국제 논문 출판, 발표
                            (1저자)
                        </span>
                    </div>
                    <div className={styles.content}>
                        <span className={styles.title}>
                            스마트 도로조명 프로젝트
                        </span>
                        <span className={styles.date}>2021.03 ~ 2021.11</span>
                        <br />
                        <span className={styles.text}>
                            메인 개발자로서 국가 연구소 ETRI와 프로젝트 진행
                            (2차년도)
                        </span>
                    </div>
                    <div className={styles.content}>
                        <span className={styles.title}>
                            한국통신학회 저널 출판
                        </span>
                        <span className={styles.date}>2021.10 ~ 2021.12</span>
                        <br />
                        <span className={styles.text}>
                            차량 안전 분야 국내 저널 출판 (1저자, 한국통신학회
                            2022 3월호)
                        </span>
                    </div>
                    <div className={styles.content}>
                        <span className={styles.title}>석사학위논문(영문)</span>
                        <span className={styles.date}>2021.10 ~ 2022.01</span>
                        <br />
                        <span className={styles.text}>
                            학과 내 최초 영문 석사학위논문 제출
                        </span>
                    </div>
                    <div className={styles.content}>
                        <span className={styles.title}>SCI급 저널 제출</span>
                        <span className={styles.date}>2022.01 ~ 2022.03</span>
                        <br />
                        <span className={styles.text}>
                            Vehicular Communications 국제 저널(IF 6.91) 제출
                            (1저자, rivision 대기 중)
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
