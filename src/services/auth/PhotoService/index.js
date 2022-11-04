import ApiService from "../../ConfigService/ApiService";
import { servicePaths } from "../../path";


const PhotoService = {

    getByProductCode : params => ApiService().get(servicePaths.getPhotoByProductCode + params),

}

export default PhotoService;