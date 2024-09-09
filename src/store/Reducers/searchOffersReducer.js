import { SEARCH_RESET_OFFERS, SEARCH_SET_OFFERS } from "../Constants/searchOfferConstants";

export const searchOffersReducer = (state = [], action) => {
  switch (action.type) {
    case SEARCH_SET_OFFERS:
      return action.payload;
    case SEARCH_RESET_OFFERS:
      return [];
    default:
      return state;
  }
};
