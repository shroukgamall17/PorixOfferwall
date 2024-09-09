import { SEARCH_SET_OFFERS } from "../Constants/searchOfferConstants";

export const setSearchOffers = (value) => {
  return {
    type: SEARCH_SET_OFFERS,
    payload: value,
  };
};
