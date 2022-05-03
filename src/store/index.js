import { configureStore } from "@reduxjs/toolkit";
import pizzasReducer from "./pizzas/slice";
import userReducer from "./user/slice";
import restaurantsReducer from "./restaurants/slice";

export default configureStore({
  reducer: {
    pizzas: pizzasReducer,
    user: userReducer,
    restaurants: restaurantsReducer,
  },
});
