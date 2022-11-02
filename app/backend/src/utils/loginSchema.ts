import * as Joi from 'joi';
import { IUserID } from '../interfaces/IUser';

const mustBeFilled = 'All fields must be filled';

const loginSchema = (body: IUserID) => Joi.object({
  email: Joi.string().min(6).required().messages({
    'string.empty': mustBeFilled,
    'any.required': mustBeFilled,
  }),
  password: Joi.string().min(8).required().messages({
    'string.empty': mustBeFilled,
    'any.required': mustBeFilled,
  }),
}).validate(body);

export default loginSchema;
