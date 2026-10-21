"use client";

import AboutSection from "@/components/home/AboutSection";
import AppBoxSection from "@/components/home/AppBoxSection";
import FeatureSection from "@/components/home/FeatureSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import Layout1 from "@/components/layout/Layout1";
import React, { useEffect, useState } from "react";
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
  Autoplay,
  EffectFade,
  FreeMode,
  Navigation,
  Pagination,
  Thumbs,
} from "swiper/modules";

import "swiper/css/pagination";

import "swiper/css/navigation";
import ProductCard2 from "@/components/product/ProductCard2";
import { TROPHY_HOME_ROUTE } from "@/utils/constants";
import { homeApi } from "@/api";
import toast from "react-hot-toast";
import CategorySection from "@/components/category/CategorySection";
import ProductCard1 from "@/components/product/ProductCard1";
import HomeCategoryLoader from "@/components/home/HomeCategoryLoader";
import MenuContainerDesktop from "@/components/header/MenuContainerDesktop";
import MenuContainerMobile from "@/components/header/MenuContainerMobile";
import AdSection from "@/components/home/AdSection";
import CustomVideoSection from "@/components/home/CustomVideoSection";
import ProductSectionList from "@/components/product/ProductSectionList";

function TrophyHomePage({ type = "" }) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getHomeApi();
  }, []);

  const getHomeApi = async () => {
    const res = await homeApi({
      category: TROPHY_HOME_ROUTE,
    });

    if (res?.status == 1) {
      setData(res.data);
    } else {
      res?.error && toast.error(res?.error);
    }
    setIsLoading(false);
  };

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

  if (isLoading)
    return (
      <Layout1>
        <HomeCategoryLoader />
      </Layout1>
    );

  return (
    <Layout1
      categoryMenu={data?.categories?.trophy?.length > 0 ? true : false}
      categoryList={data?.categories?.trophy}
    >
      <section>
        <Swiper
          modules={[EffectFade, Navigation, Autoplay, Pagination]}
          //   effect={"fade"}

          speed={1000}
          //  className="swiper-wrapper"
          fadeEffect={{ crossFade: true }}
          slidesPerView={1}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination
          className={"swiper main-categoary-slider"}
          loop={true}
        >
          <div className="swiper-wrapper">
            {data?.web_banners?.length > 0 &&
              data?.web_banners?.map((el, i) => {
                return (
                  <SwiperSlide key={i} className="swiper-slide">
                    <img src={el?.image_path} alt="" className="img-fluid" />
                  </SwiperSlide>
                );
              })}
          </div>
          <div className="swiper-pagination position-absolute"></div>
        </Swiper>
      </section>

      <section className="category-section trophies-section section-space">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4 className="text-center mb-3">
                {" "}
                Trophies, Awards, Medals &amp; Souvenirs
              </h4>
              <p className="text-center">
                Your one-stop destination for premium trophies, custom awards,
                detailed medals, and memorable souvenirs.
              </p>
              <CategorySection
                type={type}
                mainClass={"swiper category-slider trophy-category-slider"}
                backArrowClass={
                  "swiper-button-prev trophies-swiper-button-prev"
                }
                forwardArrowClass={
                  "swiper-button-next trophies-swiper-button-next"
                }
                navNextClass={`.trophies-swiper-button-next`}
                navPrevClass={`.trophies-swiper-button-prev`}
                categories={data?.categories?.trophy}
              />
            </div>
          </div>
        </div>
      </section>

      {data?.latest_products?.length > 0 ? (
        <section className="product-showcase-section section-space">
          <div className="container product-section new-product-section">
            <div className="row">
              <div className="col-12">
                <div className="product-showcase-head ">
                  <div className="row">
                    <div className="col-12 ">
                      <h4 className="product-left text-center">New Products</h4>
                      <p className="text-center">
                        Explore our newest trophy designs, created with fresh
                        styles
                      </p>
                    </div>
                    <div className="col-12">
                      <div className="product-right">
                        <div>
                          {/* <a
                            href={`/${data?.latest_product_url}`}
                            className="view-link"
                          >
                            View All
                          </a> */}
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
                </div>
                <ProductSectionList
                  nextEl=".new-swiper-button-next"
                  prevEl=".new-swiper-button-prev"
                  data={data?.latest_products}
                  className="swiper newproduct-slider"
                />
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {data?.best_seller?.length > 0 ? (
        <section className="best-sellers-section section-space">
          <div className="container  product-section">
            <div className="row">
              <div className="col-12">
                <div className="product-showcase-head ">
                  <div className="row">
                    <div className="col-12">
                      <h4 className="product-left">Best Sellers</h4>
                      <p className="text-center">
                        Our top-selling trophies—trusted favorites for every
                        event
                      </p>
                    </div>
                    <div className="col-12">
                      <div className="product-right">
                        <div>
                          {/* <a
                            href={`/${data?.best_seller_url}`}
                            className="view-link"
                          >
                            View All
                          </a> */}
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
                </div>
                <ProductSectionList
                  nextEl=".best-swiper-button-next"
                  prevEl=".best-swiper-button-prev"
                  data={data?.best_seller}
                  className="swiper bestsellers-slider"
                />
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <div style={{ display: "none" }}>
        {data?.images?.trophyimages ? (
          <AdSection ads={data.images.trophyimages} />
        ) : null}
      </div>

      <div style={{ display: "none" }}>
        {data?.images?.video ? (
          <CustomVideoSection video={data.images.video} />
        ) : null}
      </div>

      {data?.testimonials?.length > 0 ? (
        <TestimonialSection testimonials={data?.testimonials} />
      ) : null}
      <div style={{ display: "none" }}>
        <AboutSection />
      </div>
      <FeatureSection />
      <AppBoxSection />
    </Layout1>
  );
}

export default TrophyHomePage;
