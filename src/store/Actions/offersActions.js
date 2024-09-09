import {SET_OFFERS} from "../Constants/offersConstants"


export const setOffers = (value) => {
  return {
    type: SET_OFFERS,
    payload: value,
  };
}; 