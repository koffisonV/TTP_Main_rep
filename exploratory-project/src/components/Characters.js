import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCharacters } from "../context/CharactersContext";

export default function Characters() {
  const {
    characters,
    setCharacters,
    currentPage,
    totalPages,
    setCurrentPage,
    setTotalPages,
  } = useCharacters();

  useEffect(() => {
    try {
      async function fetchCharacters() {
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character/?page=${currentPage}`
        );
        setCharacters(data.results);
        setTotalPages(data.info.pages);
      }
      fetchCharacters();
    } catch (e) {
      console.error(e);
    }
  }, [currentPage]);

  function handlePrevPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function handleNextPage() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <>
      <ul>
        <h1 className="text-4xl font-light text-center mt-4 mb-4">
          List of all Characters
        </h1>
        {characters.map((character) => (
          <li key={character.id}>
            <article className="p-3 m-3">
              <Link to={`/characters/${character.id}`}>
                <img src={character.image} alt={character.name} />
                <h2>{character.name}</h2>
              </Link>
              <small>{character.species}</small>
              {/* <p>{character.status}</p>
            <p>{character.gender}</p>
            <small>{character.origin.name}</small> */}
            </article>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={handlePrevPage}>Prev</button>
        <button onClick={handleNextPage}>Next</button>
      </div>
    </>
  );
}
