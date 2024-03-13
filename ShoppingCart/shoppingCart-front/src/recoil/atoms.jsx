import { atom } from "recoil";
import { get } from "../services/request";

export const items = atom({
    key: 'items', // unique ID (with respect to other atoms/selectors)
    default: get('/items') || [], // default value (aka initial value)
  });











