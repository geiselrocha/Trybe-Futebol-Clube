import { Router } from 'express';
import userRouter from './UserRouter';
import teamRouter from './TeamRouter';

const router = Router();

router.use('/login', userRouter);
router.use('/teams', teamRouter);

export default router;
