import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isTheme: "dark",
  },
  reducers: {
    setIsTheme(state, action) {
      state.isTheme = action.payload;
    },
  },
});

export const { setIsTheme } = appSlice.actions;
export default appSlice.reducer;
