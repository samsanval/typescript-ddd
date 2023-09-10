import { UuidMother } from '../../Shared/Domain/UuidMother';
import { StringGenerator } from '../../Shared/Domain/StringGenerator';
import { AddBookCommand } from '../../../Book/Application/AddBook/AddBookCommand';

export class AddBookCommandMother {
  static create(id?: string, title?: string) {
    return new AddBookCommand(
      id ?? UuidMother.create(),
      title ?? StringGenerator.create(),
    );
  }
}
