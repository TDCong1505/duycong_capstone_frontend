import { Col, message } from "antd";
import React, { useEffect, useState } from "react";
import styles from "./Phone.module.scss";
import Banner from "../Banner/index";
import ComputerFilter from "./Filter";
import ProductService from "../../../../services/auth/ProductService";
import SliderPhone from "./SliderPhone";

const Phone = () => {
  const [product, setProduct] = useState([]);
  const [ loading , setLoading ] = useState(false);
  const handleFilter = async (values) => {
    setLoading(true);
    try {
      let res = await ProductService.getProductsByProductLineCode(values.toUpperCase());
      setProduct(res.data);
      setTimeout(setLoading(false),5000);
    } catch (error) {
      console.log(error);
      message.error("Hệ thống xảy ra lỗi !")
    }
  };

  useEffect(() => {
    handleFilter("APPLE");
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
          <ComputerFilter
            filter={(values) => handleFilter(values)}
          ></ComputerFilter>
        </div>
        <SliderPhone name="Điện thoại" loading={loading} data={product}></SliderPhone>
      </Col>
    </>
  );
};

export default Phone;
