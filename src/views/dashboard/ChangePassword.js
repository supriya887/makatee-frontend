import SidePanelSection from "@/components/dashboard/SidePanelSection";
import Layout1 from "@/components/layout/Layout1";
import React from "react";

function ChangePassword() {
  return (
    <Layout1>
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
                      <div className="forgot-box w-50">
                        <h4 className="mb-5">Update Your Password</h4>
                        <form>
                          <div className="mb-3">
                            <label
                              htmlFor="exampleInputPassword1"
                              className="form-label"
                            >
                              Current Password
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="exampleInputPassword1"
                            />
                          </div>
                          <div className="mb-3">
                            <label
                              htmlFor="exampleInputPassword1"
                              className="form-label"
                            >
                              New Password
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="exampleInputPassword1"
                            />
                          </div>{" "}
                          <div className="mb-3">
                            <label
                              htmlFor="exampleInputPassword1"
                              className="form-label"
                            >
                              Confirm Password
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="exampleInputPassword1"
                            />
                          </div>
                          <button
                            type="submit"
                            className="common-btn common-btn-purple"
                          >
                            Change Password
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
    </Layout1>
  );
}

export default ChangePassword;
