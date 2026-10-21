"use client";

import {
  editProfileApi,
  getAddressEditApi,
  getCountryListApi,
  getStateListApi,
  saveAddressApi,
} from "@/api";
import CustomDropdown from "@/components/custom/CustomDropdown";
import Layout1 from "@/components/layout/Layout1";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

function AddAddressPage({ onSuccess, addressId, onCancel }) {
  const { user_data } = useSelector((state) => state.user);

  const [countryList, setCountryList] = useState([]);
  const [countryList2, setCountryList2] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [stateList2, setStateList2] = useState([]);

  const [loading, setLoading] = useState(false);

  const [valErrors, setValErrors] = useState({});
  const [formValues, setFormValues] = useState({
    address_id: "",
    shipping_first_name: user_data?.first_name || "",
    shipping_last_name: user_data?.last_name || "",
    shipping_phone: user_data?.phone || "",
    shipping_email: user_data?.email || "",

    shipping_address_1: "",
    shipping_address_2: "",
    shipping_city: "",
    shipping_state_id: "",
    shipping_state_name: "",
    shipping_country_id: "",
    shipping_pincode: "",
    billing_first_name: user_data?.first_name || "",
    billing_last_name: user_data?.last_name || "",
    billing_phone: user_data?.phone || "",
    billing_email: user_data?.email || "",

    billing_address_1: "",
    billing_address_2: "",
    billing_city: "",
    billing_state_id: "",
    billiing_state_name: "",
    billing_country_id: "",
    billing_pincode: "",
    address_type: "Home",
    billing_same_as_shipping: true,
  });

  useEffect(() => {
    async function fetchData() {
      await countryListApi();
      if (addressId) await addressDetailApi();
    }
    fetchData();
  }, []);

  useEffect(() => {
    setFormValues((prev) => ({ ...prev, shipping_state_id: "" }));

    if (formValues?.shipping_country_id) {
      getStateList();
    } else {
      setStateList([]);
    }
  }, [formValues?.shipping_country_id]);

  useEffect(() => {
    setFormValues((prev) => ({ ...prev, billing_state_id: "" }));

    if (formValues?.billing_country_id) {
      getStateList2();
    } else {
      setStateList2([]);
    }
  }, [formValues?.billing_country_id]);

  const addressDetailApi = async () => {
    let response = await getAddressEditApi({
      address_id: addressId,
    });

    if (response?.status == 1) {
      setFormValues((prev) => ({
        ...prev,
        address_id: response?.data?.id,
        shipping_first_name: response?.data?.shipping_first_name,
        shipping_last_name: response?.data?.shipping_last_name,
        shipping_phone: response?.data?.shipping_phone,
        shipping_email: response?.data?.shipping_email,

        shipping_address_1: response?.data?.shipping_address_1,
        shipping_address_2: response?.data?.shipping_address_2,
        shipping_country_id: response?.data?.shipping_country_id,
        shipping_city: response?.data?.shipping_city,
        shipping_state_id: response?.data?.shipping_state_id,
        shipping_pincode: response?.data?.shipping_pincode,
        billing_first_name: response?.data?.billing_first_name,
        billing_last_name: response?.data?.billing_last_name,
        billing_phone: response?.data?.billing_phone,
        billing_email: response?.data?.billing_email,

        billing_address_1: response?.data?.billing_address_1,
        billing_address_2: response?.data?.billing_address_2,
        billing_country_id: response?.data?.billing_country_id,
        billing_city: response?.data?.billing_city,
        billing_state_id: response?.data?.billing_state_id,
        billing_pincode: response?.data?.billing_pincode,
        address_type: response?.data?.address_type,
        billing_same_as_shipping:
          response?.data?.billing_same_as_shipping == "1" ? true : false,
      }));
    } else {
      response?.error && toast.error(response?.error);
    }
  };

  const countryListApi = async () => {
    const res = await getCountryListApi();

    if (res?.status == 1) {
      setCountryList(res?.data);
      setCountryList2(res?.data);

      if (!formValues?.address_id) {
        setFormValues((prev) => ({
          ...prev,
          shipping_country_id: res?.data[0]?.id,
          billing_country_id: res?.data[0]?.id,
        }));
      }
    }
  };

  const getStateList = async () => {
    let response = await getStateListApi({
      country_id: formValues?.shipping_country_id,
    });

    if (response?.status == 1) {
      setStateList(response?.data);
      if (!addressId) {
        if (response?.data?.length) {
          setFormValues((prev) => ({
            ...prev,
            shipping_state_id: response?.data[0]?.id,
          }));
        }
      }
    }
  };

  const getStateList2 = async () => {
    let response = await getStateListApi({
      country_id: formValues?.billing_country_id,
    });

    if (response?.status == 1) {
      setStateList2(response?.data);
      if (!addressId) {
        if (response?.data?.length) {
          setFormValues((prev) => ({
            ...prev,
            billing_state_id: response?.data[0]?.id,
          }));
        }
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    // console.log(e.target.type);

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

  const saveAddress = async (e) => {
    e.preventDefault();
    setLoading(true);

    let response = await saveAddressApi({
      ...formValues,
      billing_same_as_shipping:
        formValues?.billing_same_as_shipping == true ? "1" : "0",
      shipping_country_code_id: 95,
      billing_country_code_id: 95,
    });
    if (response?.status == 1) {
      clearData();
      onSuccess();
    } else {
      setValErrors(response?.error_array);
      response?.error && toast.error(response?.error);
    }
    setLoading(false);
  };

  const clearData = () => {
    setFormValues({
      address_id: "",
      shipping_first_name: "",
      shipping_last_name: "",
      shipping_phone: "",
      shipping_email: "",

      shipping_address_1: "",
      shipping_address_2: "",
      shipping_city: "",
      shipping_state_id: "",
      shipping_country_id: "",
      shipping_pincode: "",
      billing_first_name: "",
      billing_last_name: "",
      billing_phone: "",
      billing_email: "",

      billing_address_1: "",
      billing_address_2: "",
      billing_city: "",
      billing_state_id: "",
      billing_country_id: "",
      billing_pincode: "",
      address_type: "Home",
      billing_same_as_shipping: true,
    });
  };

  return (
    <section>
      <div className="add-address-box bg-white">
        <div className="col-12 col-md-12 mx-auto">
          <form onSubmit={saveAddress} className="checkout-form">
            <h5>
              <strong>Shipping Address</strong>
            </h5>
            <br />
            <div className="row shippingaddress">
              <div className=" mb-3 col-12 col-sm-6">
                <label htmlFor="shipping_first_name" className="form-label">
                  First Name*
                </label>
                <input
                  className="form-control input-field"
                  autoComplete="off"
                  value={formValues?.shipping_first_name || ""}
                  // placeholder="First Name"
                  onChange={handleInputChange}
                  type="text"
                  name="shipping_first_name"
                  id="shipping_first_name"
                />
                {valErrors.shipping_first_name && (
                  <small className="text-danger">
                    {valErrors.shipping_first_name}
                  </small>
                )}
              </div>
              <div className=" mb-3 col-12 col-sm-6">
                <label htmlFor="shipping_last_name">Last name*</label>
                <input
                  className="form-control input-field"
                  // placeholder="Last Name"
                  autoComplete="off"
                  value={formValues?.shipping_last_name || ""}
                  type="text"
                  onChange={handleInputChange}
                  name="shipping_last_name"
                  id="shipping_last_name"
                />
                {valErrors.shipping_last_name && (
                  <small className="text-danger">
                    {valErrors.shipping_last_name}
                  </small>
                )}
              </div>
              <div className=" mb-3   col-sm-6 col-12">
                <label htmlFor="shipping_email" className="form-label">
                  Email*
                </label>
                <input
                  type="text"
                  className="form-control input-field"
                  // placeholder="Email ID"
                  value={formValues?.shipping_email || ""}
                  onChange={handleInputChange}
                  name="shipping_email"
                  id="shipping_email"
                />
                {valErrors.shipping_email && (
                  <small className="text-danger">
                    {valErrors.shipping_email}
                  </small>
                )}
              </div>
              <div className=" mb-3 col-sm-6 col-12">
                <label htmlFor="shipping_phone" className="form-label">
                  Phone*
                </label>
                <input
                  className="form-control number"
                  maxLength={10}
                  minLength={10}
                  // placeholder="Phone"
                  value={formValues?.shipping_phone || ""}
                  onChange={handleInputChange}
                  name="shipping_phone"
                  id="shipping_phone"
                  type="text"
                />
                {valErrors.shipping_phone && (
                  <small className="text-danger">
                    {valErrors.shipping_phone}
                  </small>
                )}
              </div>
              {/* <div className=" mb-3   col-sm-6 col-12">
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
              </div> */}
              <div className=" mb-3 col-12">
                <label htmlFor="shipping_address_1" className="form-label">
                  Address1
                </label>
                <textarea
                  className="form-control "
                  // placeholder="Address Line 1"
                  value={formValues?.shipping_address_1 || ""}
                  onChange={handleInputChange}
                  name="shipping_address_1"
                  id="shipping_address_1"
                  type="text"
                />
                {valErrors.shipping_address_1 && (
                  <small className="text-danger">
                    {valErrors.shipping_address_1}
                  </small>
                )}
              </div>

              <div className=" mb-3 col-12">
                <label htmlFor="shipping_address_2" className="form-label">
                  Address2
                </label>
                <textarea
                  className="form-control "
                  // placeholder="Address Line 2"
                  value={formValues?.shipping_address_2 || ""}
                  onChange={handleInputChange}
                  name="shipping_address_2"
                  id="shipping_address_2"
                  type="text"
                />
                {valErrors.shipping_address_2 && (
                  <small className="text-danger">
                    {valErrors.shipping_address_2}
                  </small>
                )}
              </div>
              <div className=" mb-3  col-sm-6 col-12">
                <label htmlFor="shipping_country_id" className="form-label">
                  Country*
                </label>
                <select
                  className="form-control input-field countrylistbilling"
                  name="shipping_country_id"
                  id="shipping_country_id"
                  placeholder="Country"
                  onChange={handleInputChange}
                  value={formValues?.shipping_country_id || ""}
                >
                  {countryList?.length > 0 &&
                    countryList?.map((item, index) => {
                      return (
                        <option key={index} value={item.id}>
                          {item.country_name}
                        </option>
                      );
                    })}
                </select>
                {valErrors.shipping_country_id && (
                  <small className="text-danger">
                    {valErrors.shipping_country_id}
                  </small>
                )}
              </div>
              <div className=" mb-3 col-sm-6 col-12">
                <label htmlFor="shipping_state_id" className="form-label">
                  State*
                </label>
                <select
                  name="shipping_state_id"
                  id="shipping_state_id"
                  placeholder="State"
                  onChange={handleInputChange}
                  className="form-control input-field countrylistbilling"
                  value={formValues?.shipping_state_id || ""}
                >
                  {stateList?.length > 0 &&
                    stateList?.map((item, index) => {
                      return (
                        <option key={index} value={item.id}>
                          {item.state_name}
                        </option>
                      );
                    })}
                </select>
                {valErrors.shipping_state_id && (
                  <small className="text-danger">
                    {valErrors.shipping_state_id}
                  </small>
                )}
              </div>
              <div className=" mb-3 col-sm-6 col-12">
                <label htmlFor="shipping_city" className="form-label">
                  City*
                </label>
                <input
                  className="form-control input-field"
                  value={formValues?.shipping_city || ""}
                  onChange={handleInputChange}
                  name="shipping_city"
                  id="shipping_city"
                  type="text"
                />
                {valErrors.shipping_city && (
                  <small className="text-danger">
                    {valErrors.shipping_city}
                  </small>
                )}
              </div>
              <div className=" mb-3   col-sm-6 col-12">
                <label htmlFor="shipping_pincode" className="form-label">
                  Zip/Postal Code*
                </label>
                <input
                  className="form-control input-field"
                  value={formValues?.shipping_pincode || ""}
                  onChange={handleInputChange}
                  name="shipping_pincode"
                  id="shipping_pincode"
                  type="text"
                />
                {valErrors.shipping_pincode && (
                  <small className="text-danger">
                    {valErrors.shipping_pincode}
                  </small>
                )}
              </div>
              <div className="col-12">
                <div className="add-address-box p-0">
                  <div className="cart-left">
                    <h6 className="text-dark mb-3 mt-4">
                      <strong>Select Address type</strong>
                    </h6>
                    <ul className="d-flex">
                      <li className="me-3">
                        <div
                          className="form-check pointer_cursor"
                          onClick={() =>
                            setFormValues((prev) => ({
                              ...prev,
                              address_type: "Home",
                            }))
                          }
                        >
                          <input
                            className="form-check-input"
                            type="radio"
                            name={'Home'}
                            id={'Home'}
                            checked={formValues?.address_type == "Home"}
                            readOnly
                          />
                          <label
                            className="form-check-label"
                            htmlFor={'Home'}
                          >
                            <strong>
                              Home <br />
                              <small>(All day delivery)</small>
                            </strong>
                          </label>
                        </div>
                      </li>
                      <li className="me-3">
                        <div
                          className="form-check pointer_cursor"
                          onClick={() =>
                            setFormValues((prev) => ({
                              ...prev,
                              address_type: "Office",
                            }))
                          }
                        >
                          <input
                            className="form-check-input"
                            type="radio"
                            name={'Office'}
                            id={'Office'}
                            checked={formValues?.address_type == "Office"}
                            readOnly
                          />
                          <label
                            className="form-check-label"
                            htmlFor={'Office'}
                          >
                            <strong>
                              Office <br />
                              <small>(Delivery between 10 AM - 5 PM)</small>
                            </strong>
                          </label>
                        </div>
                      </li>
                      <li className="mr-2">
                        <div
                          className="form-check pointer_cursor"
                          onClick={() =>
                            setFormValues((prev) => ({
                              ...prev,
                              address_type: "Other",
                            }))
                          }
                        >
                          <input
                            className="form-check-input"
                            type="radio"
                            name={'Other'}
                            id={'Other'}
                            checked={formValues?.address_type == "Other"}
                            readOnly
                          />
                          <label
                            className="form-check-label"
                            htmlFor={'Other'}
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
                    id="billing_same_as_shipping"
                    className="form-check-input"
                    checked={formValues?.billing_same_as_shipping || false}
                    name="billing_same_as_shipping"
                    onChange={handleInputChange}
                    readOnly
                  />
                  <label
                    className="form-check-label"
                    htmlFor="billing_same_as_shipping"
                    style={{ marginLeft: 5 }}
                  >
                    <h6 className="text-dark">
                      Billing Same As Shipping Address?
                    </h6>
                  </label>
                </div>
              </div>
            </div>
            {!formValues?.billing_same_as_shipping ? (
              <div className="row mb-3">
                <div className="billingaddress">
                  <h5>
                    <strong>Billing Address</strong>
                  </h5>
                  <div className="row billingaddress">
                    <div className=" mb-3 col-12 col-sm-6">
                      <label
                        htmlFor="billing_first_name"
                        className="form-label"
                      >
                        First Name*
                      </label>
                      <input
                        className="form-control input-field"
                        onChange={handleInputChange}
                        type="text"
                        name="billing_first_name"
                        id="billing_first_name"
                        value={formValues?.billing_first_name || ""}
                      />
                      {valErrors.billing_first_name && (
                        <small className="text-danger">
                          {valErrors.billing_first_name}
                        </small>
                      )}
                    </div>
                    <div className=" mb-3 col-12 col-sm-6">
                      <label htmlFor="billing_last_name" className="form-label">
                        Last Name*
                      </label>
                      <input
                        className="form-control input-field"
                        value={formValues?.billing_last_name || ""}
                        onChange={handleInputChange}
                        type="text"
                        name="billing_last_name"
                        id="billing_last_name"
                      />
                      {valErrors.billing_last_name && (
                        <small className="text-danger">
                          {valErrors.billing_last_name}
                        </small>
                      )}
                    </div>
                    <div className=" mb-3   col-sm-6 col-12">
                      <label htmlFor="billing_email" className="form-label">
                        Email
                      </label>
                      <input
                        className="form-control input-field"
                        value={formValues?.billing_email || ""}
                        onChange={handleInputChange}
                        name="billing_email"
                        id="billing_email"
                        type="text"
                      />
                      {valErrors.billing_email && (
                        <small className="text-danger">
                          {valErrors.billing_email}
                        </small>
                      )}
                    </div>
                    <div className=" mb-3 col-sm-6 col-12">
                      <label htmlFor="billing_phone" className="form-label">
                        Phone
                      </label>
                      <input
                        className="form-control input-field number"
                        maxLength={10}
                        minLength={10}
                        value={formValues?.billing_phone || ""}
                        onChange={handleInputChange}
                        name="billing_phone"
                        id="billing_phone"
                        type="text"
                      />
                      {valErrors.billing_phone && (
                        <small className="text-danger">
                          {valErrors.billing_phone}
                        </small>
                      )}
                    </div>
                    {/* <div className=" mb-3   col-sm-6 col-12">
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
                    </div> */}
                    <div className=" mb-3 col-12">
                      <label htmlFor="billing_address_1" className="form-label">
                        Address 1*
                      </label>
                      <textarea
                        className="form-control"
                        value={formValues?.billing_address_1 || ""}
                        onChange={handleInputChange}
                        name="billing_address_1"
                        id="billing_address_1"
                        type="text"
                      />
                      {valErrors.billing_address_1 && (
                        <small className="text-danger">
                          {valErrors.billing_address_1}
                        </small>
                      )}
                    </div>
                    <div className=" mb-3 col-12">
                      <label htmlFor="billing_address_2" className="form-label">
                        Address 2*
                      </label>
                      <textarea
                        className="form-control"
                        value={formValues?.billing_address_2 || ""}
                        onChange={handleInputChange}
                        name="billing_address_2"
                        id="billing_address_2"
                        type="text"
                      />
                      {valErrors.billing_address_2 && (
                        <small className="text-danger">
                          {valErrors.billing_address_2}
                        </small>
                      )}
                    </div>
                    <div className=" mb-3  col-sm-6 col-12">
                      <label
                        htmlFor="billing_country_id"
                        className="form-label"
                      >
                        Country
                      </label>
                      <select
                        className="form-control input-field countrylistbilling"
                        name="billing_country_id"
                        id="billing_country_id"
                        placeholder="Country"
                        onChange={handleInputChange}
                        value={formValues?.billing_country_id || ""}
                      >
                        {countryList2?.length > 0 &&
                          countryList2?.map((item, index) => {
                            return (
                              <option key={index} value={item.id}>
                                {item.country_name}
                              </option>
                            );
                          })}
                      </select>
                      {valErrors.billing_country_id && (
                        <small className="text-danger">
                          {valErrors.billing_country_id}
                        </small>
                      )}
                    </div>
                    <div className=" mb-3 col-sm-6 col-12">
                      <label htmlFor="" className="form-label">
                        State
                      </label>
                      <select
                        name="billing_state_id"
                        id="billing_state_id"
                        placeholder="State"
                        onChange={handleInputChange}
                        className="form-control input-field countrylistbilling"
                        value={formValues?.billing_state_id || ""}
                      >
                        {stateList2?.length > 0 &&
                          stateList2?.map((item, index) => {
                            return (
                              <option key={index} value={item.id}>
                                {item.state_name}
                              </option>
                            );
                          })}
                      </select>
                      {valErrors.billing_state_id && (
                        <small className="text-danger">
                          {valErrors.billing_state_id}
                        </small>
                      )}
                    </div>
                    <div className=" mb-3 col-sm-6 col-12">
                      <label htmlFor="billing_city" className="form-label">
                        City
                      </label>
                      <input
                        className="form-control input-field"
                        value={formValues?.billing_city || ""}
                        onChange={handleInputChange}
                        name="billing_city"
                        id="billing_city"
                        type="text"
                      />
                      {valErrors.billing_city && (
                        <small className="text-danger">
                          {valErrors.billing_city}
                        </small>
                      )}
                    </div>
                    <div className=" mb-3   col-sm-6 col-12">
                      <label htmlFor="billing_pincode" className="form-label">
                        Zip/Postal Code
                      </label>
                      <input
                        className="form-control input-field"
                        value={formValues?.billing_pincode || ""}
                        onChange={handleInputChange}
                        name="billing_pincode"
                        id="billing_pincode"
                        type="text"
                      />
                      {valErrors.billing_pincode && (
                        <small className="text-danger">
                          {valErrors.billing_pincode}
                        </small>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </form>

          <div className="row gap-3">
            <button
              onClick={saveAddress}
              type="submit"
              className="common-btn common-btn-purple w-25"
              disabled={loading}
            >
              {loading ? "Loading" : "Save"}
            </button>

            <button
              type="reset"
              className="common-btn common-btn-purple w-25"
              onClick={onCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AddAddressPage;
