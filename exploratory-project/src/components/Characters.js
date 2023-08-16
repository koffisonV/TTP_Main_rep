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
    <div className="container mx-auto px-4">
      <h1 className="text-5xl font-light text-center pt-40 mb-2">
        List of all Characters
      </h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {characters.map((character) => (
          <li key={character.id}>
            <article className="bg-white p-6 rounded-lg shadow-md">
              <Link to={`/characters/${character.id}`}>
                <img
                  src={character.image}
                  alt={character.name}
                  className="w-full h-auto object-cover rounded"
                />
                <h2 className="mt-4 text-lg font-semibold">{character.name}</h2>
              </Link>
              <p className="mt-2 text-gray-600">{character.species}</p>
            </article>
          </li>
        ))}
      </ul>
      <div className="flex justify-center mt-6">
        <button
          onClick={handlePrevPage}
          className={`px-4 py-2 bg-orange-500 mr-4 rounded hover:bg-orange-700 focus:outline-none ${
            currentPage === 1 ? "cursor-not-allowed" : "cursor-pointer"
          }`}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <button
          onClick={handleNextPage}
          className={`px-4 py-2 bg-orange-500 mr-4 rounded hover:bg-orange-700 focus:outline-none ${
            currentPage === totalPages ? "cursor-not-allowed" : "cursor-pointer"
          }`}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}
