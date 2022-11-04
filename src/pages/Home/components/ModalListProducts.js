import { Col, Modal, Row } from "antd";
import React from "react";
import { useSelector } from "react-redux";

export default function ModalListProducts({visible,callBack}) {
    const { productTypes } = useSelector((reduxData) => reduxData.productTypes);
    const { productLines } = useSelector((reduxData) => reduxData.productLines);
  return (
    <Modal
      visible={visible}
      width="1000px"
      onCancel={() => callBack(false)}
      onOk={() => callBack(false)}
      footer=""
    >
      <Row span={24}>
        <Col span={14}>
          <Row>
            {productTypes.map((type) => {
              return (
                <Col  key={type.id} span={6} align="left">
                  <h3>{type.productTypeName}</h3>
                  {productLines.map((line) => {
                    if(line.productType.productTypeName == type.productTypeName){
                      return (
                        <Col key={line.id} style={{ margin: "5px 0 5px" }} align="left">
                          {line.productLineName}
                        </Col>
                      );
                    }
                  })}
                </Col>
              );
            })}
          </Row>
        </Col>
        <Col span={10}>
          <img
            src="https://bizweb.dktcdn.net/100/415/483/themes/804267/assets/mega-1-image.jpg?1658201950621"
            style={{ width: "100%" }}
          ></img>
        </Col>
      </Row>
    </Modal>
  );
}
