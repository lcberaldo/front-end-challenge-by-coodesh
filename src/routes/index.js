import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";

const RoutesComp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default RoutesComp;
