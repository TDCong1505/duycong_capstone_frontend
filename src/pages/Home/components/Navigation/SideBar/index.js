import { Row , Col , Drawer } from "antd";
import react from "react";
import { useSelector } from "react-redux";
import Account from "../../Account";

const SideBar = ({visible,click}) => {
    const { productTypes } = useSelector((reduxData) => reduxData.productTypes);
  return (
    <>
      <Drawer
        placement="left"
        closable={true}
        onClose={() => click(false)}
        visible={visible}
        key={"left"}
        width="400px"
      >
        <Row>
          <div span={24} align="left">
            <Account callBack={(value) => click(value)}></Account>
          </div>
          {productTypes.map((types) => {
            return (
              <>
                <Col key={types.id} span={12} style={{ marginTop: "2.2rem" }}>
                  <h3>{types.productTypeName}</h3>
                </Col>
              </>
            );
          })}
        </Row>
      </Drawer>
    </>
  );
};

export default SideBar;
