import { createSlice } from "@reduxjs/toolkit";

// must define name, initial state and reducers(functions) in a slice
export const CartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        add:(state,action) => {
            state.push(action.payload);
        },
        remove:(state,action) => {
            return state.filter((item) => item.id !== action.payload);
        },
    }
});

// must export destructured reducer functions
export const {add, remove} = CartSlice.actions;
// must export resucer
export default CartSlice.reducer;