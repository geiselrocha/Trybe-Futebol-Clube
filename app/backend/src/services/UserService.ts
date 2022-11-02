import 'express-async-errors';
import User from '../database/models/Users';
import IUser from '../interfaces/IUser';
import CustomError from '../utils/CustomError';
import validatePassword from '../validation/validatePassword';
import generateToken from '../utils/jwtConfig';
import authMiddleware from '../middlewares/auth';

class UserService {
  constructor(private model = User) { }

  async findOneUser(email: string): Promise<IUser | null> {
    const users = await this.model.findOne({ where: { email } });
    return users;
  }

  async login(email: string, password: string): Promise<string> {
    const users = await this.findOneUser(email);
    if (!users) {
      throw new CustomError('Incorrect email or password', 401);
    }
    const { password: codePass } = users;
    const validateLogin: boolean = await validatePassword(password, codePass);
    if (!validateLogin) {
      throw new CustomError('Incorrect email or password', 401);
    }
    return generateToken(email);
  }

  async validateLogin(authorization: string): Promise<string | null> {
    const user = await authMiddleware.authMiddleware(authorization);
    const dataUser = await
    this.model.findOne({ where: { email: user.data.email }, raw: true }) as User;
    return dataUser.role;
  }
}

export default UserService;
