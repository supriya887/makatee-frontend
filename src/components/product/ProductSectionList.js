import React from "react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard1 from "./ProductCard1";

function ProductSectionList({data, nextEl, prevEl, className }) {
  return (
    <Swiper
      // centeredSlides={true}
      modules={[EffectFade, Navigation, Autoplay]}
      //   effect={"fade"}
      navigation={{
        nextEl: nextEl,
        prevEl: prevEl,
        disabledClass: "swiper-button-disabled",
      }}
      // autoplay={{
      //   delay: 2000,
      //   disableOnInteraction: false,
      // }}
      speed={1000}
      //  className="swiper-wrapper"
      fadeEffect={{ crossFade: true }}
      slidesPerView={1}
      breakpoints={{
        1280: {
          slidesPerView: 5,
        },
         768: {
          slidesPerView: 4,
        },
      
        480: {
          slidesPerView: 3,
        },
        320: {
          slidesPerView: 2,
        },
      }}
      className={className}
      loop={true}
      spaceBetween={30}
    >
      <div className="swiper-wrapper">
        {data?.map((item, index) => {
          return (
            <SwiperSlide key={index} className="swiper-slide">
              <ProductCard1 details={item} />
            </SwiperSlide>
          );
        })}
      </div>
    </Swiper>
  );
}

export default ProductSectionList;
