import react, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MenuOutlined,
  MediumWorkmarkOutlined,
  ShoppingCartOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { Col, Row, Drawer } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Account from "../Account";
import ModalListProducts from "../ModalListProducts";
import styles from "./Navigation.module.scss";
import Search from "./Search";
import NavBottom from "./NavBottom";
import ShoppingCart from "../ShoppingCart";
import SideBar from "./SideBar";

const Navigation = () => {
  const { shoppingCart } = useSelector((redux) => redux.cart);
  let sumPrice = 0;
  let sumProduct = 0;
  {
    shoppingCart.map((product) => {
      sumPrice += product.buyPrice * product.quantity;
      sumProduct += product.quantity;
    });
  }
  const [products, setproducts] = useState(false);
  const [visible, setVisible] = useState(false);
  const [visibleSidebar, setVisibleSideBar] = useState(false);
  
  return (
    <>
      {/* Navigation Mobile */}
      <div className={styles.nav_mobile}>
        <Col span={4}></Col>
        <Col span={12} align="middle">
          <Link to="/">
            <MediumWorkmarkOutlined className={styles.logo} />
          </Link>
        </Col>
        <Col span={8} align="middle">
          <p className={styles.contact}>Gọi mua hàng</p>
          <div className={styles.phone}>093.666.1875</div>
        </Col>
      </div>
      <div className={styles.nav_mobile}>
        <Col span={4} align="middle">
          <MenuOutlined
            onClick={() => setVisibleSideBar(true)}
            className={styles.toggle}
          ></MenuOutlined>
        </Col>
        <Col span={16}>
          <Search />
        </Col>
        <Col span={4} align="middle">
          <ShoppingCartOutlined
            className={styles.cart}
            onClick={() => setVisible(true)}
          />
        </Col>
      </div>
      {/* Navigation  */}
      <Col md={{ span: 16, offset: 4 }} className={styles.nav} align="middle">
        <Col span={3}>
          <Link to="/">
            <MediumWorkmarkOutlined className={styles.logo} />
          </Link>
        </Col>
        <Col span={18}>
          <Link className={styles.nav_link} to="/">
            Trang chủ
          </Link>
          <Link className={styles.nav_link} to="/">
            Giới thiệu
          </Link>
          <Link
            onClick={() => setproducts(true)}
            className={styles.nav_link}
            to="/"
          >
            Sản phẩm <DownOutlined />
          </Link>
          <Link className={styles.nav_link} to="/">
            Tin tức <DownOutlined />
          </Link>
          <Link className={styles.nav_link} to="/">
            Hỏi đáp
          </Link>
          <Link className={styles.nav_link} to="/">
            Liên hệ
          </Link>
        </Col>
        <Col span={3}>
          <p style={{ marginBottom: "-5px", marginTop: "1em" }}>Gọi mua hàng</p>
          <h4 className={styles.phone}>093.666.1875</h4>
        </Col>
      </Col>
      <Col className={styles.search}>
        <Col md={{ span: 16, offset: 4 }}>
          <Row>
            <Col span={4}>
              <Account></Account>
            </Col>
            <Col span={16} align="middle">
              <Search />
            </Col>
            <Col span={4}>
              <Col span={24} align="middle" className={styles.cart}>
                <ShoppingCartOutlined onClick={() => setVisible(true)} /> Giỏ
                hàng
                <span className={styles.sum}>{sumProduct}</span>
              </Col>
            </Col>
          </Row>
        </Col>
      </Col>
      {/* NavBottom */}
      <NavBottom click={(values) => setVisible(values)} />
      {/* Right Sidebar */}
      <ShoppingCart visible={visible} click={(values) => setVisible(values)} />
      {/* Left Sidebar */}
      <SideBar visible={visibleSidebar} click={(values) => setVisibleSideBar(values)} />
      {/* ModalListProducts */}
      <ModalListProducts
        visible={products}
        callBack={() => setproducts(visible)}
      ></ModalListProducts>
    </>
  );
};

export default Navigation;
