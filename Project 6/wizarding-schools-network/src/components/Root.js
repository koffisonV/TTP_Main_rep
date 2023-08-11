import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Main from "./Main";
import Campuses from "./Campuses";
import Students from "./Students";
import Campus from "./Campus";
import Student from "./Student";

const Root = () => {
  return (
    <div className="navigation">
      <Routes>
        <Route path="/" element={<Main />} />
          <Route path="/wizarding-campuses" element={<Campuses />} />
          <Route path="/wizarding-campuses/:id" element={<Campus />} />
          <Route path="/students" element={<Students />} />
          <Route path="/students/:id" element={<Student />} />
      </Routes>
    </div>
  );
};

export default Root;
