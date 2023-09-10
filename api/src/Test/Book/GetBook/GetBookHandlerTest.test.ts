import { BookRepositoryMock } from '../__mocks__/BookRepositoryMock';
import { GetBookHandler } from '../../../Book/Application/GetBook/GetBookHandler';
import { GetBookQueryMother } from './GetBookQueryMother';
import { describe, it } from '@jest/globals';

describe('Get Book QueryHandler', () => {
  let repository: BookRepositoryMock;

  it('should get a book', async () => {
    repository = new BookRepositoryMock();

    const handler = new GetBookHandler(repository);
    const query = GetBookQueryMother.create();
    await handler.run(query);
    repository.assertSearchBook();
  });
});
