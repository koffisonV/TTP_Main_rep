import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function OnePokemon(){
    const [singlePokemon, setSinglePokemon] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchSinglePokemon(){
            const { data } = await axios.get(`/api/pokemons/${id}`);
            setSinglePokemon(data);
        }
        fetchSinglePokemon();
    }, [id]);

    function handleClick(){
        navigate(-1);
    }
    
    return(
        <>
            <h2>{singlePokemon.name}</h2>
            <img src={singlePokemon.imageUrl}></img>
            <p>Type: {singlePokemon.type}</p>
            <p>Trainer: {singlePokemon.trainerName}</p>
            <p>Date caught: {singlePokemon.date}</p>
            <button onClick={handleClick}>Go back</button>
        </>
    );
}