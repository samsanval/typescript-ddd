import { BookRepository } from '../../../Book/Domain/BookRepository';
import { Book } from '../../../Book/Domain/Book';
import { expect, jest } from '@jest/globals';
import { UuidMother } from '../../Shared/Domain/UuidMother';

export class BookRepositoryMock implements BookRepository {
  private readonly searchMock: jest.Mock;

  private readonly saveMock: jest.Mock;

  private readonly allMock: jest.Mock;

  constructor() {
    this.searchMock = jest.fn();
    this.saveMock = jest.fn();
    this.allMock = jest.fn();
  }

  async search(id: string): Promise<Book | null> {
    this.searchMock(id);
    return Book.create(id, 'mock', new Date().toISOString());
  }

  assertSearchBook() {
    expect(this.searchMock).toHaveBeenCalled();
  }

  assertSaveBook(): void {
    expect(this.saveMock).toHaveBeenCalled();
  }

  assertAll(): void {
    expect(this.allMock).toHaveBeenCalled();
  }

  async save(book: Book): Promise<void> {
    this.saveMock(book);
  }

  async all(limit: number, offset: number): Promise<Book[]> {
    this.allMock(limit, offset);
    return [Book.create(UuidMother.create(), 'mock', new Date().toISOString())];
  }
}
