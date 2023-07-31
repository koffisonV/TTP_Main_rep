const { db, Sequelize } = require("./server/db/db")
const { Trainer, Pokemon } = require("./server/db/index")

const seed = async () => {
  await db.sync({ force: true });
  // create some trainer
  const ash = await Trainer.create({
    firstname:"Ash",
    lastName:"Ketchum",
    team:"Electric"
  });
  const misty = await Trainer.create({
    firstname:"Misty",
    lastName:"Waterflower",
    team:"Electric"
  });
  const brock = await Trainer.create({
    firstname:"Brock",
    lastName:"Harrison",
    team:"Fire"
  });

  // create some pokemon
  const pikachu = await Pokemon.create({
    name:"Pikachu",
    type:"Electric",
    trainerName:"Ash",
    date: new Date(Date.now()),
    trainerId: ash.id
  });
  const charizard = await Pokemon.create({
    name:"Charizard",
    type:"Fire/Flying",
    trainerName:"Ash",
    date: new Date(Date.now()),
    trainerId: ash.id
  });
  const jigglypuff = await Pokemon.create({
    name:"Jigglypuff",
    type:"Electric",
    trainerName:"Misty",
    date: new Date(Date.now()),
    trainerId: misty.id
  });


  db.close();
  console.log(`
    Seeding successful! Pokedex is ready.
    `);
};

seed().catch((err) => {
  db.close();
  console.log(`

    Error seeding:

    ${err.message}

    ${err.stack}

  `);
});
