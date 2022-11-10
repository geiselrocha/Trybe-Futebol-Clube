interface ITeam {
  teamName: string;
}

interface ITeamID extends ITeam {
  id: number;
}

interface ITeamService {
  findAll: ITeamID
}

export default ITeam;

export { ITeamID, ITeamService };
