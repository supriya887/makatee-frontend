"use client";

import { TROPHY_HOME_ROUTE, UNIFORM_HOME_ROUTE } from "@/utils/constants";
import React from "react";

function MainCategorySection() {
  return (
    <section className="main-category section-space pt-0">
      <div className="container">
        <div className="row ">
          <div className="col-12 col-xxl-10 mx-auto">
            <div className="row ">
              <div
                className="col-12 col-md-6"
                data-aos="fade-right"
                data-aos-offset={300}
                data-aos-easing="ease-in-sine"
              >
                <a href={`/${TROPHY_HOME_ROUTE}`}>
                  <div className="main-category-box trophy-category-box">
                    <h3> Trophies, Awards, Medals &amp; Souvenirs</h3>
                    <div className="common-btn">Explore now</div>
                    {/* <div class="main-trophy-img">
              <img src="images/trophies-cups-medals-isolated-white.png" alt="" class="img-fluid">
            </div> */}
                  </div>
                </a>
              </div>
              <div
                className="col-12 col-md-6"
                data-aos="fade-left"
                data-aos-offset={300}
                data-aos-easing="ease-in-sine"
              >
                <a href={`/${UNIFORM_HOME_ROUTE}`}>
                  <div className="main-category-box uniforms-category-box">
                    <h3>Outfits and Uniform Accessories</h3>
                    <div className="common-btn">Explore now</div>
                    {/* <div class="main-uniform-img">

              <img src="images/uniforms.png" alt="" class="img-fluid">
            </div> */}
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainCategorySection;
