import React from "react";
import { Route, Routes } from "react-router-dom";
import Hero from "./../Components/Hero";

const Pages = () => {
  return (
    <Routes>
      <Route path="/portafolio-alejandro/" element={<Hero />} />

      <Route exact path="*" element={<Hero />} />
    </Routes>
  );
};

export default Pages;
