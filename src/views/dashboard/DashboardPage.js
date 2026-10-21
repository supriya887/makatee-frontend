"use client";

import { profileDashboardApi } from "@/api";
import SidePanelSection from "@/components/dashboard/SidePanelSection";
import Layout1 from "@/components/layout/Layout1";
import Preloader from "@/components/Preloader";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  IoBagCheckOutline,
  IoBusOutline,
  IoCube,
  IoPencilOutline,
  IoReturnUpBackOutline,
} from "react-icons/io5";
import { useSelector } from "react-redux";

function DashboardPage() {
  const [isLoading, setIsLoading] = useState(true);

  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      await getProfileDetailApi();
    }
    fetchData();
  }, []);

  const getProfileDetailApi = async () => {
    let response = await profileDashboardApi();

    if (response?.status == 1) {
      setData(response?.data);
    } else {
      response?.error && toast.error(response?.error);
    }
    setIsLoading(false);
  };

  if (isLoading) return <Preloader />;

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
                  <div>
                    <div className="row">
                      <div className="col-lg-3  col-sm-12 col-12">
                        <SidePanelSection />
                      </div>
                      <div className="col-lg-9  col-sm-12 col-12">
                          <div className="dashboard-content-wrap">
                            <div className="profile-info-wrap">
                              <div className="profile-img">
                                <div className="edit">
                                  {/* <IoPencilOutline
                                    size={25}
                                    style={{
                                      backgroundColor: "var(--color-ffffff)",
                                      padding: "3px",
                                      borderRadius: 100,
                                      boxShadow: "0 0 6px rgb(0 0 0 / 12%)",
                                      position: "absolute",
                                      right: 0,
                                      top: 0,
                                    }}
                                  /> */}
                                </div>
                                  {data?.user?.profilepic ? (
                                  <img
                                    src={data?.user?.profilepic}
                                    alt=""
                                    className="img-fluid"
                                  />
                                ) : (
                                  <p
                                    style={{
                                      height: 110,
                                      width: 110,
                                      backgroundColor: "#f2f2f2",
                                      borderRadius: 110,
                                      textAlign: "center",
                                      fontSize: 70,
                                    }}
                                  >
                                    {data?.user?.first_name
                                      ?.charAt(0)
                                      ?.toUpperCase()}
                                  </p>
                                )}
                              
                              </div>
                              <div className="profile-content">
                                <h4>
                                  {data?.user?.first_name}{" "}
                                  {data?.user?.last_name}
                                </h4>
                                <a href={`mailto:${data?.user?.email}`}>
                                  {data?.user?.email}
                                </a>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-12 col-md-6 col-xl-4 ">
                                <div className="order-dashboard-box  ">
                                  <div className="d-flex">
                                    <div className="icon">
                                      <IoCube color="#287bff" size={40} />
                                    </div>
                                    <div>
                                      {" "}
                                      <h5>
                                        Total Orders
                                      </h5>
                                      <h4 className="mb-0">
                                        {data?.totalOrders || 0}
                                      </h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-12 col-md-6 col-xl-4">
                                <div className="order-dashboard-box">
                                  <div className="d-flex">
                                    <div className="icon">
                                      <IoBagCheckOutline
                                        color="#d15b6c"
                                        size={40}
                                      />
                                    </div>
                                    <div>
                                      {" "}
                                      <h5>Order Delivered</h5>
                                      <h4>{data?.orderDelivered || 0}</h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-12 col-md-6 col-xl-4">
                                <div className="order-dashboard-box ">
                                  <div className="d-flex">
                                    <div className="icon">
                                      <IoBusOutline color="#d15b6c" size={40} />
                                    </div>
                                    <div>
                                      {" "}
                                      <h5>Order In Transit</h5>
                                      <h4>{data?.orderTransit || 0}</h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* <div className="col-12 col-md-6 col-xl-4">
                                <div className="order-dashboard-box order-dashboard-box-red common-btn common-btn-border">
                                  <div className="d-flex">
                                    <div className="icon">
                                      <IoReturnUpBackOutline
                                        color="#d15b6c"
                                        size={40}
                                      />{" "}
                                    </div>
                                    <div>
                                      {" "}
                                      <h5>Order Return</h5>
                                      <h4>100</h4>
                                    </div>
                                  </div>
                                </div>
                              </div> */}
                            </div>
                          </div>
                        </div>
                      </div>
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

export default DashboardPage;
