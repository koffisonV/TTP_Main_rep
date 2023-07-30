import axios from "axios";
import React, { useState, useEffect } from "react";

export default function OnePokemon(){
    const [singlePokemon, setSinglePokemon] = useState([]);

    useEffect(() => {
        async function fetchSinglePokemon(){
            const { data } = await axios.get(`/api/pokemons/${id}`);
            setSinglePokemon(data);
        }
        fetchSinglePokemon();
    }, []);
    
    return(
        <>
            <h2>{singlePokemon.name}</h2>
        </>
    );
}
