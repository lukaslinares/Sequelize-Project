'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    static associate({ MeetGreet, Stage, StageEvent, SetTime}) {
      Event.hasMany(MeetGreet, {
        foreignKey: 'event_id'
      });
      Event.belongsToMany(Stage, {
        through: 'StageEvent'
      });
      Event.hasMany(SetTime, {foreignKey: 'event_id'});
    }
  }
  
  Event.init({
    event_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    date: DataTypes.DATE,
    start_time: DataTypes.DATE,
    end_time: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Event',
    tableName: 'events'
  });
  return Event;
};