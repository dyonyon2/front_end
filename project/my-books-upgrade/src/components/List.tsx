import { Button, PageHeader, Table } from "antd";
import { useEffect } from "react";
import { BookType } from "../types";
import Layout from "./Layout";
import Book from "./Book";
import styles from "./List.module.css";
import { Link } from "react-router-dom";

interface ListProps {
    books: BookType[] | null;
    loading: boolean;
    error: Error | null;
    getBooks: () => void;
    logout: () => void;
    deleteBook: (bookId: number) => void;
    editBook: (bookId: number) => void;
}

const List: React.FC<ListProps> = ({
    books,
    loading,
    getBooks,
    error,
    logout,
    deleteBook,
    editBook,
}) => {
    useEffect(() => {
        getBooks();
    }, [getBooks]);

    useEffect(() => {
        if (error) {
            logout();
        }
    }, [error, logout]);

    const goAdd = () => {
        console.log("in goAdd");
        // return <Navigate to="/add" />;
    };

    return (
        <Layout>
            <PageHeader
                title={<div> Book List </div>}
                extra={[
                    // <Button
                    //     key="2"
                    //     type="primary"
                    //     onClick={goAdd}
                    //     className={styles.button}
                    // >
                    //     Add Book
                    // </Button>,
                    <Link
                        to="/add"
                        key="2"
                        className={styles.link}
                        type="primary"
                    >
                        Add Book
                    </Link>,
                    <Button
                        key="1"
                        type="primary"
                        onClick={logout}
                        className={styles.button}
                    >
                        Logout
                    </Button>,
                ]}
            />
            <Table
                dataSource={books || []}
                columns={[
                    {
                        title: "Book",
                        dataIndex: "book",
                        key: "book",
                        render: (text, record) => (
                            <Book
                                {...record}
                                deleteBook={deleteBook}
                                editBook={editBook}
                            />
                        ),
                    },
                ]}
                loading={books === null || loading}
                showHeader={false}
                rowKey="bookId"
                pagination={false}
                className={styles.table}
            />
        </Layout>
    );
};

export default List;
