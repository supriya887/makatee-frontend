"use client";

import AboutSection from "@/components/home/AboutSection";
import AppBoxSection from "@/components/home/AppBoxSection";
import FeatureSection from "@/components/home/FeatureSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import Layout1 from "@/components/layout/Layout1";
import React, { useEffect } from "react";
import {
  IoArrowBackOutline,
  IoArrowForwardOutline,
  IoBookmarkOutline,
  IoBusOutline,
  IoCartOutline,
  IoHeartOutline,
  IoSettingsOutline,
  IoTrophyOutline,
  IoWalletOutline,
} from "react-icons/io5";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  EffectFade,
  FreeMode,
  Navigation,
  Pagination,
  Thumbs,
} from "swiper/modules";

import "swiper/css/pagination";

import "swiper/css/navigation";
import ProductCard1 from "@/components/product/ProductCard1";
import { TROPHY_HOME_ROUTE } from "@/utils/constants";

function TrophyHomePage() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.AOS) {
      window.AOS.init({
        duration: 1000,
        once: true,
      });

      setTimeout(() => {
        window.AOS.refresh();
      }, 100);
    }
  }, []);

  return (
    <Layout1>
      <section>
        <div className="swiper main-categoary-slider ">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img
                src="/assets/images/category/trophies/banner/1.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="swiper-slide">
              <img
                src="/assets/images/category/trophies/banner/2.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="swiper-slide">
              <img
                src="/assets/images/category/trophies/banner/3.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="swiper-slide">
              <img
                src="/assets/images/category/trophies/banner/4.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
          <div className="swiper-pagination position-absolute"></div>
        </div>
      </section>

      <section className="category-section trophies-section section-space">
        <div className="container">
          <div className="row">
            <h4 className="text-center mb-5">Shop by Categories</h4>

            <Swiper
              centeredSlides={true}
              modules={[EffectFade, Pagination, Navigation]}
              //   effect={"fade"}
              navigation={{
                nextEl: ".trophies-swiper-button-next",
                prevEl: ".trophies-swiper-button-prev",
                disabledClass: "swiper-button-disabled",
              }}
              pagination={{ clickable: true }}
              speed={1000}
              //  className="swiper-wrapper"
              fadeEffect={{ crossFade: true }}
              slidesPerView={5}
              className="swiper category-slider trophy-category-slider"
              loop={true}
              spaceBetween={2}
            >
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="category-box">
                    <a href="">
                      <div className="category-img">
                        <img
                          src="/assets/images/category/trophies/trophies.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <h4>Trophies</h4>
                    </a>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                  <div className="category-box">
                    {" "}
                    <a href="">
                      <div className="category-img">
                        <img
                          src="/assets/images/category/trophies/medals.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <h4>Medals</h4>
                    </a>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                  <div className="category-box">
                    <a href="">
                      <div className="category-img">
                        <img
                          src="/assets/images/category/trophies/crystal-awards.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <h4>Crystal Awards</h4>
                    </a>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                  <div className="category-box">
                    <a href="">
                      <div className="category-img">
                        <img
                          src="/assets/images/category/trophies/Shields-&-Plaques.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <h4>Sheilds &amp; Plaques</h4>
                    </a>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                  <div className="category-box">
                    <a href="">
                      <div className="category-img">
                        <img
                          src="/assets/images/category/trophies/cup-trophies.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <h4>Cup Trophies</h4>
                    </a>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                  <div className="category-box">
                    <a href="">
                      <div className="category-img">
                        <img
                          src="/assets/images/category/trophies/other-awards.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <h4>Other Awards</h4>
                    </a>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                  <div className="category-box">
                    <a href="">
                      <div className="category-img">
                        <img
                          src="/assets/images/category/trophies/custom-awards.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <h4>Custom Awards</h4>
                    </a>
                  </div>
                </SwiperSlide>
              </div>

              <div className="swiper-button-prev trophies-swiper-button-prev">
                <IoArrowBackOutline color="black" />
              </div>
              <div className="swiper-button-next trophies-swiper-button-next">
                <IoArrowForwardOutline color="black" />
              </div>
            </Swiper>
          </div>
        </div>
      </section>

      <section className="product-showcase-section section-space">
        <div className="container product-section new-product-section">
          <div className="row">
            <div className="col-12">
              <div className="product-showcase-head ">
                <div className="row">
                  <div className="col-12 col-md-6">
                    <h4 className="product-left">New Products</h4>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="product-right">
                      <div>
                        <a href={`/product`} className="common-btn">
                          View All
                        </a>
                      </div>
                      <div className="arrow-box">
                        <div className="swiper-button-prev new-swiper-button-prev">
                          <IoArrowBackOutline />
                        </div>
                        <div className="swiper-button-next new-swiper-button-next">
                          {/* <ion-icon name="arrow-forward-outline" /> */}
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
                  nextEl: ".new-swiper-button-next",
                  prevEl: ".new-swiper-button-prev",
                  disabledClass: "swiper-button-disabled",
                }}
                speed={1000}
                //  className="swiper-wrapper"
                fadeEffect={{ crossFade: true }}
                slidesPerView={4}
                className="swiper newproduct-slider"
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
                  <SwiperSlide className="swiper-slide">
                    <ProductCard1 categoryType={TROPHY_HOME_ROUTE} />
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <section className="best-sellers-section">
        <div className="container section-space ">
          <div className="row">
            <div className="col-12">
              <div className="product-showcase-head ">
                <div className="row">
                  <div className="col-12 col-md-6">
                    <h4 className="product-left">Best Sellers</h4>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="product-right">
                      <div>
                        <a href={`/product`} className="common-btn">
                          View All
                        </a>
                      </div>
                      <div className="arrow-box">
                        <div className="swiper-button-prev best-swiper-button-prev">
                          <IoArrowBackOutline />
                        </div>
                        <div className="swiper-button-next best-swiper-button-next">
                          {/* <ion-icon name="arrow-forward-outline" /> */}
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
                  nextEl: ".new-swiper-button-next",
                  prevEl: ".new-swiper-button-prev",
                  disabledClass: "swiper-button-disabled",
                }}
                speed={1000}
                //  className="swiper-wrapper"
                fadeEffect={{ crossFade: true }}
                slidesPerView={4}
                className="swiper bestsellers-slider"
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
                  <SwiperSlide className="swiper-slide">
                    <ProductCard1 categoryType={TROPHY_HOME_ROUTE} />
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <section className="ad-section section-space">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-5 col-md-12">
              <a href="">
                <div className="ads-box">
                  <div className="ads-content">
                    <h4>Get Your Customised medal &amp; Trophy</h4>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Tenetur aliquid delectus hic asperiores commodi alias?
                    </p>
                  </div>
                  <img src="/assets/images/ads/ad1.png" className="img-fluid" />
                </div>
              </a>
            </div>
            <div className="col-12 col-lg-7 col-md-12">
              <div className="row">
                <div className="col-12 col-lg-7 col-md-12">
                  <div className="ad-img-2">
                    <a href="">
                      <div className="ads-box">
                        <div className="ads-content">
                          <h4>Get Your Customised medal &amp; Trophy</h4>
                          <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Tenetur aliquid delectus hic asperiores
                            commodi alias?
                          </p>
                        </div>
                        <img
                          src="/assets/images/ads/ad2.jpg"
                          className="img-fluid"
                        />
                      </div>
                    </a>
                  </div>
                  <div className="ad-img-3">
                    <a href="">
                      <div className="ads-box">
                        <div className="ads-content">
                          <h4>Get Your Customised medal &amp; Trophy</h4>
                          <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Tenetur aliquid delectus hic asperiores
                            commodi alias?
                          </p>
                        </div>
                        <img
                          src="/assets/images/ads/ad3.jpg"
                          className="img-fluid"
                        />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-12 col-lg-5 col-md-12">
                  <a href="">
                    <div className="ad-img-4 ads-box">
                      <div className="ads-content">
                        <h4>Get Your Customised medal &amp; Trophy</h4>
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Tenetur aliquid delectus hic asperiores commodi
                          alias?
                        </p>
                      </div>
                      <img
                        src="/assets/images/ads/ad4.png"
                        className="img-fluid"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="custom-video-section section-space">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-6 mx-auto text-center mb-5">
              <h4>Get Your Customised Trophies</h4>
              <p className="">
                We have a specialist ready to help you with any answer and
                advice you need.et rhoncus tristique. Donec rhoncus dignissim
                volutpat. Aliquam pellentesque scelerisque.
              </p>
            </div>
            <div className="col-12 col-md-10 col-xl-8 mx-auto">
              <iframe
                width="100%"
                height={600}
                src="https://www.youtube.com/embed/kftdeC7eZR4?si=rkDhAi-sNDkZasPR"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen=""
              />
            </div>
          </div>
        </div>
        <div className="container section-space pb-0">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-9 mx-auto text-center">
              <h4 className="mb-50">
                3 Steps to create your own unique masterpiece!
              </h4>
              <div className="row">
                <div className="col-12 col-md-4">
                  <div className="step-box">
                    <div className="step-head step1">Step 01.</div>
                    <div className="icon">
                      {/* <ion-icon name="trophy-outline" /> */}
                      <IoTrophyOutline />
                    </div>
                    <div>
                      <h6> </h6>
                      <p>
                        Select the type of trophy you want (e.g., sports,
                        academic, corporate) and browse available designs.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="step-box">
                    <div className="step-head step2">Step 02.</div>
                    <div className="icon">
                      {/* <ion-icon name="trophy-outline" /> */}
                      <IoTrophyOutline />
                      <span className="text">M</span>
                    </div>
                    <div>
                      <h6> Personalize Your Trophy</h6>
                      <p>
                        Choose the trophy material and color, if options are
                        available.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="step-box step-box2">
                    <div className="step-head step3">Step 03.</div>
                    <div className="icon">
                      {/* <ion-icon name="cart-outline" /> */}
                      <IoCartOutline />
                    </div>
                    <div>
                      <h6> Place Your Order</h6>
                      <p>
                        Add the trophy to your cart, select shipping, and
                        complete your purchase!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TestimonialSection />
      <AboutSection />
      <hr />
      <FeatureSection />
      <AppBoxSection />
    </Layout1>
  );
}

export default TrophyHomePage;
