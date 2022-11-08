import ApiService from "../../ConfigService/ApiService";
import { servicePaths } from "../../path";

const ProductPhotoService = {

    getAllPhotos: params => ApiService().get(servicePaths.getPhotoByProductCode + params),

}

export default ProductPhotoService;