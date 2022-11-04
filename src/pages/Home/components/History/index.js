import React, { useEffect, useState } from "react";
import SliderPhone from "../Phone/SliderPhone";
import styles from "./History.module.scss";
import { Col } from "antd";
const History = () => {
  const [product, setProduct] = useState([]);
  const [loading,setLoading] = useState(false);
  const loadProduct = () => {
    try {
        const history = localStorage.getItem("historyProduct");
        setProduct(JSON.parse(history));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    loadProduct();
  }, []);
  return (
    <>
      <Col
        lg={{ span: 16, offset: 4 }}
        md={{ span: 16, offset: 4 }}
        sm={{ span: 22, offset: 1 }}
        xs={{ span: 22, offset: 1 }}
        className={styles.container}
      >
        <SliderPhone name="Sản phẩm bạn vừa xem" loading={loading} data={product}></SliderPhone>
      </Col>
    </>
  );
};

export default History;
