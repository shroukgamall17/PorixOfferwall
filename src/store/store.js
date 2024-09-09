import { createStore, combineReducers } from "redux";
import { modelShowReducer } from "./Reducers/modelShowReducer";
import { offersReducer } from "./Reducers/offersReducer";
import { searchOffersReducer } from "./Reducers/searchOffersReducer";
import { selectedOfferReducer } from "./Reducers/selectedOfferReducer";
import { userReducer } from "./Reducers/userReducer";

const reducer = combineReducers({
  modalShow: modelShowReducer,
  offers: offersReducer,
  searchOffers: searchOffersReducer,
  selectedOffer: selectedOfferReducer,
  user: userReducer,
});

const initState = {
  modalShow: false,
  offers: [],
  searchOffers: null,
  selectedOffer: null,
  user: null,
};

const store = createStore(reducer, initState);

export default store;
