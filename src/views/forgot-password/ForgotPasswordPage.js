"use client";

import Layout1 from "@/components/layout/Layout1";
import React from "react";

function ForgotPasswordPage() {
  return (
    <Layout1>
      <section className="forgot-section section-space">
        <div className="container">
          <div className="row ">
            <div className="col-12 col-md-6 col-lg-5 col-xl-4 mx-auto">
              <div className="forgot-box">
                <h4 className="mb-5">Forgot Password</h4>
                <form>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Email or Phone
                    </label>
                    <input
                      id=""
                      type="text"
                      className="form-control password-field"
                      defaultValue=""
                    />
                  </div>
                  <p>
                    <small>
                      We’ll send a verification code to this email or phone
                      number if it matches an existing Makatee account.
                    </small>
                  </p>
                  <button
                    type="submit"
                    className="common-btn common-btn-purple"
                  >
                    Next
                  </button>
                  <button type="submit" className="common-btn border-btn">
                    back
                  </button>
                  <button />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout1>
  );
}

export default ForgotPasswordPage;
