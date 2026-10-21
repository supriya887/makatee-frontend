"use client";

import { contactUsApi } from "@/api";
import Layout1 from "@/components/layout/Layout1";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { IoCallOutline, IoLogoWhatsapp, IoMailOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

function ContactUsPage() {
  const { contactus_details } = useSelector((state) => state.app);

  const [valErrors, setValErrors] = useState({});
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone_number: "",
    message: "",
  });

  const onSubmitContact = async () => {
    setValErrors({});
    setIsSubmitLoading(true);

    let response = await contactUsApi({
      ...formValues,
    });

    if (response?.status == 1) {
      response?.msg && toast.success(response?.msg);
      setFormValues((prev) => ({
        ...prev,
        name: "",
        email: "",
        phone_number: "",
        message: "",
      }));
    } else {
      setValErrors(response?.error_array);
      response?.error && toast.error(response?.error);
    }
    setIsSubmitLoading(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
                      Contact Us
                    </li>
                  </ol>
                </nav>
              </div>
               </div>
        
          </div>
        </div>
      </section>
      <section className="contact-section section-space">
      
        <div className="container">
          <section className="contact-page position-relative">
            <div className="row">
              <div className="col-12 mx-auto text-center">
                <h1 className=" text-center mb-5 pb-3">Contact Us</h1>
              </div>

              {/* <div className="col-12 mb-5">
                <div
                  dangerouslySetInnerHTML={{
                    __html: `Our customer service team is available on ${contactus_details?.operation_hours}`,
                  }}
                />
              </div> */}
              <div
                className="col-12 col-lg-10 mx-auto mb-5"
                data-aos="fade-left"
                data-aos-offset={300}
                data-aos-easing="liner"
              >
                <div className="row">
                  <div className="col-12 col-sm-6 col-lg-4">
                <div className="contact-info">
                  <IoCallOutline size={35} />
                  <div className="contact-text">
                    <h5 className="div-title text-gradient">Contact us on WhatsApp</h5>
                    <a href={`tel:${contactus_details?.mobile}`}>{contactus_details?.mobile}</a>
                  </div>
                </div></div>
                <div className="col-12 col-sm-6 col-lg-4">
                <div className="contact-info">
                  <IoMailOutline size={35} />
                  <div className="contact-text">
                    <h5 className="div-title text-gradient">
                      General Enquiry
                    </h5>
                    <a href={`mailto:${contactus_details?.email}`}>{contactus_details?.email}</a>
                  </div>
                </div>
                </div>
                <div className="col-12  col-lg-4 ">

                <div className="contact-info">
                  <IoMailOutline size={35} />
                  <div className="contact-text">
                    <h5 className="div-title text-gradient">
                      Orders Related Query
                    </h5>
                    <a href={`mailto:${contactus_details?.email2}`}>{contactus_details?.email2}</a>
                  </div>
                </div>
              </div>
              
              </div>
            </div>
              <div
                className="col-md-6 col-12"
                data-aos="fade-right"
                data-aos-offset={300}
                data-aos-easing="liner"
              >
                <div className="contact-page-img">
                 <img
                                          src="/assets/images/contact-left.jpg"
                                          className="img-fluid"
                                          alt=""
                                        />
              </div> </div>
              <div
                className="col-md-6 col-12"
                data-aos="fade-right"
                data-aos-offset={300}
                data-aos-easing="liner"
              >
                <div className="contact-right contact-form contact-page-form">
                  <div className="row">
                    <h4>
                     Need Help?

                    </h4>                                                          <p className="text-left">Our top-selling trophies—trusted favorites for every event</p>


                    <div className="col-lg-6 col-md-12 col-12">
                      <div className="mb-4">
                        <label htmlFor="name">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          id="name"
                          value={formValues?.name || ""}
                          onChange={handleInputChange}
                        />
                        {valErrors?.name && (
                          <small className="text-danger">
                            {valErrors?.name}
                          </small>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                      <div className="mb-4">
                        <label htmlFor="">Mobile Number</label>
                        <input
                          type="tel"
                          className="form-control"
                          name="phone_number"
                          id="phone_number"
                          value={formValues?.phone_number || ""}
                          onChange={handleInputChange}
                        />
                        {valErrors?.phone_number && (
                          <small className="text-danger">
                            {valErrors?.phone_number}
                          </small>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email">Email Id</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      value={formValues?.email || ""}
                      onChange={handleInputChange}
                    />
                    {valErrors?.email && (
                      <small className="text-danger">{valErrors?.email}</small>
                    )}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message">Message</label>
                    <textarea
                      name="message"
                      id="message"
                      value={formValues?.message || ""}
                      onChange={handleInputChange}
                      className="form-control"
                    />
                    {valErrors?.message && (
                      <small className="text-danger">
                        {valErrors?.message}
                      </small>
                    )}
                  </div>
                  <div>
                    <button
                      onClick={onSubmitContact}
                      type="submit"
                      className="common-btn "
                      disabled={isSubmitLoading}
                    >
                      {isSubmitLoading ? "Loading...." : "Submit"}
                    </button>
                  </div>
                </div>
              </div>

              <div
                className="col-12 section-space pb-0"
                data-aos="fade-up"
                data-aos-offset={300}
                data-aos-easing="liner"
              >
                <div className="map">
                  <iframe
                    src={contactus_details?.map_embed_link}
                    width="100%"
                    height="450"
                  ></iframe>{" "}
                </div>
              </div>
           </div>
          </section>
        </div>
      </section>
      <div>
        <div className="blur"></div>
        <div className="blur"></div>
        <div className="blur"></div>
      </div>
    </Layout1>
  );
}

export default ContactUsPage;
