import {
    HIDE_MODEL,
    SHOW_MODEL,
} from "../Constants/modelShowConstants";

export const showModel = () => {
  return {
    type: SHOW_MODEL,
    payload: true,
  };
};


export const hideModel = () => {
  return {
    type: HIDE_MODEL,
    payload: false,
  };
}