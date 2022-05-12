import Detail from "../components/Detail";
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BookType, RootState } from "../types";
import { getBooks as getBooksSagaStart } from "../redux/modules/books";

export default function DetailContianer() {
    const dispatch = useDispatch();

    const books = useSelector<RootState, BookType[] | null>(
        (state) => state.books.books
    );
    const getBooks = useCallback(() => {
        dispatch(getBooksSagaStart());
    }, [dispatch]);
    // console.log(props);
    return (
        <div>
            여기는 detail container입니다. 전달받은 객체는 입니다.
            <Detail books={books} getBooks={getBooks} />
        </div>
    );
}
