import ApiService from "../../ConfigService/ApiService";
import { servicePaths } from "../../path";

const VoteService = {
    getVoteByProductCode: params => ApiService().get(servicePaths.getVoteByProductCode + params),
}

export default VoteService;