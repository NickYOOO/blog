import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import NotFound from "../pages/NotFound";

const Router = () => {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/main" element={<Main />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
    </BrowserRouter>
  );
};

export default Router;