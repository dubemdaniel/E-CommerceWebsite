import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
      addItem: (state, action) => {
        console.log("addItem reducer called with:", action.payload);
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
      state.totalPrice += newItem.price;
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity = quantity;
      }
    },
    removeItem: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },

    // increaseQuantity: (state, action) => {
    //   const id = action.payload;
    //   const existingItem = state.items.find((item) => item.id === id);
    //   if (existingItem) {
    //     existingItem.quantity++;
    //     existingItem.totalPrice += existingItem.price;
    //     state.totalQuantity++;
    //     state.totalPrice += existingItem.price;
    //   }
    // },
    // decreaseQuantity: (state, action) => {
    //   const id = action.payload;
    //   const existingItem = state.items.find((item) => item.id === id);
    //   if (existingItem && existingItem.quantity > 1) {
    //     existingItem.quantity--;
    //     existingItem.totalPrice -= existingItem.price;
    //     state.totalQuantity--;
    //     state.totalPrice -= existingItem.price;
    //   } else if (existingItem && existingItem.quantity === 1) {
    //     state.totalQuantity--;
    //     state.totalPrice -= existingItem.price;
    //     state.items = state.items.filter((item) => item.id !== id);
    //   }
    // },
  },
});
console.log(initialState.items);

export const { addItem, increaseQuantity, decreaseQuantity, updateQuantity, removeItem } =
  cartSlice.actions;

export default cartSlice.reducer;
