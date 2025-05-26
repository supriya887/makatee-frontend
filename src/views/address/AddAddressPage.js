"use client";

import CustomDropdown from "@/components/custom/CustomDropdown";
import Layout1 from "@/components/layout/Layout1";
import React, { useState } from "react";

function AddAddressPage() {
  const [formValues, setFormValues] = useState({
    billing_same_as_shipping: true,
  });

  const handleOnChange = (e) => {
    const { name, value, type, checked } = e.target;
    console.log(e.target.type, checked, name);

    if (type == "checkbox") {
      setFormValues((prev) => ({
        ...prev,
        [name]: checked,
      }));
      return;
    }

    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <section>
      <div className="add-address-box bg-white">
        <div className="row">
          <div className="col-12 col-md-8 mx-auto">
            <form action="" className="checkout-form" method="post">
              <h5>
                <strong>Billing Address</strong>
              </h5>
              <br />
              <div className="row billingaddress">
                <div className=" mb-3 col-12 col-md-6">
                  <label htmlFor="" className="form-label">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id=""
                    aria-describedby=""
                  />
                  <div id="Full_Name" className="form-text" />
                </div>
                <div className=" mb-3   col-sm-6 col-12">
                  <label htmlFor="" className="form-label">
                    Email*
                  </label>
                  <input
                    type="email"
                    className="form-control input-field"
                    name="billing_email"
                    id="billing_email"
                    defaultValue=""
                  />
                </div>
                <div className=" mb-3 col-sm-6 col-12">
                  <label htmlFor="" className="form-label">
                    Phone*
                  </label>
                  <input
                    type="text"
                    className="form-control input-field number"
                    name="billing_phone"
                    id="billing_phone"
                    defaultValue=""
                  />
                </div>
                <div className=" mb-3   col-sm-6 col-12">
                  <label htmlFor="" className="form-label">
                    Landmark*
                  </label>
                  <input
                    type="text"
                    className="form-control input-field"
                    name="billing_email"
                    id="billing_email"
                    defaultValue=""
                  />
                </div>
                <div className=" mb-3 col-12">
                  <label htmlFor="" className="form-label">
                    Address*
                  </label>
                  <textarea
                    type="text"
                    className="form-control"
                    id=""
                    aria-describedby=""
                    defaultValue={""}
                  />
                  <div id="billing_address" className="form-text" />
                </div>
                <div className=" mb-3  col-sm-6 col-12">
                  <label htmlFor="" className="form-label">
                    Country*
                  </label>
                  <CustomDropdown
                    value={formValues?.billing_country}
                    onChange={handleOnChange}
                    className="form-control input-field countrylistbilling"
                    name="billing_country"
                    id="billing_country"
                    required=""
                    readOnly=""
                    options={[
                      { id: "", label: "Select Country" },
                      { id: 99, label: "India" },
                    ]}
                  />
                </div>
                <div className=" mb-3 col-sm-6 col-12">
                  <label htmlFor="" className="form-label">
                    State*
                  </label>
                  <CustomDropdown
                    value={formValues?.billing_state}
                    onChange={handleOnChange}
                    className="form-control input-field countrylistbilling"
                    name="billing_state"
                    id="billing_state"
                    required=""
                    readOnly=""
                    options={[
                      { id: "", label: "Select State" },
                      { id: 1475, label: "Andaman And Nicobar Islands" },
                      { id: 1476, label: "Andhra Pradesh" },
                      { id: 1477, label: "Arunachal Pradesh" },
                      { id: 1478, label: "Assam" },
                      { id: 1479, label: "Bihar" },
                      { id: 1480, label: "Chandigarh" },
                      { id: 1481, label: "Dadra And Nagar Haveli" },
                      { id: 1482, label: "Daman And Diu" },
                      { id: 1483, label: "Delhi" },
                      { id: 1484, label: "Goa" },
                      { id: 1485, label: "Gujarat" },
                      { id: 1486, label: "Haryana" },
                      { id: 1487, label: "Himachal Pradesh" },
                      { id: 1488, label: "Jammu And Kashmir" },
                      { id: 1489, label: "Karnataka" },
                      { id: 1490, label: "Kerala" },
                      { id: 1491, label: "Lakshadweep Islands" },
                      { id: 1492, label: "Madhya Pradesh" },
                      { id: 1493, label: "Maharashtra" },
                      { id: 1494, label: "Manipur" },
                      { id: 1495, label: "Meghalaya" },
                      { id: 1496, label: "Mizoram" },
                      { id: 1497, label: "Nagaland" },
                      { id: 1498, label: "Orissa" },
                      { id: 1499, label: "Pondicherry" },
                      { id: 1500, label: "Punjab" },
                      { id: 1501, label: "Rajasthan" },
                      { id: 1502, label: "Sikkim" },
                      { id: 1503, label: "Tamil Nadu" },
                      { id: 1504, label: "Tripura" },
                      { id: 1505, label: "Uttar Pradesh" },
                      { id: 1506, label: "West Bengal" },
                    ]}
                  />
                </div>
                <div className=" mb-3 col-sm-6 col-12">
                  <label htmlFor="" className="form-label">
                    City*
                  </label>
                  <input
                    type="text"
                    className="form-control input-field"
                    name="billing_city"
                    id="billing_city"
                    defaultValue=""
                    required=""
                  />
                </div>
                <div className=" mb-3   col-sm-6 col-12">
                  <label htmlFor="" className="form-label">
                    Zip/Postal Code*
                  </label>
                  <input
                    type="text"
                    className="form-control input-field"
                    name="billing_zip"
                    id="billing_zip"
                    defaultValue=""
                    required=""
                  />
                </div>
                <div className="col-12">
                  <div className="add-address-box p-0">
                    <div className="cart-left">
                      <h6 className="text-dark mb-3 mt-4">
                        <strong>Select Address type</strong>
                      </h6>
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
                <div className="col-lg-12 col-md-12 col-sm-12 mb-4 mt-3">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      id="shipping_same_as_billing"
                      className="form-check-input"
                      checked={formValues?.shipping_same_as_billing || false}
                      name="shipping_same_as_billing"
                      onChange={handleOnChange}
                      readOnly
                    />
                    <label
                      className="form-check-label"
                      htmlFor="shipping_same_as_billing"
                      style={{ marginLeft: 5 }}
                    >
                      <h6 className="text-dark">
                        Ship To A Different Address?
                      </h6>
                    </label>
                  </div>
                </div>
              </div>
              {!formValues?.shipping_same_as_billing ? (
                <div className="row mb-3">
                  <div className="shippingaddress">
                    <h5>
                      <strong>Shipping Address</strong>
                    </h5>
                    <div className="row billingaddress">
                      <div className=" mb-3 col-12 col-md-6">
                        <label htmlFor="" className="form-label">
                          Full Name*
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id=""
                          aria-describedby=""
                        />
                        <div id="Full_Name" className="form-text" />
                      </div>
                      <div className=" mb-3   col-sm-6 col-12">
                        <label htmlFor="" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control input-field"
                          name="billing_email"
                          id="billing_email"
                          defaultValue=""
                        />
                      </div>
                      <div className=" mb-3 col-sm-6 col-12">
                        <label htmlFor="" className="form-label">
                          Phone
                        </label>
                        <input
                          type="text"
                          className="form-control input-field number"
                          name="billing_phone"
                          id="billing_phone"
                          defaultValue=""
                        />
                      </div>
                      <div className=" mb-3   col-sm-6 col-12">
                        <label htmlFor="" className="form-label">
                          Landmark
                        </label>
                        <input
                          type="email"
                          className="form-control input-field"
                          name="billing_email"
                          id="billing_email"
                          defaultValue=""
                        />
                      </div>
                      <div className=" mb-3 col-12">
                        <label htmlFor="" className="form-label">
                          Address*
                        </label>
                        <textarea
                          type="text"
                          className="form-control"
                          id=""
                          aria-describedby=""
                          defaultValue={""}
                        />
                        <div id="billing_address" className="form-text" />
                      </div>
                      <div className=" mb-3  col-sm-6 col-12">
                        <label htmlFor="" className="form-label">
                          Country
                        </label>
                        <CustomDropdown
                          value={formValues?.billing_country}
                          onChange={handleOnChange}
                          className="form-control input-field countrylistbilling"
                          name="billing_country"
                          id="billing_country"
                          required=""
                          readOnly=""
                          options={[{ id: "", label: "India" }]}
                        />
                      </div>
                      <div className=" mb-3 col-sm-6 col-12">
                        <label htmlFor="" className="form-label">
                          State
                        </label>
                        <CustomDropdown
                          value={formValues?.billing_state}
                          onChange={handleOnChange}
                          className="form-control input-field countrylistbilling"
                          name="billing_state"
                          id="billing_state"
                          required=""
                          readOnly=""
                          options={[
                            { id: "", label: "Select State" },
                            {
                              id: 1475,
                              label: "Andaman And Nicobar Islands",
                            },
                            { id: 1476, label: "Andhra Pradesh" },
                            { id: 1477, label: "Arunachal Pradesh" },
                            { id: 1478, label: "Assam" },
                            { id: 1479, label: "Bihar" },
                            { id: 1480, label: "Chandigarh" },
                            { id: 1481, label: "Dadra And Nagar Haveli" },
                            { id: 1482, label: "Daman And Diu" },
                            { id: 1483, label: "Delhi" },
                            { id: 1484, label: "Goa" },
                            { id: 1485, label: "Gujarat" },
                            { id: 1486, label: "Haryana" },
                            { id: 1487, label: "Himachal Pradesh" },
                            { id: 1488, label: "Jammu And Kashmir" },
                            { id: 1489, label: "Karnataka" },
                            { id: 1490, label: "Kerala" },
                            { id: 1491, label: "Lakshadweep Islands" },
                            { id: 1492, label: "Madhya Pradesh" },
                            { id: 1493, label: "Maharashtra" },
                            { id: 1494, label: "Manipur" },
                            { id: 1495, label: "Meghalaya" },
                            { id: 1496, label: "Mizoram" },
                            { id: 1497, label: "Nagaland" },
                            { id: 1498, label: "Orissa" },
                            { id: 1499, label: "Pondicherry" },
                            { id: 1500, label: "Punjab" },
                            { id: 1501, label: "Rajasthan" },
                            { id: 1502, label: "Sikkim" },
                            { id: 1503, label: "Tamil Nadu" },
                            { id: 1504, label: "Tripura" },
                            { id: 1505, label: "Uttar Pradesh" },
                            { id: 1506, label: "West Bengal" },
                          ]}
                        />
                      </div>
                      <div className=" mb-3 col-sm-6 col-12">
                        <label htmlFor="" className="form-label">
                          City
                        </label>
                        <input
                          type="text"
                          className="form-control input-field"
                          name="billing_city"
                          id="billing_city"
                          defaultValue=""
                          required=""
                        />
                      </div>
                      <div className=" mb-3   col-sm-6 col-12">
                        <label htmlFor="" className="form-label">
                          Zip/Postal Code
                        </label>
                        <input
                          type="text"
                          className="form-control input-field"
                          name="billing_zip"
                          id="billing_zip"
                          defaultValue=""
                          required=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </form>
            <button
              type="submit"
              className="common-btn common-btn-purple"
              onClick={() => console.log("Save")}
            >
              Save
            </button>
          </div>
          <div className="col-12 col-md-4">
            <div className="cart-right">
              <div className="coupon-apply">
                <input type="text" placeholder="Insert your Coupon Code" />
                <a href={`/checkout`} className="common-btn common-btn-purple">
                  Apply
                </a>
              </div>
              <div className="priceblock-base-container">
                <div className="priceblock-base-priceheader">
                  <strong>PRICE DETAILS (28 Items)</strong>
                </div>
                <div className="pricebreakup-base-ordersummary" id="priceblock">
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
        </div>
      </div>
    </section>
  );
}

export default AddAddressPage;
