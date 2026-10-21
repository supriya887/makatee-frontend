"use client";

import { getOrderDetailApi, reviewOrderApi } from "@/api";
import SidePanelSection from "@/components/dashboard/SidePanelSection";
import Layout1 from "@/components/layout/Layout1";
import OrderRatingModal from "@/components/order/OrderRatingModal";
import Preloader from "@/components/Preloader";
import moment from "moment";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { IoCube, IoCubeOutline } from "react-icons/io5";
import StarRatings from "react-star-ratings";

export default function OrderDetailPage() {
  const router = useRouter();
  const params = useParams();

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [rateModalVisible, setRateModalVisible] = useState(false);
  const [rateOrderData, setRateOrderData] = useState({});
  const [ratingOrder, setRatingOrder] = useState(0);
  const [rateOrderReason, setRateOrderReason] = useState("");

  useEffect(() => {
    async function fetchData() {
      await orderDetailApi();
    }
    if (params?.order_id) fetchData();
  }, [params?.order_id]);

  const orderDetailApi = async () => {
    let response = await getOrderDetailApi({
      order_id: params?.order_id,
      // order_id: 2,
    });

    if (response?.status == 1) {
      setData(response?.data);
    } else {
      response?.error && toast.error(response?.error);
    }
    setIsLoading(false);
  };

  const rateOrderProduct = async () => {
    let res = await reviewOrderApi({
      order_id: data?.id,
      product_id: rateOrderData?.product_id,
      product_variant_id: rateOrderData?.product_variant_id,
      rating: ratingOrder,
      comment: rateOrderReason,
    });

    if (res?.status == 1) {
      setRateOrderReason("");
      setRatingOrder(0);
      setRateOrderData({});
      router.replace("/orders");
      res?.msg && toast.success(res?.msg);
    } else {
      res?.error && toast.error(res?.error);
    }
  };

  if (isLoading) return <Preloader />;

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
                        <div className="cart-product-list">
                          <div className="d-block text-end">
                            {data?.order_invoice && (
                              <a
                                className="common-btn invoice-btn"
                                target="_blank"
                                href={data?.order_invoice_path}
                              >
                                Get Invoice
                              </a>
                            )}
                          </div>
                          <div className="item">
                            <div className="customstatusicon">
                              <div className="d-flex">
                                <div
                                  className={`icon ${
                                    data?.order_status?.code == "DELIVERED"
                                      ? "delivered"
                                      : "transit-order"
                                  } `}
                                >
                                  {data?.order_status?.code == "DELIVERED" ? (
                                    <IoCube size={25} />
                                  ) : (
                                    <IoCubeOutline size={25} />
                                  )}
                                </div>

                                <div className="content">
                                  <div className="row">
                                    <div className="col-12">
                                      <p>
                                        <strong>
                                          Order ID {data?.order_number}
                                        </strong>
                                      </p>
                                      <h5>{data?.order_status?.title}</h5>
                                      <small className="mb-2 d-block">
                                        On{" "}
                                        {moment(data?.order_date).format(
                                          "DD MMM, YYYY"
                                        )}
                                      </small>
                                      <p>
                                        Delivered - 26 Nov, 2024 | Ordered -{" "}
                                        {moment(data?.order_date).format(
                                          "DD MMM, YYYY"
                                        )}
                                      </p>
                                    </div>
                                    {data?.item_list?.length > 0 &&
                                      data?.item_list?.map((el, i) => {
                                        return (
                                          <div className="col-12 mb-3" key={i}>
                                            <div className="row">
                                              <a
                                                href={`/product/${el?.product_variant?.product?.slug}/${el?.product_variant?.slug}`}
                                                className="col-6 col-md-3"
                                              >
                                                <div className="item-img">
                                                  <img
                                                    src={
                                                      el?.product_variant
                                                        ?.image_path
                                                    }
                                                    className="img-fluid"
                                                    alt=""
                                                  />
                                                </div>
                                              </a>
                                              <div className="col-6 col-md-6">
                                                <div className="item-content">
                                                  <p>
                                                    {
                                                      el?.product_variant
                                                        ?.product?.product_name
                                                    }
                                                  </p>
                                                  <div className="box size mr-2">
                                                    Size :
                                                    <div>
                                                      {
                                                        el?.product_variant
                                                          ?.variant_name
                                                      }
                                                    </div>
                                                  </div>
                                                  {/* <div className="box color mr-2">
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
                                                  <div className="box size mr-2">
                                                    Qty :
                                                    <div> {el?.quantity}</div>
                                                  </div>

                                                  <div
                                                    className="mt-2"
                                                    onClick={() => {
                                                      if (
                                                        el?.show_review_button ==
                                                        true
                                                      ) {
                                                        setRateOrderData(el);
                                                        setRateModalVisible(
                                                          true
                                                        );
                                                      }
                                                    }}
                                                  >
                                                    <StarRatings
                                                      rating={Number(
                                                        el?.is_rating_given
                                                      )}
                                                      numberOfStars={5}
                                                      starDimension="24px"
                                                      starSpacing="1px"
                                                       isSelectable={false}
                                                      starHoverColor="#287bff"
                                                      starRatedColor="#287bff"
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-12 col-md-3">
                                                <div className="product-amt">
                                                  <h4 className="price mb-0">
                                                    <strong>
                                                      ₹ {el?.total_price}
                                                    </strong>
                                                  </h4>
                                                </div>
                                              </div>
                                            </div>

                                            <hr />
                                          </div>
                                        );
                                      })}
                                  </div>

                                  {data?.order_logs?.length > 0 ? (
                                    <div className="col-12 mt-3">
                                      <div id="tracking-pre" />

                                      <div id="tracking">
                                        <div className="tracking-list">
                                          {data?.order_logs?.map((el, i) => {
                                            return (
                                              <div
                                                key={i}
                                                className={`tracking-item`}
                                              >
                                                <div className="tracking-icon status-intransit">
                                                  <svg
                                                    className="svg-inline--fa fa-circle fa-w-16"
                                                    aria-hidden="true"
                                                    data-prefix="fas"
                                                    data-icon="circle"
                                                    role="img"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512 512"
                                                    data-fa-i2svg=""
                                                  >
                                                    <path
                                                      fill="currentColor"
                                                      d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"
                                                    ></path>
                                                  </svg>
                                                </div>
                                                <div className="icon transit">
                                                  <IoCubeOutline size={18} />
                                                </div>
                                                <div className="tracking-content">
                                                  {el?.order_status?.title}
                                                  <span>
                                                    {moment(
                                                      el?.created_at
                                                    ).format(
                                                      "DD MMM YYYY, hh:mm a"
                                                    )}
                                                  </span>
                                                </div>
                                              </div>
                                            );
                                          })}
                                        </div>
                                      </div>
                                    </div>
                                  ) : null}
                                </div>
                              </div>

                              <hr />

                              <div
                                className="pricebreakup-base-ordersummary"
                                id="priceblock"
                              >
                                <div className="pricedetail-base-row ">
                                  <ul>
                                    <li className="mt-2">
                                      <strong>
                                        Price Details ({data?.item_list?.length}{" "}
                                        Items)
                                      </strong>{" "}
                                      <span>
                                        <strong>{data?.payment_name}</strong>
                                      </span>
                                    </li>
                                    <li>
                                      <span>Total MRP</span>{" "}
                                      <span>₹ {data?.item_total}</span>
                                    </li>
                                    <li>
                                      <span>Coupon Discount</span>{" "}
                                      <span>
                                        - ₹ {data?.coupon_discount_amount}
                                      </span>
                                    </li>
                                    <li>
                                      <span>Tax</span>{" "}
                                      <span>₹ {data?.tax_amount}</span>
                                    </li>
                                    <li>
                                      <span>Shipping Fee</span>
                                      <span>{data?.delivery_amount}</span>
                                    </li>
                                    <li className="pricedetail-base-total  mb-3">
                                      <h5>Total Amount</h5>
                                      <h5>₹ {data?.grand_total}</h5>
                                    </li>
                                  </ul>
                                </div>
                                <hr />
                              </div>
                              <div className="delivery-address">
                                <h5 className="mb-0">Delivery Address</h5>
                                <p>
                                  {data?.shipping_first_name}{" "}
                                  {data?.shipping_last_name} (Home)
                                  <br />
                                  {data?.shipping_country_code}{" "}
                                  {data?.shipping_phone}
                                  <br />
                                  {data?.shipping_address_1}{" "}
                                  {data?.shipping_address_2}{" "}
                                  {data?.shipping_city} -{" "}
                                  {data?.shipping_pincode}
                                </p>
                              </div>

                              {/* <div className="upload-img-area mb-4">
                                <h6 className="text-dark">
                                  Upload Images / Logos
                                </h6>
                                <div className="file-upload-contain">
                                  <input
                                    id="multiplefileupload"
                                    type="file"
                                    accept=".jpg,.gif,.png"
                                    multiple=""
                                  />
                                </div>
                              </div> */}
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
        </div>
      </section>

      <OrderRatingModal
        show={rateModalVisible}
        onHide={() => {
          setRateOrderReason("");
          setRateModalVisible(false);
        }}
        rateOrderDetail={rateOrderData}
        inputValue={rateOrderReason}
        inputOnChange={(e) => setRateOrderReason(e.target.value)}
        buttonOnclick={rateOrderProduct}
        numberofRating={ratingOrder}
        onChangeRating={(newRating) => setRatingOrder(newRating)}
      />
    </Layout1>
  );
}
