"use client";

import Layout1 from "@/components/layout/Layout1";
import React, { useEffect, useState } from "react";
import AddAddressPage from "./AddAddressPage";
import SidePanelSection from "@/components/dashboard/SidePanelSection";
import toast from "react-hot-toast";
import { addressListApi, deleteAddressApi } from "@/api";
import { IoCreateOutline, IoTrashOutline } from "react-icons/io5";

export default function AddressPage() {
  const [addressFormOpen, setAddressFormOpen] = useState(false);

  const [addressList, setAddressList] = useState([]);

  const [editAddressId, setEditAddressId] = useState("");

  useEffect(() => {
    async function fetchData() {
      await getAddressListApi();
    }
    fetchData();
  }, []);

  const getAddressListApi = async () => {
    let response = await addressListApi();

    if (response?.status == 1) {
      setAddressList(response?.data?.list);
    } else {
      response?.error && toast.error(response?.error);
    }
  };

  const deleteAddress = async (addressId) => {
    let res = await deleteAddressApi({
      address_id: addressId,
    });

    if (res?.status == 1) {
      getAddressListApi();
      res?.msg && toast.success(res?.msg);
    } else {
      res?.error && toast.error(res?.error);
    }
  };
  return (
    <Layout1>
       <section className="breadcrumb-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
               <div className="breadcrumb-box">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Dashboard
                    </li>
                  </ol>
                </nav>
              </div>
               </div>
        
          </div>
        </div>
      </section>
      <section className="dashboard-page section-space">
        <div className="container">
          <div className="row">
           
            <div className="col-12 ">
              <div className="dashboard-box ">
                <div className="container p-0">
                  <div className="aos-init aos-animate" data-aos="fade-up" data-aos-duration={1500}>
                    <div className="row">
                      <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                        <SidePanelSection />
                      </div>
                      <div className="col-lg-9 col-md-12 col-sm-12 col-12">
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
                          <div className="add-address-box mobile-address row m-0">
                            <div className="col-12 p-0">
                              <div className="address-box-head">
                                <h5> Delivery Address</h5>

                                <button
                                  type="button"
                                  className="common-btn add-address"
                                  onClick={() => setAddressFormOpen(true)}
                                >
                                  Add a new delivery address +
                                </button>
                              </div>
                              <hr />
                              <div className="cart-left">
                                {addressList?.length > 0 ? (
                                  <ul>
                                    {addressList?.map((item, index) => {
                                      return (
                                        <li key={index}>
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
                                                {item?.shipping_first_name}{" "}
                                                {item?.shipping_last_name} (
                                                {item?.address_type}){" "}
                                              </strong>
                                              <br />
                                              {item?.shipping_phone}
                                              <br />
                                              {item?.shipping_address_1},{" "}
                                              {item?.shipping_address_2},{" "}
                                              {item?.shipping_city},{" "}
                                              {item?.shipping_state?.state_name}
                                              ,{" "}
                                              {
                                                item?.shipping_country
                                                  ?.country_name
                                              }
                                              , {item?.shipping_pincode}
                                            </label>
                                            <div>
                                              <a
                                                onClick={() => {
                                                  setEditAddressId(item?.id);
                                                  setAddressFormOpen(true);
                                                }}
                                                className="common-link"
                                              >
                                                Edit <IoCreateOutline />
                                              </a>

                                              <a
                                                onClick={() =>
                                                  deleteAddress(item?.id)
                                                }
                                                className="common-link"
                                              >
                                                {" "}
                                                Remove <IoTrashOutline />
                                              </a>
                                            </div>
                                          </div>
                                        </li>
                                      );
                                    })}
                                  </ul>
                                ) : (
                                  <p>No Address Added yet</p>
                                )}
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
