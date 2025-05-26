import SidePanelSection from "@/components/dashboard/SidePanelSection";
import Layout1 from "@/components/layout/Layout1";
import React from "react";

function ProfilePage() {
  return (
    <Layout1>
      <section className="dashboard-page section-space pt-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-box">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#">Dashboard</a>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
            <div className="col-12 ">
              <div className="dashboard-box ">
                <div className="container p-0">
                  <div className="" data-aos="fade-up" data-aos-duration={1500}>
                    <div className="row">
                      <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                        <SidePanelSection />
                      </div>
                      <div className="col-lg-9 col-md-12 col-sm-12 col-12">
                        <div className="dashboard-content-wrap">
                          <div
                            className="edit-info-area mb-30"
                            style={{ marginBottom: 23 }}
                          >
                            <h4 className="color-dark">
                              Edit Your Profile Picture
                            </h4>
                            <div className="edit-profile-img-area">
                              <div className="profile-img">
                                <img
                                  src="/assets/images/clients/2.png"
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <div className="upload-img-area">
                                <h6>Upload Your Image</h6>
                                <form>
                                  <div className="upload-filed">
                                    <input type="file" id="upload" hidden="" />
                                    <label htmlFor="upload">Choose File</label>
                                  </div>
                                </form>
                                <span>JPEG 100 x 100</span>
                              </div>
                            </div>
                          </div>
                          <hr />
                          <form
                            action=""
                            className="checkout-form"
                            method="post"
                          >
                            <h4 className="mt-5">Edit Your Information</h4>
                            <br />
                            <div className="row billingaddress">
                              <div className=" mb-3 col-12">
                                <label htmlFor="" className="form-label">
                                  Full Name*
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id=""
                                  aria-describedby=""
                                />
                                <div id="Full_Name" className="form-text" />
                              </div>
                              <div className=" mb-3 col-sm-6 col-12">
                                <label htmlFor="" className="form-label">
                                  Phone
                                </label>
                                <input
                                  type="text"
                                  className="form-control input-field number"
                                  name="billing_phone"
                                  id="billing_phone"
                                  defaultValue=""
                                />
                              </div>
                              <div className=" mb-3   col-sm-6 col-12">
                                <label htmlFor="" className="form-label">
                                  Email
                                </label>
                                <input
                                  type="email"
                                  className="form-control input-field"
                                  name="billing_email"
                                  id="billing_email"
                                  defaultValue=""
                                />
                              </div>
                            </div>
                            <button
                              type="submit"
                              className="common-btn common-btn-purple mt-3"
                              onclick="myFunction()"
                            >
                              Save Changes
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout1>
  );
}

export default ProfilePage;
