import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import CustomError from '../utils/CustomError';

const errorMiddleware: ErrorRequestHandler = (
  err: CustomError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  console.log(`Error ${err.message}`);
  res.status(err.status || 500).json({ message: err.message });
};

export default errorMiddleware;
