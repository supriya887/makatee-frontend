"use client";

import Layout1 from "@/components/layout/Layout1";
import ProductCard1 from "@/components/product/ProductCard1";
import { TROPHY_HOME_ROUTE, UNIFORM_HOME_ROUTE } from "@/utils/constants";
import React from "react";
import {
  IoAddOutline,
  IoArrowBackOutline,
  IoArrowForwardOutline,
  IoCartOutline,
  IoCheckmarkCircleOutline,
  IoHeartOutline,
  IoLogoWhatsapp,
  IoPlayCircleOutline,
  IoStar,
  IoTrashOutline,
} from "react-icons/io5";
import { EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function ProductDetailsPage() {
  return (
    <Layout1>
      <>
        <section className="product-details-box section-space pt-0">
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
                        <a href="#">Trophies</a>
                      </li>
                      <li className="breadcrumb-item" aria-current="page">
                        <a href="#">Crystal Trophies</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        {" "}
                        Arden Victory Real Wood Shield Trophy
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
              <div className="col-12">
                <div className="product-detail-section section-space pt-0">
                  <div className="row">
                    <div className="col-md-6 col-12">
                      <div className="product-detail-left">
                        {/* top gallery */}
                        <main className="swiper gallery slider-one popup-gallery">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <a
                                className="lightbox"
                                href="/assets/images/category/trophies/trophy-img.png"
                              >
                                <img
                                  src="/assets/images/category/trophies/trophy-img.png"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="swiper-slide">
                              <a
                                href="video/product-video.mp4"
                                className="video_model"
                              >
                                <video width="100%" height="400px" controls="">
                                  <source
                                    src="video/product-video.mp4"
                                    type="video/mp4"
                                  />
                                </video>
                              </a>
                            </div>
                            <div className="swiper-slide">
                              <a
                                className="lightbox"
                                href="images/category/trophies/product-img/2.jpg"
                              >
                                <img
                                  src="/assets/images/category/trophies/product-img/2.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="swiper-slide">
                              <a
                                className="lightbox"
                                href="/assets/images/category/trophies/product-img/3.jpg"
                              >
                                <img
                                  src="/assets/images/category/trophies/product-img/3.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                        </main>
                        {/* thumbs */}
                        <nav className="swiper gallery-thumbs slider-two">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <img src="/assets/images/category/trophies/trophy-img.png" />
                            </div>
                            <div className="swiper-slide">
                              {/* <ion-icon name="play-circle-outline" /> */}
                              <IoPlayCircleOutline size={22} />
                              <img src="/assets/images/category/trophies/product-img/4.jpg" />
                            </div>
                            <div className="swiper-slide">
                              <img src="/assets/images/category/trophies/product-img/2.jpg" />
                            </div>
                            <div className="swiper-slide">
                              <img src="/assets/images/category/trophies/product-img/3.jpg" />
                            </div>
                          </div>
                        </nav>
                        <div className="whatsapp-detail mt-3">
                          {/* <ion-icon name="logo-whatsapp" /> */}
                          <IoLogoWhatsapp />
                          <p>
                            Do you need suggestion?
                            <br />{" "}
                            <a href=""> Whatsapp Us : +91 98192 0780377</a>
                          </p>
                        </div>
                      </div>
                      <div className="product-code">
                        <hr className="mt-5" />
                        <div>
                          Product Code: <strong>21082388 </strong>
                        </div>
                        <hr />
                        <div className="rate-product-box">
                          <h5 className="review-head">
                            <div className="rate-box">
                              4 <IoStar />
                              {/* <ion-icon name="star" role="img" /> */}
                            </div>
                            <a href="">576 Ratings | 111 Reviews</a>
                          </h5>
                          <div className="review-image-gallery mt-5">
                            <div className="review-des">
                              <h5 className="mb-4 ">Customer Images</h5>
                              <a href="view-all-reviews.php">
                                View All Reviews{" "}
                              </a>
                            </div>
                            <div className="swiper customer-review-slider">
                              <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                  <div className="category-box">
                                    <a href="">
                                      <div className="category-img">
                                        <img
                                          src="/assets/images/product-img/product1.jpg"
                                          className="img-fluid"
                                          alt=""
                                        />
                                      </div>
                                    </a>
                                  </div>
                                </div>
                                <div className="swiper-slide">
                                  <div className="category-box">
                                    <a href="">
                                      <div className="category-img">
                                        <img
                                          src="/assets/images/product-img/product1.jpg"
                                          className="img-fluid"
                                          alt=""
                                        />
                                      </div>
                                    </a>
                                  </div>
                                </div>
                                <div className="swiper-slide">
                                  <div className="category-box">
                                    <a href="">
                                      <div className="category-img">
                                        <img
                                          src="/assets/images/product-img/product1.jpg"
                                          className="img-fluid"
                                          alt=""
                                        />
                                      </div>
                                    </a>
                                  </div>
                                </div>
                                <div className="swiper-slide">
                                  <div className="category-box">
                                    <a href="">
                                      <div className="category-img">
                                        <img
                                          src="/assets/images/product-img/product1.jpg"
                                          className="img-fluid"
                                          alt=""
                                        />
                                      </div>
                                    </a>
                                  </div>
                                </div>
                                <div className="swiper-slide">
                                  <div className="category-box">
                                    <a href="">
                                      <div className="category-img">
                                        <img
                                          src="/assets/images/product-img/product1.jpg"
                                          className="img-fluid"
                                          alt=""
                                        />
                                      </div>
                                    </a>
                                  </div>
                                </div>
                                <div className="swiper-slide">
                                  <div className="category-box">
                                    <a href="">
                                      <div className="category-img">
                                        <img
                                          src="/assets/images/product-img/product1.jpg"
                                          className="img-fluid"
                                          alt=""
                                        />
                                      </div>
                                    </a>
                                  </div>
                                </div>
                                <div className="swiper-slide">
                                  <div className="category-box">
                                    <a href="">
                                      <div className="category-img">
                                        <img
                                          src="/assets/images/product-img/product1.jpg"
                                          className="img-fluid"
                                          alt=""
                                        />
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="swiper-pagination" />
                              {/* <div class="swiper-button-next uniform-swiper-button-next"><i class="bi bi-arrow-right-short"></i></div>
                                      <div class="swiper-button-prev uniform-swiper-button-prev"><i class="bi bi-arrow-left-short"></i></div> */}
                            </div>
                          </div>
                          <div className="review-comment">
                            <h5 className="mb-3 mt-4">Reviews</h5>
                            <div className="review-comment-box">
                              <div className="review-content">
                                <div className="rate-box">
                                  4 <IoStar />
                                  {/* <ion-icon name="star" /> */}
                                </div>{" "}
                                <small>5 Days ago</small>
                              </div>
                              <p>Loved it they are amazing quality!</p>
                            </div>
                            <div className="review-comment-box">
                              <div className="review-content">
                                <div className="rate-box">
                                  4 <IoStar />
                                  {/* <ion-icon name="star" /> */}
                                </div>{" "}
                                <small>5 Days ago</small>
                              </div>
                              <p>Loved it they are amazing quality!</p>
                            </div>
                            <div className="review-comment-box">
                              <div className="review-content">
                                <div className="rate-box">
                                  4 <IoStar />
                                  {/* <ion-icon name="star" /> */}
                                </div>{" "}
                                <small>5 Days ago</small>
                              </div>
                              <p>Loved it they are amazing quality!</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <div className="product-detail-right">
                        <h4>Arden Victory Real Wood Shield Trophy</h4>
                        <div className="price-box">
                          <h4>
                            {" "}
                            <small className="discount-text">
                              MRP <span className="slash">₹3196</span>
                              {/* <span
                                              class="discount">(76%
                                              OFF)</span> */}
                            </small>{" "}
                            ₹ 767
                          </h4>
                          <span className="tax-text">
                            inclusive of all taxes
                          </span>
                        </div>
                        <div className="rate-box mb-5 mt-0">
                          4 <IoStar role="img" className="md hydrated" />
                          {/* <ion-icon
                            name="star"
                            role="img"
                            className="md hydrated"
                          ></ion-icon> */}
                        </div>
                        <div className="product-custom">
                          <div className="size-box">
                            <h6>Choose Size (Height)</h6>
                            <ul>
                              <li>
                                <button className="size-active">30 mm</button>
                              </li>
                              <li>
                                <button>40 mm</button>
                              </li>
                              <li>
                                <button>50 mm</button>
                              </li>
                              <li>
                                <button>60 mm</button>
                              </li>
                            </ul>
                          </div>
                          <div className="d-flex">
                            <div className="quantity-box mb-4">
                              <h6>Quantity</h6>
                              <div className="quantity">
                                <div className="input-group  align-items-center">
                                  <input
                                    type="button"
                                    defaultValue="-"
                                    className="qty-btn button-minus "
                                    data-field="quantity"
                                  />
                                  <input
                                    type="number"
                                    step={1}
                                    max={10}
                                    defaultValue={1}
                                    name="quantity"
                                    className="quantity-field text-center"
                                  />
                                  <input
                                    type="button"
                                    defaultValue="+"
                                    className="qty-btn button-plus "
                                    data-field="quantity"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="color-box mb-4">
                              <div className="d-flex">
                                <h6>Colors </h6>
                              </div>
                              <ul>
                                <li className="swatch gold">
                                  <div
                                    className="tooltip bs-tooltip-top"
                                    role="tooltip"
                                  >
                                    <div className="tooltip-arrow" />
                                    <div className="tooltip-inner"></div>
                                  </div>
                                  <input
                                    type="radio"
                                    name="swatch_demo"
                                    id="swatch_2"
                                    defaultValue={2}
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Gold"
                                  />
                                  <label htmlFor="swatch_2">
                                    <i className="bi bi-check-lg" />
                                  </label>
                                </li>
                                <li className="swatch sliver">
                                  <div
                                    className="tooltip bs-tooltip-top"
                                    role="tooltip"
                                  >
                                    <div className="tooltip-arrow" />
                                    <div className="tooltip-inner"></div>
                                  </div>
                                  <input
                                    type="radio"
                                    name="swatch_demo"
                                    id="swatch_3"
                                    defaultValue={2}
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Sliver"
                                  />
                                  <label htmlFor="swatch_2">
                                    <i className="bi bi-check-lg" />
                                  </label>
                                </li>
                                <li className="swatch black">
                                  <div
                                    className="tooltip bs-tooltip-top"
                                    role="tooltip"
                                  >
                                    <div className="tooltip-arrow" />
                                    <div className="tooltip-inner"></div>
                                  </div>
                                  <input
                                    type="radio"
                                    name="swatch_demo"
                                    id="swatch_1"
                                    defaultValue={2}
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Black"
                                  />
                                  <label htmlFor="swatch_1">
                                    <i className="bi bi-check-lg" />
                                  </label>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="stock">
                            {/* <ion-icon name="checkmark-circle-outline" />  */}{" "}
                            <IoCheckmarkCircleOutline />
                            In Stock 100+ Available
                          </div>
                          <div className="customize-product mt-4">
                            <h5 className="d-flex mb-0">
                              <div className=" form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue=""
                                  id="flexCheckDefault1"
                                  onclick="checkMe(this.checked);"
                                />
                              </div>
                              <div>
                                <strong>Customise your product</strong>
                                <br />
                                <small className="mb-5">
                                  Please add your text requirements in the box
                                  provided.{" "}
                                </small>
                              </div>
                            </h5>
                            <div id="divcheck" style={{ display: "none" }}>
                              <div className="bg-white mt-2 p-3">
                                <strong>Upload Images/Logos</strong>
                                <br />
                                <div className="upload-file file-loading">
                                  <input
                                    id="multiplefileupload"
                                    type="file"
                                    accept=".jpg,.gif,.png"
                                    multiple=""
                                  />
                                </div>
                              </div>
                              <div className="content-add">
                                <div className="des-head">
                                  {/* <ion-icon name="add-outline" />  */}{" "}
                                  <IoAddOutline />
                                  Add 2/3
                                </div>
                                <div className="des-add">
                                  <div className="delete-icon">
                                    <a href="">
                                      {/* <ion-icon name="trash-outline" /> */}{" "}
                                      <IoTrashOutline />
                                    </a>
                                  </div>
                                  <div className="mb-3">
                                    <h6> Title</h6>
                                    <textarea
                                      className="w-100"
                                      data-counter="upsell_group_note-counter"
                                      name="upsell_group_note[2]"
                                      rows={1}
                                      maxLength={255}
                                      required=""
                                      placeholder=""
                                      defaultValue={""}
                                    />
                                    <small>
                                      {" "}
                                      Remaining number of characters:{" "}
                                      <span className="upsell_group_note-2-counter">
                                        50
                                      </span>
                                    </small>
                                  </div>
                                  <div className="mt-3 mb-3">
                                    <h6> Description</h6>
                                    <textarea
                                      className="w-100"
                                      data-counter="upsell_group_note-counter3"
                                      name="upsell_group_note[3]"
                                      rows={2}
                                      maxLength={255}
                                      required=""
                                      placeholder=""
                                      defaultValue={""}
                                    />
                                    <small>
                                      {" "}
                                      Remaining number of characters:{" "}
                                      <span className="upsell_group_note-3-counter">
                                        250
                                      </span>
                                    </small>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="buttons">
                            <a
                              href="/cart"
                              className="common-btn addtocart-btn"
                            >
                              <IoCartOutline size={24} />{'  '} Add to Cart
                            </a>
                            <a
                              href="/wishlist"
                              className="common-btn wishlist-main-btn"
                            >
                              <IoHeartOutline size={24} />
                              Wishlist
                            </a>
                          </div>
                          <div id="more-info">
                            <div className="other-info mt-5">
                              <div className="description-box">
                                <nav>
                                  <div
                                    className="nav nav-tabs mb-3"
                                    id="nav-tab"
                                    role="tablist"
                                  >
                                    <button
                                      className="nav-link active"
                                      id="nav-home-tab"
                                      data-bs-toggle="tab"
                                      data-bs-target="#nav-home"
                                      type="button"
                                      role="tab"
                                      aria-controls="nav-home"
                                      aria-selected="true"
                                    >
                                      Parameters
                                    </button>
                                    <button
                                      className="nav-link"
                                      id="nav-profile-tab"
                                      data-bs-toggle="tab"
                                      data-bs-target="#nav-profile"
                                      type="button"
                                      role="tab"
                                      aria-controls="nav-profile"
                                      aria-selected="false"
                                    >
                                      Description
                                    </button>
                                  </div>
                                </nav>
                                <div
                                  className="tab-content "
                                  id="nav-tabContent"
                                >
                                  <div
                                    className="tab-pane fade active show"
                                    id="nav-home"
                                    role="tabpanel"
                                    aria-labelledby="nav-home-tab"
                                  >
                                    <table className="table">
                                      <tbody>
                                        <tr>
                                          <td>Material:</td>
                                          <td>
                                            <b>Acrylic</b>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Thickness:</td>
                                          <td>
                                            <b>4mm</b>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Orientation:</td>
                                          <td>
                                            <b>
                                              Portrait
                                              <br />
                                            </b>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Print:</td>
                                          <td>
                                            <b>Digital full colour</b>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Ribbon style:</td>
                                          <td>
                                            <b>Clip-on (sold separatley)</b>
                                            <br />
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Minimum Order:</td>
                                          <td>
                                            <b>50</b>
                                            <br />
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Sizes:</td>
                                          <td>
                                            <b>
                                              50mm, 60mm, 70mm, 80mm, 100mm
                                              <br />
                                            </b>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Engraving:</td>
                                          <td>
                                            <b>N/A</b>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                  <div
                                    className="tab-pane fade"
                                    id="nav-profile"
                                    role="tabpanel"
                                    aria-labelledby="nav-profile-tab"
                                  >
                                    <p>
                                      {" "}
                                      Let Trophy Monster make your next
                                      presentation extra special. We produce
                                      bespoke medals at not only affordable
                                      prices but with a simple ordering process
                                      too. Created in our own studio and
                                      manufactured in our own factory.
                                    </p>
                                    <p>
                                      {" "}
                                      Simply place your order, upload an image
                                      of your clubs shirt together with badge
                                      and even a sponsors logo if required. We
                                      take care of the rest. At check-out you
                                      can also leave a note with further
                                      instructions if required. Normally, within
                                      48hrs we will email you a full colour PDF
                                      proof for your approval. Buy with complete
                                      confidence as nothing will be manufactured
                                      until you have approved a proof. The
                                      prices you see are the price you pay.
                                      There are no hidden extras and take
                                      advantage of our bulk quantity discounts!
                                    </p>
                                    <p>
                                      Have your teams actual shirt custom
                                      printed onto the fabulous Cricket Shirt
                                      Custom Made Acrylic Medal. Like some of
                                      the legend shirts we have been
                                      commissioned to make we can produce
                                      exactly the same award for your next
                                      presentation. For a surcharge we can also
                                      print individual names and numbers on the
                                      back of the shirt. For this service simply
                                      click the selection button below and after
                                      placing the order email the details in
                                      reply to your order confirmation.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className=" bulk-discount mt-4">
                                <IoCheckmarkCircleOutline />
                                <p>
                                  BULK QUANTITY DISCOUNTS APPLICABLE TO THIS
                                  PRODUCT. <br />{" "}
                                  <a href="">
                                    Click here to see our quantity discounts
                                  </a>
                                </p>
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
        <section className="similar-section">
          <div className="container section-space ">
            <div className="row">
              <div className="col-12">
                <div className="product-showcase-head ">
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <h4 className="product-left">Similar Products</h4>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="product-right">
                        <div>
                          <a href="product-listing.php" className="common-btn">
                            View All
                          </a>
                        </div>
                        <div className="arrow-box">
                          <div className="swiper-button-prev similar-product-button-prev">
                            <IoArrowBackOutline />
                          </div>
                          <div className="swiper-button-next similar-product-button-next">
                            <IoArrowForwardOutline />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>

                <Swiper
                  // centeredSlides={true}
                  modules={[EffectFade, Navigation]}
                  //   effect={"fade"}
                  navigation={{
                    nextEl: ".similar-product-button-next",
                    prevEl: ".similar-product-button-prev",
                    disabledClass: "swiper-button-disabled",
                  }}
                  speed={1000}
                  //  className="swiper-wrapper"
                  fadeEffect={{ crossFade: true }}
                  slidesPerView={4}
                  className="swiper similar-slider"
                  loop={true}
                  spaceBetween={20}
                >
                  <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                      <ProductCard1 categoryType={TROPHY_HOME_ROUTE} />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <ProductCard1 categoryType={TROPHY_HOME_ROUTE} />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <ProductCard1 categoryType={TROPHY_HOME_ROUTE} />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <ProductCard1 categoryType={TROPHY_HOME_ROUTE} />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <ProductCard1 categoryType={TROPHY_HOME_ROUTE} />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <ProductCard1 categoryType={TROPHY_HOME_ROUTE} />
                    </SwiperSlide>
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        </section>
        <section className="similar-section">
          <div className="container section-space ">
            <div className="row">
              <div className="col-12">
                <div className="product-showcase-head ">
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <h4 className="product-left">Recently Viewed</h4>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="product-right">
                        <div>
                          <a href="/product-listing" className="common-btn">
                            View All
                          </a>
                        </div>
                        <div className="arrow-box">
                          <div className="swiper-button-prev recent-view-button-prev">
                            <IoArrowBackOutline />
                          </div>
                          <div className="swiper-button-next recent-view-button-next">
                            <IoArrowForwardOutline />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
                <Swiper
                  // centeredSlides={true}
                  modules={[EffectFade, Navigation]}
                  //   effect={"fade"}
                  navigation={{
                    nextEl: ".recent-view-button-next",
                    prevEl: ".recent-view-button-prev",
                    disabledClass: "swiper-button-disabled",
                  }}
                  speed={1000}
                  //  className="swiper-wrapper"
                  fadeEffect={{ crossFade: true }}
                  slidesPerView={4}
                  className="swiper recent-view-slider"
                  loop={true}
                  spaceBetween={20}
                >
                  <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                      <ProductCard1 categoryType={UNIFORM_HOME_ROUTE} />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <ProductCard1 categoryType={UNIFORM_HOME_ROUTE} />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <ProductCard1 categoryType={UNIFORM_HOME_ROUTE} />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <ProductCard1 categoryType={UNIFORM_HOME_ROUTE} />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <ProductCard1 categoryType={UNIFORM_HOME_ROUTE} />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <ProductCard1 categoryType={UNIFORM_HOME_ROUTE} />
                    </SwiperSlide>
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        </section>
      </>
    </Layout1>
  );
}

export default ProductDetailsPage;
