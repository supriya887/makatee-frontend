import React from "react";
import { IoCartOutline, IoTrophyOutline } from "react-icons/io5";

function CustomVideoSection({video}) {
  return (
    <section className="custom-video-section section-space">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-6 mx-auto text-center mb-5">
            <h4>Get Your Customised Trophies</h4>
            <p className="">
              We have a specialist ready to help you with any answer and advice
              you need.et rhoncus tristique. Donec rhoncus dignissim volutpat.
              Aliquam pellentesque scelerisque.
            </p>
          </div>
          <div className="col-12 col-md-10 col-xl-8 mx-auto">
            <iframe
              width="100%"
              height={600}
              src={video}
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
                      Add the trophy to your cart, select shipping, and complete
                      your purchase!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CustomVideoSection;
