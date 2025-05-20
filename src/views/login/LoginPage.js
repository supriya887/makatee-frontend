"use client"

import Layout1 from "@/components/layout/Layout1";
import React from "react";

function LoginPage() {
  return (
    <Layout1>
      <section className="login-section section-space">
        <div className="container">
          <div className="row ">
            <div className="col-12 col-md-12 col-xl-10 mx-auto">
              <div className="row">
                <div className="col-12 col-md-6 left-side"></div>
                <div className="col-12 col-md-6 right-side">
                  <h4>Login Your Account</h4>
                  <p className="mb-5 text-center">
                    Do you already have an account with us? Please log in to
                    access.
                  </p>
                  <form>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Email or Phone*
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                      <div id="emailHelp" className="form-text" />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Password or OTP*
                      </label>
                      <input
                        id=""
                        type="password"
                        className="form-control password-field"
                        placeholder="********"
                        defaultValue=""
                      />
                      <span
                        toggle="password-field"
                        className="bi bi-eye field-icon toggle-password"
                      />
                    </div>
                    <div className="mb-3 form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleCheck1"
                      >
                        Remember Me
                      </label>
                    </div>
                    <button type="submit" className="common-btn">
                      Log In{" "}
                    </button>
                    <div className="links mt-4">
                      <a
                        href="/forgot-password"
                        style={{ color: "#d15b6c" }}
                      >
                        Forgot password?
                      </a>
                      <a href="/register">Do not have an account?</a>
                    </div>
                  </form>
                  <div className="or">Or login with </div>
                  <div className="btn-group">
                    <button className="btn google">
                      <img
                        src="/assets/images/google.png"
                        className="img-fluid"
                        alt=""
                      />
                      <span>Sign in with Google</span>
                    </button>
                    <button className="btn facebook">
                      <img
                        src="/assets/images/facebook.png"
                        className="img-fluid"
                        alt=""
                      />
                      <span>Sign in with Facebook</span>
                    </button>
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

export default LoginPage;
