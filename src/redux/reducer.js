import { createReducer } from '@reduxjs/toolkit'
export const cartReducer = createReducer(
  {
    cartItems: [],
    subTotal: 0,
    total: 0,
    shiping: 0,
    tax: 0,
  },
  {
    addtoCart: (state, action) => {
      const item = action.payload;
      const isExisting = state.cartItems.find((i) => i.id === item.id);
      if (isExisting) {
        state.cartItems.forEach((i) => {
          if (i.id === item.id) i.quantity += 1;
        });
      } else {
        state.cartItems.push(item);
      }
    },

    decrement: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item.quantity > 1) {
        state.cartItems.forEach((i) => {
          if (i.id === item.id) i.quantity -= 1;
        });
      }
    },
    deleteHandler: (state, action) => {
      state.cartItems = state.cartItems.filter((i) => i.id !== action.payload);
    
    },
    calculatePrice: (state) => {
      let sum  = 0
      state.cartItems.forEach((i) => sum += i.quantity * i.price);
      state.subTotal = sum
      state.shiping = state.subTotal > 1000 ? 200:0
      state.tax = +(state.subTotal * 0.18 ).toFixed()

      state.total = state.subTotal + state.shiping + state.tax
    }
  }
);