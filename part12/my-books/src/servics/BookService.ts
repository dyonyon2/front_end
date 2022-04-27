import axios from "axios";
import { BookReqType, BookType } from "../types";

const BOOK_API_URL = "https://api.marktube.tv/v1/book";

export default class BookService {
    public static async getBooks(token: string): Promise<BookType[]> {
        const res = await axios.get(BOOK_API_URL, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return res.data;
    }

    public static async addBook(
        token: string,
        book: BookReqType
    ): Promise<BookType> {
        const res = await axios.post(BOOK_API_URL, book, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return res.data;
    }

    public static async deleteBook(token: string, bookId: number) {
        await axios.delete(`${BOOK_API_URL}/${bookId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    }
}
