import ApiService from "../../ConfigService/ApiService";
import { servicePaths } from "../../path";

const OrderService = {

    postOrder: (params,data) => ApiService().post(servicePaths.postOrder + params,data),
    getOrderOfCustomer: params => ApiService().get(servicePaths.getOrdersOfCustomer + params),
    
};

export default OrderService;