import React from "react";
import SwiperPage from "./SwiperPage";
import { Col } from "antd";
import Phone from './Phone';
import Banner from "./Banner";
import Laptop from "./Laptop";
import Tablet from "./Tablet";
import History from "./History";
export default function HomePage({changeSlide}) {
  return (
    <>
    <Col>
    <SwiperPage></SwiperPage>
    <Phone></Phone>
    <Laptop></Laptop>
    <Tablet></Tablet>
    <History></History>
    </Col>
    </>
  );
}
