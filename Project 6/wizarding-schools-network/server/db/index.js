"use strict";

const { db, Sequelize } = require("./db");

// Require your models and make your associations
const Campuses = db.define("campus",{
  name:{
      type: Sequelize.STRING,
      allowNull: false,
      validate:{
          notEmpty: true,
      }
  },
  imageUrl:{
      type: Sequelize.STRING(1000),
      allowNull: false,
      validate:{
          notEmpty: true,
      }
  },
  address:{
      type: Sequelize.STRING,
      allowNull: false,
      validate:{
          notEmpty: true,
      }
  },
  description:{
      type: Sequelize.STRING(1000),
      allowNull: false,
      validate:{
          notEmpty: true,
      }
  }
})

const Students = db.define("student",{
  firstName:{
      type: Sequelize.STRING,
      allowNull: false,
      validate:{
          notEmpty: true,
      }
  },
  lastName:{
      type: Sequelize.STRING,
      allowNull: false,
      validate:{
          notEmpty: true,
      }
  },
  email:{
      type: Sequelize.STRING,
      allowNull: false,
      validate:{
          notEmpty: true,
      }
  },
  imageUrl:{
      type: Sequelize.STRING(1000),
      allowNull: false,
      validate:{
          notEmpty: true,
      }
  },
  gpa:{
      type: Sequelize.FLOAT,
      allowNull: false,
      validate:{
          notEmpty: true,
      }
  },
  campusId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
})

// One to many association
Students.belongsTo(Campuses);
Campuses.hasMany(Students);

module.exports = {
  db,
  Students,
  Campuses,
};
