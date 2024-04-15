import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./Slices/CartSlice";

// list slices in the store in front of reducer
export const store = configureStore({
    reducer:{
        cart: CartSlice.reducer,
    }
});