import { Router } from 'express';
import LeaderBoardService from '../services/LeaderBoardService';
import LeaderBoardController from '../controllers/LeaderBoardController';

const leaderBoardService = new LeaderBoardService();
const leaderBoardController = new LeaderBoardController(leaderBoardService);

const router = Router();

router.get('/home', leaderBoardController.getAllHome);
router.get('/away', leaderBoardController.getAllAway);
router.get('/', leaderBoardController.getAll);

export default router;
