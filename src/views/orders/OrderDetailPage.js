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
                              <a href="payment-method.php">
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
                        <div className="dashboard-content-wrap">
                          <div
                            className="cart-product-list"
                            style={{ backgroundColor: "unset" }}
                          >
                            <div
                              className="item"
                              style={{
                                boxShadow: "none",
                                backgroundColor: "unset",
                              }}
                            >
                              <div className="d-block text-end">
                                {" "}
                                <a href="" className="common-btn border-btn">
                                  <i className="bi bi-receipt" /> Get Invoice
                                </a>
                              </div>
                              <div className="customstatusicon">
                                <div className="icon">
                                  <i className="bi bi-cart-check" />
                                </div>
                                <div className="content">
                                  <h6>Delivered</h6>
                                  <p>On Sun, 9 Jun</p>
                                  <h6 className="text-dark mt-2 d-block">
                                    Order ID : <strong>#1269482</strong>
                                  </h6>
                                  <div className="dashboard-content-row row ">
                                    <div className="col-2 item-img">
                                      <img
                                        src="/assets/images/category/trophies/trophy-img.png"
                                        className="img-fluid"
                                        alt=""
                                      />
                                    </div>
                                    <div className="col-9 item-content">
                                      <p>
                                        Arden Victory Real Wood Shield Trophy
                                      </p>
                                      <div className="d-flex">
                                        <div className="box size mr-2">
                                          Size :<div>&nbsp; 80mm</div>
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
                                        <div className="box size mr-2">
                                          Quantity :<div> &nbsp;30pcs</div>
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="delivery-address mt-3">
                                        <h6>
                                          <strong className="text-dark">
                                            {" "}
                                            Delivery Address
                                          </strong>
                                        </h6>
                                        <h6 className="mb-0">
                                          {" "}
                                          Anita Salunkhe | 9930333059
                                        </h6>
                                        5A/101, malvani vighneshwar CHS Ltd,
                                        near Billabong school, Malad West,
                                        Mumbai, New MHADA, Mumbai - 400095
                                        <br />
                                        Payment Mode : Cash On Delivery
                                      </div>
                                      <h3 className="price mb-0 mt-3">
                                        {" "}
                                        Total Price <strong> ₹ 767</strong>
                                      </h3>
                                      <a href="" className="tax-text">
                                        Payment Details
                                      </a>
                                    </div>
                                    {/* <div class="mt-1"><i class="bi bi-arrow-counterclockwise"></i> Return
        Available</div>
    <div class="mt-1"><i class="bi bi-check-circle"></i>
        Delivery by 17 Dec 2024</div> */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="rate-product-box">
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
                            <h6 className="text-dark">Add a Written Review</h6>
                            <textarea
                              type="text"
                              className="form-control"
                              id=""
                              aria-describedby=""
                              placeholder="What did you like or dislike? What did you use this product for?"
                              defaultValue={""}
                            />
                            <div id="billing_address" className="form-text" />
                          </div>
                          <hr />
                          <div className="upload-img-area mb-4">
                            <h6 className="text-dark">Upload Images / Logos</h6>
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
      </section>
    </Layout1>
  );
}
