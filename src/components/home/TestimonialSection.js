import React, { useState } from "react";

import "swiper/css/pagination";

import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper/modules";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

function TestimonialSection({ testimonials }) {
  const [list, setList] = useState([1, 2, 3, 4, 5]);
  return (
    <section className="container-fluid testimonial-section section-space d-none">
      <div className="row m-0">
        <div className="col-12 col-lg-10 mx-auto">
          <section className="testimonial-area">
            <div className="container">
              <h4
                className="text-center mb-5"
                data-aos="fade-up"
                data-aos-offset={300}
                data-aos-easing="ease-in"
              >
                What our Client Say
              </h4>
              <div className={"testi-wrap"}>
                <div className="swiper-button testi-swiper-button-next">
                  <IoArrowForward />
                </div>
                <div className="swiper-button testi-swiper-button-prev">
                  <IoArrowBack />
                </div>
                <Swiper
                  modules={[EffectFade, Navigation]}
                  //   effect={"fade"}

                  speed={1000}
                  //  className="swiper-wrapper"
                  fadeEffect={{ crossFade: true }}
                  slidesPerView={1}
                  className={"testimonial-slider"}
                  navigation={{
                    nextEl: ".testi-swiper-button-next",
                    prevEl: ".testi-swiper-button-prev",
                    disabledClass: "swiper-button-disabled",
                  }}
                  
                  breakpoints={{
                    1199: {
                      slidesPerView: 2,
                    },
                    1024: {
                      slidesPerView: 2,
                    },
                    991: {
                      slidesPerView: 2,
                    },
                    767: {
                      slidesPerView: 2,
                    },
                  }}
                  loop={true}
                >
                  <div className="swiper-wrapper">
                    {testimonials?.map((el, i) => {
                      return (
                        <SwiperSlide
                          key={`slider-${i}`}
                          className="swiper-slide"
                        >
                          <div className="client-single position-1">
                         
                            <div className="client-comment mt-10">
                              <div
                                style={{ lineHeight: "22px" }}
                                dangerouslySetInnerHTML={{
                                  __html: el?.description,
                                }}
                              />
                            </div>
                           <div>
                               <div className="client-img">
                              <img
                                src={el?.image_path}
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                             <div className="client-info">
                              <h3>{el?.name}</h3>
                            </div></div>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </div>
                  <div className="swiper-pagination position-absolute"></div>
                </Swiper>
              </div>
              {/* <div className="testi-wrap">
                <div
                  className="client-single active position-1"
                  data-position="position-1"
                >
                  <div className="client-img">
                    <img
                      src="/assets/images/clients/1.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="client-comment">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Id necessitatibus cumque veritatis commodi beatae suscipit
                      similique fuga iure esse asperiores iste incidunt, aperiam
                      consequuntur obcaecati tempora doloribus numquam, unde
                      quis.
                    </p>
                  </div>
                  <div className="client-info">
                    <h5>Client Name</h5>
                  </div>
                </div>
              
              </div> */}
              {/* <div className="testimonial-slider swiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="client-single">
                      <div className="client-img">
                        <img
                          src="/assets/images/clients/1.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="client-comment">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Optio molestiae repellendus quam saepe inventore
                          libero, perferendis fuga repudiandae vitae quo, natus
                          quidem ad deleniti? Labore eveniet quasi hic
                          voluptates beatae.
                        </p>
                      </div>
                      <div className="client-info">
                        <h5>Client Name</h5>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="client-single">
                      <div className="client-img">
                        <img
                          src="/assets/images/clients/2.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="client-comment">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Optio molestiae repellendus quam saepe inventore
                          libero, perferendis fuga repudiandae vitae quo, natus
                          quidem ad deleniti? Labore eveniet quasi hic
                          voluptates beatae.
                        </p>
                      </div>
                      <div className="client-info">
                        <h5>Client Name</h5>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="client-single">
                      <div className="client-img">
                        <img
                          src="/assets/images/clients/3.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="client-comment">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Optio molestiae repellendus quam saepe inventore
                          libero, perferendis fuga repudiandae vitae quo, natus
                          quidem ad deleniti? Labore eveniet quasi hic
                          voluptates beatae.
                        </p>
                      </div>
                      <div className="client-info">
                        <h5>Client Name</h5>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="client-single">
                      <div className="client-img">
                        <img
                          src="/assets/images/clients/4.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="client-comment">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Optio molestiae repellendus quam saepe inventore
                          libero, perferendis fuga repudiandae vitae quo, natus
                          quidem ad deleniti? Labore eveniet quasi hic
                          voluptates beatae.
                        </p>
                      </div>
                      <div className="client-info">
                        <h5>Client Name</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination" />
              </div> */}
            </div>
          </section>
        </div>
      </div>
      <div className="test-bg-img">
        {" "}
        <img src="/assets/images/dotted-bg.jpg" className="img-fluid" alt="" />
      </div>
    </section>
  );
}

export default TestimonialSection;
