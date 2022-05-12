import { Row, Col } from "antd";

export default function BlogHeadLine() {
    return (
        <Row
            align="middle"
            style={{
                height: 400,
                textAlign: "center",
            }}
        >
            <Col span={24}>
                <h1
                    style={{
                        fontSize: 70,
                        fontWeight: "bold",
                    }}
                >
                    Dyonyon&apos;s Blog
                </h1>
                <p
                    style={{
                        fontSize: 24,
                    }}
                >
                    Front-end 개발자가 되기 위하여 패스트캠퍼스 100시간 한 번에
                    끝내는 프론트엔드 개발 초격차 패키지 Online을 수강하고
                    있습니다. 첫 회사를 구하고 있지만, 경험이 없는 것을 당연히
                    여기는 것보다 이런 강의를 통해 실무에 대한 지식을 쌓아 이
                    직무에 대한 관심과 열정을 보여주려고 합니다. 보다 더
                    효율적이고 안정적인 웹 사이트를 만들기 위하여
                    노력하겠습니다.
                </p>
            </Col>
        </Row>
    );
}
