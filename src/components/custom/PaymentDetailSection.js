"use client";

import { fetchCart } from "@/store/slices/cart-slice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function PaymentDetailSection({ buttonHref, buttonTitle }) {
  const [couponCode, setCouponCode] = useState("");

  const dispatch = useDispatch();

  const { access_token } = useSelector((state) => state.user);

  const cartData = useSelector((state) => state.cart);
  const cart = cartData?.cart || {};

  const cartItems = cart?.item_list || [];

  let currencySymbol = cart?.currency?.html_symbol;

  let cartTotalPrice = parseFloat(cart?.item_total || 0);
  let discountPrice = parseFloat(cart?.coupon_discount || 0);
  let deliveryPrice = parseFloat(cart?.delivery_amount || 0);
  let taxName = cart?.tax_name || "";
  let deliveryName = cart?.delivery_name || "";
  let CouponCode = cart?.coupon_code || "";
  let taxPrice = parseFloat(cart?.tax_amount || 0);
  let grandTotalPrice = parseFloat(cart?.grand_total || 0);

  return (
    <div className="col-12 col-md-12 col-lg-12 col-xl-4">
      <div className="cart-right">
        <div className="coupon-apply">
          <input
            // className="form-control"

            value={couponCode || cart?.couponCode || ""}
            onChange={(e) => {
              setCouponCode(e.target.value);
            }}
            type="text"
            placeholder="Insert your Coupon Code"
          />
          <a
            onClick={(e) => {
              e.preventDefault();
              if (cart?.coupon_code) {
                setCouponCode("");
                dispatch(fetchCart());
              } else {
                dispatch(
                  fetchCart({
                    couponCode,
                  })
                );
              }
            }}
            className="common-btn common-btn-purple"
          >
            {cart?.coupon_code ? "Remove" : "Apply"}
          </a>
        </div>
        <div className="priceblock-base-container">
          <div className="priceblock-base-priceheader">
            <strong>
              PRICE DETAILS ({cart?.item_list?.length || 0} Items)
            </strong>
          </div>
          <div className="pricebreakup-base-ordersummary" id="priceblock">
            <div className="pricedetail-base-row ">
              <ul>
                <li>
                  <span>Total</span>{" "}
                  <span>₹ {cartTotalPrice.toFixed(2) || 0}</span>
                </li>
                <li>
                  <span>
                    Discount <br /> {CouponCode ? `(${CouponCode})` : ""}
                  </span>{" "}
                  <span>₹ {discountPrice.toFixed(2) || 0}</span>
                </li>

                {taxPrice > 0 ? (
                  <li>
                    <span>TAX</span>
                    <span className="text-end">{taxPrice.toFixed(2) || 0}</span>
                  </li>
                ) : null}

                <li>
                  <span>
                    Shipping <br />
                    {deliveryName ? `(${deliveryName})` : ""}
                    {/* <small>Free shipping for Makateers</small>{" "} */}
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
        </div>{" "}
        {access_token ? (
          <a href={buttonHref} className="common-btn common-btn-purple mt-3">
            {buttonTitle}
          </a>
        ) : (
          <a href={`/login`} className="common-btn common-btn-purple mt-3">
            Login
          </a>
        )}
      </div>
    </div>
  );
}

export default PaymentDetailSection;
