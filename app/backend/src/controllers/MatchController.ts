import 'express-async-errors';
import { Request, Response, NextFunction } from 'express';
import MatchService from '../services/MatchService';
import CustomError from '../utils/CustomError';

class MatchController {
  service: MatchService;
  constructor(service: MatchService) {
    this.service = service;
  }

  getAll = async (_req: Request, res: Response) => {
    const matches = await this.service.getAll();
    res.status(200).json(matches);
  };

  findById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const matches = await this.service.findById(+id);
    res.status(200).json(matches);
  };

  findByProgress = async (req: Request, res: Response, next: NextFunction) => {
    const matchesByProgress = req.query.inProgress as string | undefined;
    if (!matchesByProgress) {
      return next();
    }
    const matches = await this.service.findByProgress(matchesByProgress === 'true');
    res.status(200).json(matches);
  };

  create = async (req: Request, res: Response) => {
    const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = req.body;
    const { authorization } = req.headers;
    if (!authorization) {
      throw new CustomError('Token must be a valid token', 404);
    }
    const match = { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress: true };
    const matches = await this.service.create(match, authorization);
    res.status(201).json(matches);
  };

  finishMatch = async (req: Request, res: Response) => {
    const { id } = req.params;
    await this.service.finishMatch(+id);
    res.status(200).json({ message: 'Finished' });
  };

  updateMatch = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;
    await this.service.updateMatch(+id, homeTeamGoals, awayTeamGoals);
    res.status(200).json({ message: 'Finished' });
  };
}

export default MatchController;
