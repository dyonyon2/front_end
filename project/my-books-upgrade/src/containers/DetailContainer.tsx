import Detail from "../components/Detail";
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BookType, RootState } from "../types";
import { getBooks as getBooksSagaStart } from "../redux/modules/books";
import { goBack } from "connected-react-router";
import { logout as logoutSagaStart } from "../redux/modules/auth";
import { useNavigate } from "react-router-dom";

export default function DetailContianer() {
    const navigate = useNavigate();
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

    return (
        <div>
            <Detail
                books={books}
                getBooks={getBooks}
                back={back}
                logout={logout}
            />
        </div>
    );
}
