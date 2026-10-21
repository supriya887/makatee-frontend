"use client";

import Layout1 from "@/components/layout/Layout1";
import {
  addToCartThunk,
  deleteFromCart,
  fetchCart,
} from "@/store/slices/cart-slice";
import { TROPHY_HOME_ROUTE } from "@/utils/constants";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoArrowBackSharp, IoTrashOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

function CartPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
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
    <Layout1>
      <section className="cart-section section-space">
        <div className="container ">
          <div className="row ">
            <div className="col-12">
              <div className="tab-cart">
                <a href={`/cart`} className="tab common-btn active">
                  Cart
                </a>
                <a
                  href={cartItems?.length > 0 ? access_token ? "/checkout" : `/login` : null}
                  className="tab common-btn"
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
          <div className="cart-list">
            {cartItems?.length > 0 ? (
              <div className="row">
                <div className="col-12 col-md-12 col-lg-12 col-xl-8">
                  <div className="cart-left">
                    <div className="cart-box">
                      <div className="item-add-success">
                        Your item is added to cart successfully!!
                      </div>
                      {cartItems.map((el, i) => {
                        return (
                          <div key={i} className=" cart-product-list">
                            <div className="row item">
                              <div className="close">
                                <a
                                  style={{ position: "absolute", right: 0 , top: 25 }}
                                  onClick={() =>
                                    dispatch(
                                      deleteFromCart({
                                        productVariantId:
                                          el?.product_variant_id,
                                      })
                                    )
                                  }
                                >
                                  {/* <ion-icon name="trash-outline" /> */}
                                  <IoTrashOutline size={22} />
                                </a>
                              </div>
                              {/* <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue=""
                                  id="flexCheckDefault1"
                                />
                              </div> */}
                              <div className="col-3 col-sm-3 col-lg-2 col-xl-2 item-img p-0">
                              <a
                                href={`/product/${el?.variant?.product?.slug}/${el?.variant?.slug}`}
                                
                              >
                                <img
                                  src={el?.variant?.image_path}
                                  className="img-fluid"
                                  alt=""
                                />
                              </a></div>
                              <div className="col-8 col-sm-4 col-lg-2 col-xl-2 p-0 item-content">
                                <p> {el?.variant?.product?.product_name}</p>
                                <div className="d-flex">
                                  <div className="box size mr-2">
                                    Variant :
                                    <div> {el?.variant?.variant_name}</div>
                                  </div>
                                  {/* <div className="box color mr-2">
                                    {" "}
                                    Color :
                                    <ul>
                                      <li className="swatch black">
                                        <input
                                          type="radio"
                                          name="swatch_demo"
                                          id="swatch_1"
                                          defaultValue={1}
                                          defaultChecked=""
                                        />
                                      </li>
                                    </ul>
                                  </div> */}
                                </div>
                                {el?.custom_text ? (
                                  <div className="mt-2">
                                    Text: {el?.custom_text}
                                  </div>
                                ) : null}
                              </div>
                              <div className="col-2 col-sm-0 d-block d-sm-none" ></div>
                              <div className="col-12 col-sm-2 col-md-2 col-lg-2 col-xl-2 p-0">
                                <div className="">
                                  <h4 className="price mb-0">
                                    {" "}
                                    ₹ {el?.variant?.saleprice}
                                  </h4>
                                  {el?.variant?.discount > 0 ? (
                                    <span className="slash-price">
                                      ₹ {el?.variant?.price}
                                    </span>
                                  ) : null}
                                </div>
                              </div>
                              <div className="col-12 col-sm-3 col-lg-2 col-xl-2 p-0">
                                <div className="quantity-box">
                                  <div className="quantity">
                                    <div className="input-group  align-items-center">
                                      <input
                                        onClick={() => {
                                          dispatch(
                                            addToCartThunk({
                                              productVariantId:
                                                el?.product_variant_id,
                                              qty: el?.qty - 1,
                                            })
                                          );
                                        }}
                                        type="button"
                                        defaultValue="-"
                                        className="qty-btn button-minus"
                                        data-field="quantity"
                                      />
                                      <input
                                        type="number"
                                        step={1}
                                        max={10}
                                        value={el?.qty}
                                        size={"5"}
                                        readOnly
                                        name="quantity"
                                        className="quantity-field text-center"
                                      />
                                      <input
                                        type="button"
                                        defaultValue="+"
                                        className="qty-btn button-plus"
                                        data-field="quantity"
                                        onClick={() => {
                                          dispatch(
                                            addToCartThunk({
                                              productVariantId:
                                                el?.product_variant_id,
                                              qty: el?.qty + 1,
                                            })
                                          );
                                        }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-12 col-md-2 col-lg-2 col-xl-2 p-0">
                                <div className="total-amt">
                                  <h4 className="price mb-0">
                                    {" "}
                                    <strong>₹ {el?.total_price}</strong>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                      <div className="mobile-none">
                        <div className="common-btn continue-shopping mt-4">
                          {/* <ion-icon name="arrow-back-sharp" /> */}
                          <IoArrowBackSharp size={20} />
                          <a href={`/`}> continue shopping</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
                            <li>
                              <span>
                                Discount <br />{" "}
                                {CouponCode ? `(${CouponCode})` : ""}
                              </span>{" "}
                              <span>- ₹ {discountPrice.toFixed(2) || 0}</span>
                            </li>
                            {/* <div id="apply-coupon-box" className="collapse in">
                              <div className="d-flex">
                                {" "}
                                <input
                                  type="text"
                                  className="form-control"
                                  id="exampleInputName"
                                  aria-describedby="nameHelp"
                                  placeholder="Enter Coupon Code"
                                />
                                <a
                                  href="#"
                                  className="common-btn common-btn-purple"
                                  aria-label="Use "
                                >
                                  <span className="">Use </span>
                                </a>
                              </div>
                            </div> */}
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
                      <a
                        onClick={() => router.push("/checkout")}
                        className="common-btn common-btn-purple mt-3"
                      >
                        Check Out
                      </a>
                    ) : (
                      <a
                        href={`/login?returnUrl=cart`}
                        className="common-btn common-btn-purple mt-3"
                      >
                        Login
                      </a>
                    )}
                  </div>
                </div>
                <div className="col-12 cart-left desktop-none">
                  <div className="common-btn continue-shopping mt-4">
                    {/* <ion-icon name="arrow-back-sharp" /> */}
                    <IoArrowBackSharp />
                    <a href={`/`}> continue shopping</a>
                  </div>
                </div>
              </div>
            ) : (
              <p>No Product Added to Cart</p>
            )}
          </div>
        </div>
      </section>
    </Layout1>
  );
}

export default CartPage;
