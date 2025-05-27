import Layout1 from "@/components/layout/Layout1";
import React from "react";

export default function OrderDetailPage() {
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
                        {/* <div class="mobile_filter mobile" id="toggleButton">
                                  <h4>Dashboard Menu</h4>
                                  <i class="fa fa-bars" aria-hidden="true"></i>
                              </div> */}
                        <div className="dashborad_side_panel" id="myDiv">
                          <ul>
                            <li>
                              <a href="/dashboard">
                                <i className="bi bi-columns-gap" />
                                <h6>Dashboard</h6>
                              </a>
                            </li>
                            <li className="active">
                              <a href="/orders">
                                <i className="bi bi-cart-check" />
                                <h6>Order History</h6>
                              </a>
                            </li>
                            <li className="">
                              <a href={`/payment-method`}>
                                <i className="bi bi-person-gear" />
                                <h6>Edit Profile</h6>
                              </a>
                            </li>
                            <li className="">
                              <a href="/address">
                                <i className="bi bi-pencil-square" />
                                <h6>Addresses</h6>
                              </a>
                            </li>
                            <li className="">
                              <a href="/change-password">
                                <i className="bi bi-lock" />
                                <h6>Change Password</h6>
                              </a>
                            </li>
                            {/* <li class="">
                    <a href="dashboard-forgot-password.php">
                      <i class="bi bi-lock"></i>
                      <h6>Forgot Password</h6>
                    </a>
                  </li> */}
                            <li>
                              <a href="">
                                <ion-icon name="log-out-outline" />
                                <h6>Logout</h6>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-9 col-md-12 col-sm-12 col-12">
                        <div className="cart-product-list">
                          <div className="item">
                            <div className="d-block text-end">
                              {" "}
                              <a href="" className="common-btn border-btn">
                                <i className="bi bi-receipt" /> Get Invoice
                              </a>
                            </div>
                            <div className="customstatusicon">
                              <div className="d-flex p-2">
                                <div className="icon delivered">
                                  <ion-icon
                                    name="cube"
                                    role="img"
                                    className="md hydrated"
                                  ></ion-icon>
                                </div>
                                <div className="content">
                                  <div className="row">
                                    <div className="col-12">
                                      <p>
                                        <strong>Order ID #123456</strong>
                                      </p>
                                      <h5>Delivered</h5>
                                      <small className="mb-2 d-block">
                                        On Sun, 9 Jun
                                      </small>
                                      <p>
                                        Delivered - 26 Nov, 2024 | Ordered - 16
                                        Nov, 2024
                                      </p>
                                    </div>
                                    <div className="col-12">
                                      <div className="row">
                                        <div className="col-12 col-md-2">
                                          <div className="item-img">
                                            <img
                                              src="/assets/images/category/trophies/trophy-img.png"
                                              className="img-fluid"
                                              alt=""
                                            />
                                          </div>
                                        </div>
                                        <div className="col-12 col-md-7">
                                          <div className="item-content">
                                            <p>
                                              Arden Victory Real Wood Shield
                                              Trophy
                                            </p>
                                            <div className="box size mr-2">
                                              Size :<div> 80mm</div>
                                            </div>
                                            <div className="box color mr-2">
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
                                            <div className="box size mr-2">
                                              Qty :<div> 50pcs</div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-12 col-md-3">
                                          <div className="product-amt">
                                            <h4 className="price mb-0">
                                              <strong>₹ 8767</strong>
                                            </h4>
                                            <span className="slash-price">
                                              ₹ 1500
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="d-flex p-2 mt-5">
                                <div className="icon transit">
                                  <ion-icon name="cube" />
                                </div>
                                <div className="content">
                                  <div className="row">
                                    <div className="col-12">
                                      <p>
                                        <strong>Order ID #123456</strong>
                                      </p>
                                      <h5>In Transit</h5>
                                      <small className="mb-2 d-block">
                                        On Sun, 9 Jun
                                      </small>
                                      <p>
                                        Delivered - 26 Nov, 2024 | Ordered - 16
                                        Nov, 2024
                                      </p>
                                    </div>
                                    <div className="col-12">
                                      <div className="row">
                                        <div className="col-12 col-md-2">
                                          <div className="item-img">
                                            <img
                                              src="/assets/images/category/trophies/trophy-img.png"
                                              className="img-fluid"
                                              alt=""
                                            />
                                          </div>
                                        </div>
                                        <div className="col-12 col-md-7">
                                          <div className="item-content">
                                            <p>
                                              Arden Victory Real Wood Shield
                                              Trophy
                                            </p>
                                            <div className="box size mr-2">
                                              Size :<div> 80mm</div>
                                            </div>
                                            <div className="box color mr-2">
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
                                            <div className="box size mr-2">
                                              Qty :<div> 50pcs</div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-12 col-md-3">
                                          <div className="product-amt">
                                            <h4 className="price mb-0">
                                              <strong>₹ 8767</strong>
                                            </h4>
                                            <span className="slash-price">
                                              ₹ 1500
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-12 mt-3">
                                      <div id="tracking-pre" />
                                      <div id="tracking">
                                        <div className="tracking-list">
                                          <div className="tracking-item">
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
                                            <div className="tracking-date">
                                              {" "}
                                              <ion-icon name="cube-outline" />
                                            </div>
                                            <div className="tracking-content">
                                              Order Placed
                                              <span>09 Aug 2021, 10:00am</span>
                                            </div>
                                          </div>
                                          <div className="tracking-item">
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
                                            <div className="tracking-date">
                                              {" "}
                                              <ion-icon name="cube-outline" />
                                            </div>
                                            <div className="tracking-content">
                                              Order Confirmed
                                              <span>09 Aug 2021, 10:30am</span>
                                            </div>
                                          </div>
                                          <div className="tracking-item">
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
                                            <div className="tracking-date">
                                              {" "}
                                              <ion-icon name="cube-outline" />
                                            </div>
                                            <div className="tracking-content">
                                              Packed the product
                                              <span>09 Aug 2021, 12:00pm</span>
                                            </div>
                                          </div>
                                          <div className="tracking-item">
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
                                            <div className="tracking-date">
                                              {" "}
                                              <ion-icon name="cube-outline" />
                                            </div>
                                            <div className="tracking-content">
                                              Arrived in the warehouse
                                              <span>10 Aug 2021, 02:00pm</span>
                                            </div>
                                          </div>
                                          <div className="tracking-item">
                                            <div className="tracking-icon status-current blinker">
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
                                            <div className="tracking-date">
                                              {" "}
                                              <ion-icon name="cube-outline" />
                                            </div>
                                            <div className="tracking-content">
                                              Near by Courier facility
                                              <span>10 Aug 2021, 03:00pm</span>
                                            </div>
                                          </div>
                                          <div className="tracking-item-pending">
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
                                            <div className="tracking-date">
                                              {" "}
                                              <ion-icon name="cube-outline" />
                                            </div>
                                            <div className="tracking-content">
                                              Out for Delivery
                                              <span>12 Aug 2021, 05:00pm</span>
                                            </div>
                                          </div>
                                          <div className="tracking-item-pending">
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
                                            <div className="tracking-date">
                                              {" "}
                                              <ion-icon name="cube-outline" />
                                            </div>
                                            <div className="tracking-content">
                                              Delivered
                                              <span>12 Aug 2021, 09:00pm</span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
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
                                      <strong>Price Details (4 Items)</strong>{" "}
                                      <span>
                                        <strong>Cash On Delivery</strong>
                                      </span>
                                    </li>
                                    <li>
                                      <span>Total MRP</span>{" "}
                                      <span>₹ 74,703</span>
                                    </li>
                                    <li>
                                      <span>Discount on MRP</span>{" "}
                                      <span>₹ 39,998</span>
                                    </li>
                                    <li>
                                      <span>Coupon Discount</span>{" "}
                                      <span>- ₹ 9,998</span>
                                    </li>
                                    <li>
                                      <span>
                                        Shipping Fee
                                        <br />
                                        <small>
                                          (Free shipping for Makateers)
                                        </small>{" "}
                                      </span>
                                      <span>FREE</span>
                                    </li>
                                    <li className="pricedetail-base-total  mb-3">
                                      <h5>Total Amount</h5>
                                      <h5>₹ 34,725</h5>
                                    </li>
                                  </ul>
                                </div>
                                <hr />
                              </div>
                              <div className="delivery-address">
                                <h5 className="mb-0">Delivery Address</h5>
                                <p>
                                  Vikkas Goyal (Home)
                                  <br />
                                  912345 67891
                                  <br />
                                  5A/101, malvani vighneshwar CHS Ltd, near
                                  Billabong school, Malad West, Mumbai, New
                                  MHADA, Mumbai - 400095
                                </p>
                              </div>

                              <h4 className="mb-4">
                                <strong>Rate this Product</strong>
                              </h4>
                              <div className="rating-list mb-4 d-flex">
                                <h6 className="text-dark mb-0">
                                  Overall Rating :{" "}
                                </h6>
                                <div>
                                  &nbsp;
                                  <input
                                    type="radio"
                                    name="ratings[1]"
                                    id="Overall Rating_5"
                                    defaultValue={5}
                                    className="radio rating-radio rating-radio--5"
                                  />
                                  <label
                                    htmlFor="Overall Rating_5"
                                    title="1 star rating"
                                    className="star-rating star-rating--5"
                                  />
                                  <input
                                    type="radio"
                                    name="ratings[1]"
                                    id="Overall Rating_4"
                                    defaultValue={4}
                                    className="radio rating-radio rating-radio--4"
                                  />
                                  <label
                                    htmlFor="Overall Rating_4"
                                    title="2 star rating"
                                    className="star-rating star-rating--4"
                                  />
                                  <input
                                    type="radio"
                                    name="ratings[1]"
                                    id="Overall Rating_3"
                                    defaultValue={3}
                                    className="radio rating-radio rating-radio--3"
                                  />
                                  <label
                                    htmlFor="Overall Rating_3"
                                    title="3 star rating"
                                    className="star-rating star-rating--3"
                                  />
                                  <input
                                    type="radio"
                                    name="ratings[1]"
                                    id="Overall Rating_2"
                                    defaultValue={2}
                                    className="radio rating-radio rating-radio--2"
                                  />
                                  <label
                                    htmlFor="Overall Rating_2"
                                    title="4 star rating"
                                    className="star-rating star-rating--2"
                                  />
                                  <input
                                    type="radio"
                                    name="ratings[1]"
                                    id="Overall Rating_1"
                                    defaultValue={1}
                                    className="radio rating-radio rating-radio--1"
                                  />
                                  <label
                                    htmlFor="Overall Rating_1"
                                    title="5 star rating"
                                    className="star-rating star-rating--1"
                                  />
                                </div>
                              </div>
                              <hr />
                              <div className="comment mb-4 d-block">
                                <h6 className="text-dark">
                                  Add a Written Review
                                </h6>
                                <textarea
                                  type="text"
                                  className="form-control"
                                  id=""
                                  aria-describedby=""
                                  placeholder="What did you like or dislike? What did you use this product for?"
                                  defaultValue={""}
                                />
                                <div
                                  id="billing_address"
                                  className="form-text"
                                />
                              </div>
                              <hr />
                              <div className="upload-img-area mb-4">
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
                              </div>
                              <a
                                href="checkout.php"
                                className="common-btn common-btn-purple mt-4 d-block w-100 text-center"
                              >
                                Proceed to Buy
                              </a>
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
    </Layout1>
  );
}
