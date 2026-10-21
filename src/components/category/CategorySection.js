import React from "react";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";
import "swiper/css/navigation";

function CategorySection({
  categories,
  navPrevClass,
  navNextClass,
  mainClass,
  backArrowClass,
  forwardArrowClass,
  type,
}) {
  return (
    <Swiper
      modules={[EffectFade, Navigation, Autoplay]}
      //   effect={"fade"}
      navigation={{
        nextEl: navNextClass,
        prevEl: navPrevClass,
        disabledClass: "swiper-button-disabled",
      }}
     slidesPerView={6}          // adjust how many slides are visible
  spaceBetween={20}          // space between slides
  loop={true}                // infinite loop
  freeMode={true}            // smooth free scrolling
  speed={4000}               // scroll speed (higher = slower movement)
  autoplay={{
    delay: 0,                // continuous scroll
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
  }}
      breakpoints={{
        1280: {
          slidesPerView: 6,
        },
        767: {
          slidesPerView: 5,
        },
        576: {
          slidesPerView: 4,
        },
         350: {
          slidesPerView: 3,
        },
         320: {
          slidesPerView: 3,
        },
      }}
      className={mainClass}
    
      
    >
      <div className="swiper-wrapper">
        {categories?.length > 0 &&
          categories?.map((el, i) => {
            return (
              <SwiperSlide key={`category-${i}`} className="swiper-slide">
                <div className="category-box">
                  <a href={`/${el?.full_slug}`}>
                    <div className="category-img">
                      <img src={el?.image_path} className="img-fluid" alt="" />
                    </div>
                    <h6>{el?.category_name}</h6>
                  </a>
                </div>
              </SwiperSlide>
            );
          })}
      </div>

      <div className={backArrowClass}>
        <IoArrowBackOutline size={20} color="black" />
      </div>
      <div className={forwardArrowClass}>
        <IoArrowForwardOutline color="black" />
      </div>
      {/* <div class="swiper-scrollbar"></div> */}
      <div className="swiper-pagination" />
    </Swiper>
  );
}

export default CategorySection;
