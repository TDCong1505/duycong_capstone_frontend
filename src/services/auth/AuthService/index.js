import ApiService from "../../ConfigService/ApiService";
import { servicePaths } from "../../path";


const AuthService = {

    Login: params => ApiService().post(servicePaths.login,params),
    Register: params => ApiService().post(servicePaths.register,params)

}

export default AuthService;