import Layout1 from "@/components/layout/Layout1";
import React from "react";
import { IoCreateOutline, IoTrashOutline } from "react-icons/io5";

function CheckoutPage() {
  return (
    <Layout1>
      <section className="add-addresses-section section-space">
        <div className="container ">
          <div className="row ">
            <div className="col-12">
              <div className="tab-cart">
                <a href="/cart" className="tab common-btn active">
                  Cart
                </a>
                <a href="/address" className="tab common-btn">
                  Address
                </a>
                <a href="payment-method.php" className="tab common-btn">
                  Payment
                </a>
              </div>
            </div>
          </div>
          <div className="add-address-box row">
            <div className="col-12 col-md-8">
              <div className="address-box-head">
                <h5> Delivery Address</h5>
                <a href="/address" className="common-btn add-address">
                  Add a new delivery address +
                </a>
              </div>
              <div className="cart-left">
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
                        <span className="name">Customer Name (Home) </span>
                        <br />
                        +91 98745 63219
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit,
                        Mumbai, Maharashtra, 400095, India
                      </label>
                      <div>
                        <a href="" className="common-link">
                          {" "}
                          Edit <IoCreateOutline />
                          {/* <ion-icon name="create-outline" /> */}
                        </a>{" "}
                        <a href="" className="common-link">
                          {" "}
                          Remove <IoTrashOutline />
                          {/* <ion-icon name="trash-outline"></ion-icon> */}
                        </a>
                      </div>
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
                        <span className="name">Customer Name (Home) </span>
                        <br />
                        +91 98745 63219
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit,
                        Mumbai, Maharashtra, 400095, India
                      </label>
                      <div>
                        <a href="" className="common-link">
                          {" "}
                          Edit <IoCreateOutline />
                          {/* <ion-icon name="create-outline" /> */}
                        </a>{" "}
                        <a href="" className="common-link">
                          {" "}
                          Remove <IoTrashOutline />
                          {/* <ion-icon name="trash-outline"></ion-icon> */}
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="gst-box">
                  <div className="d-flex mb-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckChecked"
                        defaultChecked=""
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckChecked"
                      >
                        <h6>Business Registered for GST?</h6>
                      </label>
                    </div>
                  </div>
                  <div className="gst-number">
                    <label htmlFor="">Enter GST Number</label>
                    <div>
                      <input
                        type="text"
                        placeholder="insert your coupon code"
                      />
                      <a
                        href={`/checkout`}
                        className="common-btn common-btn-purple"
                      >
                        Apply
                      </a>
                    </div>
                  </div>
                </div>
                <div className="add-address-box p-0">
                  <div className="cart-left">
                    <h5 className=" mb-3 mt-4">
                      <strong>Select Address type</strong>
                    </h5>
                    <ul className="d-flex">
                      <li className="me-3">
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
                            <strong>
                              Home <br />
                              <small>(All day delivery)</small>
                            </strong>
                          </label>
                        </div>
                      </li>
                      <li className="me-3">
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
                            <strong>
                              Office <br />
                              <small>(Delivery between 10 AM - 5 PM)</small>
                            </strong>
                          </label>
                        </div>
                      </li>
                      <li className="mr-2">
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
                            <strong>Other</strong>
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="cart-right">
                <div className="priceblock-base-container">
                  <div
                    className="pricebreakup-base-ordersummary"
                    id="priceblock"
                  >
                    <div className="pricedetail-base-row ">
                      <ul>
                        <li className="mb-3">Price Details (4 Items)</li>
                        <li>
                          <span>Total MRP</span> <span>₹ 74,703</span>
                        </li>
                        <li>
                          <span>Discount on MRP</span> <span>₹ 39,998</span>
                        </li>
                        <li>
                          <span>Coupon Discount</span> <span>- ₹ 9,998</span>
                        </li>
                        <li>
                          <span>Platform Fee</span>
                          <span> ₹ 400</span>
                        </li>
                        <li>
                          <span>
                            Shipping Fee
                            <br />
                            <small>(Free shipping for Makateers)</small>{" "}
                          </span>
                          <span>FREE</span>
                        </li>
                      </ul>
                    </div>
                    <hr />
                    <div className="pricedetail-base-total  mb-3 ">
                      <h5>Total Amount ₹ 34,725</h5>
                    </div>
                  </div>
                  <a
                    href="payment-method.php"
                    className="common-btn common-btn-purple mt-5"
                  >
                    Checkout
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
