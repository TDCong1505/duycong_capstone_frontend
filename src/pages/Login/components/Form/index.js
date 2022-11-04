import { Button, Checkbox, Col, Form, Input, Row } from "antd";
import React from "react";
import {
  FacebookOutlined,
  GoogleOutlined,
  UserOutlined,
  LockOutlined,
} from "@ant-design/icons";
import firebase, { auth , db } from '../../../../firebase/config'
import { useDispatch } from "react-redux";
import { login } from "../../../../redux/actions/login";
import "antd/dist/antd.css";
import { getAuth, signOut } from "firebase/auth";
import CustomerService from "../../../../services/auth/CustomerService";
import styles from './Form.module.scss';


const fbProvider = new firebase.auth.FacebookAuthProvider();
const GgProvider = new firebase.auth.GoogleAuthProvider();
export default function LoginRegister({ value }) {

  const dispatch = useDispatch();

  const handleFbLogin = () => {
    auth.signInWithPopup(fbProvider).then((data) => {
      dispatch(login(data));
      console.log(data);
    });
  };

  const onFinish = () => {

  }
   
  const handleGgLogin = () => {
    auth.signInWithPopup(GgProvider).then( async (data) => {
      dispatch(login(data));
      localStorage.setItem('emailUser',data.additionalUserInfo.profile.email);
      if(data.additionalUserInfo.isNewUser == true){
        let response = await CustomerService.createCustomer({
          email:data.additionalUserInfo.profile.email,
          firstName:data.additionalUserInfo.profile.given_name,
          lastName:data.additionalUserInfo.profile.family_name,
          country:data.additionalUserInfo.profile.locale,
          creditLimit:0,
          salesRepEmployeeNumber:0,
          avatarLink:data.additionalUserInfo.profile.picture,
        });
      }
    });
  };


  if (value === "Đăng nhập") {
    return (
      <>
        <Row style={{ marginTop: "1rem" }}>
          <Col span={24}>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Hãy điền tên đăng nhập!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Tên đăng nhập"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Hãy điền mật khẩu!",
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Mật khẩu "
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Ghi nhớ mật khẩu</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                  Quên mật khẩu
                </a>
              </Form.Item>

              <Form.Item>
                <Button
                  htmlType="submit"
                  className={styles.buttonLogin}
                >
                  Đăng nhập 
                </Button>
                <a style={{ float: "right" }} href="">
                  Hoặc đăng ký ngay
                </a>
              </Form.Item>
            </Form>
            <Row style={{ marginTop: "1rem" }}>
              <Col align="middle" span={24}>
                <h4>Hoặc đăng nhập bằng</h4>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row style={{ marginTop: "1rem", display: "flex" }}>
          <Col span={12}>
            <Button
              type="primary"
              className={styles.buttonFacebook}
              icon={<FacebookOutlined />}
              onClick={handleFbLogin}
            >
              Facebook
            </Button>
          </Col>
          <Col span={12}>
            <Button
              type="danger"
              className={styles.buttonGoogle}
              icon={<GoogleOutlined />}
              onClick={handleGgLogin}
            >
              Google
            </Button>
          </Col>
          <Col span={24}>
            <Button className={styles.buttonPhone}>Đăng nhập bằng số điện thoại</Button>
          </Col>
        </Row>
      </>
    );
  } else {
    return (
      <>
        <Row>
          <Col span={24} style={{ marginTop: "1rem" }}>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Hãy điền tên đăng nhập!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Hãy điền email của bạn"
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className={styles.buttonLogin}
                >
                  Đăng ký
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
        <Row>
              <Col align="middle" span={24}>
                <h4>Hoặc đăng nhập bằng</h4>
              </Col>
            </Row>
        <Row style={{ marginTop: "1rem", display: "flex" }}>
          <Col span={12}>
            <Button
              type="primary"
              className={styles.buttonFacebook}
              icon={<FacebookOutlined />}
              onClick={handleFbLogin}
            >
              Facebook
            </Button>
          </Col>
          <Col span={12}>
            <Button
              type="danger"
              className={styles.buttonGoogle}
              icon={<GoogleOutlined />}
              onClick={handleGgLogin}
            >
              Google
            </Button>
          </Col>
          <Col span={24}>
            <Button className={styles.buttonPhone}>Đăng nhập bằng số điện thoại</Button>
          </Col>
        </Row>
      </>
    );
  }
}
