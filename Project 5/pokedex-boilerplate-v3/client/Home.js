import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SinglePokemon from "./singlePokemon";
import SingleTrainer from "./singleTrainer"

export default function Home(){
    // const [pokemons, setPokemons] = useState([]);
    //   const [trainers, setTrainers] = useState([]);

    // useEffect(() => {
    // async function fetchPokemons(){
    //   const { data } = await axios.get("/api/pokemons");
    //   setPokemons(data);
    // }

    // async function fetchTrainers(){
    //     const { data } = await axios.get("/api/trainers");
    //     setTrainers(data);
    // }

    // fetchPokemons();
    // fetchTrainers();
    // }, []);

    return (
    <div id="main">
        <h1>Pokedex</h1>
        <SinglePokemon />
        <SingleTrainer />
    </div>
    );
};
