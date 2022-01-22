import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Pokedex from "../pages/Pokedex";

const PokeRoutes = () => (
  <Suspense fallback={"Loading..."}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokedex" element={<Pokedex />} />
    </Routes>
  </Suspense>
);

export default PokeRoutes;
