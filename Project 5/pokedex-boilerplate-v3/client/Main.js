import axios from "axios";
import React, { useEffect, useState } from "react";

const Main = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function fetchPokemons(){
      const { data } = await axios.get("/api/pokemons");
      setPokemons(data);
    }
    fetchPokemons();
  }, []);

  return (
    <div id="main">
      <h1>Pokedex</h1>
      <ul>
        {pokemons.map((pokemon) => {
          <li>
            {pokemon.name}
            {pokemon.imageUrl}
          </li>
        })}
      </ul>
    </div>
  );
};

export default Main;
