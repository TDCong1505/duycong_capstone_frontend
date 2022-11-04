import { Col, Row } from 'antd';
import React from 'react';

export default function Banner() {
  return (
    <Row>
    <Col
      lg={{ span: 12, offset: 0 }}
      md={{ span: 12 }}
      sm={{ span: 11.5, offset: 1 }}
      xs={{ span: 22, offset: 1 }}
    >
      <img
        src="https://bizweb.dktcdn.net/100/415/483/themes/804267/assets/feature_banner_1.jpg?1658201950621"
        style={{ width: "100%", height: "140px", marginBottom: "1rem" }}
      ></img>
    </Col>
    <Col
      lg={{ span: 11, offset: 1 }}
      md={{ span: 12 }}
      sm={{ span: 11.5, offset: 1 }}
      xs={{ span: 22, offset: 1 }}
    >
      <img
        src="https://bizweb.dktcdn.net/100/415/483/themes/804267/assets/feature_banner_2.jpg?1658201950621"
        style={{ width: "100%", height: "140px", marginBottom: "1rem" }}
      ></img>
    </Col>
    </Row>
  )
}
