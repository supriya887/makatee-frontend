"use client";

import { updatePasswordApi } from "@/api";
import SidePanelSection from "@/components/dashboard/SidePanelSection";
import Layout1 from "@/components/layout/Layout1";
import React, { useState } from "react";
import toast from "react-hot-toast";

function ChangePassword() {
  const [isLoading, setIsLoading] = useState(false);
  const [valErrors, setValErrors] = useState({});

  const [formValues, setFormValues] = useState({
    current_password: "",
    new_password: "",
    new_password_confirmation: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const updatePassword = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setValErrors({});

    let response = await updatePasswordApi({
      current_password: formValues?.current_password,
      new_password: formValues?.new_password,
      new_password_confirmation: formValues?.new_password_confirmation,
    });

    console.log("r", response);
    if (response?.status == 1) {
      setFormValues({
        current_password: "",
        new_password: "",
        new_password_confirmation: "",
      });
      response?.msg && toast.success(response?.msg);
    } else {
      setValErrors(response?.error_array);
      response?.error && toast.error(response?.error);
    }
    setIsLoading(false);
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
                      Dashboard
                    </li>
                  </ol>
                </nav>
              </div>
               </div>
        
          </div>
        </div>
      </section>
       <section className="section-space">
        <div className="container"></div>
      <div className="container">
        <div className="row">
        
          <div className="col-12 ">
            <div className="dashboard-box ">
              <div className="container p-0">
                <div className="" data-aos="fade-up" data-aos-duration={1500}>
                  <div className="row">
                    <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                      <SidePanelSection />
                    </div>
                    <div className="col-lg-9 col-md-12 col-sm-12 col-12">
                      <div className="forgot-box w-100 w-lg-50">
                        <h4 className="mb-5">Update Your Password</h4>
                        <form onSubmit={updatePassword}>
                          <div className="mb-3">
                            <label
                              htmlFor="current_password"
                              className="form-label"
                            >
                              Current Password
                            </label>
                            <input
                              className="form-control"
                              value={formValues?.current_password}
                              name="current_password"
                              type="password"
                              onChange={handleInputChange}
                              id="current_password"
                            />
                            {valErrors.current_password && (
                              <small className="text-danger">
                                {valErrors.current_password}
                              </small>
                            )}
                          </div>
                          <div className="mb-3">
                            <label
                              htmlFor="new_password"
                              className="form-label"
                            >
                              New Password
                            </label>
                            <input
                              className="form-control"
                              value={formValues?.new_password}
                              name="new_password"
                              type="password"
                              id="new_password"
                              onChange={handleInputChange}
                            />
                            {valErrors.new_password && (
                              <small className="text-danger">
                                {valErrors.new_password}
                              </small>
                            )}
                          </div>{" "}
                          <div className="mb-3">
                            <label
                              htmlFor="new_password_confirmation"
                              className="form-label"
                            >
                              Confirm Password
                            </label>
                            <input
                              className="form-control"
                              value={formValues?.new_password_confirmation}
                              name="new_password_confirmation"
                              type="password"
                              id="new_password_confirmation"
                              onChange={handleInputChange}
                            />
                            {valErrors.new_password_confirmation && (
                              <small className="text-danger">
                                {valErrors.new_password_confirmation}
                              </small>
                            )}
                          </div>
                          <button
                            type="submit"
                            className="common-btn common-btn-purple"
                            disabled={isLoading}
                          >
                            {isLoading ? "Please wait...." : "Change Password"}
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
      </div></section>
    </Layout1>
  );
}

export default ChangePassword;
