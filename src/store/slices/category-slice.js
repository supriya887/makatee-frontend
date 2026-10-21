import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    categories: [],
    menuCategories: [],
  },
  reducers: {
    setCategories(state, action) {
      state.categories = action.payload;
    },
    setMenuCategories(state, action) {
      state.menuCategories = action.payload;
    },
  },
//   extraReducers: (builder) => {
//     builder
//       .addCase(HYDRATE, (state, action) => {
//         return {
//           ...state,
//           ...action.payload.categories,
//         };
//       })
//       .addCase(HYDRATE, (state, action) => {
//         return {
//           ...state,
//           ...action.payload.menuCategories,
//         };
//       });
//   },
});

export const { setCategories, setMenuCategories } = categorySlice.actions;
export default categorySlice.reducer;
