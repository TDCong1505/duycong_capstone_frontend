import { LOGIN , LOGOUT } from "../reducers/constants";
import { loginSuccess , logoutSuccess } from "../../services/message";


//login
export const login = (info) => {
  loginSuccess();
    return (dispatch) => {
      dispatch({
        type: LOGIN,
        info:info,
      });
    };
};


export const logout = (info) => {
  logoutSuccess();
    return (dispatch) => {
        dispatch({
            type:LOGOUT,
        });
    }
}