import { createSlice } from "@reduxjs/toolkit";

export const activemenuSlice = createSlice({
  name: "activemenu",
  initialState: { value: localStorage.getItem("activemenu") },
  reducers: {
    activemenuReducer: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { activemenuReducer } = activemenuSlice.actions;
export default activemenuSlice.reducer;
