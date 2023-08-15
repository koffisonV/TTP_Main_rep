import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Character = () => {
  const [character, setCharacter] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    try {
      async function fetchCharacter() {
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        setCharacter(data.results);
      }
      fetchCharacter();
    } catch (e) {
      console.error(e);
    }
  }, [id]);

  return (
    <>
      <img src={character.image} alt={character.name} />
      <h2>{character.name}</h2>
      <p>{character.status}</p>
      <p>{character.species}</p>
      <small>{character.gender}</small>
      {/* <small>{character.origin.name}</small> */}
    </>
  );
};

export default Character;
