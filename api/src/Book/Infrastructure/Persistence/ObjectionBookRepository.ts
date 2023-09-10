import { BookRepository } from '../../Domain/BookRepository';
import { Book } from '../../Domain/Book';
import BookModel from './BookModel';

export class ObjectionBookRepository implements BookRepository {
  async search(id: string): Promise<Book | null> {
    const book = await BookModel.query().findById(id);
    if (book == undefined) {
      return null;
    }
    return Book.fromPrimitives({
      id: book.id,
      title: book.title,
      created_at: book.created_at,
    });
  }

  async save(book: Book): Promise<void> {
    try {
      await BookModel.query().insert(book.toPrimitives());
    } catch (e) {}
  }

  async all(limit: number, offset: number): Promise<Book[]> {
    const books = await BookModel.query().limit(limit).offset(offset);
    return books.map((book: BookModel) => {
      return Book.fromPrimitives({
        id: book.id,
        title: book.title,
        created_at: book.created_at,
      });
    });
  }
}
