import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isTheme: "dark",
    contactus_details: {},
  },
  reducers: {
    setIsTheme(state, action) {
      state.isTheme = action.payload;
    },
    setContactUsDetails(state, action) {
      state.contactus_details = action.payload;
    },
  },
});

export const { setIsTheme, setContactUsDetails } = appSlice.actions;
export default appSlice.reducer;
