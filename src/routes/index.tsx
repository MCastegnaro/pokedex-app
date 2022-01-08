import { Suspense } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

const PokeRoutes = () => (
  <BrowserRouter>
    <Suspense fallback={"Loading..."}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokedex" element={<h1>pokedex...</h1>} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default PokeRoutes;
