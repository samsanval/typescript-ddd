import { inject, injectable } from 'tsyringe';
import { BookRepository } from '../../Domain/BookRepository';
import { AddBookCommand } from './AddBookCommand';
import { Book } from '../../Domain/Book';
import { Utils } from '../../../Shared/Domain/Utils';

@injectable()
export class BookCreator {
  constructor(
    @inject('bookRepository') private bookRepository: BookRepository,
  ) {}

  async run(command: AddBookCommand) {
    const date = Utils.toISODate(new Date());
    try {
      const book = Book.create(command.id, command.title, date);
      await this.bookRepository.save(book);
    } catch (e) {
      console.log(e);
    }
  }
}
