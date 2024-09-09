import {SET_OFFERS, RESET_OFFERS} from "../Constants/offersConstants"

export const offersReducer = (state = [], action) => {
  switch (action.type) {
      case SET_OFFERS:
          return action.payload;
      case RESET_OFFERS:
          return [];
    default:
      return state;
  }
};
