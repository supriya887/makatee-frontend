"use client";

import {
  addressListApi,
  paymentGatewayListApi,
  placeOrderApi,
  processPaymentApi,
} from "@/api";
import Layout1 from "@/components/layout/Layout1";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoCreateOutline, IoTrashOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import AddAddressPage from "../address/AddAddressPage";
import toast from "react-hot-toast";
import { useRazorpay } from "react-razorpay";

function CheckoutPage() {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const { error, Razorpay } = useRazorpay();

  const { access_token } = useSelector((state) => state.user);

  const cartData = useSelector((state) => state.cart);
  const cart = cartData?.cart || {};

  const [formValues, setFormValues] = useState({
    address_id: "",
    payment_method_id: "",
  });
  const router = useRouter();

  const [addressFormOpen, setAddressFormOpen] = useState(false);
  const [addressList, setAddressList] = useState([]);
  const [editAddressId, setEditAddressId] = useState("");

  const [isGst, setIsGst] = useState(false);
  const [gstNumber, setGstNumber] = useState("");
  const [businessName, setBusinessName] = useState("");

  const [paymentGatewayList, setPaymentGatewayList] = useState([]);

  useEffect(() => {
    getPaymentGatewayList();
  }, []);

  useEffect(() => {
    async function fetchData() {
      await getAddressListApi();
    }
    fetchData();
  }, []);

  const getPaymentGatewayList = async () => {
    const res = await paymentGatewayListApi();
    if (res?.status == 1) {
      setPaymentGatewayList(res?.data);
      setFormValues((prev) => ({
        ...prev,
        payment_method_id: res?.data[0]?.id,
      }));
    }
  };

  const getAddressListApi = async () => {
    let response = await addressListApi();

    if (response?.status == 1) {
      setAddressList(response?.data?.list);

      if (response?.data?.list.length > 0) {
        setFormValues((prev) => ({
          ...prev,
          address_id: response?.data?.list[0]?.id,
        }));
      }
    } else {
      response?.error && toast.error(response?.error);
    }
  };

  const processOrder = async ({ order_id, pg_order_id, payment_response }) => {
    let res = await processPaymentApi({
      order_id,
      pg_order_id,
      payment_response,
    });

    setIsLoading(false);

    if (res?.status == 1) {
      router.replace("/orders");
    } else {
      res?.error && toast.error(res?.error);
    }
  };

  const placeOrder = async () => {
    setIsLoading(true);
    let res = await placeOrderApi({
      address_id: formValues?.address_id,
      coupon_code: cart?.coupon_code || "",
      payment_method_id: formValues?.payment_method_id,
      business_name: businessName || "",
      gst_number: gstNumber || "",
    });

    if (res?.status == 1) {
      if (res?.code == "111") {
        setIsLoading(false);

        router.push(`/orders`);
      } else if (res?.code == "222") {
        const data = res?.data;
        // const testMode = data?.test_mode || false;
        // console.log(data)

        const options = {
          ...data.razorpay_options,
          handler: async function (response) {
            await processOrder({
              order_id: data?.obi_order_id,
              pg_order_id: response?.razorpay_order_id,
              payment_response: response,
            });
          },
          // key: testMode ? "rzp_test_xzpvhitLeN99CX" : "rzp_test_xzpvhitLeN99CX",
        };

        const rzpay = new Razorpay(options);

        rzpay.on("payment.failed", async (response) => {
          setIsLoading(false);

          if (response?.error) {
            toast.error(response?.error?.description);
          }
          // await processOrder({
          //   order_id: response?.obi_order_id,
          //   pg_order_id: response?.razorpay_order_id,
          //   payment_response: response,
          // });
        });

        rzpay.open();
      } else if (res?.code == "333") {
        let url = res?.data?.payment_url;
        router.push(url);
      }

      res?.msg && toast.success(res?.msg);
      setIsLoading(false);
    } else {
      res?.error && toast.error(res?.error);
    }
    setIsLoading(false);
  };

  let cartTotalPrice = parseFloat(cart?.item_total || 0);
  let discountPrice = parseFloat(cart?.coupon_discount || 0);
  let deliveryPrice = parseFloat(cart?.delivery_amount || 0);
  let taxName = cart?.tax_name || "";
  let deliveryName = cart?.delivery_name || "";
  let CouponCode = cart?.coupon_code || "";
  let taxPrice = parseFloat(cart?.tax_amount || 0);
  let grandTotalPrice = parseFloat(cart?.grand_total || 0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Layout1>
      <section className="add-addresses-section section-space">
        <div className="container ">
          <div className="row ">
            <div className="col-12">
              <div className="tab-cart">
                <a
                  onClick={() => router.push(`/cart`)}
                  className="tab common-btn "
                >
                  Cart
                </a>
                <a
                  onClick={() => {
                    access_token
                      ? router.push("/checkout")
                      : router.push(`/login?returnUrl=cart`);
                  }}
                  className="tab common-btn active"
                >
                  Checkout
                </a>
                {/* <a
                  href={access_token ? `/payment-method` : `/login`}
                  className="tab common-btn"
                >
                  Payment
                </a> */}
              </div>
            </div>
          </div>
          <div className="add-address-box-outer">
            <div className="row">
              <div className="col-12 col-md-8">
                {addressFormOpen ? (
                  <AddAddressPage
                    addressId={editAddressId}
                    onSuccess={() => {
                      getAddressListApi();
                      setEditAddressId("");
                      setAddressFormOpen(false);
                    }}
                    onCancel={() => {
                      setEditAddressId("");
                      setAddressFormOpen(false);
                    }}
                  />
                ) : (
                  <div className="add-address-box">
                    <div className="address-box-head">
                      <h5> Delivery Address</h5>
                      <a
                        onClick={() => setAddressFormOpen(true)}
                        className="common-btn add-address"
                      >
                        Add a new delivery address +
                      </a>
                    </div>

                    <div className="cart-left">
                      {addressList?.length > 0 ? (
                        <ul>
                          {addressList?.map((item, index) => {
                            return (
                              <li key={index}>
                                <div
                                  onClick={() =>
                                    setFormValues((prev) => ({
                                      ...prev,
                                      address_id: item?.id,
                                    }))
                                  }
                                  className="form-check"
                                >
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    id={`address_id-${item.id}`}
                                    name="address_id"
                                    value={item.id}
                                    checked={formValues.address_id == item.id}
                                    onChange={handleInputChange}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor={`address_id-${item.id}`}
                                  >
                                    <strong>
                                      {item?.shipping_first_name}{" "}
                                      {item?.shipping_last_name} (
                                      {item?.address_type}){" "}
                                    </strong>
                                    <br />
                                    +91 {item?.shipping_phone}
                                    <br />
                                    {item?.shipping_address_1},{" "}
                                    {item?.shipping_address_2},{" "}
                                    {item?.shipping_city},{" "}
                                    {item?.shipping_state?.state_name},{" "}
                                    {item?.shipping_country?.country_name},{" "}
                                    {item?.shipping_pincode}
                                  </label>
                                  <div>
                                    <a
                                      onClick={() => {
                                        setEditAddressId(item?.id);
                                        setAddressFormOpen(true);
                                      }}
                                      className="common-link"
                                    >
                                      Edit
                                    </a>

                                    {/* <a
                                onClick={() => deleteAddress(item?.id)}
                                className="common-link"
                              >
                                {" "}
                                Remove <IoTrashOutline />
                              </a> */}
                                  </div>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      ) : (
                        <p>No Address Added yet</p>
                      )}
                      <div className="gst-box">
                        <div className="d-flex mb-3">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value={isGst}
                              onChange={() => setIsGst(!isGst)}
                            />
                            <label className="form-check-label">
                              <h6>Use GST Invoice?</h6>
                            </label>
                          </div>
                        </div>

                        {isGst ? (
                          <div className="col-lg-6">
                            <label htmlFor="">Enter GST Number</label>
                            <div className="mb-3">
                              <input
                                type="text"
                                className="form-control"
                                value={gstNumber}
                                maxLength={15}
                                placeholder="Enter GST Number (e.g. 27AAPFU0939F1ZV)"
                                onChange={(e) => {
                                  const value = e.target.value.toUpperCase();
                                  if (/^[A-Z0-9]*$/.test(value)) {
                                    setGstNumber(value);
                                  }
                                }}
                              />

                              {/* </div> */}
                            </div>

                            <label htmlFor="">Enter Business Name</label>
                            <div>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Business Name (e.g. Business Name Pvt Ltd)"
                                value={businessName || ""}
                                onChange={(e) =>
                                  setBusinessName(e.target.value)
                                }
                              />

                              {/* </div> */}
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="col-12 col-md-4">
                <div className="cart-right">
                  <div className="priceblock-base-container">
                    <div className="priceblock-base-priceheader">
                      <strong>
                        PRICE DETAILS ({cart?.item_list?.length || 0} Items)
                      </strong>
                    </div>
                    <div
                      className="pricebreakup-base-ordersummary"
                      id="priceblock"
                    >
                      <div className="pricedetail-base-row ">
                        <ul>
                          <li>
                            <span>Total</span>{" "}
                            <span>₹ {cartTotalPrice.toFixed(2) || 0}</span>
                          </li>
                          {/* <li>
                          <span>Discount</span> <span>₹ 39,998</span>
                        </li> */}
                          <li>
                            <span>
                              Coupon Discount <br />{" "}
                              {CouponCode ? `(${CouponCode})` : ""}
                            </span>{" "}
                            <span>- ₹ {discountPrice.toFixed(2) || 0}</span>
                          </li>
                          {taxPrice > 0 ? (
                            <li>
                              <span>TAX</span>
                              <span className="text-end">
                                {taxPrice.toFixed(2) || 0}
                              </span>
                            </li>
                          ) : null}
                          <li>
                            <span>
                              Shipping
                              <br />
                              {deliveryName ? `(${deliveryName})` : ""}
                            </span>
                            <span>{deliveryPrice.toFixed(2) || 0}</span>
                          </li>
                        </ul>
                      </div>
                      <div className="pricedetail-base-total mt-4">
                        <div className="pricedetail-base-row ">
                          <ul>
                            <li>
                              <h5>Total Amount </h5>
                              <h5>₹ {grandTotalPrice.toFixed(2) || 0}</h5>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h5 className="mt-5">
                    <strong>Payment Method</strong>
                  </h5>
                  {/* <br /> */}
                  <div className="payment-choice-box">
                    <ul>
                      {paymentGatewayList?.map((item, index) => {
                        return (
                          <li key={index}>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                id={`payment_method_id-${item.id}`}
                                name="payment_method_id"
                                value={item.id}
                                checked={
                                  formValues.payment_method_id == item.id
                                }
                                onChange={handleInputChange}
                              />
                              <label
                                className="form-check-label"
                                htmlFor={`payment_method_id-${item.id}`}
                              >
                                <strong>{item?.payment_gateway_name}</strong>
                              </label>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <a
                    onClick={placeOrder}
                    className="common-btn common-btn-purple mt-3"
                  >
                    Pay now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout1>
  );
}

export default CheckoutPage;
