import { Response, Router } from 'express';
import httpStatus from 'http-status';

export const register = (router: Router) => {
  router.get('/hello', (_, res: Response) =>
    res.status(httpStatus.OK).json('hello'),
  );
};
