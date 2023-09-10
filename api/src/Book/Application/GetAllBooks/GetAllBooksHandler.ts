import { inject, injectable } from 'tsyringe';
import { BookRepository } from '../../Domain/BookRepository';
import { GetAllBooksQuery } from './GetAllBooksQuery';
import { GetAllBooksResponse } from './GetAllBooksResponse';

@injectable()
export class GetAllBooksHandler {
  constructor(
    @inject('bookRepository') private bookRepository: BookRepository,
  ) {}

  async run(query: GetAllBooksQuery) {
    return new GetAllBooksResponse(
      await this.bookRepository.all(query.limit, query.offset),
    );
  }
}
