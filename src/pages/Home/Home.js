import React, { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import "./index.css";
import { useDispatch } from "react-redux";
import { isComputer , isMobile } from '../../redux/actions/IsDevice';
import Router from "../../router";

export default function Home() {
  return (
    <>
    <Router></Router>
    </>
  );
}
