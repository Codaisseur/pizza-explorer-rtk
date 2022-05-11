import { configureStore } from "@reduxjs/toolkit";
import pizzasReducer from "./pizzas/slice";
import userReducer, { name } from "./user/slice";

export default configureStore({
  reducer: {
    pizzas: pizzasReducer,
    user: userReducer,
  },
});
