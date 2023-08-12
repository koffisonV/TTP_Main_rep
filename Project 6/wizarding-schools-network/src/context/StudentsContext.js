import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
const StudentsContext = createContext();
export function StudentsProvider({ children }) {
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState([]);
  const navigate = useNavigate();
  function handleClick(){
        navigate(-1);
    }
  return (
    <StudentsContext.Provider value={{students, student, handleClick, setStudents, setStudent}}>
      {children}
    </StudentsContext.Provider>
  );
}
export function useStudents() {
  return useContext(StudentsContext);
};