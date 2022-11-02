import { Router } from 'express';
import userRouter from './UserRouter';

const router = Router();

router.use('/login', userRouter);

export default router;
