import { SET_USER } from "../Constants/userConstans";


export const setUser = (value) => {
  return {
    type: SET_USER,
    payload: value,
  };
};