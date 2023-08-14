import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
const CampusesContext = createContext();

export function CampusesProvider({ children }) {
  const [campuses, setCampuses] = useState([]);
  const [campus, setCampus] = useState([]);
  const navigate = useNavigate();

  // function home(){
  //   navigate("/");
  // }
  
  function handleClick(){
    navigate("/wizarding-campuses");
  }

  return (
    <CampusesContext.Provider value={{campuses, campus, handleClick, setCampuses, setCampus}}>
      {children}
    </CampusesContext.Provider>
  );
}

export function useCampuses() {
  return useContext(CampusesContext);
};