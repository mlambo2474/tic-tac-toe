import React from "react";
import { BrowserRouter, Route, Routes } from "react-router"
import Details from "./pages/details/Details";
import Game from "./pages/game/Game";
import Home from "./pages/Home/Home";
import Header from "./components/header/Header"


const Router = () => {
  return (
    <BrowserRouter>
   <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
