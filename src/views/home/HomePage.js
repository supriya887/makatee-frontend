"use client";

import { homeApi } from "@/api";
import CategorySection from "@/components/category/CategorySection";
import AboutSection from "@/components/home/AboutSection";
import AppBoxSection from "@/components/home/AppBoxSection";
import FeatureSection from "@/components/home/FeatureSection";
import HomeLoader from "@/components/home/HomeLoader";
import MainCategorySection from "@/components/home/MainCategorySection";
import TestimonialSection from "@/components/home/TestimonialSection";
import Layout1 from "@/components/layout/Layout1";
import { UNIFORM_HOME_ROUTE, TROPHY_HOME_ROUTE } from "@/utils/constants";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function HomePage() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getHomeApi();
  }, []);

  const getHomeApi = async () => {
    const res = await homeApi();

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
        <HomeLoader />
      </Layout1>
    );

  return (
    <Layout1>
      <section className="home-main-banner">
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
      {/* <section className="home-main-banner">
        <img
          src="/assets/images/main-home-banner.jpg"
          className="img-fluid"
          alt=""
        />
      </section> */}
      <MainCategorySection />
      <section className="category-section trophies-section section-space">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4
                className="text-center"
                data-aos="fade-down"
                data-aos-offset={300}
                data-aos-easing="ease-in-sine"
              >
                Trophies, Awards, Medals &amp; Souvenirs
              </h4>
                                                          <p className="text-center">Our top-selling trophies—trusted favorites for every event</p>

              <CategorySection
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
      <section className="category-section uniforms-section section-space">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4
                className="text-center"
                data-aos="fade-down"
                data-aos-offset={300}
                data-aos-easing="ease-in-sine"
              >
                Outfits and Uniform Accessories
              </h4>
                                                          <p className="text-center">Our top-selling trophies—trusted favorites for every event</p>

              <CategorySection
                type={UNIFORM_HOME_ROUTE}
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
        </div>
      </section>
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

export default HomePage;
