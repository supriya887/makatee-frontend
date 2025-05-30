"use client";

import { loginApi } from "@/api";
import Layout1 from "@/components/layout/Layout1";
import Cookies from "js-cookie";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
import { IoEye, IoEyeOff } from "react-icons/io5";

function LoginPage() {
  const router = useRouter();
  const passwordInput = useRef();
  const searchParams = useSearchParams();

  const [loading, setLoading] = useState(false);
  const [valErrors, setValErrors] = useState({});

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const hidePassword = () => {
    console.log(passwordInput);
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

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setValErrors({});

    const res = await loginApi({
      email: formValues.email,
      password: formValues.password,
      cart_token: localStorage.getItem("cart_token"),
    });

    if (res?.status == 1) {
      Cookies.set("makatee-access-token", res?.data?.accessToken);
      localStorage.setItem("makatee-access-token", res?.data?.accessToken);

      const redirectURL = searchParams.get("redirectTo") ?? "/";

      router.replace(redirectURL);
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
                  <h4>Login Your Account</h4>
                  <p className="mb-5 text-center">
                    Do you already have an account with us? Please log in to
                    access.
                  </p>
                  <form onSubmit={handleLogin}>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email or Phone*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formValues.email || ""}
                        className="form-control"
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
                        Password
                      </label>
                      <input
                        type="password"
                        ref={passwordInput}
                        id="password"
                        name="password"
                        className="form-control password-field"
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
                    <button
                      disabled={loading}
                      type="submit"
                      className="common-btn"
                    >
                      {loading ? "Please wait..." : "Login"}
                    </button>
                    <div className="links mt-4">
                      <a href="/forgot-password" style={{ color: "#d15b6c" }}>
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
