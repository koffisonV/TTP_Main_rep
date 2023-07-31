const { db, Sequelize } = require("./db");

// require each of your models
const Pokemon = db.define("pokemon",{
  name:{
    type:Sequelize.STRING,
    allowNull: false,
    validate:{
      notEmpty: true,
    },
  },
  type:{
    type:Sequelize.STRING,
    allowNull: false,
    validate:{
      notEmpty: true,
    },
  },
  trainerName:{
    type: Sequelize.STRING,
    allowNull:false,
    validate:{
      notEmpty:true,
    },
  },
  date:{
    type:Sequelize.DATE,
    allowNull:false,
    validate:{
      notEmpty: true,
    }
  },
  imageUrl:{
    type: Sequelize.STRING,
    defaultValue: "https://listfist.com/wp-content/uploads/pokemons.jpg"
  },
})

// create some trainers
const Trainer = db.define("trainer",{
  firstname:{
    type:Sequelize.STRING,
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
    },
  },
  team:{
    type:Sequelize.STRING,
    allowNull: false,
    validate:{
      notEmpty: true,
    },
  },
  imageUrl:{
    type: Sequelize.STRING,
    defaultValue: "https://fictionhorizon.com/wp-content/uploads/2022/12/strongest-trainers.jpg"
  },
})

// place your associations here!
// One to many
Pokemon.belongsTo(Trainer);
Trainer.hasMany(Pokemon);

// export your models below
module.exports = {
  db,
  Pokemon,
  Trainer,
};
