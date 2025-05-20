import React from "react";
import {
  IoCallOutline,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoMailOutline,
  IoShareSocialOutline,
} from "react-icons/io5";

function Footer() {
  return (
    <footer className="section-space">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3">
            <div className="footer-left">
              <h6>Contact Us</h6>
              <div className="content">
                <div className="icon">
                  {/* <ion-icon name="mail-outline" /> */}
                  <IoMailOutline />
                </div>
                <div>
                  <p>
                    <strong>Email</strong>
                    <br />
                    <a href="mailto:makatee@gmail.com" target="_blank">
                      makatee@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="content">
                <div className="icon">
                  {/* <ion-icon name="call-outline" /> */}
                  <IoCallOutline />
                </div>
                <div>
                  <p>
                    <strong>Phone</strong>
                    <br />
                    <a href="tel:+919819207803" target="_blank">
                      +91 98192 07803
                    </a>
                  </p>
                </div>
              </div>
              <div className="content">
                <div className="icon">
                  {/* <ion-icon name="share-social-outline" /> */}
                  <IoShareSocialOutline />
                </div>
                <div className="social-links ">
                  <p>
                    <strong>Follow us on </strong>
                  </p>
                  <ul className="d-flex">
                    <li>
                      <a href="">
                        {/* <ion-icon name="logo-facebook" /> */}
                        <IoLogoFacebook />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        {/* <ion-icon name="logo-linkedin" /> */}
                        <IoLogoLinkedin />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        {/* <ion-icon name="logo-instagram" /> */}
                        <IoLogoInstagram />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8">
            <div className="row">
              <div className="col-12 col-md-4">
                <h6>About your order</h6>
                <ul className="footer-link">
                  <li>
                    <a href="/privacy-policy">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/terms-conditions">Terms &amp; Condition</a>
                  </li>
                  <li>
                    <a href="/refund-return-policy">
                      Refund &amp; Return Policy
                    </a>
                  </li>
                  <li>
                    <a href="/shipping-policy">Shipping Policy</a>
                  </li>
                  <li>
                    <a href="about.php">About Us</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/contact-us"> Contact Us</a>{" "}
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-4">
                <h6>About Us </h6>
                <ul className="footer-link">
                  <li>
                    <a href="pyp.php">Customisation</a>
                  </li>
                  <li>
                    <a href="myp.php">Videos</a>
                  </li>
                  <li>
                    <a href="ibdp.php">About Makatee</a>
                  </li>
                  <li>
                    <a href="ibcp.php">Services</a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-4">
                <h6>Other Links</h6>
                <ul className="footer-link">
                  <li>
                    <a href="service.php">Service</a>
                  </li>
                  <li>
                    <a href="gallery.php">Gallery</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom  text-center position-relative">
          © 2025 Makatee. All rights reserved. Designed and by
          <a href="https://goyalinfotech.com/" target="_blank">
            {" "}
            Goyal Infotech
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
