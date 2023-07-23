const express = require("express");
const morgan = require("morgan");
const { blue, cyan, green, red } = require("chalk");
const pokeBank = require("./pokeBank");
const pokeList = require("./views/pokeList");
const pokeDetails = require("./views/pokeDetails");
const Pokemon = require("./models/Pokemon");
const Trainer = require("./models/Trainer");

// Association
Trainer.hasMany(Pokemon);

const db = require("./db");
const app = express();

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

(async () => {
  try {
    await db.sync({ force: true });
    console.log(green("Models synced with database"));
  } catch (error) {
    console.error(error);
  }
})();

// Pokemons routes
app.get("/pokemon", async (req, res) => {
  try{
    const pokemon = await Pokemon.findAll();
    res.json(pokemon);
  } catch(error){
    console.error(error);
  }
});

app.get("/pokemon/:id", async (req, res) => {
  const pokemon = await Pokemon.findByPk(req.params.id);
  if (pokemon) {
    res.json(pokemon);
  } else {
    res.status(404).send("Pokemon not found");
  }
});

app.post("/pokemon", async (req, res) => {
  try {
    const newPokemon = await Pokemon.create(req.body);
    res.json(newPokemon);
  } catch(error) {
    res.status(500).json({ error: "Unable to create a new Pokemon" });
    console.error(error);
  }
});

app.put("/pokemon/:id", async (req, res) => {
  const pokemon = await Pokemon.findByPk(req.params.id);
  if (pokemon) {
    await pokemon.update(req.body);
    res.json(pokemon);
  } else {
    res.status(404).send("Pokemon not found");
  }
});

app.delete("/pokemon/:id", async (req, res) => {
  const pokemon = await Pokemon.findByPk(req.params.id);
  if (pokemon) {
    await pokemon.destroy();
    res.status(204).send();
  } else {
    res.status(404).send("Pokemon not found");
  }
});

// Trainers routes
app.get("/trainer", async (req, res) => {
  try{
    const trainer = await Trainer.findAll();
    res.json(trainer);
  } catch(error){
    console.error(error);
  }
});

app.get("/trainer/:id", async (req, res) => {
  const trainer = await Trainer.findByPk(req.params.id);
  if (trainer) {
    res.json(trainer);
  } else {
    res.status(404).send("Trainer not found");
  }
});

app.post("/trainer", async (req, res) => {
  try{
    const newTrainer = await Trainer.create(req.body);
    res.json(newTrainer);
  } catch(error){
    res.status(500).json({ error: "Unable to create a new Trainer" });
    console.error(error);
  }
});

app.put("/trainer/:id", async (req, res) => {
  const trainer = await Trainer.findByPk(req.params.id);
  if (trainer) {
    await trainer.update(req.body);
    res.json(trainer);
  } else {
    res.status(404).send("Trainer not found");
  }
});

app.delete("/trainer/:id", async (req, res) => {
  const trainer = await Trainer.findByPk(req.params.id);
  if (trainer) {
    await trainer.destroy();
    res.status(204).send();
  } else {
    res.status(404).send("Trainer not found");
  }
});

// app.get("/", (req, res) => {
//   const pokemon = pokeBank.list();
//   res.send(pokeList(pokemon));
// });

// app.get("/pokemon/:id", (req, res) => {
//   const pokemon = pokeBank.find(req.params.id);
//   res.send(pokeDetails(pokemon));
// });

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
