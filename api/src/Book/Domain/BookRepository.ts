import { Book } from './Book';

export interface BookRepository {
  search(id: string): Promise<Book | null>;

  save(book: Book): Promise<void>;

  all(limit: number, offset: number): Promise<Book[]>;
}
