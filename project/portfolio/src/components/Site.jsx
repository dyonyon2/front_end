import styles from "./Site.module.scss";

export default function Site() {
    function goSite0() {
        window.open("https://stoic-heisenberg-96d04f.netlify.app", "_blank");
    }
    function goSite1() {
        window.open("https://stoic-heisenberg-96d04f.netlify.app", "_blank");
    }
    function goSite2() {
        window.open(
            "https://tangerine-cheesecake-197994.netlify.app",
            "_blank"
        );
    }
    function goSite3() {
        window.open("https://heroic-lamington-7d4491.netlify.app", "_blank");
    }
    function goSite4() {
        window.open(
            "https://brilliant-semifreddo-7a97ed.netlify.app",
            "_blank"
        );
    }
    function goSite5() {
        window.open("https://meek-marzipan-d301bf.netlify.app", "_blank");
    }
    function goSite6() {
        window.open("https://snazzy-pavlova-9729e1.netlify.app", "_blank");
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.header}>
                <div className={styles.title}>Project</div>
            </div>
            <div className={styles.contents}>
                <div className={styles.content}>
                    <span className={styles.title} onClick={goSite2}>
                        영화 검색 사이트
                    </span>
                    <br />
                    <span className={styles.text}>
                        vue.js를 활용하여 영화 검색 사이트를 제작하였습니다.{" "}
                        <br />
                        Bootstrap을 element 구성에 활용하였으며, vuex를 통해
                        상태 관리를 하였습니다. <br />
                        Jest와 VTC를 통하여 Unit Test와 cypress를 통하여 E2E
                        Test를 진행하였습니다.
                        <br />
                        omdbAPI를 사용하여 영화 정보를 axios와 비동기처리 방식을
                        통해 요청하고 전달받아 활용하였습니다.
                    </span>
                </div>
                <div className={styles.content}>
                    <span className={styles.title} onClick={goSite0}>
                        나의 책장 만들기
                    </span>
                    <br />
                    <span className={styles.text}>
                        React와 Typescript를 활용하여 나의 책장 만들기 사이트를
                        제작하였습니다. <br />
                        antd를 element 구성에 활용하였으며, redux를 통해 상태
                        관리를 하였습니다. <br />
                        redux-saga와 redux-thunk 미들웨어를 활용하여
                        구현하였습니다.
                        <br />
                        (수업에서 제공하는 API를 사용하여 저장되어 있는 post가
                        정돈되어 있지 않을 수 있습니다) <br />
                        (id: mark@test.com / password: fastcampus)
                    </span>
                </div>
                <div className={styles.content}>
                    <span className={styles.title} onClick={goSite3}>
                        홈쇼핑 사이트
                    </span>
                    <br />
                    <span className={styles.text}>
                        React를 활용하여 홈쇼핑 사이트를 제작하였습니다. <br />
                        Context API를 활용하여 컴포넌트 간 데이터를 함수를
                        공유하여 사용하였습니다.
                    </span>
                </div>
                <div className={styles.content}>
                    <span className={styles.title} onClick={goSite4}>
                        간단한 Todo List
                    </span>
                    <br />
                    <span className={styles.text}>
                        Svelte를 활용하여 간단한 Todo List 사이트를
                        제작하였습니다. <br />
                        snowpack을 활용하여 build하였습니다.
                    </span>
                </div>
                <div className={styles.content}>
                    <span className={styles.title} onClick={goSite5}>
                        블로그 사이트
                    </span>
                    <br />
                    <span className={styles.text}>
                        Sanity로 사이트에서 사용할 content를 가공하고 query로
                        content를 요청하고 전달받아 사용하였습니다. <br />
                        Next.js를 활용해 SSR 블로그 사이트를 만들었습니다.
                    </span>
                </div>
                <div className={styles.content}>
                    <span className={styles.title} onClick={goSite1}>
                        스타벅스 메인 홈페이지
                    </span>
                    <br />
                    <span className={styles.text}>
                        HTML, CSS, JS를 통해 스타벅스의 메인 홈페이지를
                        제작하였습니다.
                    </span>
                </div>
                <div className={styles.content}>
                    <span className={styles.title} onClick={goSite6}>
                        오버워치 선택 화면
                    </span>
                    <br />
                    <span className={styles.text}>
                        기본적인 HTML, CSS를 활용하여 오버워치 게임의 캐릭터
                        선택화면 사이트를 제작하였습니다.
                    </span>
                </div>
            </div>
        </div>
    );
}
