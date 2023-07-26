import axios from "axios";
import React, { useEffect, useState } from "react";

export default function StarWarsCharacters(){
    const [characters, setcharacters] = useState([]);
    useEffect(()=>{
        const fecthCharacters = async ()=>{
            try{
                const response = await axios.get("https://swapi.dev/api/people/");
                setcharacters(response.data.results);
            }catch (error){
                console.error("Error fecthing data", error);
            }
        };
        fecthCharacters();
    }, []);
    return(
        <div>
            <h1>Star Wars Characters</h1>
            <ul>
                {characters.map((character) => (
                    <li key={character.name}>
                        <h2>{character.name}</h2>
                        <p>Gender: {character.gender}</p>
                        <p>Birth Year: {character.birth_year}</p>
                        <p>Height: {character.height}</p>
                        <p>Homeworld: {character.homeworld}</p>
                        <p>Species: {character.species[0]}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};