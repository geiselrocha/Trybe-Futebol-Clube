import * as bcrypt from 'bcryptjs';

const validatePassword = (password: string, decodedPass: string) =>
  bcrypt.compare(password, decodedPass);

export default validatePassword;
