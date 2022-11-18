const leaderBoardQuery = `
SELECT name,
SUM(totalPoints) AS totalPoints,
SUM(totalGames) AS totalGames, 
SUM(totalVictories) AS totalVictories,
SUM(totalDraws) AS totalDraws,
SUM(totalLosses) AS totalLosses,
SUM(goalsFavor) AS goalsFavor,
SUM(goalsOwn) AS goalsOwn,
SUM(goalsBalance) AS goalsBalance,

FORMAT((SUM(totalPoints) / (SUM(totalGames) * 3)) * 100, 2) AS efficiency

FROM ((SELECT teams.team_name AS name,
SUM(CASE 
WHEN home_team_goals > away_team_goals THEN 3
WHEN home_team_goals = away_team_goals THEN 1 ELSE 0 END) AS totalPoints,

COUNT(home_team) AS totalGames,
SUM(CASE WHEN home_team_goals > away_team_goals THEN 1 ELSE 0 END) AS totalVictories,
SUM(CASE WHEN home_team_goals = away_team_goals THEN 1 ELSE 0 END) AS totalDraws,
SUM(CASE WHEN home_team_goals < away_team_goals THEN 1 ELSE 0 END) AS totalLosses,
SUM(home_team_goals) AS goalsFavor,
SUM(away_team_goals) AS goalsOwn,
SUM(home_team_goals-away_team_goals) AS goalsBalance,

FORMAT(((SUM(CASE 
WHEN home_team_goals > away_team_goals THEN 3
WHEN home_team_goals = away_team_goals THEN 1 ELSE 0 END)
/ (COUNT(home_team) * 3)) * 100), 2) AS efficiency

FROM TRYBE_FUTEBOL_CLUBE.matches AS matches
INNER JOIN TRYBE_FUTEBOL_CLUBE.teams AS teams
ON teams.id = matches.home_team
WHERE matches.in_progress <> 1
GROUP BY teams.team_name)

UNION

(SELECT teams.team_name AS name,
SUM(CASE 
WHEN home_team_goals < away_team_goals THEN 3
WHEN home_team_goals = away_team_goals THEN 1 ELSE 0 END) AS totalPoints,

COUNT(home_team) AS totalGames,
SUM(CASE WHEN home_team_goals < away_team_goals THEN 1 ELSE 0 END) AS totalVictories,
SUM(CASE WHEN home_team_goals = away_team_goals THEN 1 ELSE 0 END) AS totalDraws,
SUM(CASE WHEN home_team_goals > away_team_goals THEN 1 ELSE 0 END) AS totalLosses,
SUM(away_team_goals) AS goalsFavor,
SUM(home_team_goals) AS goalsOwn,
SUM(away_team_goals-home_team_goals) AS goalsBalance,

FORMAT(((SUM(CASE 
WHEN home_team_goals < away_team_goals THEN 3
WHEN home_team_goals = away_team_goals THEN 1 ELSE 0 END)
/ (COUNT(away_team) * 3)) * 100), 2) AS efficiency

FROM TRYBE_FUTEBOL_CLUBE.matches AS matches
INNER JOIN TRYBE_FUTEBOL_CLUBE.teams AS teams
ON teams.id = matches.away_team
WHERE matches.in_progress <> 1
GROUP BY teams.team_name)) AS bothteams
GROUP BY name
ORDER BY 
  totalPoints DESC, 
  totalVictories DESC, 
  goalsBalance DESC, 
  goalsFavor DESC, 
  goalsOwn ASC;`;

const leaderBoardHomeQuery = `
SELECT teams.team_name AS name,
SUM(CASE
WHEN home_team_goals > away_team_goals THEN 3
WHEN home_team_goals = away_team_goals THEN 1 ELSE 0 END) AS totalPoints,

COUNT(home_team) AS totalGames,
SUM(CASE WHEN home_team_goals > away_team_goals THEN 1 ELSE 0 END) AS totalVictories,
SUM(CASE WHEN home_team_goals = away_team_goals THEN 1 ELSE 0 END) AS totalDraws,
SUM(CASE WHEN home_team_goals < away_team_goals THEN 1 ELSE 0 END) AS totalLosses,
SUM(home_team_goals) AS goalsFavor, SUM(away_team_goals) AS goalsOwn,
SUM(home_team_goals - away_team_goals) AS goalsBalance,

FORMAT(((SUM(CASE 
WHEN home_team_goals > away_team_goals THEN 3
WHEN home_team_goals = away_team_goals THEN 1 ELSE 0 END)
/ (COUNT(home_team) * 3)) * 100), 2) AS efficiency

FROM TRYBE_FUTEBOL_CLUBE.matches AS matches
INNER JOIN TRYBE_FUTEBOL_CLUBE.teams AS teams
ON teams.id = matches.home_team
WHERE matches.in_progress <> 1
GROUP BY teams.team_name
ORDER BY 
  totalPoints DESC, 
  totalVictories DESC, 
  goalsBalance DESC, 
  goalsFavor DESC, 
  goalsOwn ASC;`;

const leaderBoardAwayQuery = `
SELECT teams.team_name AS name,
SUM(CASE 
WHEN home_team_goals < away_team_goals THEN 3
WHEN home_team_goals = away_team_goals THEN 1 ELSE 0 END) AS totalPoints,

COUNT(home_team) AS totalGames, 
SUM(CASE WHEN home_team_goals < away_team_goals THEN 1 ELSE 0 END) AS totalVictories,
SUM(CASE WHEN home_team_goals = away_team_goals THEN 1 ELSE 0 END) AS totalDraws,
SUM(CASE WHEN home_team_goals > away_team_goals THEN 1 ELSE 0 END) AS totalLosses,
SUM(away_team_goals) AS goalsFavor,
SUM(home_team_goals) AS goalsOwn,
SUM(away_team_goals - home_team_goals) AS goalsBalance,

FORMAT(((SUM(CASE 
WHEN home_team_goals < away_team_goals THEN 3
WHEN home_team_goals = away_team_goals THEN 1 ELSE 0 END)
/ (COUNT(away_team) * 3)) * 100), 2) AS efficiency

FROM TRYBE_FUTEBOL_CLUBE.matches AS matches
INNER JOIN TRYBE_FUTEBOL_CLUBE.teams AS teams
ON teams.id = matches.away_team
WHERE matches.in_progress <> 1
GROUP BY teams.team_name
ORDER BY 
  totalPoints DESC, 
  totalVictories DESC, 
  goalsBalance DESC, 
  goalsFavor DESC, 
  goalsOwn ASC;`;

export default leaderBoardQuery;

export { leaderBoardHomeQuery, leaderBoardAwayQuery };
