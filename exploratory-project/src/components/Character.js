import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCharacters } from "../context/CharactersContext";

export default function Character() {
  const {character, setCharacter} = useCharacters();

  const { id } = useParams();
  const naviagte = useNavigate();
  //   useEffect(()=>{
  //     console.log(character);
  //   })

  useEffect(() => {
    try {
      async function fetchCharacter() {
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        setCharacter(data);
      }
      fetchCharacter();
    } catch (e) {
      console.error(e);
    }
  }, [id]);

  function handleClick() {
    naviagte("/characters");
  }

  return (
    <>
      <div className="flex items-center place-content-center m-5">
        <img src={character.image} alt={character.name} />
        <div className="pl-7">
          <h2>Name: {character.name}</h2>
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
          <p>Gender: {character.gender}</p>
          {/* <small>{character.origin.name}</small> */}
          {character.origin && <small>Origin: {character.origin.name}</small>}
        </div>
      </div>
      <button className="p-2 m-2 rounded-full bg-sky-200" onClick={handleClick}>
        Go Back
      </button>
    </>
  );
}
