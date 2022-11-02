import * as jwt from 'jsonwebtoken';

const generateToken = (email: string) => {
  const jwtConfig = { expiresIn: '24h', algorithm: 'HS256' };
  const token = jwt.sign(
    { data: { email } },
    process.env.JWT_SECRET || 'jwt_secret' as jwt.Secret,
    jwtConfig as jwt.SignOptions,
  );
  return token;
};

export default generateToken;
