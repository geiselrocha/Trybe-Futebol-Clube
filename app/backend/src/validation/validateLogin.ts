import { NextFunction, Request, Response } from 'express';
import CustomError from '../utils/CustomError';
import joiValidateLogin from '../utils/loginSchema';

const validateLogin = (req: Request, _res: Response, next: NextFunction) => {
  const { error } = joiValidateLogin(req.body);
  if (error) throw new CustomError(error.message, 400);

  next();
};

export default validateLogin;
