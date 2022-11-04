import { Request, Response } from 'express';
import TeamService from '../services/TeamService';
import 'express-async-errors';

class TeamControler {
  service: TeamService;
  constructor(service: TeamService) {
    this.service = service;
  }

  getAll = async (_req: Request, res: Response) => {
    const teams = await this.service.getAll();
    res.status(200).json(teams);
  };

  findById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const teams = await this.service.findById(+id);
    res.status(200).json(teams);
  };
}

export default TeamControler;
