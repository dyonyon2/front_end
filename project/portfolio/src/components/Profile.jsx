import "./carousel.scss";
import styles from "./Profile.module.scss";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";

export default function Profile() {
    const [isClick, setClick] = useState(false);

    function click() {
        setClick(!isClick);
    }

    function goGit() {
        window.open("https://github.com/jychoi9712/front_end", "_blank");
    }
    function goNotion() {
        window.open(
            "https://www.notion.so/dyonyon/f8fb4014e8754b0ebae45e46f745d23b?v=13fc858cb7914c6fb0c2d470bdd0aa6d",
            "_blank"
        );
    }
    function goDrive() {
        window.open(
            "https://drive.google.com/drive/folders/1YWXWg72XlVw6glJeNXNruHYFVt_VVXlK?usp=sharing",
            "_blank"
        );
    }
    function goEmail() {
        window.open("mailto:jychoi9712@naver.com", "_blank");
    }
    function goResume() {
        window.open(
            "https://drive.google.com/drive/folders/1YWXWg72XlVw6glJeNXNruHYFVt_VVXlK?usp=sharing",
            "_blank"
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Carousel
                    className="carousel"
                    controls={false}
                    indicators={false}
                >
                    <Carousel.Item interval={3000}>
                        <div className="slideItem">Frontend</div>
                        <div className="slideLine"></div>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <div className="slideItem">HTML/CSS</div>
                        <div className="slideLine"></div>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <div className="slideItem">Javascript</div>
                        <div className="slideLine"></div>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <div className="slideItem">React</div>
                        <div className="slideLine"></div>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <div className="slideItem">Vue</div>
                        <div className="slideLine"></div>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className={styles.middle}>
                <div
                    className={
                        isClick ? styles.profileInfo : styles.profileImage
                    }
                    onClick={click}
                ></div>
                <div className={styles.links}>
                    <div className={styles.link} onClick={goEmail}>
                        jychoi9712@naver.com
                    </div>
                    <div className={styles.link} onClick={goGit}>
                        Git Hub
                    </div>
                    <div className={styles.link} onClick={goNotion}>
                        Notion
                    </div>
                    {/* <div className={styles.link} onClick={goDrive}>
                        Portfolio PPT Link!
                    </div> */}
                    <div className={styles.link} onClick={goResume}>
                        Resume Link!
                    </div>
                </div>
            </div>
            <div className={styles.content}>
                훌륭한 Frontend 개발자로 거듭나기 위해 성장중인
                <span className={styles.contentPoint}> 주니어 개발자</span>
                입니다.
                <br />
                <span className={styles.contentPoint}>
                    " 포기하지 않고 계속 노력한다면 무엇이든 다 해낼 수 있다! "
                </span>
                <br />
                대학원 시절, 노력을 통해 목표를 성취하며 얻게 된
                <span className={styles.contentPoint}>
                    {" "}
                    인생의 교훈
                </span>입니다. <br />
                이러한{" "}
                <span className={styles.contentPoint}> 경험과 자신감</span>은
                앞으로 직면하게 될 어려움을 헤쳐 나가는 데{" "}
                <span className={styles.contentPoint}>중요한 열쇠</span>가
                되리라 생각합니다. <br />
                대학원 분야와는 다른{" "}
                <span className={styles.contentPoint}> Frontend</span>에
                도전하여 공부하고 있듯이, 노력하여{" "}
                <span className={styles.contentPoint}>
                    끊임없이 성장하는 개발자
                </span>{" "}
                가 되고자 합니다.
            </div>
        </div>
    );
}
