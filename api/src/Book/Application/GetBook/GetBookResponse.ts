import { Book, BookPrimitives } from '../../Domain/Book';

export class GetBookResponse {
  public readonly book: BookPrimitives;

  constructor(book: Book) {
    this.book = book.toPrimitives();
  }
}
