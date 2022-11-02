import * as jwt from 'jsonwebtoken';
import { Secret, JwtPayload } from 'jsonwebtoken';
import CustomError from '../utils/CustomError';

const authMiddleware = async (authorization: string) => {
  try {
    const token = jwt.verify(
      authorization as string,
      process.env.JWT_SECRET || 'jwt_secret' as Secret,
    ) as JwtPayload;
    return token;
  } catch (error) {
    throw new CustomError('Token must be a valid token', 401);
  }
};

export default { authMiddleware };
