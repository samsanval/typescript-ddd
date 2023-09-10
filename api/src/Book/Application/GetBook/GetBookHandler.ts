import { BookRepository } from '../../Domain/BookRepository';
import { GetBookQuery } from './GetBookQuery';
import { inject, injectable } from 'tsyringe';
import { BookNotExists } from '../../Domain/BookNotExists';
import { GetBookResponse } from './GetBookResponse';

@injectable()
export class GetBookHandler {
  constructor(
    @inject('bookRepository') private bookRepository: BookRepository,
  ) {}

  async run(query: GetBookQuery) {
    const book = await this.bookRepository.search(query.id);
    if (!book) {
      throw new BookNotExists(query.id);
    }
    return new GetBookResponse(book);
  }
}
