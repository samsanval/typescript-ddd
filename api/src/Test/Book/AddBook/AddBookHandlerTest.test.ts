import { BookRepositoryMock } from '../__mocks__/BookRepositoryMock';
import { describe, it } from '@jest/globals';
import { AddBookCommandMother } from './AddBookCommandMother';
import { BookCreator } from '../../../Book/Application/AddBook/BookCreator';
import { AddBookHandler } from '../../../Book/Application/AddBook/AddBookHandler';

describe('Add Book Test ', () => {
  let repository: BookRepositoryMock;

  it('should insert a book', () => {
    repository = new BookRepositoryMock();
    const bookCreator = new BookCreator(repository);
    const handler = new AddBookHandler(bookCreator);
    const command = AddBookCommandMother.create();
    handler.run(command);

    repository.assertSaveBook();
  });
});
