import { GetBookResponse } from '../GetBook/GetBookResponse';
import { Book } from '../../Domain/Book';

export class GetAllBooksResponse {
  private readonly books: Array<GetBookResponse>;

  constructor(books: Array<Book>) {
    this.books = books.map((book: Book) => new GetBookResponse(book));
  }
}
