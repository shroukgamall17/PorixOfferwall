import { SET_SELECTED_OFFER, RESET_SELECTED_OFFER } from "../Constants/selectedOfferConstants";

export const selectedOfferReducer = (state = null,action)=>{
    switch (action.type) {
        case SET_SELECTED_OFFER:
            return action.payload;
        case RESET_SELECTED_OFFER:
            return action.payload;
        default:
            return state;
    }
}