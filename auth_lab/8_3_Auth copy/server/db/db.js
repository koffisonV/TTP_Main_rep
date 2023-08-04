require("dotenv").config();
const Sequelize = require("sequelize");
const db = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost:5432/User_Test",
  {
    logging: false,
  }
);

module.exports = { db, Sequelize };
