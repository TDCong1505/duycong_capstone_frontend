import ApiService from "../../ConfigService/ApiService";
import { servicePaths } from "../../path";

const CustomerService = {

    getAllCustomers: params => ApiService().get(servicePaths.getAllCustomers),
    createCustomer: params => ApiService().post(servicePaths.createCustomer, params),
    getByEmail: params => ApiService().get(servicePaths.getByEmail + params),
    updateCustomer: (params,data) => ApiService().put(servicePaths.updateCustomer + params,data),

};

export default CustomerService;