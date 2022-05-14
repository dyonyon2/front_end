import { goBack } from "connected-react-router";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Edit from "../components/Edit";
import { getBooks as getBooksSagaStart } from "../redux/modules/books";
import { BookReqType, RootState, BookType, payloadType } from "../types";
import { logout as logoutSagaStart } from "../redux/modules/auth";
import { editBook as editBookSagaStart } from "../redux/modules/books";
import { useNavigate } from "react-router-dom";

const EditContainer = () => {
    const navigate = useNavigate();

    const loading = useSelector<RootState, boolean>(
        (state) => state.books.loading
    );

    const dispatch = useDispatch();

    const books = useSelector<RootState, BookType[] | null>(
        (state) => state.books.books
    );
    const getBooks = useCallback(() => {
        dispatch(getBooksSagaStart());
    }, [dispatch]);
    const back = useCallback(() => {
        return navigate("/");
    }, [dispatch]);

    const logout = useCallback(() => {
        dispatch(logoutSagaStart());
    }, [dispatch]);

    // const add = useCallback(
    //     (book: BookReqType) => {
    //         dispatch(addBookSagaStart(book));
    //         return navigate("/");
    //     },
    //     [dispatch]
    // );
    const edit = useCallback(
        (payload: payloadType) => {
            dispatch(editBookSagaStart(payload));
            return navigate("/");
        },
        [dispatch]
    );

    return (
        <Edit
            loading={loading}
            books={books}
            getBooks={getBooks}
            back={back}
            logout={logout}
            edit={edit}
        />
    );
};

export default EditContainer;
