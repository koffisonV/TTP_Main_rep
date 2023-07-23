const { Sequelize, DataTypes } = require("sequelize");
const db = require("../db");
// const Pokemon = require("./Pokemon");

const Trainer = db.define("Trainer", {
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
});

// Trainer.hasMany(Pokemon);
module.exports = Trainer;