"use client";

import React from "react";
import {
  IoCallOutline,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoYoutube,
  IoMailOutline,
  IoShareSocialOutline,
} from "react-icons/io5";
import { useSelector } from "react-redux";

function Footer() {
  const { contactus_details } = useSelector((state) => state.app);
  return (
    <>
        <footer className="section-space">
      <div className="container">
        <div className="row">
          <div className="col-12 col-xl-4 d-none d-md-block">
            <div className="footer-left" style={{ marginRight: "4rem" }}>
              <h6>About Our Store</h6>
              {/* <div className="brand-img">
                <img
                  className="img-fluid"
                  alt=""
                  src="/assets/images/logo-white.png"
                />
              </div> */}
              <p className="mb-25">
                Makatee is a full-service Trophy and uniform wholesaler and
                manufacturer in Pune’s Camp area, catering to a broad clientele
                with diverse uniforming needs—from education and hospitality to
                security and industrial applications. They pride themselves on
                transparent dealings and customer satisfaction.
              </p>
               <img
                  className="img-fluid"
                  alt=""
                  src="/assets/images/google-play.png"
                />
            </div>
          </div>
           <div className="col-12 col-xl-2"></div>
            <div className="col-12 col-sm-6 col-md-4 col-xl-2 mb-20">
            <h6>Quick Links</h6>
            <ul className="footer-link">
              <li>
                <a href="/about-us">About Us</a>{" "}
              </li>
              <li>
                {" "}
                <a href="/contact-us"> Contact Us</a>{" "}
              </li>
                <li>
                {" "}
                <a href="/orders">Track Order</a>{" "}
              </li>
            </ul>
          </div>
           <div className="col-12 col-sm-6 col-md-4 col-xl-2">
            <h6>Policies</h6>
            <ul className="footer-link">
              <li>
                <a href="/terms-conditions">Terms &amp; Condition</a>
              </li>
              <li>
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
              <li>
                <a href="/refund-return-policy">Refund &amp; Return Policy</a>
              </li>
              <li>
                <a href="/shipping-policy">Shipping Policy</a>
              </li>
              <li>
                <a href="/delivery-information">Delivery Information</a>
              </li>
              <li>
                <a href="/satisfaction-guarantee">Satisfaction Guarantee</a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-xl-2 d-none d-md-block">
            <div className="contact-footer">
              <h6>Contact Us</h6>
              <div className="content">
                <div
                  className="icon"
                  style={{ marginRight: "1rem", marginTop: 1 }}
                >
                  <IoMailOutline color="aliceblue" />
                </div>
                <div>
                  <p>
                    <strong>Email</strong>
                    
                    <a
                      href={`mailto:${contactus_details?.email}`}
                      target="_blank"
                    >
                      {contactus_details?.email}
                    </a>
                  </p>
                </div>
              </div>
              <div className="content">
                <div className="icon">
                  <IoCallOutline color="aliceblue" />
                </div>
                <div>
                  <p>
                    <strong>Phone</strong>
                    
                    <a href={`tel:${contactus_details?.mobile}`} target="_blank">
                      {contactus_details?.mobile}
                    </a>
                  </p>
                </div>
              </div>
              <div className="content">
                <div className="icon">
                  <IoShareSocialOutline color="aliceblue" />
                </div>
                <div className="social-links ">
                  <p>
                    <strong>Follow us on </strong>
                  </p>
                  <ul className="d-flex">
                    {contactus_details?.facebook && (
                      <li>
                        <a target="_blank" href={contactus_details?.facebook}>
                          <IoLogoFacebook />
                        </a>
                      </li>
                    )}
                    {contactus_details?.youtube && (
                      <li>
                        <a target="_blank" href={contactus_details?.youtube}>
                          <IoLogoYoutube />
                        </a>
                      </li>
                    )}
                    {contactus_details?.instagram && (
                      <li>
                        <a target="_blank" href={contactus_details?.instagram}>
                          <IoLogoInstagram />
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
           
         
        <hr className="mt-5 pb-5"></hr>
          <div className="col-12 col-md-4">
            <div className="text-left  position-relative">
              © 2025 Makatee. All rights reserved. Designed by
              <a href="https://goyalinfotech.com/" target="_blank">
                {" "}
                Goyal Infotech
              </a>
            </div>
          </div>
          <div className="col-12 col-md-4 d-flex justify-content-center align-items-center my-3 my-md-0">
            <iframe
              id="Iframe1"
              src="https://dunsregistered.dnb.com/SealAuthentication.aspx?Cid=1"
              width="114"
              height="97"
              frameBorder="0"
              scrolling="no"
              title="D&B Registered"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: "none", background: "transparent" }}
            />
          </div>
           <div className="col-12 col-md-4">
            <div className="payment-img text-right  position-relative d-flex justify-content-end">
              <img
                  className="img-fluid"
                  alt=""
                  src="/assets/images/payment.png"
                />
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>

  );
}

export default Footer;
