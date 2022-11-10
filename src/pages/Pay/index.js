import { RightOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, message, Row } from "antd";
import { useForm } from "antd/lib/form/Form";
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
  const [form] = useForm();
  let sumPrice = 0;
  {
    shoppingCart.map((product) => {
      sumPrice += product.quantity * product.buyPrice;
    });
  }
  const onFinish = async (values) => {
    try {
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
      let newCustomer = customer;
      newCustomer.creditLimit = customer.creditLimit + sumPrice;
      let updateCustomer = CustomerService.updateCustomer(customer.id,newCustomer);
      console.log(updateCustomer);
      message.success("Gửi đơn hàng thành công !");
    } catch (err){
      console.log(err);
    }
  }

  const onFinishFailed = () => {
    message.error("Hãy nhập đẩy đủ thông tin cho đơn hàng .");
  }

  const loadCustomer = async () => {
    const email = localStorage.getItem("emailUser");
    if (email) {
      let res = await CustomerService.getByEmail(email);
      setCustomer(res.data);
      form.setFieldsValue({
        fullname: `${res.data.firstName} ${res.data.lastName}`,
        email: res.data.email,
        phoneNumber: res.data.phoneNumber,
        address: res.data.address,
      })
    }
  };
  useEffect(() => {
    loadCustomer();
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
          <Form
            form={form}
            onFinish={onFinish}
            name="infoUser"
            onFinishFailed={onFinishFailed}
            >
            <Row style={{ margin: "1rem" }}>
              <Form.Item
                label="Họ và tên"
                name="fullname"
                rules={[{ required: true, message: 'Nhập họ tên của bạn .' }]}
              >
                <Input
                  style={{ width: "100%", fontSize: "16px" }}
                  placeholder="Họ và tên ..."
                ></Input>
              </Form.Item>
            </Row>
            <Row style={{ margin: "1rem" }}>
              <Form.Item
                label="Địa chỉ Email"
                name="email"
                rules={[{ required: true, message: 'Nhập địa chỉ email của bạn .' }]}
              >
                <Input
                  style={{ width: "100%", fontSize: "16px" }}
                  placeholder="Địa chỉ Email ... "
                ></Input>
              </Form.Item>
            </Row>
            <Row style={{ margin: "1rem" }}>
              <Form.Item
                label="Số điện thoại"
                name="phoneNumber"
                rules={[{ required: true, message: 'Nhập số điện thoại của bạn .' }]}
              >
                <Input
                  style={{ width: "100%", fontSize: "16px" }}
                  placeholder="Số điện thoại"
                ></Input>
              </Form.Item>
            </Row>
            <Row style={{ margin: "1rem" }}>
              <Form.Item
                label="Địa chỉ"
                name="address"
                rules={[{ required: true, message: 'Nhập địa chỉ giao hàng .' }]}
              >
                <Input
                  style={{ width: "100%", fontSize: "16px" }}
                  placeholder="Địa chỉ"
                ></Input>
              </Form.Item>
            </Row>
            <Row style={{ margin: "1rem" }}>
              <Form.Item
                label="Ghi chú"
                name="comment"
              >
                <Input
                  style={{ width: "100%", fontSize: "16px" }}
                  placeholder="Ghi chú ..."
                ></Input>
              </Form.Item>    
            </Row>
            <Row className={styles.submit}>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                  Gửi đơn hàng
                </Button>
              </Form.Item>
              </Row>
          </Form>

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

        </Col>
      </Col>
    </>
  );
}
