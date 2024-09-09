import { RESET_SELECTED_OFFER, SET_SELECTED_OFFER } from "../Constants/selectedOfferConstants";


export const setSelectedOffer = (value)=>{
    return{
        type: SET_SELECTED_OFFER,
        payload:value
    }
}


export const restSelectedOffer = ()=>{
    return{
        type: RESET_SELECTED_OFFER,
        payload:null
    }
}


