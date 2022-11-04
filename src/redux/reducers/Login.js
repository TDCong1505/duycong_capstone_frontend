import { LOGIN , LOGOUT } from "./constants";
const initialState = {
    accessToken:"",
    avatarURL:"",
    name:"",
}


const Login = (state = initialState , action ) => {
    switch ( action.type  ){
        case LOGIN:
        return  {
            accessToken: action.info.credential.accessToken,
            name: action.info.user.displayName,
            avatarURL: action.info.user.photoURL,
        };
        case LOGOUT: 
        return  {
            accessToken: "",
            name: "",
            avatarURL: "",
        };
        default: 
            return state;
    }
}

export default Login;