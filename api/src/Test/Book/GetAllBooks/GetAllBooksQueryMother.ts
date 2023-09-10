import { NumberGenerator } from '../../Shared/Domain/NumberGenerator';
import { GetAllBooksQuery } from '../../../Book/Application/GetAllBooks/GetAllBooksQuery';

export class GetAllBooksQueryMother {
  static create(limit?: number, offset?: number) {
    return new GetAllBooksQuery(
      limit ?? NumberGenerator.create(),
      offset ?? NumberGenerator.create(),
    );
  }
}
