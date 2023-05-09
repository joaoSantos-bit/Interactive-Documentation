import React from "react";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Index";
import TestCvc5 from "../pages/TestCvc5/Index";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<TestCvc5 />} path="/testCvc5" />
        {/* TODO criar uma página de erro para uma rota não definida */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
