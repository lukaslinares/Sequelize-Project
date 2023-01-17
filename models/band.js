'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Band extends Model {
    static associate({MeetGreet, SetTime}) {
      Band.hasMany(MeetGreet, {
        foreignKey: 'band_id'
      });
      Band.hasMany(SetTime, {foreignKey: 'band_id'});
    }
  }

  Band.init({
    name: DataTypes.STRING,
    genre: DataTypes.TEXT,
    available_start_time: DataTypes.DATE,
    end_time: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Band',
    tableName: 'bands'
  });

  return Band;
};