"use client";

import Layout1 from "@/components/layout/Layout1";
import React, { useState } from "react";
import AddAddressPage from "./AddAddressPage";
import SidePanelSection from "@/components/dashboard/SidePanelSection";

export default function AddressPage() {
  const [addressForm, setAddressForm] = useState(false);
  return (
    <Layout1>
      <section className="dashboard-page section-space pt-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-box">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#">Dashboard</a>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
            <div className="col-12 ">
              <div className="dashboard-box ">
                <div className="container p-0">
                  <div className="" data-aos="fade-up" data-aos-duration={1500}>
                    <div className="row">
                      <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                        <SidePanelSection />
                      </div>
                      <div className="col-lg-9 col-md-12 col-sm-12 col-12">
                        {addressForm ? (
                          <AddAddressPage
                            onCancel={() => setAddressForm(false)}
                          />
                        ) : (
                          <div className="add-address-box mobile-address row m-0">
                            <div className="col-12 p-0">
                              <div className="address-box-head">
                                <h5> Delivery Address</h5>

                                <button
                                  type="button"
                                  className="common-btn add-address"
                                  onClick={() => setAddressForm(true)}
                                >
                                  Add a new delivery address +
                                </button>
                              </div>
                              <hr />
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
                                        <strong>Customer Name (Home) </strong>
                                        <br />
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit, Mumbai, Maharashtra,
                                        400095, India
                                      </label>
                                      <div>
                                        <a href="" className="common-link">
                                          <i className="bi bi-pencil-square" />{" "}
                                          Edit address
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
                                        <strong>Customer Name (Office)</strong>
                                        <br />
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit, Mumbai, Maharashtra,
                                        400095, India
                                      </label>
                                      <div>
                                        <a href="" className="common-link">
                                          <i className="bi bi-pencil-square" />{" "}
                                          Edit address
                                        </a>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout1>
  );
}
