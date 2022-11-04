import { DollarOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Col } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Nav.module.scss";

const NavBottom = ({click}) => {

    const { shoppingCart } = useSelector(redux => redux.cart);
    let sumProduct = 0;
    {
      shoppingCart.map((product) => {
        sumProduct += product.quantity;
      });
    }
  return (
    <>
      <div className={styles.bottomNav}>
        <Col span={12}>
          <Button
            type="primary"
            className={styles.button}
            onClick={() => click(true)}
            icon={<ShoppingCartOutlined />}
          >
            Giỏ hàng <span className={styles.text}>{sumProduct}</span>
          </Button>
        </Col>
        <Col span={12}>
          <Link to="/pay">
            <Button
              type="danger"
              className={styles.button}
              icon={<DollarOutlined />}
            >
              Thanh toán
            </Button>
          </Link>
        </Col>
      </div>
    </>
  );
};

export default NavBottom;