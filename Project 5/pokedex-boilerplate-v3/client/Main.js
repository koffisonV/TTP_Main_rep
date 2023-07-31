import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React from "react";
import Home from "./Home";
import OnePokemon from "./onePokemon";
import OneTrainer from "./oneTrainer";

// import singlePokemon from "./singlePokemon"
export default function Main(){
  const Layout = () => {
    return (
      <>
        <Outlet />
      </>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/", // localhost:1337/
          element: <Home />,
        },
        {
          path: "pokemon/:id", // localhost:1337/pokemon/1
          element: <OnePokemon />,
        },
        {
          path: "trainer/:id", // localhost:13337/trainer/2
          element: <OneTrainer />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};