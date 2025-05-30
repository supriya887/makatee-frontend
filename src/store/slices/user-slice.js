import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    access_token: null,
  },
  reducers: {
    setAccessToken: (state, action) => {
      state.access_token = action.payload;
    },
  },
});

export const { setAccessToken } = userSlice.actions;
export default userSlice.reducer;
