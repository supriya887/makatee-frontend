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

export const resetPasswordApi = async (payload) => {
  try {    
    const res = await api.post("auth/reset_password", payload);
    return res.data;
  } catch (error) {
    console.log("API Exception [resetPasswordAPI]: ", error.response);
  }
};

export const confirmPasswordApi = async (payload) => {
  try {    
    const res = await api.post("auth/update_password", payload);
    return res.data;
  } catch (error) {
    console.log("API Exception [confirmPasswordApi]: ", error.response);
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

// home

export const homeApi = async (payload) => {
  try {
    const res = await api.get("home", { params: payload });
    return res.data;
  } catch (error) {
    console.log("API Exception Home: ", error.response);
  }
};

// video
export const videoApi = async (payload) => {
  try {
    const res = await api.get("home/video", { params: payload });
    return res.data;
  } catch (error) {
    console.log("API Exception Video: ", error.response);
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

export const filterListApi = async (payload) => {
  try {
    const response = await api.get("product/filter_list", { params: payload });
    return response.data;
  } catch (error) {
    console.log("API Exception Product Filter: ", error.response);
  }
};

export const searchProductListApi = async (payload) => {
  try {
    const res = await api.get("product/search", { params: payload });
    return res.data;
  } catch (error) {
    console.log("API Exception Search Product List: ", error.response);
  }
};

// profile

export const editProfileApi = async (payload) => {
  try {
    // await Token()
    let response = await api.get("profile/index", { params: payload });
    return response.data;
  } catch (error) {
    console.log("API Exception Edit Profile: ", error.response);
  }
};

export const updateProfileApi = async (payload) => {
  try {
    let response = await api.post("profile/update", payload);
    return response.data;
  } catch (error) {
    console.log("API Exception Update Profile: ", error.response);
  }
};

export const profileDashboardApi = async (payload) => {
  try {
    // await Token()
    let response = await api.get("profile/dashboard", { params: payload });
    return response.data;
  } catch (error) {
    console.log("API Exception Dashboard Profile: ", error.response);
  }
};

// change password

export const updatePasswordApi = async (payload) => {
  try {
    let response = await api.post("profile/update_password", payload);
    return response.data;
  } catch (error) {
    console.log("API Exception Update Password: ", error.response);
  }
};

// address
export const addressListApi = async (payload) => {
  try {
    const response = await api.get("address/list", { params: payload });
    return response.data;
  } catch (error) {
    console.log("API Exception Address List: ", error.response);
  }
};

export const getAddressEditApi = async (payload) => {
  try {
    const response = await api.get("address/get", { params: payload });
    return response.data;
  } catch (error) {
    console.log("API Exception Address Edit: ", error.response);
  }
};

export const saveAddressApi = async (payload) => {
  try {
    const response = await api.post("address/save", payload);
    return response.data;
  } catch (error) {
    console.log("API Exception Address Save: ", error.response);
  }
};

export const deleteAddressApi = async (payload) => {
  try {
    const response = await api.post("address/delete", payload);
    return response.data;
  } catch (error) {
    console.log("API Exception Address Delete: ", error.response);
  }
};

// payment

export const processPaymentApi = async (payload) => {
  try {
   
    let response = await api.post("checkout/process_payment", payload);
    return response.data;
  } catch (error) {
    console.log("API Exception Process Payment: ", error);
  }
};

export const placeOrderApi = async (payload) => {
  try {
   
    let response = await api.post("checkout/place_order", payload);
    return response.data;
  } catch (error) {
    console.log("API Exception Place Order: ", error);
  }
};

// contact us

export const contactUsApi = async (payload) => {
  try {
    let response = await api.post("contact_us", payload);
    return response.data;
  } catch (error) {
    console.log("API Exception Contact us: ", error.response);
  }
};

export const getContactUsDetailApi = async (payload) => {
  try {
    let response = await api.get("pages/contact_details", { params: payload });
    return response.data;
  } catch (error) {
    console.log("API Exception Contact us Detail: ", error.response);
  }
};

/// order

export const getOrderListApi = async (payload) => {
  try {
    let response = await api.get("order/list", { params: payload });
    return response.data;
  } catch (error) {
    console.log("API Exception Order list: ", error.response);
  }
};

export const getOrderDetailApi = async (payload) => {
  try {
    let response = await api.get("order/details", { params: payload });
    return response.data;
  } catch (error) {
    console.log("API Exception Order Detail: ",error.response);
  }
};

export const getOrderCancelApi = async (payload) => {
  try {
    let response = await api.post("order/cancel", payload);
    return response.data;
  } catch (error) {
    console.log("API Exception Order Cancel: ", error.response);
  }
};

export const reviewOrderApi = async (payload) => {
  try {
    let response = await api.post("order/review", payload);
    return response.data;
  } catch (error) {
     console.log("API Exception Order Review: ", error.response);
  }
};

// pages

export const aboutUsApi = async (payload) => {
  try {
    let response = await api.get("pages/about_us", { params: payload });
    return response.data;
  } catch (error) {
    console.log("API Exception About us: ", error.response);
  }
};

export const privacyPolicyApi = async (payload) => {
  try {
    let response = await api.get("pages/privacy_policy", { params: payload });
    return response.data;
  } catch (error) {
    console.log("API Exception Privacy Policy: ", error.response);
  }
};

export const returnPolicyApi = async (payload) => {
  try {
    let response = await api.get("pages/refund_policy", { params: payload });
    return response.data;
  } catch (error) {
    console.log("API Exception Return Policy: ", error.response);
  }
};

export const shippingPolicyApi = async (payload) => {
  try {
    let response = await api.get("pages/shipping_policy", { params: payload });
    return response.data;
  } catch (error) {
    console.log("API Exception Shipping Policy: ", error.response);
  }
};

export const termsAndConditionApi = async (payload) => {
  try {
    let response = await api.get("pages/terms_and_conditions", {
      params: payload,
    });
    return response.data;
  } catch (error) {
    console.log("API Exception Terms and Condition: ", error.response);
  }
};

export const deliveryInformationApi = async (payload) => {
  try {
    let response = await api.get("pages/delivery_information", { params: payload });
    return response.data;
  } catch (error) {
    console.log("API Exception Shipping Policy: ", error.response);
  }
};

export const satisfactionGuaranteeApi = async (payload) => {
  try {
    let response = await api.get("pages/satisfaction_guarantee", { params: payload });
    return response.data;
  } catch (error) {
    console.log("API Exception Shipping Policy: ", error.response);
  }
};

// common
export const getStateListApi = async (payload) => {
  try {
    let response = await api.get("common/state_list", { params: payload });
    return response.data;
  } catch (error) {
    console.log("API Exception State List: ", error.response);
  }
};

export const getCountryListApi = async (payload) => {
  try {
    const response = await api.get("common/country_list", { params: payload });
    return response.data;
  } catch (error) {
    console.log("API Exception Country List: ", error.response);
  }
};

export const paymentGatewayListApi = async (payload) => {
  try {
    const response = await api.get("common/payment_gateway_list", {
      params: payload,
    });
    return response.data;
  } catch (error) {
    console.log("API Exception Payment Gateway List: ", error.response);
  }
};

// upload files

export const uploadProfileFilesApi = async (payload) => {
  try {
    const response = await api.post("/common/uploadprofilepic", payload, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  } catch (error) {
    console.error("Common Profile Upload Files API error:", error);
  }
};

export const uploadFilesApi = async (payload) => {
  try {
    const response = await api.post("/common/uploadfile", payload, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  } catch (error) {
    console.error("Common Upload Files API error:", error);
  }
};

