import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Search } from "./search";

export const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </>
  );
};
