import { Router } from 'express';
import MatchService from '../services/MatchService';
import MatchControler from '../controllers/MatchController';

const matchService = new MatchService();
const matchControler = new MatchControler(matchService);

const router = Router();

router.get('/', matchControler.getAll);
router.get('/:id', matchControler.findById);
router.get('/', matchControler.findByProgress);
router.post('/', matchControler.create);

export default router;
