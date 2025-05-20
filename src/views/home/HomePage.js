"use client";

import AboutSection from "@/components/home/AboutSection";
import AppBoxSection from "@/components/home/AppBoxSection";
import FeatureSection from "@/components/home/FeatureSection";
import MainCategorySection from "@/components/home/MainCategorySection";
import TestimonialSection from "@/components/home/TestimonialSection";
import Layout1 from "@/components/layout/Layout1";
import { UNIFORM_HOME_ROUTE, TROPHY_HOME_ROUTE } from "@/utils/constants";
import React from "react";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";

function HomePage() {
  return (
    <Layout1>
      <section className="home-main-banner">
        <img
          src="/assets/images/main-home-banner.jpg"
          className="img-fluid"
          alt=""
        />
      </section>
      <MainCategorySection />
      <section className="category-section trophies-section section-space">
        <div className="container">
          <div className="row">
            <h4
              className="text-center mb-5"
              data-aos="fade-down"
              data-aos-offset={300}
              data-aos-easing="ease-in-sine"
            >
              Trophies, Awards, Medals &amp; Souvenirs
            </h4>
            <div
              className="swiper category-slider trophy-category-slider"
              data-aos="fade-up"
              data-aos-offset={300}
              data-aos-easing="ease-in-sine"
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="category-box">
                    <a href={`/${TROPHY_HOME_ROUTE}`}>
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
                </div>
                <div className="swiper-slide">
                  <div className="category-box">
                    <a href={`/${TROPHY_HOME_ROUTE}`}>
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
                </div>
                <div className="swiper-slide">
                  <div className="category-box">
                    <a href={`/${TROPHY_HOME_ROUTE}`}>
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
                </div>
                <div className="swiper-slide">
                  <div className="category-box">
                    <a href={`/${TROPHY_HOME_ROUTE}`}>
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
                </div>
                <div className="swiper-slide">
                  <div className="category-box">
                    <a href={`/${TROPHY_HOME_ROUTE}`}>
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
                </div>
                <div className="swiper-slide">
                  <div className="category-box">
                    <a href={`/${TROPHY_HOME_ROUTE}`}>
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
                </div>
                <div className="swiper-slide">
                  <div className="category-box">
                    <a href={`/${TROPHY_HOME_ROUTE}`}>
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
                </div>
              </div>
              {/* If we need navigation buttons */}
              {/* <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div> */}
              <div className="swiper-button-prev trophies-swiper-button-prev">
                <IoArrowBackOutline size={20} color="black" />
              </div>
              <div className="swiper-button-next trophies-swiper-button-next">
                <IoArrowForwardOutline color="black" />
              </div>
              {/* <div class="swiper-scrollbar"></div> */}
              <div className="swiper-pagination" />
            </div>
          </div>
        </div>
      </section>
      <section className="category-section uniforms-section section-space">
        <div className="container">
          <div className="row">
            <h4
              className="text-center mb-5"
              data-aos="fade-down"
              data-aos-offset={300}
              data-aos-easing="ease-in-sine"
            >
              Outfits and Uniform Accessories
            </h4>
            <div
              className="swiper category-slider uniform-category-slider"
              data-aos="fade-up"
              data-aos-offset={300}
              data-aos-easing="ease-in-sine"
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="category-box">
                    <a href={`/${UNIFORM_HOME_ROUTE}`}>
                      <div className="category-img">
                        <img
                          src="/assets/images/category/uniforms/school.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <h4>School</h4>
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="category-box">
                    <a href={`/${UNIFORM_HOME_ROUTE}`}>
                      <div className="category-img">
                        <img
                          src="/assets/images/category/uniforms/corporate.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <h4>Corporate</h4>
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="category-box">
                    <a href={`/${UNIFORM_HOME_ROUTE}`}>
                      <div className="category-img">
                        <img
                          src="/assets/images/category/uniforms/airline.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <h4>Airline</h4>
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="category-box">
                    <a href={`/${UNIFORM_HOME_ROUTE}`}>
                      <div className="category-img">
                        <img
                          src="/assets/images/category/uniforms/chef.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <h4>Chef</h4>
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="category-box">
                    <a href={`/${UNIFORM_HOME_ROUTE}`}>
                      <div className="category-img">
                        <img
                          src="/assets/images/category/uniforms/entertainment.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <h4>Entertainment</h4>
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="category-box">
                    <a href={`/${UNIFORM_HOME_ROUTE}`}>
                      <div className="category-img">
                        <img
                          src="/assets/images/category/uniforms/factory.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <h4>Factory</h4>
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="category-box">
                    <a href={`/${UNIFORM_HOME_ROUTE}`}>
                      <div className="category-img">
                        <img
                          src="/assets/images/category/uniforms/doctor.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <h4>Doctor</h4>
                    </a>
                  </div>
                </div>
              </div>
              <div className="swiper-button-prev uniform-swiper-button-next">
                <IoArrowBackOutline color="black" />
              </div>
              <div className="swiper-button-next uniform-swiper-button-next">
                <IoArrowForwardOutline color="black" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <TestimonialSection />
      <AboutSection />
      <FeatureSection />
      <AppBoxSection />
    </Layout1>
  );
}

export default HomePage;
