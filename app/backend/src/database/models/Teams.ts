import { Model, INTEGER } from 'sequelize';
import db from '.';

class Teams extends Model {
  id!: number;
  teamName!: string;
}

Teams.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  teamName: {
    allowNull: false,
    type: INTEGER,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'team',
  timestamps: false,
});

export default Teams;
