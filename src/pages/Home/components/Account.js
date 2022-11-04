import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Avatar, Button, Col, Typography, Dropdown, Menu } from "antd";
import { DownloadOutlined, DownOutlined, UserOutlined } from "@ant-design/icons";
import { logout } from "../../../redux/actions/login";
import { auth } from "../../../firebase/config";



export default function Account({ callBack }) {

  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label:<NavLink to='/userInfo'>
            <h4>Thông tin cá nhân</h4>
          </NavLink>
        },
        {
          key:"3",
          label:<NavLink to='/history'><h4>Lịch sử mua hàng</h4></NavLink>,
        },
        {
          key:"2",
          label:<h4>Đăng xuất</h4>,
          onClick:() => handleLogout(),
        },
        
      ]}
    />
  );
  const { accessToken, avatarURL, name } = useSelector(
    (reduxData) => reduxData.login
  );
  const dispatch = useDispatch();
  const Account = styled(Col)`
    color: white;
    line-height: 70px;
    font-size: 1.2rem;
  `;
  const handleLogout = () => {
    dispatch(logout());
    auth.signOut();
    localStorage.removeItem('emailUser');
    localStorage.removeItem('idUser');
  };
  const handleLogin = () => {
    callBack(false);
  };

  if (accessToken == "") {
    return (
      <Account span={24} align="middle" onClick={handleLogin}>
        <NavLink style={{ color: "white" }} to="/login">
          <UserOutlined />
          Tài khoản
        </NavLink>
      </Account>
    );
  } else {
    return (
      <Account align="middle" span={24}>
        <Dropdown overlay={menu} placement="bottom" >
         <Avatar size={50} src={avatarURL} style={{ marginRight: "1rem" }}>            
          </Avatar>    
        </Dropdown>
        {name}
      </Account>
    );
  }
}
