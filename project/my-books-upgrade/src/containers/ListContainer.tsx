import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import List from "../components/List";
import { BookType, RootState } from "../types";
import {
    getBooks as getBooksSagaStart,
    deleteBook as deleteBookSagaStart,
} from "../redux/modules/books";
import { logout as logoutSagaStart } from "../redux/modules/auth";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function ListContainer() {
    const navigate = useNavigate();

    const books = useSelector<RootState, BookType[] | null>(
        (state) => state.books.books
    );

    const loading = useSelector<RootState, boolean>(
        (state) => state.books.loading
    );

    const error = useSelector<RootState, Error | null>(
        (state) => state.books.error
    );

    const dispatch = useDispatch();

    const getBooks = useCallback(() => {
        dispatch(getBooksSagaStart());
    }, [dispatch]);

    const logout = useCallback(() => {
        dispatch(logoutSagaStart());
    }, [dispatch]);

    const deleteBook = useCallback(
        (bookId: number) => {
            dispatch(deleteBookSagaStart(bookId));
        },
        [dispatch]
    );

    const editBook = useCallback(
        (bookId: number) => {
            return navigate("/edit/" + bookId);
        },
        [dispatch]
    );

    // const goAdd = useCallback(() => {
    //     dispatch(Navigate("/add"));
    // }, [dispatch]);

    return (
        <List
            books={books}
            loading={loading}
            getBooks={getBooks}
            error={error}
            logout={logout}
            deleteBook={deleteBook}
            editBook={editBook}
        />
    );
}
