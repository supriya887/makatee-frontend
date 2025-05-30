"use client";

import Layout1 from "@/components/layout/Layout1";
import { addToCartThunk, deleteFromCart } from "@/store/slices/cart-slice";
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

  const cartData = useSelector((state) => state.cart);
  const cart = cartData?.cart || {};
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    let t = localStorage.getItem("makatee-access-token");
    setAccessToken(t);
  }, []);

  const cartItems = cart?.item_list || [];
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
                <a href="/address" className="tab common-btn">
                  Address
                </a>
                <a href={`/payment-method`} className="tab common-btn">
                  Payment
                </a>
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
                          <div key={i} className=" cart-product-list p-3">
                            <div className="row item">
                              <div className="close">
                                <a
                                  style={{ position: "absolute", right: 0 }}
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
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue=""
                                  id="flexCheckDefault1"
                                />
                              </div>
                              <a
                                href={`/products/${el?.variant?.product?.category?.slug}/${el?.variant?.product?.slug}`}
                                className="col-6 col-md-2 col-lg-2 col-xl-2 item-img p-0"
                              >
                                <img
                                  src={el?.variant?.image_path}
                                  className="img-fluid"
                                  alt=""
                                />
                              </a>
                              <div className="col-6 col-md-2 col-lg-2 col-xl-2 p-0 item-content">
                                <p> {el?.variant?.product?.product_name}</p>
                                <div className="d-flex">
                                  <div className="box size mr-2">
                                    Size :<div> 80mm</div>
                                  </div>
                                  <div className="box color mr-2">
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
                                  </div>
                                </div>
                              </div>
                              <div className="col-6 col-md-2 col-lg-2 col-xl-2 p-0">
                                <div className="product-amt">
                                  <h4 className="price mb-0">
                                    {" "}
                                    <strong>₹ {el?.variant?.saleprice}</strong>
                                  </h4>
                                  {el?.variant?.discount > 0 ? (
                                    <span className="slash-price">
                                      ₹ {el?.variant?.price}
                                    </span>
                                  ) : null}
                                </div>
                              </div>
                              <div className="col-6 col-md-2 col-lg-2 col-xl-2 p-0">
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
                                <div className="product-amt total-amt">
                                  <h4 className="price mb-0">
                                    {" "}
                                    <strong>₹ 8767</strong>
                                  </h4>
                                  <span className="slash-price">₹ 1500</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                      <div className="mobile-none">
                        <div className="common-btn continue-shopping mt-2">
                          {/* <ion-icon name="arrow-back-sharp" /> */}
                          <IoArrowBackSharp size={20} />
                          <a href={`/${TROPHY_HOME_ROUTE}`}>
                            {" "}
                            continue shopping
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-12 col-lg-12 col-xl-4">
                  <div className="cart-right">
                    <div className="coupon-apply">
                      <input
                        type="text"
                        placeholder="Insert your Coupon Code"
                      />
                      <a
                        href={`/checkout`}
                        className="common-btn common-btn-purple"
                      >
                        Apply
                      </a>
                    </div>
                    <div className="priceblock-base-container">
                      <div className="priceblock-base-priceheader">
                        <strong>PRICE DETAILS (28 Items)</strong>
                      </div>
                      <div
                        className="pricebreakup-base-ordersummary"
                        id="priceblock"
                      >
                        <div className="pricedetail-base-row ">
                          <ul>
                            <li>
                              <span>Total MRP</span> <span>₹ 74,703</span>
                            </li>
                            <li>
                              <span>Discount on MRP</span> <span>₹ 39,998</span>
                            </li>
                            <div id="apply-coupon-box" className="collapse in">
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
                            </div>
                            <li>
                              <span>Platform Fee</span>
                              <span> ₹ 74,703</span>
                            </li>
                            <li>
                              <span>
                                Shipping Fee
                                <br />
                                <small>Free shipping for Makateers</small>{" "}
                              </span>
                              <span>FREE</span>
                            </li>
                          </ul>
                        </div>
                        <div className="pricedetail-base-total mt-4">
                          <div className="pricedetail-base-row ">
                            <ul>
                              <li>
                                <h5>Total Amount </h5>
                                <h5>₹ 34,725</h5>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                    <a
                      href={`/checkout`}
                      className="common-btn common-btn-purple mt-3"
                    >
                      Check Out
                    </a>
                  </div>
                </div>
                <div className="col-12 cart-left desktop-none">
                  <div className="common-btn continue-shopping mt-4">
                    {/* <ion-icon name="arrow-back-sharp" /> */}
                    <IoArrowBackSharp />
                    <a href={`/${TROPHY_HOME_ROUTE}`}> continue shopping</a>
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
