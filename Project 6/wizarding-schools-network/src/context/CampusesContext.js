import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const CampusesContext = createContext();

export function CampusesProvider({ children }) {
  const [campuses, setCampuses] = useState([]);
  const [campus, setCampus] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCampuses() {
      const { data } = await axios.get("api/campuses");
      setCampuses(data);
    }
    fetchCampuses();
  }, []);

  useEffect(() => {
    async function fetchCampus(){
      const { data } = await axios.get(`/api/campuses/${id}`);
      setCampus(data);
    } fetchCampus();
  }, [id]);

  function handleClick(){
        navigate(-1);
    }

  return (
    <CampusesContext.Provider value={{campuses, campus, handleClick}}>
      {children}
    </CampusesContext.Provider>
  );
}

export function useCampuses() {
  return useContext(CampusesContext);
};