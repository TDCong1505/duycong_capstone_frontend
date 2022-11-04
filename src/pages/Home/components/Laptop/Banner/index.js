import React from 'react'
import { Col , Row } from 'antd'
export default function Banner() {
  return (
    <Row>
    <Col
      lg={{ span: 24, offset: 0 }}
      md={{ span: 24 , offset:0 }}
      sm={{ span: 22, offset: 1 }}
      xs={{ span: 22, offset: 1 }}
    >
      <img
        src="https://bizweb.dktcdn.net/100/415/483/themes/804267/assets/feature_banner.jpg?1658201950621"
        style={{ width: "100%", height: "140px", marginBottom: "1rem" }}
      ></img>
    </Col>
    </Row>
  )
}