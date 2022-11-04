import { message } from "antd";

  export const loginSuccess = () => {
    message.success({
        content:"Đăng nhập thành công"
    })
  }

  export const logoutSuccess = () => {
    message.success({
        content:"Đăng xuất thành công"
    })
  } 
