import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    access_token: null,
    user_data: null,
  },
  reducers: {
    setAccessToken: (state, action) => {
      state.access_token = action.payload;
    },
    setUserData: (state, action) => {
      state.user_data = action.payload;
    },
  },
});

export const { setAccessToken, setUserData } = userSlice.actions;
export default userSlice.reducer;
