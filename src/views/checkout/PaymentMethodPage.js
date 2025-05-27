"use client";

import Layout1 from "@/components/layout/Layout1";
import { useRouter } from "next/navigation";
import React from "react";

function PaymentMethodPage() {
  const router = useRouter();
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
                <a href="/address" className="tab common-btn">
                  Address
                </a>
                <a href="/payment-method" className="tab common-btn active">
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
                    <li>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios1"
                          defaultValue="option1"
                          defaultChecked=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="exampleRadios1"
                        >
                          <strong>Pay By Razor Pay</strong>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios1"
                          defaultValue="option1"
                          defaultChecked=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="exampleRadios1"
                        >
                          <strong>Credit/Debit Card </strong>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios1"
                          defaultValue="option1"
                          defaultChecked=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="exampleRadios1"
                        >
                          <strong>Net Banking</strong>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios1"
                          defaultValue="option1"
                          defaultChecked=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="exampleRadios1"
                        >
                          <strong>Cash on Delivery/Pay on Delivery</strong>
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="cart-right">
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
