import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = -1;

export const indexSlice = createSlice({
  name: "index",
  initialState,
  reducers: {
    setIndex: (state, action) => (state = action.payload),
  },
});

export const { setIndex } = indexSlice.actions;

export default indexSlice;
