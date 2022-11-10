import Sequelize from '../database/models';
import ILeaderBoard from '../interfaces/ILeaderBoard';
import leaderBoardQuery, { leaderBoardHomeQuery, leaderBoardAwayQuery } from '../utils/dbQuerys';

class LeaderBoardService {
  constructor(private model = Sequelize) { }

  async getAllHome(): Promise<ILeaderBoard[]> {
    const [result] = await this.model.query(leaderBoardHomeQuery) as ILeaderBoard[][];
    return result;
  }

  async getAllAway(): Promise<ILeaderBoard[]> {
    const [result] = await this.model.query(leaderBoardAwayQuery) as ILeaderBoard[][];
    return result;
  }

  async getAll(): Promise<ILeaderBoard[]> {
    const [result] = await this.model.query(leaderBoardQuery) as ILeaderBoard[][];
    return result;
  }
}

export default LeaderBoardService;
