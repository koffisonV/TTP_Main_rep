import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCampuses } from "../context/CampusesContext";

export default function Campuses(){
  const { campuses, setCampuses } = useCampuses();

  useEffect(() => {
    async function fecthCampuses(){
      const { data } = await axios.get("api/campuses");
      setCampuses(data);
    }
    fecthCampuses();
  }, []);

  async function handleDelete(campusId){
    try {
      await axios.delete(`api/campuses/${campusId}`);
      setCampuses((prevCampuses) =>
        prevCampuses.filter((campus) => campus.id !== campusId)
      );
    } catch (error) {
      console.error("Error deleting campus:", error);
    }
  }; // Bug: Cannot delete campuses that have students associated

  return(
  <>
    <h1>List of All Wizarding Schools</h1>
    <ul >
      {campuses.map((campus) => (
        <li key={campus.id}>
          <img
            src={campus.imageUrl}
            alt={campus.name}
            width={'200px'}
          />
          <Link to={`/wizarding-campuses/${campus.id}`}>
            <p>{campus.name}</p>
          </Link>
          <button onClick={() => handleDelete(campus.id)}>Delete</button>
        </li>
      ))}
    </ul>
  </>
  )
}