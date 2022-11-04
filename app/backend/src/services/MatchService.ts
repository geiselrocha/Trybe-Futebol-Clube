import { IMatchID } from '../interfaces/IMatch';
import CustomError from '../utils/CustomError';
import Teams from '../database/models/Teams';
import Match from '../database/models/Matches';

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
}
export default MatchService;
