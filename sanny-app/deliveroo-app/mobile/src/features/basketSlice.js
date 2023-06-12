import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      let newBasket = [...state.items];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.payload.id}) as is not in basket!`
        );
      }

      state.items = newBasket;
    },
    clearBasketitems: (state) => {
      state.items = [];
    },
  },
});

export const selectBasketItems = (state) => state.basket.items;
export const selectBasketItemsWithId = (state, id) =>
  state.basket.items.filter((item) => item.id === id);
export const selectBasketTotal = (state) =>
  state.basket.items.reduce((acc, cur) => acc + cur.price, 0);
export const { addToBasket, removeFromBasket, clearBasketitems } =
  basketSlice.actions;
export default basketSlice.reducer;
