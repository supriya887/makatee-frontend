import Layout1 from "@/components/layout/Layout1";
import React from "react";

function RegisterPage() {
  return (
    <Layout1>
      <section className="login-section section-space">
        <div className="container">
          <div className="row ">
            <div className="col-12 col-md-12 col-xl-10 mx-auto">
              <div className="row">
                <div className="col-12 col-md-6 left-side"></div>
                <div className="col-12 col-md-6 right-side">
                  <h4 className="mb-5">Sign Up</h4>
                  <form>
                    <div className="mb-3">
                      <label htmlFor="exampleInputName" className="form-label">
                        Full Name*
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputName"
                        aria-describedby="nameHelp"
                      />
                      <div id="nameHelp" className="form-text" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleInputPhone" className="form-label">
                        Phone Number*
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="exampleInputphone"
                        aria-describedby="phoneHelp"
                      />
                      <div id="phoneHelp" className="form-text" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleInputEmail" className="form-label">
                        Email*
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail"
                        aria-describedby="emailHelp"
                      />
                      <div id="emailHelp" className="form-text" />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputPassword"
                        className="form-label"
                      >
                        Password*(8+ characters)
                      </label>
                      <input
                        id=""
                        type="password"
                        className="form-control password-field"
                        defaultValue="secret"
                      />
                      <span
                        toggle=".password-field"
                        className="bi bi-eye field-icon toggle-password"
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Confirm Password*
                      </label>
                      <input
                        id=""
                        type="password"
                        className="form-control password-field"
                        defaultValue="secret"
                      />
                      <span
                        toggle=".password-field"
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
                        I agree to the Terms &amp; Policy
                      </label>
                    </div>
                    <button type="submit" className="common-btn">
                      Sign Up
                    </button>
                  </form>
                  <div className="or">OR</div>
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

export default RegisterPage;
