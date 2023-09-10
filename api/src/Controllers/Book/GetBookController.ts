import { GetBookHandler } from '../../Book/Application/GetBook/GetBookHandler';
import { Request, Response } from 'express';
import { GetBookQuery } from '../../Book/Application/GetBook/GetBookQuery';
import httpStatus from 'http-status';
import { BookNotExists } from '../../Book/Domain/BookNotExists';
import { injectable } from 'tsyringe';

@injectable()
export default class GetBookController {
  constructor(private handler: GetBookHandler) {}

  async run(req: Request, res: Response): Promise<void> {
    const id: string = req.params.id;
    const query: GetBookQuery = new GetBookQuery(id);
    try {
      const book = await this.handler.run(query);
      res.status(httpStatus.OK).json(book);
    } catch (e) {
      if (e instanceof BookNotExists) {
        res.status(httpStatus.NOT_FOUND).json(e.message);
      } else {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json(e);
      }
    }
  }
}
