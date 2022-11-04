import { ITeamID } from '../interfaces/ITeam';
import CustomError from '../utils/CustomError';
import Team from '../database/models/Teams';

class TeamService {
  constructor(private model = Team) { }

  async getAll(): Promise<ITeamID[]> {
    const teams = await this.model.findAll();
    return teams;
  }

  async findById(id: number): Promise<ITeamID> {
    const teams = await this.model.findByPk(id);
    if (!teams) {
      throw new CustomError('Team not Found', 404);
    }
    return teams;
  }
}

export default TeamService;
