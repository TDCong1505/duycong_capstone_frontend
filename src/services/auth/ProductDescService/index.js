import ApiService from "../../ConfigService/ApiService";
import { servicePaths } from "../../path";

const ProductDescService = {
    getByProductCode: params => ApiService().get(servicePaths.getDescByProductCode + params),
}

export default  ProductDescService;
