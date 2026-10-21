"use client";

import AboutSection from "@/components/home/AboutSection";
import AppBoxSection from "@/components/home/AppBoxSection";
import FeatureSection from "@/components/home/FeatureSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import Layout1 from "@/components/layout/Layout1";
import React, { useEffect, useState } from "react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";

import "swiper/css/pagination";

import "swiper/css/navigation";
import { UNIFORM_HOME_ROUTE } from "@/utils/constants";
import ProductCard2 from "@/components/product/ProductCard2";
import CategorySection from "@/components/category/CategorySection";
import { homeApi } from "@/api";
import toast from "react-hot-toast";
import ProductCard1 from "@/components/product/ProductCard1";
import HomeCategoryLoader from "@/components/home/HomeCategoryLoader";
import MenuContainerDesktop from "@/components/header/MenuContainerDesktop";
import MenuContainerMobile from "@/components/header/MenuContainerMobile";
import CustomVideoSection from "@/components/home/CustomVideoSection";
import AdSection from "@/components/home/AdSection";
import ProductSectionList from "@/components/product/ProductSectionList";

function UniformHomePage() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getHomeApi();
  }, []);

  const getHomeApi = async () => {
    const res = await homeApi({
      category: UNIFORM_HOME_ROUTE,
    });

    if (res?.status == 1) {
      setData(res.data);
    } else {
      res?.error && toast.error(res?.error);
    }
    setIsLoading(false);
  };

  if (isLoading)
    return (
      <Layout1>
        <HomeCategoryLoader />
      </Layout1>
    );

  return (
    <Layout1
      categoryMenu={data?.categories?.uniform?.length > 0 ? true : false}
      categoryList={data?.categories?.uniform}
    >
      <section>
        <Swiper
          modules={[EffectFade, Navigation, Autoplay, Pagination]}
          //   effect={"fade"}

          speed={1000}
          //  className="swiper-wrapper"
          fadeEffect={{ crossFade: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination
          // reverseDirection= {true}
          slidesPerView={1}
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
      <section className="category-section uniforms-section section-space">
        <div className="container">
          <div className="row">
            <h4 className="text-center">Uniforms and Accessories</h4>
            <p className="text-center">
              Professional, high-quality uniforms paired with essential
              accessories for a complete and polished look.
            </p>
            <CategorySection
              mainClass={"swiper category-slider uniform-category-slider"}
              backArrowClass={"swiper-button-prev uniform-swiper-button-prev"}
              forwardArrowClass={
                "swiper-button-next uniform-swiper-button-next"
              }
              navNextClass={`.uniform-swiper-button-next`}
              navPrevClass={`.uniform-swiper-button-prev`}
              categories={data?.categories?.uniform}
            />
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
                    <div className="col-12 col-md-6">
                      <h4 className="product-left">New Products</h4>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="product-right">
                        <div>
                          {/* <a
                            href={`/${data?.latest_product_url}`}
                            className="common-btn"
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
                  <hr />
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
      {/* {data?.images?.trophyimages ? (
        <AdSection ads={data?.images?.trophyimages} />
      ) : null}

      {data?.images?.video ? (
        <CustomVideoSection video={data?.images?.video} />
      ) : null}

      {data?.testimonials?.length > 0 ? (
        <TestimonialSection testimonials={data?.testimonials} />
      ) : null} */}

      <div style={{ display: "none" }}>
        <AboutSection />
      </div>

      <FeatureSection />
      <AppBoxSection />
    </Layout1>
  );
}

export default UniformHomePage;
