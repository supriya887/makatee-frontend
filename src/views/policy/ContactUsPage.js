"use client";

import Layout1 from "@/components/layout/Layout1";
import React from "react";
import { IoCallOutline, IoLogoWhatsapp, IoMailOutline } from "react-icons/io5";

function ContactUsPage() {
  return (
    <Layout1>
      <section className="contact-section ">
        <div className="container section-space pt-0">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-box">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Contact
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="container section-space pt-0">
          <section className="position-relative">
            <div className="row">
              <div className="col-12 mb-5">
                <p>
                  Our customer service team is available on Monday to Saturday
                  <br />
                  between 10:00 - 18:00 Hrs
                </p>
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <div className="contact-info">
                  {/* <ion-icon name="call-outline" /> */}
                  <IoCallOutline size={35} />
                  <div className="contact-text">
                    <h4 className="div-title text-gradient">Reach Us At</h4>
                    <a href="tel:02240108237">+91 22 40108237</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <div className="contact-info">
                  {/* <ion-icon name="mail-outline" /> */}
                  <IoMailOutline size={35} />
                  <div className="contact-text">
                    <h4 className="div-title text-gradient">
                      Mail Us At Order
                    </h4>
                    <a href="mailto:order@makatee.in">order@makatee.in</a>
                    <br />
                    <a href="mailto:return@makatee.in">return@makatee.in</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <div className="contact-info">
                  {/* <ion-icon name="logo-whatsapp" /> */}
                  <IoLogoWhatsapp size={35} />
                  <div className="contact-text">
                    <h4 className="div-title text-gradient">Whatsapp Us On</h4>
                    <a href="tel:">+91 22 40108237</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5 bg-white mb-5 ">
              <div className="col-lg-5 col-md-6 col-12 p-0">
                <div
                  className="contact-left d-flex justify-content-center flex-column"
                  style={{
                    backgroundImage: "url(/assets/images/contact-bg02.jpg)",
                  }}
                >
                  <h4 className="title color-000000">
                    We’d love to hear from you
                  </h4>
                  {/* <p class="color-000000">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p> */}
                </div>
              </div>
              <div className="col-lg-7 col-md-6 col-12 p-0">
                <div className="contact-right contact-form contact-page-form">
                  <div className="row">
                    <h3 className="title color-000000 mb-5">Leave a Message</h3>
                    <div className="col-lg-6 col-md-12 col-12">
                      <div className="mb-5">
                        <label htmlFor="">Full Name</label>
                        <input type="text" className="form-control" id="" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                      <div className="mb-5">
                        <label htmlFor="">Mobile Number</label>
                        <input type="text" className="form-control" id="" />
                      </div>
                    </div>
                  </div>
                  <div className="mb-5">
                    <label htmlFor="">Email Id</label>
                    <input type="text" className="form-control" id="" />
                  </div>
                  <div className="mb-5">
                    <label htmlFor="">Message</label>
                    <textarea
                      name=""
                      id=""
                      className="form-control"
                      defaultValue={""}
                    />
                  </div>
                  <div>
                    <button type="submit" className="common-btn ">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </Layout1>
  );
}

export default ContactUsPage;
