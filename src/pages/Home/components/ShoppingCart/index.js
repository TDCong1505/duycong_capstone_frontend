import { Drawer, Col, Row, Button, Carousel, Empty } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addProduct,
  removeProduct,
  deleteProduct,
} from "../../../../redux/actions/Cart";
import styles from "./ShoppingCart.module.scss";

const ShoppingCart = ({ visible, click }) => {
  const dispatch = useDispatch();
  const { shoppingCart } = useSelector((redux) => redux.cart);
  let sumPrice = 0;
  {shoppingCart.map((product) => {
    sumPrice += product.quantity * product.buyPrice;
  })}
  const { productPhotos } = useSelector((reduxData) => reduxData.productPhotos);
  return (
    <>
      <Drawer
        title="Giỏ hàng của bạn"
        placement="right"
        closable={true}
        onClose={() => click(false)}
        visible={visible}
        key="right"
        width="400px"
      >
        <Col span={24}>
          <Link to="/pay">
            <button className={styles.button_pay}> Thanh toán </button>
          </Link>
        </Col>
        <Col span={24}>
          <h1>
            Tổng giá :
            <span style={{ color: "red" }}>
              {sumPrice.toLocaleString("vi-VN") + "VNĐ"}
            </span>
          </h1>
        </Col>
        {shoppingCart !== [] &&
          shoppingCart.map((product) => {
            sumPrice += product.buyPrice * product.quantity;
            return (
              <>
                <Row style={{ marginBottom: "5rem" }}>
                  <Col span={16}>
                    <Carousel autoplay>
                      {productPhotos.map((photo) => {
                        let photos = [];
                        if (photo.product.productCode === product.productCode) {
                          photos.push(photo);
                          return (
                            <>
                              <div>
                                <img
                                  width={"100%"}
                                  style={{ height: "220px" }}
                                  src={photos[0].photoURL}
                                ></img>
                              </div>
                            </>
                          );
                        }
                      })}
                    </Carousel>
                  </Col>
                  <Col span={8} align="middle">
                    <Button
                      type="primary"
                      onClick={() => dispatch(addProduct(product))}
                    >
                      Thêm
                    </Button>
                    <h3>{product.quantity}</h3>
                    <Button
                      type="primary"
                      onClick={() => dispatch(deleteProduct(product))}
                    >
                      Bớt
                    </Button>
                  </Col>
                  <Col span={24}>
                    <Row>
                      <Col span={24}>
                        <h3>{product.productName}</h3>
                        <h4 style={{ color: "red" }}>
                          {product.buyPrice.toLocaleString("vi-VN")} VNĐ
                        </h4>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </>
            );
          })}
        {!shoppingCart.length && (
          <>
            <Empty description="Chưa có sản phẩm nào trong giỏ hàng" />
            <Col span={24}>
            <button
              type="primary"
              className={styles.button_continue}
              onClick={() => click(false)}
            >
              Tiếp tục mua sắm
            </button>
            </Col>
          </>
        )}
      </Drawer>
    </>
  );
};

export default ShoppingCart;
