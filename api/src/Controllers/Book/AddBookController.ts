import { injectable } from 'tsyringe';
import { AddBookHandler } from '../../Book/Application/AddBook/AddBookHandler';
import { Request, Response } from 'express';
import { AddBookCommand } from '../../Book/Application/AddBook/AddBookCommand';
import httpStatus from 'http-status';

@injectable()
export class AddBookController {
  constructor(private handler: AddBookHandler) {}

  async run(req: Request, res: Response): Promise<void> {
    try {
      const { id, title } = req.body;
      const command = new AddBookCommand(id, title);
      await this.handler.run(command);

      res.status(httpStatus.CREATED).json();
    } catch (e) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);
    }
  }
}
