interface ILeaderBoard {
  name: string,
  totalPoints: number,
  totalGames: number,
  totalVictories: number,
  totalDraws: number,
  totalLosses: number,
  goalsFavor: number,
  goalsOwn: number,
  goalsBalance: number,
  efficiency: string
}

interface ILeaderBoardID extends ILeaderBoard {
  id: number;
}

interface ILeaderBoardService {
  findAll: ILeaderBoardID
}

export default ILeaderBoard;

export { ILeaderBoardID, ILeaderBoardService };
