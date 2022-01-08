import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";

const PokeRoutes = () => (
  <Suspense fallback={"Loading..."}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokedex" element={<h1>pokedex...</h1>} />
    </Routes>
  </Suspense>
);

export default PokeRoutes;
