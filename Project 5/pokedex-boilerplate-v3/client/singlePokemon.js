import axios from "axios";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function singlePokemon(){
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        async function fetchPokemons(){
            const { data } = await axios.get("/api/pokemons");
            setPokemons(data);
          }
        fetchPokemons();
    }, []);
    
    return(
        <>
        <h2>List of Pokemons</h2>
        <ul>
            {pokemons.map((pokemon) => (
            <li key={pokemon.id}>
                <Link to={`/pokemon/${pokemon.id}`}>{pokemon.name}</Link>
            </li>
            ))}
        </ul>
        </>
    );
};
