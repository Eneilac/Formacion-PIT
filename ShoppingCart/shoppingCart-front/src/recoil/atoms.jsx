import { atom } from "recoil";

export const itemsAtom = atom({
  key: 'itemsState', 
  default: [], 
});


export const cartAtom = atom ({
  key: 'cartState',
  default: [], 
});


export const itemsCartAtom = atom ({
  key: 'itemsCartState',
  default: [], 
});











