import React from "react";
import Tv from "./tv.png";

export default function Main() {
  return (
    <>
      <h1 className="text-6xl font-light text-center pt-40 mb-2">
        Rick & Morty
      </h1>
      <div className="flex justify-center">
        <a href="https://www.adultswim.com/videos/rick-and-morty" target="blank">
          <img src={Tv} alt="Rick & Morty"/>
        </a>
      </div>
    </>
  );
}
