import { injectable } from 'tsyringe';
import { GetAllBooksHandler } from '../../Book/Application/GetAllBooks/GetAllBooksHandler';
import { Request, Response } from 'express';
import { GetAllBooksQuery } from '../../Book/Application/GetAllBooks/GetAllBooksQuery';
import httpStatus from 'http-status';

@injectable()
export class GetAllBooksController {
  private readonly DEFAULT_LIMIT = 20;

  private readonly DEFAULT_OFFSET = 0;

  constructor(private handler: GetAllBooksHandler) {}

  async run(req: Request, res: Response) {
    const limit = req.params.limit
      ? Number.parseInt(req.params.limit, 10)
      : this.DEFAULT_LIMIT;
    const offset = req.params.offset
      ? Number.parseInt(req.params.offset, 10)
      : this.DEFAULT_OFFSET;

    const query = new GetAllBooksQuery(limit, offset);
    try {
      const books = await this.handler.run(query);
      res.status(httpStatus.OK).json(books);
    } catch (e) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);
    }
  }
}
