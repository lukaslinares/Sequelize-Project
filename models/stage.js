'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stage extends Model {
    static associate({ Event, StageEvent, SetTime }) {
      // events
      Stage.belongsToMany(Event, {
        through: StageEvent
      });
      Stage.hasMany(SetTime, {foreignKey: 'stage_id'});
    }
  }
  
  Stage.init({
    stage_id: DataTypes.INTEGER,
    stage_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Stage',
    tableName: 'stages'
  });
  return Stage;
};