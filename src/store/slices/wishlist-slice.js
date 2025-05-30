import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { toggleWishlistApi, wishlistApi } from "../../api";
import toast from "react-hot-toast";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlistItems: [],
  },
  reducers: {
    addToWishlist(state, action) {},
    deleteFromWishlist(state, action) {},
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      return {
        ...state,
        ...action.payload.wishlistItems,
      };
    });
    builder.addCase(fetchWishlist.fulfilled, (state, action) => {
      state.wishlistItems = action.payload;
    });
    builder.addCase(toggleWishlist.fulfilled, (state, action) => {});
  },
});

export const fetchWishlist = createAsyncThunk("fetchWishlist", async () => {
  const res = await wishlistApi();
  if (res.status == 1) {
    return res?.data?.list || [];
  }
});

export const toggleWishlist = createAsyncThunk(
  "toggleWishlist",
  async (params, { dispatch }) => {
    const token = localStorage.getItem("n21-access-token");
    console.log("t", token);
    if (!token) {
      toast.warn("Please login to see wishlist");
      return;
    }

    const { productId, productVariantId } = params;
    const res = await toggleWishlistApi({
      product_id: productId,
      product_variant_id: productVariantId,
    });

    if (res.status == 1) {
      console.log(res);
      await dispatch(fetchWishlist());
      res.msg && toast.success(res.msg);
    }
  }
);

export const { deleteFromWishlist, addToWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
