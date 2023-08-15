import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Characters from "./components/Characters";
import Character from "./components/Character";
import Locations from "./components/Locations";
import Episodes from "./components/Episodes";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:id" element={<Character />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/episodes" element={<Episodes />} />
      </Routes>
    </>
  );
}

export default App;
