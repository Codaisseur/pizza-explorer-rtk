import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Helva",
  id: 42,
  favorites: [67283, 357311],
};

export const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    toggleFavorites: (state, action) => {
      console.log(action);
    },
  },
});

export const { toggleFavorites } = userSlice.actions;

export default userSlice.reducer;
