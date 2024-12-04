import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reduxSlice/cartSlice";
import userReducer from "./reduxSlice/userSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
});

export default appStore;
