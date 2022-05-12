import { useParams } from "react-router-dom";
import styles from "./Books.module.css";
import Layout from "./Layout";
import { useEffect } from "react";
import { Button, Input, PageHeader, message as messageDialog } from "antd";
import { useRef } from "react";
import TextArea from "antd/lib/input/TextArea";
import TextAreaType from "rc-textarea";
import { BookType } from "../types";

interface DetailProps {
    books: BookType[] | null;
    getBooks: () => void;
}

const Detail: React.FC<DetailProps> = ({ books, getBooks }) => {
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
            <div>여기는 detail component입니다. 전달받은 {id} 입니다.</div>
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
                        disabled
                        value={selectedBook.title}
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
                        disabled
                        value={selectedBook.title}
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
                        disabled
                        value={selectedBook.title}
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
                        disabled
                        value={selectedBook.title}
                    />
                </div>
                <div className={styles.button_area}>
                    <Button size="large" className={styles.button}>
                        Edit
                    </Button>
                    <Button size="large" className={styles.button}>
                        Back
                    </Button>
                </div>
            </div>
        </Layout>
    );
};

export default Detail;
