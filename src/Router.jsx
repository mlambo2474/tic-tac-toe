import React, {useContext} from "react";
import { BrowserRouter, Route, Routes } from "react-router"
import Details from "./pages/details/Details";
import Game from "./pages/game/Game";
import Home from "./pages/Home/Home";
import Header from "./components/header/Header"

import { ModalContext } from "./context/ModalContext";

export const Test = ({handleModal}) => {
  return (
    <div > <button onClick={()=>handleModal(<Modal handleModal={handleModal}/>)}>Test</button></div>
  )
}

export const Modal = () => {
  return (
    <div >gfdfdfdfuhfanjssdjsdhudjshdusd</div>
  )
}

const Router = () => {
  const {handleModal} = useContext(ModalContext)
  return (
    <BrowserRouter>
    <Test handleModal={handleModal}/>
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
