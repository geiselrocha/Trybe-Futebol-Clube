interface ITeam {
  teamName: string;
}

interface ITeamID extends ITeam {
  id: number;
}

export default ITeam;

export { ITeamID };
