import { YoutubeOutlined , TwitterOutlined , FacebookOutlined , MediumWorkmarkOutlined } from "@ant-design/icons";
import { Col } from "antd";
import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <Col
          lg={{ span: 16, offset: 4 }}
          md={{ span: 16, offset: 4 }}
          sm={{ span: 22, offset: 1 }}
          xs={{ span: 22, offset: 1 }}
        >
          <div className={styles.container}>
            <div className={styles.title}>
              <div className={styles.heading}>Hỗ trợ khách hàng</div>
              <a className={styles.link} href="#">SĐT: 093.666.1875</a>
              <a className={styles.link} href="#">Email:cong.td@devcamp.edu.vn</a>
              <a className={styles.link} href="#">Công ty xxx , tầng xx,số nhà xx, đường xx,phường xx,quận Đống Đa , thành phố Hà Nội .</a>
            </div>
            <div className={styles.title}>
              <div className={styles.heading}>Các cơ sở</div>
              <div className={styles.link}>CS1: Số nhà xx , phố xx , quận xx , TP.Hà Nội .</div>
              <div className={styles.link}>CS2: Số nhà xx , phố xx , quận xx , TP.Hà Nội .</div>
              <div className={styles.link}>CS3: Số nhà xx , phố xx , quận xx , TP.Hà Nội .</div>
            </div>
            <div className={styles.title}>
              <div className={styles.heading}>Kết nối với chúng tôi</div>
              <div className={styles.link}><YoutubeOutlined className={styles.icon} /></div>
              <div className={styles.link}><TwitterOutlined className={styles.icon} /></div>
              <div className={styles.link}><FacebookOutlined className={styles.icon} /></div>
            </div>
          </div>
        </Col>
      </div>
    </>
  );
};

export default Footer;
