import { RightOutlined } from "@ant-design/icons";
import { Button, Col, Input, message, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CustomerService from "../../services/auth/CustomerService";
import OrderDetailService from "../../services/auth/OrderDetailService";
import OrderService from "../../services/auth/OrderService";
import styles from "./Pay.module.scss";

export default function Pay() {
  const { shoppingCart } = useSelector((redux) => redux.cart);
  const [customer, setCustomer] = useState({});
  const [comment, setComment] = useState("");
  const loadUser = async () => {
    const email = localStorage.getItem("emailUser");
    let res = await CustomerService.getByEmail(email);
    setCustomer(res.data);
  };
  let sumPrice = 0;
  {
    shoppingCart.map((product) => {
      sumPrice += product.quantity * product.buyPrice;
    });
  }
  const handleClick = async () => {
    let resOrder = await OrderService.postOrder(customer.id, {
      comment: comment,
    });
    let orderId = resOrder.data.id;
    {
      shoppingCart.map(async (detail) => {
        let resOderDetail = await OrderDetailService.postOrderDetail(
          detail.productCode,
          orderId,
          {
            quantityOrder: detail.quantity,
            priceEach: detail.buyPrice,
          }
        );
      });
    }
    message.success("Gửi đơn hàng thành công !");
  };
  useEffect(() => {
    loadUser();
  }, []);
  return (
    <>
      <Col
        lg={{ span: 16, offset: 4 }}
        md={{ span: 16, offset: 4 }}
        xs={{ span: 20, offset: 2 }}
        sm={{ span: 20, offset: 2 }}
        className={styles.container}
      >
        <Col md={{ span: 10 }} className={styles.feild}>
          <Col span={24}>
            <h3>
              Thông tin cá nhân :{" "}
              <NavLink to="/login">
                <Button type="text">
                  <h2 style={{ color: "#1890ff" }}>
                    Đăng nhập <RightOutlined />
                  </h2>
                </Button>
              </NavLink>
            </h3>
          </Col>
          <Row style={{ margin: "1rem" }}>
            <Col span={24}>
              <Input
                style={{ width: "100%", fontSize: "16px" }}
                placeholder="Họ và tên ..."
                value={customer.firstName + " " + customer.lastName}
              ></Input>
            </Col>
          </Row>
          <Row style={{ margin: "1rem" }}>
            <Col span={24}>
              <Input
                style={{ width: "100%", fontSize: "16px" }}
                placeholder="Địa chỉ Email ... "
                value={customer.email}
              ></Input>
            </Col>
          </Row>
          <Row style={{ margin: "1rem" }}>
            <Col span={24}>
              <Input
                style={{ width: "100%", fontSize: "16px" }}
                placeholder="Số điện thoại"
                value={customer.phoneNumber}
              ></Input>
            </Col>
          </Row>
          <Row style={{ margin: "1rem" }}>
            <Col span={24}>
              <Input
                style={{ width: "100%", fontSize: "16px" }}
                placeholder="Địa chỉ"
                value={customer.address}
              ></Input>
            </Col>
          </Row>
          <Row style={{ margin: "1rem" }}>
            <Col span={24}>
              <Input
                style={{ width: "100%", fontSize: "16px" }}
                placeholder="Ghi chú ..."
                onChange={(e) => setComment(e.target.value)}
              ></Input>
            </Col>
          </Row>
        </Col>
        <Col md={{ span: 14 }} className={styles.feild}>
          <Col span={24}>
            <h3>Thông tin đơn hàng :</h3>
          </Col>
          <Row style={{ margin: "1rem" }}>
            <Col span={24}>
              <label style={{ fontSize: "1rem" }}>Tổng tiền đơn hàng :</label>
            </Col>
            <Col span={24}>
              <Input
                style={{ width: "100%", fontSize: "16px" }}
                value={sumPrice.toLocaleString("vi-VN")}
              ></Input>
            </Col>
          </Row>
          <Row style={{ margin: "1rem" }}>
            <Col span={24}>
              <label style={{ fontSize: "1rem" }}>Sản phẩm :</label>
            </Col>
            {shoppingCart.map((product) => {
              return (
                <Row style={{ margin: "1rem" }}>
                  <Col span={24}>
                    <h3>{product.productName} : </h3>
                  </Col>
                  <Col span={24}>
                    <h4>
                      Số lượng {product.quantity} :{" "}
                      <span style={{ color: "red" }}>
                        {(product.quantity * product.buyPrice).toLocaleString(
                          "vi-VN"
                        )}{" "}
                        VNĐ
                      </span>{" "}
                    </h4>
                  </Col>
                </Row>
              );
            })}
          </Row>
          <Row style={{ margin: "1rem" }}>
            <NavLink to="/">
              <Button type="primary">Tiếp tục mua hàng</Button>
            </NavLink>
          </Row>
          <Row style={{ margin: "1rem" }}>
            <Button type="primary" onClick={handleClick}>
              Gửi đơn hàng
            </Button>
          </Row>
        </Col>
      </Col>
    </>
  );
}
