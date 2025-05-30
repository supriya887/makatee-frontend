"use client";

import { registerApi } from "@/api";
import Layout1 from "@/components/layout/Layout1";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { IoEye, IoEyeOff } from "react-icons/io5";

function RegisterPage() {
  const router = useRouter();
  const passwordInput = useRef();

  const [loading, setLoading] = useState(false);
  const [valErrors, setValErrors] = useState({});
  const [countryList, setCountryList] = useState([]);
  const [otpSent, setOtpSent] = useState(false);

  const [formValues, setFormValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",

    phone: "",
    device_id: "",
    fcm_token: "",
    platform: "web",
    otp: "",
  });

  const hidePassword = () => {
    if (passwordInput.current.type === "password") {
      passwordInput.current.type = "text";
    } else {
      passwordInput.current.type = "password";
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setValErrors({});

    const res = await registerApi({
      first_name: formValues.first_name,
      last_name: formValues.last_name,
      email: formValues.email,
      password: formValues.password,
      phone: formValues.phone,
      device_id: "",
      fcm_token: "",
      platform: formValues.platform,
      // ...(otpSent ? { otp: formValues.otp } : {}),
    });

    if (res?.status == 1) {
      Cookies.set("makatee-access-token", res?.data?.accessToken);
      localStorage.setItem("makatee-access-token", res?.data?.accessToken);

      router.replace("/");
    } else {
      res?.error && toast.error(res?.error);
      setValErrors(res?.error_array);
    }

    setLoading(false);
  };

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
                  <form onSubmit={handleRegister}>
                    <div className="mb-3">
                      <label htmlFor="first_name" className="form-label">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="first_name"
                        className="form-control"
                        name="first_name"
                        value={formValues.first_name || ""}
                        onChange={handleInputChange}
                      />
                      {valErrors?.first_name && (
                        <small className="text-danger">
                          {valErrors?.first_name}
                        </small>
                      )}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="last_name" className="form-label">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="last_name"
                        className="form-control"
                        name="last_name"
                        value={formValues.last_name || ""}
                        onChange={handleInputChange}
                      />
                      {valErrors?.last_name && (
                        <small className="text-danger">
                          {valErrors?.last_name}
                        </small>
                      )}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label">
                        Phone Number*
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="form-control"
                        value={formValues.phone || ""}
                        onChange={handleInputChange}
                      />
                      {valErrors?.phone && (
                        <small className="text-danger">
                          {valErrors?.phone}
                        </small>
                      )}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        value={formValues.email || ""}
                        onChange={handleInputChange}
                      />
                      {valErrors?.email && (
                        <small className="text-danger">
                          {valErrors?.email}
                        </small>
                      )}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Password*(8+ characters)
                      </label>
                      <input
                        type="password"
                        id="password"
                        ref={passwordInput}
                        className="form-control password-field"
                        name="password"
                        value={formValues.password || ""}
                        onChange={handleInputChange}
                      />
                      <a onClick={hidePassword} className="field-icon">
                        {passwordInput?.current?.type === "password" ? (
                          <IoEye />
                        ) : (
                          <IoEyeOff />
                        )}
                      </a>
                      {valErrors?.password && (
                        <small className="text-danger">
                          {valErrors?.password}
                        </small>
                      )}
                    </div>
                    {/* <div className="mb-3">
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
                    </div> */}
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
                    <button
                      disabled={loading}
                      type="submit"
                      className="common-btn"
                    >
                      {loading ? "Please wait..." : "Sign Up"}
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
