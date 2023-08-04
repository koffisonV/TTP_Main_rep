// =================================================
//              Ignore this file (ignore models folder - it's not being used)
// =================================================

require("dotenv").config();
const Sequelize = require("sequelize");
const db = require("../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const SALT_ROUNDS = 5;

// User Model Definition
const User = db.define("user", {
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
  },
});

/**
 * instanceMethods
 */

// instance method - custom function
User.prototype.generateToken = function () {
  return jwt.sign({ id: this.id }, process.env.JWT);
};

// sequelize hook - when a new user is created, all the code below is doing, it is we're hasing (encrypting) our password before it goes to our database. We do this so we don't see the users actual password in the table
User.beforeCreate(async (user) => {
  user.password = await bcrypt.hash(user.password, SALT_ROUNDS);
});

module.exports = User;