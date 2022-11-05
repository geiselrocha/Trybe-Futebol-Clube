import 'express-async-errors';
import IMatch, { IMatchID } from '../interfaces/IMatch';
import CustomError from '../utils/CustomError';
import Teams from '../database/models/Teams';
import Match from '../database/models/Matches';
import authMiddleware from '../middlewares/auth';

class MatchService {
  constructor(private model = Match) { }

  async getAll(): Promise<IMatchID[]> {
    const matches = await this.model.findAll({
      include: [
        { model: Teams, as: 'teamHome', attributes: ['teamName'] },
        { model: Teams, as: 'teamAway', attributes: ['teamName'] },
      ],
    });
    return matches;
  }

  async findById(id: number): Promise<IMatchID> {
    const matches = await this.model.findOne({
      where: { id },
      include: [
        { model: Teams, as: 'teamHome', attributes: ['teamName'] },
        { model: Teams, as: 'teamAway', attributes: ['teamName'] },
      ],
    });
    if (!matches) {
      throw new CustomError('Match not Found', 404);
    }
    return matches;
  }

  async findByProgress(inProgress: boolean): Promise<IMatchID[]> {
    const matches = await this.model.findAll({
      where: { inProgress },
      include: [
        { model: Teams, as: 'teamHome', attributes: ['teamName'] },
        { model: Teams, as: 'teamAway', attributes: ['teamName'] },
      ],
    });
    if (!matches) {
      throw new CustomError('Match not Found', 404);
    }
    return matches;
  }

  async create(match: IMatch, authorization: string): Promise<IMatchID> {
    await authMiddleware.authMiddleware(authorization);
    const { awayTeam, homeTeam } = match;
    if (awayTeam === homeTeam) {
      throw new CustomError('It is not possible to create a match with two equal teams', 422);
    }
    const existAwayTeam = await Teams.findOne({ where: { id: awayTeam } });
    const existHomeTeam = await Teams.findOne({ where: { id: homeTeam } });
    if (!existAwayTeam || !existHomeTeam) {
      throw new CustomError('There is no team with such id!', 404);
    }
    const dataValues = await this.model.create(match);
    return dataValues;
  }
}
export default MatchService;
