import SidePanelSection from "@/components/dashboard/SidePanelSection";
import Layout1 from "@/components/layout/Layout1";
import React from "react";
import {
  IoAlbumsOutline,
  IoBagCheckOutline,
  IoBusOutline,
  IoCube,
  IoCubeOutline,
  IoHeartOutline,
  IoKeypadOutline,
  IoLocationOutline,
  IoLogOutOutline,
  IoPencilOutline,
  IoPersonOutline,
  IoReturnUpBackOutline,
  IoWalletOutline,
} from "react-icons/io5";

function DashboardPage() {
  return (
    <Layout1>
      <section className="dashboard-page section-space pt-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-box">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#">Dashboard</a>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
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
                          <div className="dashboard-content-wrap">
                            <div className="profile-info-wrap">
                              <div className="profile-img">
                                <div className="edit">
                                  <IoPencilOutline
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
                                  />
                                </div>
                                <img
                                  src="/assets/images/clients/2.png"
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <div className="profile-content">
                                <h4>Vikkas Goyal</h4>
                                <a href="">goyal@gmail.com</a>
                              </div>
                            </div>
                            <div className="row mb-4">
                              <div className="col-12 col-md-6 col-xl-4 ">
                                <div className="order-dashboard-box  common-btn common-btn-purple ">
                                  <div className="d-flex">
                                    <div className="icon">
                                      <IoCube color="#287bff" size={40} />
                                    </div>
                                    <div>
                                      {" "}
                                      <h5 className="text-white">
                                        Total Orders
                                      </h5>
                                      <h4 className="mb-0 text-white">100</h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-12 col-md-6 col-xl-4">
                                <div className="order-dashboard-box order-dashboard-box-red common-btn common-btn-border">
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
                                      <h4>100</h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-12 col-md-6 col-xl-4">
                                <div className="order-dashboard-box order-dashboard-box-red common-btn common-btn-border">
                                  <div className="d-flex">
                                    <div className="icon">
                                      <IoBusOutline color="#d15b6c" size={40} />
                                    </div>
                                    <div>
                                      {" "}
                                      <h5>Order In Transit</h5>
                                      <h4>100</h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-12 col-md-6 col-xl-4">
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
                              </div>
                            </div>
                          </div>
                          {/* <div class="bidding-summary-wrap desktop">
                                          <h3 class="title bedding_title">Order Summary</h3>
                                          <table class="bidding-summary-table table-responsive">
                                              <thead>
                                                  <tr>
                                                      <th>Product ID</th>
                                                      <th>Product name</th>
                                                      <th>Amount</th>
                                                      <th>Status</th>
                                                      <th>Order Date</th>
                                                  </tr>
                                              </thead>
                                              <tbody>
                                                  <tr>
                                                      <td data-label="Auction ID">12584885455</td>
                                                      <td data-label="Product name" class="product-name">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, consequatur!</td>
                                                      <td data-label="Amount">₹ 459</td>
                                                      <td data-label="Status"><span>Complete</span></td>
                                                      <td data-label="Auction Date">June 25, 2024</td>
                                                  </tr>
                                                  <tr>
                                                      <td data-label="Auction ID">12584885482</td>
                                                      <td data-label="Product name" class="product-name">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, consequatur!</td>
                                                      <td data-label="Amount">₹ 459</td>
                                                      <td data-label="Status"><span>Complete</span></td>
                                                      <td data-label="Auction Date">June 13, 2024</td>
                                                  </tr>
                                                  <tr>
                                                      <td data-label="Auction ID">12584885536</td>
                                                      <td data-label="Product name" class="product-name">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, consequatur!</td>
                                                      <td data-label="Amount">₹ 459</td>
                                                      <td data-label="Status"><span class="cancel">Return</span>
                                                      </td>
                                                      <td data-label="Auction Date">June 2, 2024</td>
                                                  </tr>
                                                  <tr>
                                                      <td data-label="Auction ID">12584885548</td>
                                                      <td data-label="Product name" class="product-name">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, consequatur!</td>
                                                      <td data-label="Amount">₹ 459</td>
                                                      <td data-label="Status"><span>Complete</span></td>
                                                      <td data-label="Auction Date">June 8, 2024</td>
                                                  </tr>
                                                  <tr>
                                                      <td data-label="Auction ID">12584885563</td>
                                                      <td data-label="Product name" class="product-name">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, consequatur!</td>
                                                      <td data-label="Amount">₹ 459</td>
                                                      <td data-label="Status"><span>Complete</span></td>
                                                      <td data-label="Auction Date">June 21, 2024</td>
                                                  </tr>
                                                  <tr>
                                                      <td data-label="Auction ID">12584885589</td>
                                                      <td data-label="Product name" class="product-name">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, consequatur!</td>
                                                      <td data-label="Amount">₹ 459</td>
                                                      <td data-label="Status"><span class="cancel">Return</span>
                                                      </td>
                                                      <td data-label="Auction Date">June 9, 2024</td>
                                                  </tr>
                                              </tbody>
                                          </table>
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
      </section>
    </Layout1>
  );
}

export default DashboardPage;
