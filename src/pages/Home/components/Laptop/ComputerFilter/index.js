import { Col, Row } from "antd";
import React from "react";

export default function ComputerFilter({filter}) {
  return (
    <Row style={{ margin: "1rem 0 1rem" }}>
      <Col span={9}>
        <img
          src="https://bizweb.dktcdn.net/100/415/483/themes/804267/assets/evo_block_product_banner_3.jpg?1658201950621"
          style={{ width: "100%" ,height:"400px" }}
        ></img>
      </Col>
      <Col span={3} align="middle">
        <div
          style={{ height: "50%", cursor: "pointer" }}
          onClick={() => filter("iPhone 12")}
        >
          <img
            style={{ width: "100%" }}
            alt="Học tập - Văn phòng"
            src="https://bizweb.dktcdn.net/thumb/large/100/415/483/collections/map.jpg?v=1612146244350"
          ></img>
          <p>Học tập - Văn phòng</p>
        </div>
        <div style={{ height: "50%", cursor: "pointer" }}>
          <img
            style={{ width: "100%" }}
            alt="MacBook"
            src="https://bizweb.dktcdn.net/thumb/large/100/415/483/collections/macbook.jpg?v=1612146677593"
          ></img>
          <p>MacBook</p>
        </div>
      </Col>
      <Col span={3} align="middle">
        <div style={{ height: "50%", cursor: "pointer" }}>
          <img
            style={{ width: "100%" }}
            alt="Đồ hoạ - Kỹ thuật"
            src="https://bizweb.dktcdn.net/thumb/large/100/415/483/collections/untitled-2.jpg?v=1612146375973"
          ></img>
          <p>Đồ hoạ - Kỹ thuật</p>
        </div>
        <div style={{ height: "50%", cursor: "pointer" }}>
          <img
            style={{ width: "100%" }}
            alt="Microsoft Surface"
            src="https://bizweb.dktcdn.net/thumb/large/100/415/483/collections/microsoft-surface-go-600x600.jpg?v=1612146791780"
          ></img>
          <p>Microsoft Surface</p>
        </div>
      </Col>
      <Col span={3} align="middle">
        <div style={{ height: "50%", cursor: "pointer" }}>
          <img
            style={{ width: "100%" }}
            alt="Mỏng nhẹ"
            src="https://bizweb.dktcdn.net/thumb/large/100/415/483/collections/untitled-2-8b532638-7b1b-4097-9433-e404fc95f83d.jpg?v=1612146423243"
          ></img>
          <p>Mỏng nhẹ</p>
        </div>
        <div style={{ height: "50%", cursor: "pointer" }}>
          <img
            style={{ width: "100%" }}
            alt="Dell XPS"
            src="https://bizweb.dktcdn.net/thumb/large/100/415/483/collections/dell-xps.jpg?v=1612146864803"
          ></img>
          <p>Dell XPS</p>
        </div>
      </Col>
      <Col span={3} align="middle">
        <div style={{ height: "50%", cursor: "pointer" }}>
          <img
            style={{ width: "100%" }}
            alt="Laptop Gaming"
            src="https://bizweb.dktcdn.net/thumb/large/100/415/483/collections/gaming.jpg?v=1612146472127"
          ></img>
          <p>Laptop Gaming</p>
        </div>
        <div style={{ height: "50%", cursor: "pointer" }}>
          <img
            style={{ width: "100%" }}
            alt="Lenovo ThinkPad"
            src="https://bizweb.dktcdn.net/thumb/large/100/415/483/collections/lenovo-thinkpad-t490s.jpg?v=1612146939943"
          ></img>
          <p>Lenovo ThinkPad</p>
        </div>
      </Col>
      <Col span={3} align="middle">
        <div style={{ height: "50%", cursor: "pointer" }}>
          <img
            style={{ width: "100%" }}
            alt="Cao cấp - Sang trọng"
            src="https://bizweb.dktcdn.net/thumb/large/100/415/483/collections/cao-cap.jpg?v=1612146519803"
          ></img>
          <p>Cao cấp - Sang trọng</p>
        </div>
        <div style={{ height: "50%", cursor: "pointer" }}>
          <img
            style={{ width: "100%" }}
            alt="Asus ZenBook"
            src="https://bizweb.dktcdn.net/thumb/large/100/415/483/collections/asus-zendbook.jpg?v=1612147044067"
          ></img>
          <p>Asus ZenBook</p>
        </div>
      </Col>
    </Row>
  );
}
