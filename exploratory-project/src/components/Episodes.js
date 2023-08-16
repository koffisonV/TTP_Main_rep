import axios from "axios";
import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import { useEpisodes } from "../context/EpisodesContext";

export default function Episodes() {
  const {
    episodes,
    setEpisodes,
    currentPage,
    setCurrentPage,
    totalPages,
    setTotalPages,
  } = useEpisodes();

  useEffect(() => {
    try {
      async function fetchEpisodes() {
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/episode/?page=${currentPage}`
        );
        setEpisodes(data.results);
        setTotalPages(data.info.pages);
      }
      fetchEpisodes();
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
        <h1>Episodes</h1>
        {episodes.map((episode) => (
          <li key={episode.id}>
            {/* <Link to={`/characters/${character.id}`}> */}
            <h2>{episode.name}</h2>
            <p>{episode.air_date}</p>
            <p>{episode.episode}</p>
            {/* </Link> */}
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
