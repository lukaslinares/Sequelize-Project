'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
     class MeetGreet extends Model {
      static associate({ Event, Band }) {
        // band
        MeetGreet.belongsTo(Event, {
          foreignKey: 'event_id'
        });
        MeetGreet.belongsTo(Band, {
          foreignKey: 'band_id'
        });
      }
    }   

  MeetGreet.init({
    event_id: DataTypes.INTEGER,
    band_id: DataTypes.INTEGER,
    meet_start_time: DataTypes.DATE,
    meet_end_time: DataTypes.DATE,
    meet_greet_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MeetGreet',
    tableName: 'meet_greets'
  });
  return MeetGreet;
};