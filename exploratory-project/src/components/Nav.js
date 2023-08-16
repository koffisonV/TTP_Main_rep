import React from "react";
import { Link } from "react-router-dom";

export default function Nav(){
  return (
    <nav className="text-xl p-3 space-x-7 text-center font-bold mt-6">
        <Link className="border border-transparent rounded p-2 hover:bg-slate-300" to="/">Home</Link>
        <Link to="/characters">Characters</Link>
        <Link to="/locations">Locations</Link>
        <Link to="/episodes">Episodes</Link>
    </nav>
  );
};