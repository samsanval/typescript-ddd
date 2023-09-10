import { Model } from 'objection';
import { Book } from '../../Domain/Book';
import { Utils } from '../../../Shared/Domain/Utils';

interface BookModelPrimitives {
  id: string;
  title: string;
  created_at: string;
}

export default class BookModel extends Model {
  static tableName = 'books';

  static jsonSchema = {
    type: 'object',
    required: ['id'],
    properties: {
      id: { type: 'string' },
      name: { type: 'string' },
      created_at: { type: 'string' },
    },
  };

  id!: string;

  title!: string;

  created_at!: string;

  static toPrimitives = (book: Book): BookModelPrimitives => {
    return {
      id: book.idValue,
      title: book.titleValue,
      created_at: Utils.toISODate(book.createdAtValue),
    };
  };
}
