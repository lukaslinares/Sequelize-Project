'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SetTime extends Model {
     static associate({Event, Band, Stage}) {
      SetTime.belongsTo(Event, {foreignKey: 'event_id'});
      SetTime.belongsTo(Band, {foreignKey: 'band_id'});
      SetTime.belongsTo(Stage, {foreignKey: 'stage_id'});
    }
  }

  SetTime.init({
    event_id: DataTypes.INTEGER,
    stage_id: DataTypes.INTEGER,
    band_id: DataTypes.INTEGER,
    start_time: DataTypes.DATE,
    end_time: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'SetTime',
    tableName: 'set_times'
  });
  return SetTime;
};