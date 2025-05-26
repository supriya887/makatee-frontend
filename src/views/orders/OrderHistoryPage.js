import SidePanelSection from "@/components/dashboard/SidePanelSection";
import Layout1 from "@/components/layout/Layout1";
import React from "react";
import {
  IoCube,
  IoCubeOutline,
  IoRepeatOutline,
  IoSearchOutline,
} from "react-icons/io5";

function OrderHistoryPage() {
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
                          <div className="cart-product-list order-status">
                            <div className="row d-flex justify-left">
                              <div className="col-12 col-md-6 col-xl-4">
                                <form className="search-item form-inline my-2 my-lg-0">
                                  <input
                                    className="form-control mr-sm-2"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                  />
                                  <button
                                    className="common-button"
                                    type="submit"
                                  >
                                    <IoSearchOutline
                                      role="img"
                                      className="md hydrated"
                                    />
                                  </button>
                                </form>
                              </div>
                              <div className="col-12 col-md-6 col-xl-3">
                                <div className="float-right mb-4">
                                  <select
                                    className="form-select"
                                    aria-label="Default select example"
                                  >
                                    <option selected="">
                                      <strong>Filter by</strong>
                                    </option>
                                    <option value={1}> All</option>
                                    <option value={2}> In Transit</option>
                                    <option value={3}> Delivered</option>
                                    <option value={4}>Cancelled</option>
                                    <option value={5}>Returned</option>
                                    <option value={6}>Last 30 Days</option>
                                    <option value={7}>Last 6 Months</option>
                                    <option value={8}>Last Year</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-12">
                                <div className=" item">
                                  <a
                                    href={`/orders/1234`}
                                    className="customstatusicon"
                                  >
                                    <div className="flex-delivered d-flex">
                                      <div className="icon delivered">
                                        <IoCube size={25}  />
                                      </div>
                                      <div className="content">
                                        <div className="row">
                                          <div className="col-12">
                                            <h5>Delivered</h5>
                                            <small className="mb-2 d-block">
                                              On Sun, 9 Jun
                                            </small>
                                          </div>
                                          <div className="col-12">
                                            <div className="row">
                                              <div className="col-12 col-md-2">
                                                <div className="item-img">
                                                  <img
                                                    src="/assets/images/category/trophies/trophy-img.png"
                                                    className="img-fluid"
                                                    alt=""
                                                  />
                                                </div>
                                              </div>
                                              <div className="col-12 col-md-7">
                                                <div className="item-content">
                                                  <p>
                                                    Arden Victory Real Wood
                                                    Shield Trophy
                                                  </p>
                                                  <div className="box size mr-2">
                                                    Size :<div> 80mm</div>
                                                  </div>
                                                  <div className="box color mr-2">
                                                    Color :
                                                    <ul>
                                                      <li className="swatch black">
                                                        <input
                                                          type="radio"
                                                          name="swatch_demo"
                                                          id="swatch_1"
                                                          defaultValue={1}
                                                          defaultChecked=""
                                                        />
                                                      </li>
                                                    </ul>
                                                  </div>
                                                  <div className="box size mr-2">
                                                    Qty :<div> 50pcs</div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-12 col-md-3">
                                                <div className="product-amt">
                                                  <h4 className="price mb-0">
                                                    <strong>₹ 8767</strong>
                                                  </h4>
                                                  <span className="slash-price">
                                                    ₹ 1500
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-12">
                                          <div className="rating-list mt-3 mb-3 d-flex">
                                            <div>
                                              &nbsp;
                                              <input
                                                type="radio"
                                                name="ratings[1]"
                                                id="Overall Rating_5"
                                                defaultValue={5}
                                                className="radio rating-radio rating-radio--5"
                                              />
                                              <label
                                                htmlFor="Overall Rating_5"
                                                title="1 star rating"
                                                className="star-rating star-rating--5"
                                              />
                                              <input
                                                type="radio"
                                                name="ratings[1]"
                                                id="Overall Rating_4"
                                                defaultValue={4}
                                                className="radio rating-radio rating-radio--4"
                                              />
                                              <label
                                                htmlFor="Overall Rating_4"
                                                title="2 star rating"
                                                className="star-rating star-rating--4"
                                              />
                                              <input
                                                type="radio"
                                                name="ratings[1]"
                                                id="Overall Rating_3"
                                                defaultValue={3}
                                                className="radio rating-radio rating-radio--3"
                                              />
                                              <label
                                                htmlFor="Overall Rating_3"
                                                title="3 star rating"
                                                className="star-rating star-rating--3"
                                              />
                                              <input
                                                type="radio"
                                                name="ratings[1]"
                                                id="Overall Rating_2"
                                                defaultValue={2}
                                                className="radio rating-radio rating-radio--2"
                                              />
                                              <label
                                                htmlFor="Overall Rating_2"
                                                title="4 star rating"
                                                className="star-rating star-rating--2"
                                              />
                                              <input
                                                type="radio"
                                                name="ratings[1]"
                                                id="Overall Rating_1"
                                                defaultValue={1}
                                                className="radio rating-radio rating-radio--1"
                                              />
                                              <label
                                                htmlFor="Overall Rating_1"
                                                title="5 star rating"
                                                className="star-rating star-rating--1"
                                              />
                                            </div>
                                          </div>
                                          <hr />
                                          <small>
                                            Exchange/Return window closed on
                                            Sun, 23 Jun
                                          </small>
                                        </div>
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-12">
                                <div className=" item">
                                  <a
                                    href={`/orders/1234`}
                                    className="customstatusicon"
                                  >
                                    <div className="flex-delivered d-flex">
                                      <div className="icon transit">
                                        <IoCubeOutline size={25} />
                                      </div>
                                      <div className="content">
                                        <div className="row">
                                          <div className="col-12">
                                            <h5>
                                              In Transit{" "}
                                              <small>Arriving 20 Dec</small>
                                            </h5>
                                            <small className="mb-2 d-block">
                                              Ordered on 10 Dec
                                            </small>
                                          </div>
                                          <div className="col-12">
                                            <div className="row">
                                              <div className="col-12 col-md-2">
                                                <div className="item-img">
                                                  <img
                                                    src="/assets/images/category/trophies/trophy-img.png"
                                                    className="img-fluid"
                                                    alt=""
                                                  />
                                                </div>
                                              </div>
                                              <div className="col-12 col-md-7">
                                                <div className="item-content">
                                                  <p>
                                                    Arden Victory Real Wood
                                                    Shield Trophy
                                                  </p>
                                                  <div className="box size mr-2">
                                                    Size :<div> 80mm</div>
                                                  </div>
                                                  <div className="box color mr-2">
                                                    Color :
                                                    <ul>
                                                      <li className="swatch black">
                                                        <input
                                                          type="radio"
                                                          name="swatch_demo"
                                                          id="swatch_1"
                                                          defaultValue={1}
                                                          defaultChecked=""
                                                        />
                                                      </li>
                                                    </ul>
                                                  </div>
                                                  <div className="box size mr-2">
                                                    Qty :<div> 50pcs</div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-12 col-md-3">
                                                <div className="product-amt">
                                                  <h4 className="price mb-0">
                                                    <strong>₹ 8767</strong>
                                                  </h4>
                                                  <span className="slash-price">
                                                    ₹ 1500
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-12">
                                          <div className="rating-list mt-3 mb-3 d-flex">
                                            <div>
                                              &nbsp;
                                              <input
                                                type="radio"
                                                name="ratings[1]"
                                                id="Overall Rating_5"
                                                defaultValue={5}
                                                className="radio rating-radio rating-radio--5"
                                              />
                                              <label
                                                htmlFor="Overall Rating_5"
                                                title="1 star rating"
                                                className="star-rating star-rating--5"
                                              />
                                              <input
                                                type="radio"
                                                name="ratings[1]"
                                                id="Overall Rating_4"
                                                defaultValue={4}
                                                className="radio rating-radio rating-radio--4"
                                              />
                                              <label
                                                htmlFor="Overall Rating_4"
                                                title="2 star rating"
                                                className="star-rating star-rating--4"
                                              />
                                              <input
                                                type="radio"
                                                name="ratings[1]"
                                                id="Overall Rating_3"
                                                defaultValue={3}
                                                className="radio rating-radio rating-radio--3"
                                              />
                                              <label
                                                htmlFor="Overall Rating_3"
                                                title="3 star rating"
                                                className="star-rating star-rating--3"
                                              />
                                              <input
                                                type="radio"
                                                name="ratings[1]"
                                                id="Overall Rating_2"
                                                defaultValue={2}
                                                className="radio rating-radio rating-radio--2"
                                              />
                                              <label
                                                htmlFor="Overall Rating_2"
                                                title="4 star rating"
                                                className="star-rating star-rating--2"
                                              />
                                              <input
                                                type="radio"
                                                name="ratings[1]"
                                                id="Overall Rating_1"
                                                defaultValue={1}
                                                className="radio rating-radio rating-radio--1"
                                              />
                                              <label
                                                htmlFor="Overall Rating_1"
                                                title="5 star rating"
                                                className="star-rating star-rating--1"
                                              />
                                            </div>
                                          </div>
                                          <hr />
                                          <small>
                                            Exchange/Return window closed on
                                            Sun, 23 Jun
                                          </small>
                                        </div>
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-12">
                                <div className=" item">
                                  <a
                                    href={`/orders/1234`}
                                    className="customstatusicon"
                                  >
                                    <div className="flex-delivered d-flex">
                                      <div className="icon cancelled">
                                        <IoCubeOutline size={25} />
                                      </div>
                                      <div className="content">
                                        <div className="row">
                                          <div className="col-12">
                                            <h5>Cancelled</h5>
                                            <small className="mb-2 d-block">
                                              Ordered on 10 Dec
                                            </small>
                                          </div>
                                          <div className="col-12">
                                            <div className="row">
                                              <div className="col-12 col-md-2">
                                                <div className="item-img">
                                                  <img
                                                    src="/assets/images/category/trophies/trophy-img.png"
                                                    className="img-fluid"
                                                    alt=""
                                                  />
                                                </div>
                                              </div>
                                              <div className="col-12 col-md-7">
                                                <div className="item-content">
                                                  <p>
                                                    Arden Victory Real Wood
                                                    Shield Trophy
                                                  </p>
                                                  <div className="box size mr-2">
                                                    Size :<div> 80mm</div>
                                                  </div>
                                                  <div className="box color mr-2">
                                                    Color :
                                                    <ul>
                                                      <li className="swatch black">
                                                        <input
                                                          type="radio"
                                                          name="swatch_demo"
                                                          id="swatch_1"
                                                          defaultValue={1}
                                                          defaultChecked=""
                                                        />
                                                      </li>
                                                    </ul>
                                                  </div>
                                                  <div className="box size mr-2">
                                                    Qty :<div> 50pcs</div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-12 col-md-3">
                                                <div className="product-amt">
                                                  <h4 className="price mb-0">
                                                    <strong>₹ 8767</strong>
                                                  </h4>
                                                  <span className="slash-price">
                                                    ₹ 1500
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-12">
                                          <div className="rating-list mt-3 mb-3 d-flex">
                                            <div>
                                              &nbsp;
                                              <input
                                                type="radio"
                                                name="ratings[1]"
                                                id="Overall Rating_5"
                                                defaultValue={5}
                                                className="radio rating-radio rating-radio--5"
                                              />
                                              <label
                                                htmlFor="Overall Rating_5"
                                                title="1 star rating"
                                                className="star-rating star-rating--5"
                                              />
                                              <input
                                                type="radio"
                                                name="ratings[1]"
                                                id="Overall Rating_4"
                                                defaultValue={4}
                                                className="radio rating-radio rating-radio--4"
                                              />
                                              <label
                                                htmlFor="Overall Rating_4"
                                                title="2 star rating"
                                                className="star-rating star-rating--4"
                                              />
                                              <input
                                                type="radio"
                                                name="ratings[1]"
                                                id="Overall Rating_3"
                                                defaultValue={3}
                                                className="radio rating-radio rating-radio--3"
                                              />
                                              <label
                                                htmlFor="Overall Rating_3"
                                                title="3 star rating"
                                                className="star-rating star-rating--3"
                                              />
                                              <input
                                                type="radio"
                                                name="ratings[1]"
                                                id="Overall Rating_2"
                                                defaultValue={2}
                                                className="radio rating-radio rating-radio--2"
                                              />
                                              <label
                                                htmlFor="Overall Rating_2"
                                                title="4 star rating"
                                                className="star-rating star-rating--2"
                                              />
                                              <input
                                                type="radio"
                                                name="ratings[1]"
                                                id="Overall Rating_1"
                                                defaultValue={1}
                                                className="radio rating-radio rating-radio--1"
                                              />
                                              <label
                                                htmlFor="Overall Rating_1"
                                                title="5 star rating"
                                                className="star-rating star-rating--1"
                                              />
                                            </div>
                                          </div>
                                          <hr />
                                          <small>
                                            Exchange/Return window closed on
                                            Sun, 23 Jun
                                          </small>
                                        </div>
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-12">
                                <div className=" item">
                                  <a
                                    href={`/orders/1234`}
                                    className="customstatusicon"
                                  >
                                    <div className="flex-delivered d-flex">
                                      <div className="icon returned">
                                        <IoRepeatOutline size={25} />
                                      </div>
                                      <div className="content">
                                        <div className="row">
                                          <div className="col-12">
                                            <h5>Refund Credited</h5>
                                            <small className="mb-2 d-block">
                                              Your refund of ₹419.00 for the
                                              return has been processed
                                              successfully on Thu, 16 May.
                                            </small>
                                          </div>
                                          <div className="col-12">
                                            <div className="row">
                                              <div className="col-12 col-md-2">
                                                <div className="item-img">
                                                  <img
                                                    src="/assets/images/category/trophies/trophy-img.png"
                                                    className="img-fluid"
                                                    alt=""
                                                  />
                                                </div>
                                              </div>
                                              <div className="col-12 col-md-7">
                                                <div className="item-content">
                                                  <p>
                                                    Arden Victory Real Wood
                                                    Shield Trophy
                                                  </p>
                                                  <div className="box size mr-2">
                                                    Size :<div> 80mm</div>
                                                  </div>
                                                  <div className="box color mr-2">
                                                    Color :
                                                    <ul>
                                                      <li className="swatch black">
                                                        <input
                                                          type="radio"
                                                          name="swatch_demo"
                                                          id="swatch_1"
                                                          defaultValue={1}
                                                          defaultChecked=""
                                                        />
                                                      </li>
                                                    </ul>
                                                  </div>
                                                  <div className="box size mr-2">
                                                    Qty :<div> 50pcs</div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-12 col-md-3">
                                                <div className="product-amt">
                                                  <h4 className="price mb-0">
                                                    <strong>₹ 8767</strong>
                                                  </h4>
                                                  <span className="slash-price">
                                                    ₹ 1500
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-12">
                                          <div className="rating-list mt-3 mb-3 d-flex">
                                            <div>
                                              &nbsp;
                                              <input
                                                type="radio"
                                                name="ratings[1]"
                                                id="Overall Rating_5"
                                                defaultValue={5}
                                                className="radio rating-radio rating-radio--5"
                                              />
                                              <label
                                                htmlFor="Overall Rating_5"
                                                title="1 star rating"
                                                className="star-rating star-rating--5"
                                              />
                                              <input
                                                type="radio"
                                                name="ratings[1]"
                                                id="Overall Rating_4"
                                                defaultValue={4}
                                                className="radio rating-radio rating-radio--4"
                                              />
                                              <label
                                                htmlFor="Overall Rating_4"
                                                title="2 star rating"
                                                className="star-rating star-rating--4"
                                              />
                                              <input
                                                type="radio"
                                                name="ratings[1]"
                                                id="Overall Rating_3"
                                                defaultValue={3}
                                                className="radio rating-radio rating-radio--3"
                                              />
                                              <label
                                                htmlFor="Overall Rating_3"
                                                title="3 star rating"
                                                className="star-rating star-rating--3"
                                              />
                                              <input
                                                type="radio"
                                                name="ratings[1]"
                                                id="Overall Rating_2"
                                                defaultValue={2}
                                                className="radio rating-radio rating-radio--2"
                                              />
                                              <label
                                                htmlFor="Overall Rating_2"
                                                title="4 star rating"
                                                className="star-rating star-rating--2"
                                              />
                                              <input
                                                type="radio"
                                                name="ratings[1]"
                                                id="Overall Rating_1"
                                                defaultValue={1}
                                                className="radio rating-radio rating-radio--1"
                                              />
                                              <label
                                                htmlFor="Overall Rating_1"
                                                title="5 star rating"
                                                className="star-rating star-rating--1"
                                              />
                                            </div>
                                          </div>
                                          <hr />
                                          <small>
                                            Exchange/Return window closed on
                                            Sun, 23 Jun
                                          </small>
                                        </div>
                                      </div>
                                    </div>
                                  </a>
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
            </div>
          </div>
        </div>
      </section>
    </Layout1>
  );
}

export default OrderHistoryPage;
