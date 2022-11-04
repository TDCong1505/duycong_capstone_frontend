import { COMPUTER , TABLET , MOBILE } from "./constants";
const initialState = {
    device:"",
}

const IsDevice = (state = initialState , action ) => {
    switch ( action.type  ){
        case COMPUTER:
            return {
                device:"computer"
            }
        case TABLET:
            return {
                device:"tablet"
            }
        case MOBILE:
            return {
                device:"mobile"
            }
        default: 
            return state;
    }
}

export default IsDevice;