"use client";

import { getOrderListApi } from "@/api";
import SidePanelSection from "@/components/dashboard/SidePanelSection";
import Layout1 from "@/components/layout/Layout1";
import Preloader from "@/components/Preloader";
import moment from "moment";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  IoArrowForwardOutline,
  IoCube,
  IoCubeOutline,
  IoRepeatOutline,
  IoSearchOutline,
} from "react-icons/io5";

function OrderHistoryPage() {
  const [orderList, setOrderList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      await orderListApi();
    }
    fetchData();
  }, []);

  const orderListApi = async () => {
    let response = await getOrderListApi();
    // console.log(response);
    if (response?.status == 1) {
      setOrderList(response?.data?.list);
    } else {
      response?.error && toast.error(response?.error);
    }
    setLoading(false);
  };

  if (loading) return <Preloader />;

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
                    <li className="breadcrumb-item">
                      <a href="#">Dashboard</a>
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
                  <div className="" data-aos="fade-up" data-aos-duration={1500}>
                    <div className="row">
                      <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                        <SidePanelSection />
                      </div>
                      <div className="col-lg-9 col-md-12 col-sm-12 col-12">
                        <div className="dashboard-content-wrap">
                          <div className="cart-product-list order-status">
                            {/* <div className="row d-flex justify-left">
                              <div className="col-12 col-md-6 col-xl-4">
                                <form className="search-item form-inline my-2 my-lg-0">
                                  <input
                                    className="form-control mr-sm-2"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                  />
                                  <button
                                    className="common-button"
                                    type="submit"
                                  >
                                    <IoSearchOutline
                                      role="img"
                                      className="md hydrated"
                                    />
                                  </button>
                                </form>
                              </div>
                              <div className="col-12 col-md-6 col-xl-3">
                                <div className="float-right mb-4">
                                  <select
                                    className="form-select"
                                    aria-label="Default select example"
                                  >
                                    <option selected="">
                                      <strong>Filter by</strong>
                                    </option>
                                    <option value={1}> All</option>
                                    <option value={2}> In Transit</option>
                                    <option value={3}> Delivered</option>
                                    <option value={4}>Cancelled</option>
                                    <option value={5}>Returned</option>
                                    <option value={6}>Last 30 Days</option>
                                    <option value={7}>Last 6 Months</option>
                                    <option value={8}>Last Year</option>
                                  </select>
                                </div>
                              </div>
                            </div> */}
                            {orderList?.length > 0 ? (
                              <>
                                {orderList?.map((item, index) => {
                                  return (
                                    <div key={index} className="row">
                                      <div className="col-12">
                                        <div className="item order-history-card">
                                          <Link
                                            href={`/orders/${item?.id}`}
                                            className="customstatusicon order-card-link"
                                          >
                                            <div className="row">
                                              {/* Left Section - Icon and Status */}
                                              <div className="col-2 col-sm-2 col-lg-1">
                                                <div className="d-flex flex-column align-items-center align-items-md-start mb-3 mb-md-0">
                                                  <div
                                                    className={`icon ${
                                                      item?.order_status
                                                        ?.code == "DELIVERED"
                                                        ? "delivered"
                                                        : "transit-order"
                                                    } `}
                                                  >
                                                    {item?.order_status?.code ==
                                                    "DELIVERED" ? (
                                                      <IoCube size={25} />
                                                    ) : (
                                                      <IoCubeOutline
                                                        size={25}
                                                      />
                                                    )}
                                                  </div>
                                                </div>
                                              </div>

                                              {/* Middle Section - Order Info */}
                                              <div className="col-6 col-sm-6 col-lg-8">
                                                <div className="content">
                                                  <div className="order-header">
                                                    <h5 className="order-number mb-2">
                                                      Order #
                                                      {item?.order_number}
                                                    </h5>
                                                    <small className="order-date d-block mb-2">
                                                      <i className="far fa-calendar-alt me-2"></i>
                                                      Placed on{" "}
                                                      {moment(
                                                        item?.order_date
                                                      ).format(
                                                        "DD MMM YYYY, hh:mm A"
                                                      )}
                                                    </small>
                                                    <div className="item-count mt-2">
                                                      <strong>
                                                        {item?.item_list
                                                          ?.length || 0}
                                                      </strong>{" "}
                                                      {item?.item_list
                                                        ?.length === 1
                                                        ? "item"
                                                        : "items"}
                                                    </div>
                                                    <span
                                                      className={`status-badge  ${
                                                        item?.order_status
                                                          ?.code == "DELIVERED"
                                                          ? "badge-delivered"
                                                          : item?.order_status
                                                              ?.code ==
                                                            "CANCELLED"
                                                          ? "badge-cancelled"
                                                          : item?.order_status
                                                              ?.code ==
                                                            "RETURNED"
                                                          ? "badge-returned"
                                                          : "badge-transit"
                                                      }`}
                                                    >
                                                      {item?.order_status
                                                        ?.title || "Processing"}
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>

                                              {/* Right Section - Total Amount */}
                                              <div className="col-4 col-sm-4 col-lg-3">
                                                <div className="order-total-section text-end">
                                                  <div
                                                    className="total-label mb-1"
                                                    style={{
                                                      fontSize: "12px",
                                                      color: "#999",
                                                    }}
                                                  >
                                                    Total Amount
                                                  </div>
                                                  <h5
                                                    className="total-amount mb-2"
                                                    style={{
                                                      fontWeight: "600",
                                                      color: "#47515e",
                                                      fontSize: "18px",
                                                    }}
                                                  >
                                                    ₹
                                                    {item?.grand_total ||
                                                      item?.total_amount ||
                                                      "0.00"}
                                                  </h5>
                                                  {item?.item_total &&
                                                    item?.grand_total &&
                                                    item?.item_total !==
                                                      item?.grand_total && (
                                                      <div
                                                        className="original-price text-muted"
                                                        style={{
                                                          textDecoration:
                                                            "line-through",
                                                        }}
                                                      >
                                                        ₹{item?.item_total}
                                                      </div>
                                                    )}
                                                  <div className="d-inline-grid view-details-btn mt-3">
                                                    <span className="order-view-link">
                                                      View Details{" "}
                                                      <IoArrowForwardOutline />
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </Link>
                                        </div>
                                      </div>
                                    </div>
                                  );
                                })}
                              </>
                            ) : (
                              <div
                                className="empty-orders-state"
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  height: 400,
                                  textAlign: "center",
                                  padding: "2rem",
                                }}
                              >
                                <IoCubeOutline
                                  size={64}
                                  style={{
                                    color: "#ccc",
                                    marginBottom: "1rem",
                                  }}
                                />
                                <h5
                                  style={{
                                    color: "#666",
                                    marginBottom: "0.5rem",
                                  }}
                                >
                                  No Orders Found
                                </h5>
                                <p style={{ color: "#999" }}>
                                  You haven't placed any orders yet.
                                </p>
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
          </div>
        </div>
      </section>
    </Layout1>
  );
}

