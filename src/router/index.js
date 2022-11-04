import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home/components/HomePage";
import Info from "../pages/Info/Info";
import Login from "../pages/Login";
import Pay from "../pages/Pay";
import View from "../pages/ViewDetail";
import History from "../pages/Home/History";
import Navigation from "../pages/Home/components/Navigation";
import Footer from "../pages/Home/components/Footer";

const Router = () => (
  <>
    <BrowserRouter>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/userInfo" element={<Info />}></Route>
        <Route path="/pay" element={<Pay></Pay>}></Route>
        <Route path="/view/:code" element={<View></View>}></Route>
        <Route path="/history" element={<History></History>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  </>
);

export default Router;
