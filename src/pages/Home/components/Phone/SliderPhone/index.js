import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardProduct from "../../../../components/CardProduct";
import styles from "./SliderPhone.module.scss";
import { Empty, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const SliderPhone = ({ data, name, loading }) => {
  const antIcon = <LoadingOutlined style={{ fontSize: 40 }} spin />;
  const settings = {
    dotsClass : true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      }
    ],
  };
  return (

    <div>
      <div className={styles.header}>
        <div className={styles.heading}>{name}</div>
      </div>
      <Spin indicator={antIcon} spinning={loading}>
        <div >
          {data?.length ? (
            <>
              <Slider {...settings}>
                {data?.map((product) => {
                  return (
                    <div>
                      <CardProduct product={product}></CardProduct>
                    </div>
                  );
                })}
              </Slider>
            </>
          ) : (
            <Empty description={<h1>Đang cập nhật</h1>} className={styles.empty}></Empty>
          )}
        </div>
      </Spin>
    </div>

  );
};

export default SliderPhone;
