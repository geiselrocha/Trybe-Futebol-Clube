import { Router } from 'express';
import MatchService from '../services/MatchService';
import MatchController from '../controllers/MatchController';

const matchService = new MatchService();
const matchController = new MatchController(matchService);

const router = Router();

router.get('/', matchController.findByProgress);
router.get('/', matchController.getAll);
router.get('/:id', matchController.findById);
router.post('/', matchController.create);
router.patch('/:id/finish', matchController.finishMatch);
router.patch('/:id', matchController.updateMatch);

export default router;
