import ApiService from "../../ConfigService/ApiService";
import { servicePaths } from "../../path";

const OrderDetailService = {

    postOrderDetail: (params1,params2,data) => ApiService().post(servicePaths.postOrderDetail + params1 + "/orderId/" + params2 ,data),
}

export default OrderDetailService;