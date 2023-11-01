const {Sequelize, sequelize} = require('../db');
const {DataTypes} = require('sequelize')

// TODO - define the Musician model
const Musician = sequelize.define("musician", {
    name: DataTypes.STRING,
    instrument: DataTypes.STRING
})

module.exports = {
    Musician
};