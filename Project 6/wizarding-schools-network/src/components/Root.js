import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import Campuses from "./Campuses";
import Students from "./Students";
import Campus from "./Campus";
import Student from "./Student";
import Nav from "./Nav";
import EditCampus from "./EditCampus";
import EditStudent from "./EditStudent";
import CreateCampus from "./CreateCampus";
import CreateStudent from "./CreateStudent";

const Root = () => {
  return (
    <div className="navigation">
      <Nav />
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/wizarding-campuses" element={<Campuses />} />
          <Route path="/wizarding-campuses/:id" element={<Campus />} />
          <Route path="/students" element={<Students />} />
          <Route path="/students/:id" element={<Student />} />
          <Route path="/createCampus" element={<CreateCampus />} />
          <Route path="/createStudent" element={<CreateStudent />} />
          <Route path="/editCampus/:id" element={<EditCampus />} />
          <Route path="/editStudent/:id" element={<EditStudent />} />
      </Routes>
    </div>
  );
};

export default Root;
