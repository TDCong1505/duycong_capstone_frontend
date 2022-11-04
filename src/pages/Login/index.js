import { Col, Row, Segmented } from "antd";
import React, { useState } from "react";
import LoginRegister from "./components/Form";
import styles from "./Login.module.scss";

export default function Login() {
  const [key, setKey] = useState("Đăng nhập");
  return (
    <Col
      lg={{ span: 12, offset: 6 }}
      md={{ span: 12, offset: 6 }}
      xs={{ span: 22, offset: 1 }}
      sm={{ span: 22, offset: 1 }}
      className={styles.container}
    >
        <Col span={12} className={styles.wrapper}>
          <img
            className={styles.image}
            src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?t=st=1658236348~exp=1658236948~hmac=eeec4b782045e27a5012399c501f655c24baf1897005987071a48704f7f5a7cb&w=740"
          />
        </Col>
        <div>
          <Segmented
            block
            onChange={(e) => setKey(e)}
            style={{ width: "100%" }}
            options={[
              {
                label: (
                  <Col
                    span={12}
                    style={{
                      fontSize: "1.2rem",
                      height: "40px",
                      lineHeight: "40px",
                    }}
                  >
                    <h4 style={{ color: "green" }}>Đăng nhập</h4>
                  </Col>
                ),
                value: "Đăng nhập",
              },
              {
                label: (
                  <Col
                    span={12}
                    style={{
                      fontSize: "1.2rem",
                      height: "40px",
                      lineHeight: "40px",
                    }}
                  >
                    <h4 style={{ color: "green" }}>Đăng ký</h4>
                  </Col>
                ),
                value: "Đăng ký",
              },
            ]}
          ></Segmented>
          <LoginRegister value={key}></LoginRegister>
        </div>
    </Col>
  );
}
