import { Router } from 'express';
import userRouter from './UserRouter';
import teamRouter from './TeamRouter';
import matchRouter from './MatchRouter';

const router = Router();

router.use('/login', userRouter);
router.use('/teams', teamRouter);
router.use('/matches', matchRouter);

export default router;