export default OrderHistoryPage;

//  {item?.item_list?.length > 0 &&
//                                                   item?.item_list?.map(
//                                                     (el, i) => {
//                                                       return (
//                                                         <div
//                                                           className="col-12 mb-3"
//                                                           key={i}
//                                                         >
//                                                           <div className="row">
//                                                             <a
//                                                               href={`/product/${el?.product_variant?.product?.slug}/${el?.product_variant?.slug}`}
//                                                               className="col-6 col-md-3"
//                                                             >
//                                                               <div className="item-img">
//                                                                 <img
//                                                                   src={
//                                                                     el
//                                                                       ?.product_variant
//                                                                       ?.image_path
//                                                                   }
//                                                                   className="img-fluid"
//                                                                   alt=""
//                                                                 />
//                                                               </div>
//                                                             </a>
//                                                             <div className="col-6 col-md-6">
//                                                               <div className="item-content">
//                                                                 <p>
//                                                                   {
//                                                                     el
//                                                                       ?.product_variant
//                                                                       ?.product
//                                                                       ?.product_name
//                                                                   }
//                                                                 </p>
//                                                                 <div className="box size mr-2">
//                                                                   Size :
//                                                                   <div>
//                                                                     {" "}
//                                                                     {
//                                                                       el
//                                                                         ?.product_variant
//                                                                         ?.variant_name
//                                                                     }
//                                                                   </div>
//                                                                 </div>

//                                                                 <div className="box size mr-2">
//                                                                   Qty :
//                                                                   <div>
//                                                                     {" "}
//                                                                     {
//                                                                       el?.quantity
//                                                                     }
//                                                                   </div>
//                                                                 </div>
//                                                               </div>
//                                                             </div>
//                                                             <div className="col-12 col-md-3">
//                                                               <div className="product-amt">
//                                                                 <h4 className="price mb-0">
//                                                                   <strong>
//                                                                     ₹{" "}
//                                                                     {
//                                                                       el?.total_price
//                                                                     }
//                                                                   </strong>
//                                                                 </h4>

//                                                               </div>
//                                                             </div>
//                                                           </div>
//                                                         </div>
//                                                       );
//                                                     }
//                                                   )}
