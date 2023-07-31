import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function OnePokemon(){
    const [singlePokemon, setSinglePokemon] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        async function fetchSinglePokemon(){
            const { data } = await axios.get(`/api/pokemons/${id}`);
            setSinglePokemon(data);
        }
        fetchSinglePokemon();
    }, [id]);
    
    return(
        <>
            <h2>{singlePokemon.name}</h2>
            <img src={singlePokemon.imageUrl}></img>
            <p>Type: {singlePokemon.type}</p>
            <p>Trainer: {singlePokemon.trainerName}</p>
            <p>Date caught: {singlePokemon.date}</p>
        </>
    );
}