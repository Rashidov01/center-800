import { createSlice } from "@reduxjs/toolkit";

export const classSlice = createSlice({
  name: "class",
  initialState: { value: "" },
  reducers: {
    classReducer: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { classReducer } = classSlice.actions;
export default classSlice.reducer;
