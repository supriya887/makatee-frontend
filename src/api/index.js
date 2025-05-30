import api from "./config";

export const loginApi = async (payload) => {
  try {    
    const res = await api.post("auth/login", payload);
    return res.data;
  } catch (error) {
    console.log("API Exception [loginAPI]: ", error.response);
  }
};

export const registerApi = async (payload) => {
  try {    
    const res = await api.post("auth/register", payload);
    return res.data;
  } catch (error) {
    console.log("API Exception [registerAPI]: ", error.response);
  }
};

// cart

export const getCartTokenApi = async (payload) => {
  try {
    const response = await api.post("cart/cart_token", payload);
    return response.data;
  } catch (error) {
     console.log("API Exception Get Cart Token: ", error.response);
  }
};

export const cartApi = async (payload) => {
  try {
    const response = await api.post("cart/index", payload);
    return response.data;
  } catch (error) {
     console.log("API Exception Cart: ", error.response);
  }
};

export const addToCartApi = async (payload) => {
  try {
    const response = await api.post("cart/add_to_cart", payload);
    return response.data;
  } catch (error) {
     console.log("API Exception Add To Cart: ", error.response);
  }
};

export const removeFromCartApi = async (payload) => {
  try {
    const response = await api.post("cart/remove_item", payload);
    return response.data;
  } catch (error) {
     console.log("API Exception Remove From Cart: ", error.response);
  }
};

// wishlist

export const wishlistApi = async (payload) => {
  try {
    let response = await api.get("wishlist/list", {
      params: payload,
    });
    return response.data;
  } catch (error) {
     console.log("API Exception Wishlist List: ", error.response);
  }
};

export const toggleWishlistApi = async (payload) => {
  try {
    let response = await api.post("wishlist/toggle", payload);
    return response.data;
  } catch (error) {
     console.log("API Exception Toggle WishList: ", error.response);
  }
};

// category 
export const menuCategoryApi = async (payload) => {
  try {
    const res = await api.get("common/menuCategory", { params: payload });
    return res.data;
  } catch (error) {
    console.log("API Exception Menu Category: ", error.response);
  }
};

// product

export const productListApi = async (payload) => {
  try {
    const res = await api.get("product/list", { params: payload });
    return res.data;
  } catch (error) {
    console.log("API Exception Product List: ", error.response);
  }
};

export const productDetailsApi = async (payload) => {
  try {
    const response = await api.get("product/details", { params: payload });
    return response.data;
  } catch (error) {
   console.log("API Exception Product Detail: ", error.response);
  }
};