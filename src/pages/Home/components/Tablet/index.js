import { Col } from "antd";
import React, { useEffect, useState } from "react";
import ProductService from "../../../../services/auth/ProductService";
import SliderPhone from "../Phone/SliderPhone";
import styles from "./Tablet.module.scss";

const Tablet = () => {
  const [product, setProduct] = useState([]);
  const [loading,setLoading] = useState(false);
  const loadProduct = async () => {
    setLoading(true);
    try {
      let res = await ProductService.getProductsByProductLineCode("IPAD PRO");
      setProduct(res.data);
      setLoading(false);
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
        <SliderPhone name="Máy tính bảng" loading={loading} data={product}></SliderPhone>
      </Col>
      
    </>
  );
};

export default Tablet;
