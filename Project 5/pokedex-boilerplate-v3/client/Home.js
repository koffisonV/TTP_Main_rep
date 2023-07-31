import React, { useEffect, useState } from "react";
import SinglePokemon from "./singlePokemon";
import SingleTrainer from "./singleTrainer"

export default function Home(){
    return (
    <div id="main">
        <h1>Pokedex</h1>
        <SinglePokemon />
        <SingleTrainer />
    </div>
    );
};
