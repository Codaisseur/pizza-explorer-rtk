import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Helva",
  id: 42,
};

export const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {},
});

export const {} = userSlice.actions;

export default userSlice.reducer;
