import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import OnePokemon from "./singlePokemon";

const Main = () => {
  const [pokemons, setPokemons] = useState([]);
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    async function fetchPokemons(){
      const { data } = await axios.get("/api/pokemons");
      setPokemons(data);
    }

    async function fetchTrainers(){
      const { data } = await axios.get("/api/trainers");
      setTrainers(data);
    }

    fetchPokemons();
    fetchTrainers();
  }, []);

  return (
    <div id="main">
      <h1>Pokedex</h1>
      <h2>List of Pokemons</h2>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>
            <Link to={`/api/pokemons/${pokemon.id}`}>{pokemon.name}</Link>
            {/* <a href={`api/pokemons/${pokemon.id}`}>{pokemon.name}</a> */}
          </li>
        ))}
      </ul>
      <h2>List of Trainers</h2>
      <ul>
        {trainers.map((trainer) =>(
        <li>
            <strong>{trainer.firstname}</strong> | {trainer.imageUrl}       
        </li>
        ))}
      </ul>
    </div>
  );
};

export default Main;
