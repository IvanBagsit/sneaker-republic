import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./redux.js";

const store = configureStore({
    reducer: {
        cartSlice: cartSlice,
    },
});

export default store;
