const { Sequelize, sequelize } = require('../db');
const { DataTypes } = require("sequelize");

const Song = sequelize.define("song", {
    title: DataTypes.STRING,
    year: DataTypes.INTEGER,
    length: DataTypes.NUMBER
});

module.exports = {
    Song
};
