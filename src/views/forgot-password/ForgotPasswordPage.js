"use client";

import { resetPasswordApi } from "@/api";
import Layout1 from "@/components/layout/Layout1";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

function ForgotPasswordPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [valErrors, setValErrors] = useState({});

  const [formValues, setFormValues] = useState({
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    setValErrors({});

    const res = await resetPasswordApi({
      email: formValues.email,
    });

    console.log(res);

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
      <section className="forgot-section section-space">
        <div className="container">
          <div className="row ">
            <div className="col-12 col-md-6 col-lg-5 col-xl-4 mx-auto">
              <div className="forgot-box p-4 rounded-4">
                <h4 className="mb-5">Forgot Password</h4>
                <form onSubmit={handleResetPassword}>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="text"
                      className="form-control password-field"
                      value={formValues.email || ""}
                      onChange={handleInputChange}
                    />
                    {valErrors?.email && (
                      <small className="text-danger">{valErrors?.email}</small>
                    )}
                  </div>
                  <p>
                    <small>
                      We’ll send a verification code to this email number if it
                      matches an existing Makatee account.
                    </small>
                  </p>
                  <button
                    disabled={loading}
                    type="submit"
                    className="common-btn common-btn-purple"
                  >
                    {loading ? "Please wait..." : "Next"}
                  </button>
                  <button
                    onClick={() => router.push("/")}
                    type="button"
                    className="common-btn border-btn"
                  >
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
