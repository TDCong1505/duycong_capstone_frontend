import { Col } from "antd";
import React, { useEffect, useState } from "react";
import ProductService from "../../../../services/auth/ProductService";
import SliderPhone from "../Phone/SliderPhone";
import Banner from "./Banner";
import ComputerFilter from "./ComputerFilter";
import styles from "./Laptop.module.scss";

const Laptop = () => {
  const [product, setProduct] = useState([]);
  const [loading , setLoading ] = useState(false);
  const loadProduct = async () => {
    setLoading(true);
    try {
      let res = await ProductService.getProductsByProductLineCode("DELL");
      setProduct(res.data);
      // setTimeout(setLoading(false),5000);
      setLoading(false);
    } catch (error) {
      console.log(error);
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
        <Banner></Banner>
        <div className={styles.filter}>
          <ComputerFilter></ComputerFilter>
        </div>
        <SliderPhone name={"Laptop"} loading={loading} data={product}></SliderPhone>
      </Col>
    </>
  );
};

export default Laptop;
