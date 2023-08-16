import axios from "axios";
import React, { useEffect } from "react";
import { useLocations } from "../context/LocationsContext";

export default function Locations() {
  const {
    locations,
    setLocations,
    currentPage,
    setCurrentPage,
    totalPages,
    setTotalPages,
  } = useLocations();

  useEffect(() => {
    try {
      async function fetchLocations() {
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/location/?page=${currentPage}`
        );
        setLocations(data.results);
        setTotalPages(data.info.pages);
      }
      fetchLocations();
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
        <h1>Locations</h1>
        {locations.map((location) => (
          <li key={location.id}>
            <h2>{location.name}</h2>
            <p>{location.type}</p>
            <p>{location.dimension}</p>
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
