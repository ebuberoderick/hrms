import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {},
  },
  reducers: {
    addData: (state, action) => {
      state.value = action.payload;
    },
    accessCode: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addData, accessCode } = userSlice.actions;

export default userSlice.reducer;
