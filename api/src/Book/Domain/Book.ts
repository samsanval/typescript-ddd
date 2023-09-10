import { BookTitle } from './BookTitle';
import { BookId } from './BookId';
import { BookCreatedAtDate } from './BookCreatedAtDate';
import { Utils } from '../../Shared/Domain/Utils';

export interface BookPrimitives {
  id: string;
  title: string;
  created_at: string;
}

export class Book {
  private constructor(
    private id: BookId,
    private title: BookTitle,
    private createdAt: BookCreatedAtDate,
  ) {}

  get idValue(): string {
    return this.id.toString();
  }

  get titleValue(): string {
    return this.title.toString();
  }

  get createdAtValue(): Date {
    return this.createdAt.toDate();
  }

  static create(id: string, title: string, createdAt: string): Book {
    return new Book(
      new BookId(id),
      new BookTitle(title),
      new BookCreatedAtDate(new Date(Date.parse(createdAt))),
    );
  }

  static fromPrimitives(primitives: BookPrimitives): Book {
    return new Book(
      new BookId(primitives.id),
      new BookTitle(primitives.title),
      new BookCreatedAtDate(new Date(Date.parse(primitives.created_at))),
    );
  }

  toPrimitives = (): BookPrimitives => {
    return {
      id: this.idValue,
      title: this.titleValue,
      created_at: Utils.toISODate(this.createdAtValue),
    };
  };
}
