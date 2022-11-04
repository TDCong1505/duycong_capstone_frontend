import {
  Avatar,
  Button,
  Col,
  Form,
  Input,
  message,
  Checkbox,
  Switch,
} from "antd";
import { useForm } from "antd/lib/form/Form";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CustomerService from "../../services/auth/CustomerService";
import styles from "./Info.module.scss";

export default function Info() {
  const emailUser = localStorage.getItem("emailUser");
  const [user, setUser] = useState({});
  const [visibleSwitch,setVisibleSwitch] = useState(false);
  const [componentDisabled, setComponentDisabled] = useState(true);

  const onFormLayoutChange = ({ disabled }) => {
    setComponentDisabled(disabled);
  };
  const [ form ] = useForm();
  const onFinish = async (values) => {
    values.email = user.email;
    let res = await CustomerService.updateCustomer(user.id, values);
    message.success("Cập nhật thông tin thành công !");
    loadDetail();
  };

  const handleChange = (e) => {
    if (e) {
      setVisibleSwitch(true);
      setComponentDisabled(false);
    } else {
      setVisibleSwitch(false);
      setComponentDisabled(true);
    }
  };

  const loadDetail = async () => {
    let res = await CustomerService.getByEmail(emailUser);
    setUser(res.data);
    const userData = res.data;
    form.setFieldsValue({
      firstName:userData.firstName,
      lastName:userData.lastName,
      city:userData.city,
      country:userData.country,
      phoneNumber:userData.phoneNumber,
      address:userData.address,
    })
  };

  useEffect(() => {
    if (emailUser) {
      loadDetail();
    }
  }, []);

  return (
    <Col
      lg={{ span: 12, offset: 6 }}
      md={{ span: 12, offset: 6 }}
      xs={{ span: 22, offset: 1 }}
      sm={{ span: 22, offset: 1 }}
    >
      <div className={styles.container}>
        <div className={styles.background}>
          <Avatar
            src={
              "https://lh3.googleusercontent.com/a/AItbvmmKSQOLDvZFY8v8IlIl6_dwjTT-hfZK7A7zlMJd=s96-c"
            }
            size={64}
            className={styles.avatar}
          ></Avatar>
          <div className={styles.name}>
            <h4>
              {user.firstName} {user.lastName}
            </h4>
          </div>
        </div>
        <div className={styles.info}>
        <Switch onChange={handleChange} style={{marginLeft:"5rem"}}/> {visibleSwitch ? <span className={styles.switch}>Chỉnh sửa</span> : <span className={styles.switch}>Xem thông tin</span>}

        <Col lg={{span:22,offset:1}}
        sm={{span:22,offset:1}}
        md={{span:22,offset:1}}
        xs={{span:22,offset:1}}
        className={styles.form}
        > 
        <Form
            onFinish={onFinish}
            labelCol={{
              span: 4,
              offset: 2,
            }}
            wrapperCol={{
              span: 14,
            }}
            layout="horizontal"
            onValuesChange={onFormLayoutChange}
            disabled={componentDisabled}
            form={form}
          >
            <Form.Item label="Họ và tên đệm" name="firstName">
              <Input />
            </Form.Item>
            <Form.Item label="Tên" name="lastName">
              <Input />
            </Form.Item>
            <Form.Item label="Số điện thoại" name="phoneNumber">
              <Input />
            </Form.Item>
            <Form.Item label="Địa chỉ" name="address">
              <Input />
            </Form.Item>
            <Form.Item label="Quốc gia" name="country">
              <Input />
            </Form.Item>
            <Form.Item label="Thành phố" name="city">
              <Input />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Cập nhật thông tin
              </Button>
            </Form.Item>
          </Form>
          </Col> 
        </div>
      </div>
    </Col>
  );
}
