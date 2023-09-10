import { Request, Response, Router } from 'express';
import { container } from 'tsyringe';
import GetBookController from '../Controllers/Book/GetBookController';
import { AddBookController } from '../Controllers/Book/AddBookController';
import { GetAllBooksController } from '../Controllers/Book/GetAllBooksController';

export const register = (router: Router) => {
  const getBookController = container.resolve(GetBookController);
  const addBookController = container.resolve(AddBookController);
  const allBooksController = container.resolve(GetAllBooksController);
  router.get('/book/:id', (req: Request, res: Response) =>
    getBookController.run(req, res),
  );
  router.post('/book', (req: Request, res: Response) =>
    addBookController.run(req, res),
  );

  router.get('/books', (req: Request, res: Response) => {
    allBooksController.run(req, res);
  });
};
