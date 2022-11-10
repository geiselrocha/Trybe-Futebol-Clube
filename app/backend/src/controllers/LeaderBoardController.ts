import 'express-async-errors';
import { Request, Response } from 'express';
import LeaderBoardService from '../services/LeaderBoardService';

class LeaderBoardController {
  service: LeaderBoardService;
  constructor(service: LeaderBoardService) {
    this.service = service;
  }

  getAllHome = async (_req: Request, res: Response) => {
    const teams = await this.service.getAllHome();
    res.status(200).json(teams);
  };

  getAllAway = async (_req: Request, res: Response) => {
    const teams = await this.service.getAllAway();
    res.status(200).json(teams);
  };

  getAll = async (_req: Request, res: Response) => {
    const teams = await this.service.getAll();
    res.status(200).json(teams);
  };
}

export default LeaderBoardController;
