import { Router } from 'express';
import TeamService from '../services/TeamService';
import TeamController from '../controllers/TeamController';

const teamService = new TeamService();
const teamController = new TeamController(teamService);

const router = Router();

router.get('/', teamController.getAll);
router.get('/:id', teamController.findById);

export default router;
