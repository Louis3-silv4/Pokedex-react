import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Favoritos from "../components/Favoritos/Favoritos"
import Pokedex from "../components/Pokedex/Pokedex";
import React from "react";


export default function PokedexRoute(){

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Pokedex/>
    },
    {
      path: "/favoritos",
      element: <Favoritos/>
    },
  ]);

  return  <RouterProvider router={router} />
}