import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { HYDRATE } from "next-redux-wrapper";
import {
  addToCartApi,
  cartApi,
  getCartTokenApi,
  removeFromCartApi,
} from "../../api";
import toast from 'react-hot-toast';

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: {},
    cartItems: [],
    cartToken: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // .addCase(HYDRATE, (state, action) => {
      //   return {
      //     ...state,
      //     ...action?.payload?.cart || {},
      //   };
      // })
      .addCase(fetchCartToken.fulfilled, (state, action) => {
        state.cartToken = action.payload;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.cart = action.payload;
      })
      .addCase(addToCartThunk.fulfilled, (state, action) => {})
      .addCase(deleteFromCart.fulfilled, (state, action) => {});
  },
});

export const fetchCartToken = createAsyncThunk("fetchCartToken", async () => {
  const currentCartToken = localStorage.getItem("cart_token");
  const res = await getCartTokenApi({ cart_token: currentCartToken || "" });
  if (res.status == 1) {
    localStorage.setItem("cart_token", res.data.cart_token);
    return res.data.cart_token;
  }
});

export const fetchCart = createAsyncThunk("fetchCart", async (params) => {
  const couponCode = params?.couponCode || "";

  const cart_token = localStorage.getItem("cart_token");
  const res = await cartApi({
    cart_token: cart_token || "",
    coupon_code: couponCode,
  });
  if (res.status == 1) {
    res.error && toast.error(res.error);
    if(res.msg && res.msg != 'Cart Data') toast.success(res.msg);
    return res.data;
  } else {
    res?.error && toast.error(res.error || "Failed to fetch cart");
    return {};  // Return an empty object on failure
  }
});

export const addToCartThunk = createAsyncThunk(
  "addToCartThunk",
  async (params, { dispatch }) => {
    const { productVariantId = "", qty = 1 } = params;

    const cart_token = localStorage.getItem("cart_token");
    const res = await addToCartApi({
      cart_token: cart_token || "",
      product_variant_id: productVariantId,
      qty: qty,
    });

    if (res.status == 1) {
      await dispatch(fetchCart());
      res.msg && toast.success(res.msg);
    } else {
      res.error && toast.error(res.error);
    }
  }
);

export const deleteFromCart = createAsyncThunk(
  "deleteFromCart",
  async (params, { dispatch }) => {
    const { productVariantId = "" } = params;

    const cart_token = localStorage.getItem("cart_token");
    const res = await removeFromCartApi({
      cart_token: cart_token || "",
      product_variant_id: productVariantId,
    });

    if (res.status == 1) {
      await dispatch(fetchCart());
      res.msg && toast.success(res.msg);
    } else {
      res.error && toast.error(res.error);
    }
  }
);

export default cartSlice.reducer;
