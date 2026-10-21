"use client";

import { editProfileApi, updateProfileApi } from "@/api";
import ImageUploader from "@/components/custom/ImageUploader";
import SidePanelSection from "@/components/dashboard/SidePanelSection";
import Layout1 from "@/components/layout/Layout1";
import { setAccessToken, setUserData } from "@/store/slices/user-slice";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import toast from "react-hot-toast";
import OTPInput from "react-otp-input";
import { useDispatch } from "react-redux";

function ProfilePage() {
  const [editProfile, setEditProfile] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [valErrors, setValErrors] = useState({});

  const dispatch = useDispatch();

  const [otpSent, setOtpSent] = useState(false);

  const router = useRouter();

  const [formValues, setFormValues] = useState({
    email: "",
    first_name: "",
    last_name: "",
    phone: "",
    otp: "",
    image: "",
    image_path: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    async function fetchData() {
      await getProfileDetailApi();
    }
    fetchData();
  }, []);

  const getProfileDetailApi = async () => {
    let response = await editProfileApi();

    if (response?.status == 1) {
      setFormValues((prev) => ({
        ...prev,
        email: response?.data?.email,
        first_name: response?.data?.first_name,
        last_name: response?.data?.last_name,
        phone: response?.data?.phone,
        image: response?.data?.image,
        image_path: response?.data?.profilepic,
      }));
    } else {
      response?.error && toast.error(response?.error);
    }
  };

  const updateProfile = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setValErrors({});

    let response = await updateProfileApi({
      email: formValues?.email,
      first_name: formValues?.first_name,
      last_name: formValues?.last_name,
      phone: formValues?.phone,
      image: formValues?.image,
      otp: formValues?.otp,
    });

    console.log("r", response);
    if (response?.status == 1) {
      if (response?.code == "OTP") {
        // setEditProfile(false);
        setOtpSent(true);
      } else {
        Cookies.set("makatee-access-token", response?.data?.accessToken);
        localStorage.setItem(
          "makatee-access-token",
          response?.data?.accessToken
        );

        dispatch(setAccessToken(response?.data?.accessToken));
        dispatch(setUserData(response?.data?.user));
        response?.msg && toast.success(response?.msg);
        // setEditProfile(false);
        setOtpSent(false);
      }
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
      <section className="dashboard-page section-space">
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
                                {formValues?.image_path ? (
                                  <img
                                    src={formValues?.image_path}
                                    alt=""
                                    className="img-fluid"
                                  />
                                ) : (
                                  <p
                                    style={{
                                      height: 110,
                                      width: 110,
                                      backgroundColor: "lightgrey",
                                      borderRadius: 110,
                                      textAlign: "center",
                                      fontSize: 70,
                                    }}
                                  >
                                    {formValues?.first_name
                                      ?.charAt(0)
                                      ?.toUpperCase()}
                                  </p>
                                )}
                              </div>
                              <ImageUploader
                                error={valErrors?.image}
                                onUploadComplete={(fs) => {
                                  console.log("fs", fs);
                                  setFormValues((prev) => ({
                                    ...prev,
                                    image: fs[0]?.fileName,
                                    image_path: fs[0]?.filePath,
                                  }));
                                }}
                              />
                              {/* <div className="upload-img-area">
                                <h6>Upload Your Image</h6>
                                <form>
                                  <div className="upload-filed">
                                    <input type="file" id="upload" hidden />
                                    <label htmlFor="upload">Choose File</label>
                                  </div>
                                </form>
                                <span>JPEG 100 x 100</span>
                              </div> */}
                            </div>
                          </div>
                          <hr />
                          <form
                            action=""
                            className="checkout-form"
                            method="post"
                            onSubmit={updateProfile}
                          >
                            <h4 className="mt-5">Edit Your Information</h4>
                            <br />
                            <div className="row billingaddress">
                              <div className=" mb-3 col-sm-6 col-12">
                                <label
                                  htmlFor="first_name"
                                  className="form-label"
                                >
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
                              <div className=" mb-3 col-sm-6 col-12">
                                <label
                                  htmlFor="last_name"
                                  className="form-label"
                                >
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
                              <div className=" mb-3 col-sm-6 col-12">
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
                              <div className=" mb-3   col-sm-6 col-12">
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
                            </div>
                            <button
                              type="submit"
                              className="common-btn common-btn-purple mt-3"
                              disabled={isLoading}
                              onClick={updateProfile}
                            >
                              {isLoading ? "loading...." : "Save Changes"}
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

        <Modal
          show={otpSent}
          size="md"
          style={{ paddingLeft: "0px" }}
          aria-labelledby="contained-modal-title-vcenter"
          centered
          onHide={() => {
            setOtpSent(false);
            setFormValues((prev) => ({ ...prev, otp: "" }));
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title>Verify Email</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <section>
              <p className="mb-4">
                Enter the 6 digit verification code sent to your email
              </p>
              <form onSubmit={updateProfile}>
                <div className="col-6">
                  <OTPInput
                    value={formValues.otp || ""}
                    onChange={(v) =>
                      setFormValues((prev) => ({ ...prev, otp: v }))
                    }
                    containerStyle={{ justifyContent: "space-between" }}
                    numInputs={6}
                    inputStyle={{ padding: 0, width: 40, height: 40 }}
                    renderSeparator={<span>&nbsp;&nbsp;</span>}
                    renderInput={(props) => <input {...props} />}
                  />
                </div>
                <button
                  type="submit"
                  className="common-btn card mt-4 "
                  onClick={updateProfile}
                  disabled={isLoading}
                >
                  {isLoading ? "Please wait..." : "Submit"}
                </button>
              </form>
            </section>
          </Modal.Body>
        </Modal>
      </section>
    </Layout1>
  );
}

export default ProfilePage;
