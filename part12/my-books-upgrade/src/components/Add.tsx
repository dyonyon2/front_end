import { ForkOutlined } from "@ant-design/icons";
import { Button, Input, PageHeader, message as messageDialog } from "antd";
import TextArea from "antd/lib/input/TextArea";
import Layout from "./Layout";
import styles from "./Add.module.css";
import { useRef } from "react";
import TextAreaType from "rc-textarea";
import { BookReqType } from "../types";
import { useNavigate } from "react-router-dom";

interface AddProps {
    loading: boolean;
    back: () => void;
    logout: () => void;
    add: (book: BookReqType) => void;
}

const Add: React.FC<AddProps> = ({ loading, back, logout, add }) => {
    const titleRef = useRef<any>(null);
    const messageRef = useRef<TextAreaType>(null);
    const authorRef = useRef<any>(null);
    const urlRef = useRef<any>(null);

    return (
        <Layout>
            <PageHeader
                onBack={back}
                title={
                    <div>
                        <ForkOutlined /> Add Book
                    </div>
                }
                subTitle="Add Your Book"
                extra={[
                    <Button
                        key="1"
                        type="primary"
                        onClick={logout}
                        className={styles.button_logout}
                    >
                        Logout
                    </Button>,
                ]}
            />

            <div className={styles.add}>
                <div className={styles.input_title}>
                    Title
                    <span className={styles.required}> *</span>
                </div>
                <div className={styles.input_area}>
                    <Input
                        placeholder="Title"
                        className={styles.input}
                        ref={titleRef}
                    />
                </div>
                <div className={styles.input_comment}>
                    Comment
                    <span className={styles.required}> *</span>
                </div>
                <div className={styles.input_area}>
                    <TextArea
                        rows={4}
                        placeholder="Comment"
                        className={styles.input}
                        ref={messageRef}
                    />
                </div>
                <div className={styles.input_author}>
                    Author
                    <span className={styles.required}> *</span>
                </div>
                <div>
                    <Input
                        placeholder="Author"
                        className={styles.input}
                        ref={authorRef}
                    />
                </div>
                <div className={styles.input_url}>
                    URL
                    <span className={styles.required}> *</span>
                </div>
                <div className={styles.input_area}>
                    <Input
                        placeholder="URL"
                        className={styles.input}
                        ref={urlRef}
                    />
                </div>
                <div className={styles.button_area}>
                    <Button
                        size="large"
                        loading={loading}
                        onClick={click}
                        className={styles.button}
                    >
                        Add
                    </Button>
                </div>
            </div>
        </Layout>
    );

    const navigate = useNavigate();

    function click() {
        const title = titleRef.current!.input.value;
        const message = messageRef.current!.resizableTextArea.props
            .value as string;
        const author = authorRef.current!.input.value;
        const url = urlRef.current!.input.value;

        console.log(
            "in components/add.tsx click()",
            title,
            message,
            author,
            url
        );

        if (
            title === "" ||
            message === undefined ||
            message === "" ||
            author === "" ||
            url === ""
        ) {
            console.log("error!!!");
            messageDialog.error("please fill out all inputs");
            return;
        }

        add({
            title,
            message,
            author,
            url,
        });

        return;
    }
};

export default Add;
