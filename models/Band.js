const {Sequelize, sequelize} = require('../db');
const {DataTypes} = require('sequelize')

// TODO - define the Band model
const Band = sequelize.define("band", {
    name: DataTypes.STRING,
    genre: DataTypes.STRING
})

module.exports = {
    Band
};