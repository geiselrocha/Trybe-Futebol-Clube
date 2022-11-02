import 'express-async-errors';
import { Request, Response } from 'express';
import UserService from '../services/UserService';
import CustomError from '../utils/CustomError';

class LoginController {
  service: UserService;
  constructor(service: UserService) {
    this.service = service;
  }

  login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const token = await this.service.login(email, password);
    return res.status(200).json({ token });
  };

  validate = async (req: Request, res: Response) => {
    const { authorization } = req.headers;
    if (!authorization) {
      throw new CustomError('Token does not exist', 404);
    }
    const role = await this.service.validateLogin(authorization);
    return res.status(200).json({ role });
  };
}

export default LoginController;
