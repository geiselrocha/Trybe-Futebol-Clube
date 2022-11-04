import { Router } from 'express';
import TeamService from '../services/TeamService';
import TeamControler from '../controllers/TeamController';

const teamService = new TeamService();
const teamControler = new TeamControler(teamService);

const router = Router();

router.get('/', teamControler.findAll);
router.get('/:id', teamControler.findById);

export default router;
