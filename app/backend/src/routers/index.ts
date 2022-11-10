import { Router } from 'express';
import userRouter from './UserRouter';
import teamRouter from './TeamRouter';
import matchRouter from './MatchRouter';
import leaderBoardRouter from './LeaderBoardRouter';

const router = Router();

router.use('/login', userRouter);
router.use('/teams', teamRouter);
router.use('/matches', matchRouter);
router.use('/leaderboard', leaderBoardRouter);

export default router;
