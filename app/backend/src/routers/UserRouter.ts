import { Router } from 'express';
import UserService from '../services/UserService';
import LoginController from '../controllers/LoginController';
import validateLogin from '../validation/validateLogin';

const userService = new UserService();
const loginController = new LoginController(userService);

const router = Router();

router.post('/', validateLogin, loginController.login);
router.get('/validate', loginController.validate);

export default router;
