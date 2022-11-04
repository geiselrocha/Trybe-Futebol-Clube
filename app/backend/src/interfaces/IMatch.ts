interface IMatch {
  homeTeam: number;
  homeTeamGoals: number;
  awayTeam: number;
  awayTeamGoals: number;
  inProgress: boolean;
}

interface IMatchID extends IMatch {
  id: number;
}

interface IMatchService {
  findAll: IMatchID
}

export default IMatch;

export { IMatchID, IMatchService };
