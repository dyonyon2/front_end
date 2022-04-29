import { Row, Col, Card } from "antd";
import Link from "next/link";
import dayjs from "dayjs";

export default function BlogMainPost({
    slug,
    thumbnail,
    title,
    subtitle,
    author,
    createdAt,
}) {
    return (
        <Row
            align="middle"
            style={{
                height: 600,
                textAlign: "center",
            }}
        >
            <Col span={24}>
                <Link href={`/post/${slug}`}>
                    <a>
                        <Card
                            style={{ border: "none" }}
                            cover={
                                <img
                                    alt={thumbnail.alt}
                                    src={thumbnail.imageUrl}
                                    style={{
                                        height: 400,
                                        width: "auto",
                                        marginLeft: 0,
                                        marginRight: 0,
                                        margin: "auto",
                                    }}
                                />
                            }
                        >
                            <h1>{title}</h1>
                            <h3>{subtitle}</h3>
                            <h4>
                                {author.name} -{" "}
                                {dayjs(createdAt).format("YYYY MMMM D")}
                            </h4>
                        </Card>
                    </a>
                </Link>
            </Col>
        </Row>
    );
}
