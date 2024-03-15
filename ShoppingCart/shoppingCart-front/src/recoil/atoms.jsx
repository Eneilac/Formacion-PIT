import { atom } from "recoil";

export const getItems = atom({
  key: 'items', // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});











