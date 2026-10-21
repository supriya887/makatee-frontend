"use client";

import { aboutUsApi } from "@/api";
import Layout1 from "@/components/layout/Layout1";
import Preloader from "@/components/Preloader";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

function AboutUsPage() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      // await getDataApi();
    }
    fetchData();
  }, []);

  // const getDataApi = async () => {
  //   let response = await aboutUsApi();

  //   if (response?.status == 1) {
  //     setData(response?.data);
  //     setLoading(false);
  //   } else {
  //     response?.error && toast.error(res?.error);
  //     setLoading(false);
  //   }
  //   setLoading(false);
  // };

  if (loading) return <Preloader />;

  return (
    <Layout1>
      
       <section className="breadcrumb-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
               <div className="breadcrumb-box">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      About Makatee
                    </li>
                  </ol>
                </nav>
              </div>
               </div>
        
          </div>
        </div>
      </section>
      <section className="about-page section-space overflow-hidden">
        <div className="container">
          <div className="row">
            {/* <div
            className="col-12 col-md-1 mx-auto mb-8"
            data-aos="zoom-in"
            data-aos-easing="ease-in"
          ></div> */}
            <div className="col-12 col-md-8 mx-auto text-center ">
              <h1 className=" text-center mb-5 pb-3">About Makatee</h1>
            </div>
            <div
              className="col-12 col-lg-6"
              data-aos="fade-right"
              data-aos-offset={300}
              data-aos-easing="liner"
            >
              {/* <img
              src="/assets/images/best-quality.png"
              alt=""
              className="quality-img"
            /> */}

              <div className="about-left-img">
                <img
                  src="/assets/images/about-bg.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
            <div
              className="col-12 col-lg-6"
              data-aos="fade-left"
              data-aos-offset={300}
              data-aos-easing="liner"
            >
              {/* <div className="about-right-content"
                style={{ lineHeight: "22px" }}
                dangerouslySetInnerHTML={{ __html: data?.content }}
              />
            </div> */}
              <div className="about-right-content">
                <h3 className="mb-4 text-center">
                  <strong>THE BEST WAY TO BE GLOBAL IS TO BE LOCAL</strong>
                </h3>
                <p>
                  Third generation Makatee presents a “One of a Kind” Global
                  Online Retail Store. Local products made in India as well as
                  products, expertly curated with over 40 years of experience
                  from all over the Globe and also manufactured in-house with
                  custom engraving & printing techniques using state of the art
                  CO2 laser engravers for acrylic, wood, glass, as well as Fiber
                  laser engravers for beautiful engravings on Metal, UV
                  printers, Barudan Embroidery Machines for custom embroideries
                  on Outifts and Caps so on with a team of experienced graphic
                  designers who bring our products and your artworks to life.
                </p>
                <p className="mb-5">
                  We love our members, so send us an email or give us a ring, if
                  you’ve got questions, specifications on an order, or to find
                  out how we can put your notions and emotions on our trophies,
                  awards, souvenirs, memorabilia, outfits and accessories.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-page section-space overflow-hidden pt-0">
        <div
          className="container-fluid"
          data-aos="fade-right"
          data-aos-offset={300}
          data-aos-easing="liner"
        >
          {/* //  <div className="about-bg-img">
          //   <img
          //     src="/assets/images/about-page-img.jpg"
          //     alt=""
          //     className="img-fluid"
          //   />
          // </div> */}

          {/* <img
              src="/assets/images/best-quality.png"
              alt=""
              className="quality-img"
            /> */}

          <div
            className="container"
            data-aos="fade-right"
            data-aos-offset={300}
            data-aos-easing="liner"
          >
            <div className="about-section-2">
              <div className="row ">
                <div className="col-12 col-sm-6 col-xl-3 p-0">
                  <div className="about-box">
                    <div className="about-img">
                      {" "}
                      <img
                        src="/assets/images/trophy-medal.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="about-content">
                      <h4>Trophies and Medals</h4>
                      <p>
                        We know the value of showing appreciation – it’s one of
                        the things we do best. A pat on the back can go a long
                        way, but a tangible gift to show your gratitude will
                        inspire your team to greatness and create memories that
                        will last a lifetime.
                      </p>
                      <p>
                        We offer a variety of trophies, medals, and awards in
                        hundreds of sports and activities. From cricket to
                        football, dance to music, you will love our unbeatable
                        selection of trophies.
                      </p>
                      <p>
                        <strong>FREE engraving/printing</strong> and{" "}
                        <strong>FREE shipping</strong> on orders over{" "}
                        <strong>Rs. 2000/-</strong>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-xl-3 p-0">
                  <div className="about-box">
                    <div className="about-img">
                      {" "}
                      <img
                        src="/assets/images/corporate-award.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="about-content">
                      <h4>Corporate Awards and Plaques</h4>
                      <p>
                        A huge selection of corporate awards including crystals,
                        acrylics, plaques, and more – perfect for branding,
                        employee recognition and business partner awards.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-xl-3 p-0">
                  <div className="about-box">
                    <div className="about-img">
                      {" "}
                      <img
                        src="/assets/images/uniform-about.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="about-content">
                      <h4>Outfits and Accessories</h4>
                      <p>
                        We also offer a variety of outfits and accessories. Head
                        Gear to Foot Gear with unmatched quality and pricing.
                      </p>
                      <p>
                        T-shirts & Caps – bulk printed or embroidered as well as
                        custom prints and embroideries for individual
                        requirements.
                      </p>
                      <p>
                        <strong>FREE shipping</strong> on orders over{" "}
                        <strong>Rs. 2000/-</strong>
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-12 col-sm-6 col-xl-3 p-0"
                  style={{ borderRight: "1px solid #00000042" }}
                >
                  <div className="about-box">
                    <div className="about-img">
                      {" "}
                      <img
                        src="/assets/images/custom-about.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>{" "}
                    <div className="about-content">
                      <h4>Custom Trophies, Medals and Awards</h4>
                      <p>
                        Our Design Department will work with you to create the
                        perfect award for your organization. Design your own
                        medals, pins, and more with your very own logo.
                      </p>
                      <p>
                        Choose your award, upload your logo & content and submit
                        your order!
                      </p>
                      <p>
                        <strong>
                          Orders shipped within 48 hours of approval.
                        </strong>
                      </p>
                      <a href="#contact" className="view-link">
                        Start Custom Order
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="policy-section section-space">
        <div className="container">
          <div className="row ">
            <div className="col-12">
              <h4 className="mb-4 pb-4">About Us</h4>
              <div
                style={{ lineHeight: "22px" }}
                dangerouslySetInnerHTML={{ __html: data }}
              />
            </div>
          </div>
        </div>
      </section> */}
      <div>
        <div className="blur"></div>
        <div className="blur"></div>
        <div className="blur"></div>
      </div>
    </Layout1>
  );
}

export default AboutUsPage;
