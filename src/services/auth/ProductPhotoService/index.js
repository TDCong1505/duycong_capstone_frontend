import ApiService from "../../ConfigService/ApiService";
import { servicePaths } from "../../path";

const ProductPhotoService = {

    getAllPhotos: params => ApiService().get(servicePaths.getPhotosByProductCode + params),

}

export default ProductPhotoService;