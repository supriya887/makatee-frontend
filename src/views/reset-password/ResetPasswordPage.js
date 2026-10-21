"use client";

import { confirmPasswordApi } from "@/api";
import Layout1 from "@/components/layout/Layout1";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { IoEye, IoEyeOff } from "react-icons/io5";

function ResetPasswordPage() {
  const router = useRouter();

  const params = useParams();

  const [loading, setLoading] = useState(false);
  const [valErrors, setValErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formValues, setFormValues] = useState({
    password: "",
    password_confirmation: "",
  });

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();

    setLoading(true);
    setValErrors({});

    const res = await confirmPasswordApi({
      password: formValues.password,
      password_confirmation: formValues?.password_confirmation,
      token: params?.token,
    });

    if (res?.status == 1) {
      res?.msg && toast.success(res?.msg);
      router.push(`/login`);
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
                  <h4 className="mb-5">Reset Password</h4>
                  <form onSubmit={handleResetPassword}>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Password*(8+ characters)
                      </label>
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        className="form-control password-field"
                        name="password"
                        value={formValues.password || ""}
                        onChange={handleInputChange}
                      />
                      <a onClick={togglePassword} className="field-icon">
                        {showPassword ? <IoEyeOff /> : <IoEye />}
                      </a>
                      {valErrors?.password && (
                        <small className="text-danger">
                          {valErrors?.password}
                        </small>
                      )}
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="password_confirmation"
                        className="form-label"
                      >
                        Confirm Password
                      </label>
                      <input
                        className="form-control password-field"
                        value={formValues?.password_confirmation}
                        name="password_confirmation"
                        type={showConfirmPassword ? "text" : "password"}
                        id="password_confirmation"
                        onChange={handleInputChange}
                      />
                      <a onClick={toggleConfirmPassword} className="field-icon">
                        {showConfirmPassword ? <IoEyeOff /> : <IoEye />}
                      </a>
                      {valErrors.password_confirmation && (
                        <small className="text-danger">
                          {valErrors.password_confirmation}
                        </small>
                      )}
                    </div>

                    <button
                      disabled={loading}
                      type="submit"
                      className="common-btn"
                    >
                      {loading ? "Please wait..." : "Reset Password"}
                    </button>
                  </form>
                  {/* <div className="or">OR</div>
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
                    </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout1>
  );
}

export default ResetPasswordPage;
