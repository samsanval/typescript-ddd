import { describe, it } from '@jest/globals';
import { BookRepositoryMock } from '../__mocks__/BookRepositoryMock';
import { GetAllBooksQueryMother } from './GetAllBooksQueryMother';
import { GetAllBooksHandler } from '../../../Book/Application/GetAllBooks/GetAllBooksHandler';

describe('return all books', () => {
  let repository: BookRepositoryMock;
  it('should get all books', async () => {
    repository = new BookRepositoryMock();
    const query = GetAllBooksQueryMother.create();
    const handler = new GetAllBooksHandler(repository);
    await handler.run(query);

    repository.assertAll();
  });
});
