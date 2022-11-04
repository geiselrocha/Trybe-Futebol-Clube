import 'express-async-errors';
import { Request, Response } from 'express';
import MatchService from '../services/MatchService';

class MatchControler {
  service: MatchService;
  constructor(service: MatchService) {
    this.service = service;
  }

  getAll = async (req: Request, res: Response) => {
    const matches = await this.service.getAll();
    res.status(200).json(matches);
  };

  findById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const matches = await this.service.findById(+id);
    res.status(200).json(matches);
  };
}

export default MatchControler;
