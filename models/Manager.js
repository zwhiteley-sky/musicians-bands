const {Sequelize, sequelize} = require('../db');
const {DataTypes} = require('sequelize')


const Manager = sequelize.define("manager", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    salary: DataTypes.INTEGER,
    dateHired: DataTypes.STRING
})

module.exports = {
    Manager
};