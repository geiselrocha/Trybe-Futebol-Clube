module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('matches', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			home_team: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: "teams",
					key: "id"
				},
				onUpdate: "CASCADE",
				onDelete: "CASCADE",
			},
			home_team_goals: {
				type: Sequelize.INTEGER
			},
			away_team: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: "teams",
					key: "id"
				},
				onUpdate: "CASCADE",
				onDelete: "CASCADE",
			},
			away_team_goals: {
				type: Sequelize.INTEGER
			},
			in_progress: {
				type: Sequelize.BOOLEAN
			}
		})
	},

	down: async (queryInterface, _Sequelize) => {
		await queryInterface.dropTable('matches')
	}
};
