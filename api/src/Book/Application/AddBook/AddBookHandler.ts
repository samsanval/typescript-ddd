import { AddBookCommand } from './AddBookCommand';
import { BookCreator } from './BookCreator';
import { injectable } from 'tsyringe';

@injectable()
export class AddBookHandler {
  constructor(private bookCreator: BookCreator) {}

  async run(command: AddBookCommand) {
    await this.bookCreator.run(command);
  }
}
