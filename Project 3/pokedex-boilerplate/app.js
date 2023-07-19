const express = require("express");
const morgan = require("morgan");
const pokeBank = require("./pokeBank"); // imported pokeBank
const app = express();

app.use(express.static("public"));
app.use(morgan("dev"));

app.get("/", function (req, res) {
  const pokemonList = pokeBank.list();
  let html = `
  <head>
    <link rel="stylesheet" href="/style.css">
  </head>
  <div class="container">
    <img class="logo" src="/logo.png" alt="Logo" style="max-width: 200px;">
    <h1>Pokedex</h1>
    <hr>
  </div>`;
  pokemonList.forEach((pokemon) => {
    html += `
      <div class="container">
        <div class="pokemon_container">
          <p><a href="/pokemon/${pokemon.id}">${pokemon.name}</a></p>
          <img src="${pokemon.image}" alt="${pokemon.name}" style="max-width: 180px;">
          <p>(Trained by: ${pokemon.trainer})</p>
          <p>Type: ${pokemon.trainer}</p>
        </div>
      </div>
    `;
  });
  res.send(html);
})

app.get("/pokemon/:id", (req, res) => {
  const pokemon = pokeBank.find(req.params.id);
  if (!pokemon) {
    res.status(404).send("Pokemon not found");
  } else {
    let html = `
    <head>
      <link rel="stylesheet" href="/style.css">
    </head>
    <div class="container">
      <a href="/"><img class="logo" src="/logo.png" alt="Logo" style="max-width: 200px;"></a>
      <h1>Pokedex</h1>
      <div class="pokemon_container">
        <h2>${pokemon.name}</h2>
        <img src="${pokemon.image}" alt="${pokemon.name}" style="max-width: 200px;">
        <p>Type: ${pokemon.type}</p>
        <p>Trainer: ${pokemon.trainer}</p>
        <p>Date: ${pokemon.date}</p>
      </div>
      <a href="/" style="display:block; margin-bottom: 20px;">Go Back</a>
    </div>
    `;
    res.send(html);
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
