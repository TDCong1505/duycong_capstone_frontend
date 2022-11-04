import { servicePaths } from '../../path';
import ApiService from '../../ConfigService/ApiService';

const ProductService = {

    getAllProducts: params => ApiService().get(servicePaths.getAllProducts),
    getProductById: params => ApiService().get(servicePaths.getProductById + params),
    getProductByName: params => ApiService().get(servicePaths.getProductByName + params),
    getProductByCode: params => ApiService().get(servicePaths.getProductByCode + params),
    getProductsByProductLineName: params => ApiService().get(servicePaths.getProductsByProductLineName + params),
    getProductsByProductLineCode: params => ApiService().get(servicePaths.getProductsByProductLineCode + params),
    getProductPhotosByProductCode: params => ApiService().get(servicePaths.getPhotosByProductCode + params),

}

export default ProductService;