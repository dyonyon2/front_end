import { ForkOutlined } from "@ant-design/icons";
import { Button, Input, PageHeader, message as messageDialog } from "antd";
import TextArea from "antd/lib/input/TextArea";
import Layout from "./Layout";
import styles from "./Add.module.css";
import { useRef } from "react";
import TextAreaType from "rc-textarea";
import { BookReqType, payloadType } from "../types";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { BookType } from "../types";

interface EditProps {
    loading: boolean;
    books: BookType[] | null;
    getBooks: () => void;
    back: () => void;
    logout: () => void;
    edit: (payload: payloadType) => void;
}

const Edit: React.FC<EditProps> = ({
    loading,
    books,
    getBooks,
    back,
    logout,
    edit,
}) => {
    useEffect(() => {
        getBooks();
    }, [getBooks]);

    const { id } = useParams();
    console.log(id);

    console.log(books);

    const titleRef = useRef<any>(null);
    const messageRef = useRef<TextAreaType>(null);
    const authorRef = useRef<any>(null);
    const urlRef = useRef<any>(null);

    if (books === null) {
        return <div> books 객체가 비어 있습니다. </div>;
    }
    if (id === undefined) {
        return <div> bookId 가 undefined입니다.</div>;
    }

    const selectedBook = books.find((book) => {
        if (book.bookId == parseInt(id)) return true;
    });

    console.log(selectedBook);

    if (selectedBook === undefined) {
        return <div> 찾는 bookId 가 없습니다.</div>;
    }

    return (
        <Layout>
            <PageHeader
                onBack={back}
                title={
                    <div>
                        <ForkOutlined /> Edit Book
                    </div>
                }
                subTitle="Edit Your Book"
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
                        defaultValue={selectedBook.title}
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
                        defaultValue={selectedBook.message}
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
                        defaultValue={selectedBook.author}
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
                        defaultValue={selectedBook.url}
                    />
                </div>
                <div className={styles.button_area}>
                    <Button
                        size="large"
                        loading={loading}
                        onClick={click}
                        className={styles.button}
                    >
                        Edit
                    </Button>
                </div>
            </div>
        </Layout>
    );

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
            url === "" ||
            id === ""
        ) {
            console.log("error!!!");
            messageDialog.error("please fill out all inputs");
            return;
        }

        if (id != undefined) {
            const id_book = parseInt(id);
            edit({ id_book, title, message, author, url });
            return;
        }
    }
};

export default Edit;
