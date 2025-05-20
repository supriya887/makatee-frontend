import React from "react";
import {
  IoBookmarkOutline,
  IoBusOutline,
  IoSettingsOutline,
  IoWalletOutline,
} from "react-icons/io5";

function FeatureSection() {
  return (
    <section className="feature-section section-space pb-0">
      <div className="container">
        <div className="row">
          <div
            className="col-12 col-md-12 col-lg-6 mx-auto mb-8"
            data-aos="fade-down"
            data-aos-offset={300}
            data-aos-easing="liner"
          >
            <h4 className="text-center">
              We are your one stop solution for all Awards &amp; Gifting related
              requirements!
            </h4>
          </div>
        </div>
        <div className="row">
          <div
            className="col-12 col-md-6 col-lg-3"
            data-aos="fade-up"
            data-aos-duration={500}
          >
            <div className="feature-box">
              <div className="icon">
                <IoBusOutline />
                {/* <ion-icon name="bus-outline" /> */}
              </div>
              <div>
                <h6>Free Shipping</h6>
                <p>
                  Seamless and easy-to-use Shipping and checkout process allows
                  customers to review
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-12 col-md-6 col-lg-3"
            data-aos="fade-up"
            data-aos-duration={1000}
          >
            <div className="feature-box">
              <div className="icon">
                {/* <ion-icon name="settings-outline" /> */}
                <IoSettingsOutline />
              </div>
              <div>
                <h6>Customer Support</h6>
                <p>
                  Providing multiple customer service channels, such as live
                  chat, email, and phone support, is essential for assisting
                  customers
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-12 col-md-6 col-lg-3"
            data-aos="fade-up"
            data-aos-duration={1500}
          >
            <div className="feature-box">
              <div className="icon">
                {/* <ion-icon name="bookmark-outline" /> */}
                <IoBookmarkOutline />
              </div>
              <div>
                <h6>Customisation</h6>
                <p>
                  eCommerce sites often use customer data and behavior to
                  provide personalized recommendations, offers, or promotions.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-12 col-md-6 col-lg-3"
            data-aos="fade-up"
            data-aos-duration={2000}
          >
            <div className="feature-box">
              <div className="icon">
                {/* <ion-icon name="wallet-outline" /> */}
                <IoWalletOutline />
              </div>
              <div>
                <h6>Secure Payment Gateways</h6>
                <p>
                  Secure, encrypted payment systems are crucial for eCommerce to
                  ensure safe and easy transactions.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
