"use client";

import { paymentGatewayListApi } from "@/api";
import Layout1 from "@/components/layout/Layout1";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function PaymentMethodPage() {
  const router = useRouter();

  const [paymentGatewayList, setPaymentGatewayList] = useState([]);

  const { access_token } = useSelector((state) => state.user);

  const cartData = useSelector((state) => state.cart);
  const cart = cartData?.cart || {};

  const [payment_method, set_payment_method] = useState("");

  useEffect(() => {
    getPaymentGatewayList();
  }, []);

  const getPaymentGatewayList = async () => {
    const res = await paymentGatewayListApi();
    if (res.status == 1) {
      setPaymentGatewayList(res.data);
      set_payment_method(res?.data[0]?.id);
    }
  };

  let cartTotalPrice = parseFloat(cart?.item_total || 0);
  let discountPrice = parseFloat(cart?.coupon_discount || 0);
  let deliveryPrice = parseFloat(cart?.delivery_amount || 0);
  let taxName = cart?.tax_name || "";
  let deliveryName = cart?.delivery_name || "";
  let CouponCode = cart?.coupon_code || "";
  let taxPrice = parseFloat(cart?.tax_amount || 0);
  let grandTotalPrice = parseFloat(cart?.grand_total || 0);

  return (
    <Layout1>
      <section className="add-addresses-section section-space">
        <div className="container ">
          <div className="row ">
            <div className="col-12">
              <div className="tab-cart">
                <a href="/cart" className="tab common-btn ">
                  Cart
                </a>
                <a
                  href={access_token ? "/checkout" : `/login`}
                  className="tab common-btn"
                >
                  Checkout
                </a>
                <a
                  href={access_token ? "/payment-method" : `/login`}
                  className="tab common-btn active"
                >
                  Payment
                </a>
              </div>
            </div>
          </div>
          <div className="add-address-box bg-white">
            <div className="row ">
              <div className="col-12 col-md-8">
                <h5>
                  <strong>Payment Method</strong>
                </h5>
                <br />
                <div className="payment-choice-box">
                  <ul>
                    {paymentGatewayList?.map((item, index) => {
                      return (
                        <li key={index}>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name={item?.id}
                              id={item?.id}
                              checked={
                                payment_method == item?.id ? true : false
                              }
                              onChange={() => set_payment_method(item?.id)}
                            />
                            <label
                              className="form-check-label"
                              htmlFor={item?.id}
                            >
                              <strong>{item?.payment_gateway_name}</strong>
                            </label>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
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
                  <a href="" className="common-btn common-btn-purple mt-3">
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

export default PaymentMethodPage;
