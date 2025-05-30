"use client";

import React, { useEffect, useState } from "react";
import {
  IoSearch,
  IoCallOutline,
  IoPersonOutline,
  IoHeartOutline,
  IoCartOutline,
} from "react-icons/io5";
import MenuContainerDesktop from "./MenuContainerDesktop";
import MenuContainerMobile from "./MenuContainerMobile";
import { menuCategoryApi } from "@/api";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

function Header() {
  const [menuCategoryList, setMenuCategoryList] = useState({});

  const [accessToken, setAccessToken] = useState("");

  const router = useRouter();

  useEffect(() => {
    let t = localStorage.getItem("makatee-access-token");
    setAccessToken(t);
  }, []);

  useEffect(() => {
    getMenuCategoryApi();
  }, []);

  const getMenuCategoryApi = async () => {
    const res = await menuCategoryApi();

    if (res?.status == 1) {
      setMenuCategoryList(res?.data);
    } else {
      res?.error && toast.error(res?.error);
    }
  };

  return (
    <div>
      <div className="container position-relative ">
        <div className="headerbox">
          <div className="row">
            <div className="col-6 col-md-3">
              <a className="navbar-brand" href="/">
                <img src="/assets/images/logo.png" alt="" />{" "}
              </a>
            </div>
            <div className="col-6 col-md-9">
              <div className="main-header">
                <div className="right-contact-box">
                  <div className="d-none d-xl-block">
                    <div className="search-box">
                      <div className="top-search">
                        <form>
                          <div className="inner-form">
                            <div className="input-field first-wrap">
                              <div className="input-select">
                                <select
                                  data-trigger=""
                                  name="choices-single-default"
                                >
                                  <option placeholder="">All Categories</option>
                                  <option>New Arrivals</option>
                                  <option>Sale</option>
                                  <option>Ladies</option>
                                  <option>Men</option>
                                  <option>Clothing</option>
                                  <option>Footwear</option>
                                  <option>Accessories</option>
                                </select>
                              </div>
                            </div>
                            <div className="input-field second-wrap">
                              <input
                                id="search"
                                type="text"
                                placeholder="Search for items..."
                              />
                            </div>
                            <div className="input-field third-wrap">
                              <button className="btn-search" type="button">
                                {/* <ion-icon name="search-outline" /> */}
                                <IoSearch color="white" />
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="mobile-search">
                      <img
                        src="/assets/images/search.png"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="top-links call-btn">
                    <div className="icon">
                      <IoCallOutline />
                      {/* <ion-icon name="call-outline" /> */}
                    </div>
                    <a href="tel:919819207803">
                      <div className="call-box-content">
                        <small>Need Help?</small>
                        <br /> +91 98192 07803
                      </div>
                    </a>
                  </div>
                  <div className="top-links">
                    <ul>
                      <li className="login-btn">
                        <div
                          onClick={() =>
                            accessToken && router.push(`/dashboard`)
                          }
                          className={!accessToken ? "dropdown" : null}
                        >
                          <a
                            href="#"
                            className="dropdown-toggle"
                            data-bs-toggle="dropdown"
                          >
                            <div className="icon user-icon">
                              {/* <ion-icon name="person-outline" /> */}
                              <IoPersonOutline />
                            </div>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <ul className="shopping-cart-popup">
                              <h5>
                                Welcome
                                <br /> To access account and manage orders
                              </h5>
                              <hr />
                              <li className="clearfix">
                                <a
                                  href="/register"
                                  className="common-btn common-btn-purple"
                                  style={{ marginLeft: 0 }}
                                >
                                  Register
                                </a>
                                <a
                                  href="/login"
                                  className="common-btn common-btn-purple"
                                >
                                  Sign In
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li className="wishlist-btn">
                        <a href="/wishlist" className="">
                          <div className="icon">
                            <div className="cart-item-counter">1</div>
                            {/* <ion-icon name="heart-outline" /> */}
                            <IoHeartOutline />
                          </div>
                        </a>
                      </li>
                      <li className="cart-btn">
                        <div className="dropdown">
                          <a
                            href=""
                            className="dropdown-toggle"
                            data-bs-toggle="dropdown"
                          >
                            <div className="icon">
                              <div className="cart-item-counter">1</div>
                              {/* <ion-icon name="cart-outline" /> */}
                              <IoCartOutline />
                            </div>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <ul className="shopping-cart-popup">
                              <h5>Your Cart</h5>
                              <hr />
                              <li className="clearfix">
                                <div className="row">
                                  <div className="col-3">
                                    <img
                                      src="/assets/images/product-img/10255.webp"
                                      alt=""
                                      className="img-fluid"
                                    />
                                  </div>
                                  <div className="col-5">
                                    <div>
                                      <span className="item-name">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit
                                      </span>
                                      <span className="item-quantity">
                                        Quantity: 01
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col-4">
                                    {" "}
                                    <span className="item-price">₹ 849.99</span>
                                  </div>
                                </div>
                              </li>
                              <li className="clearfix">
                                <div className="row">
                                  <div className="col-3">
                                    <img
                                      src="/assets/images/product-img/10255.webp"
                                      alt=""
                                      className="img-fluid"
                                    />
                                  </div>
                                  <div className="col-5">
                                    <div>
                                      <span className="item-name">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit
                                      </span>
                                      <span className="item-quantity">
                                        Quantity: 01
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col-4">
                                    {" "}
                                    <span className="item-price">₹ 849.99</span>
                                  </div>
                                </div>
                              </li>
                              <li className="clearfix">
                                <div className="row">
                                  <div className="col-3">
                                    <img
                                      src="/assets/images/product-img/10255.webp"
                                      alt=""
                                      className="img-fluid"
                                    />
                                  </div>
                                  <div className="col-5">
                                    <div>
                                      <span className="item-name">
                                        Lorem ipsum dolor sit, amet
                                      </span>
                                      <span className="item-quantity">
                                        Quantity: 01
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col-4">
                                    {" "}
                                    <span className="item-price">₹ 849.99</span>
                                  </div>
                                </div>
                              </li>
                              <a
                                href="/checkout-guest"
                                className="common-btn common-btn-purple"
                              >
                                Checkout
                              </a>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="mobile-search">
                    <img
                      src="/assets/images/search.png"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                      alt=""
                    />
                  </div>
                </div>
                <nav className="navbar navbar-expand-xl">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon" />
                  </button>
                </nav>
              </div>
            </div>
          </div>
          <div className="col-12 d-block d-xl-none"></div>
        </div>
      </div>
      <MenuContainerDesktop category={menuCategoryList} />
      <MenuContainerMobile category={menuCategoryList} />
    </div>
  );
}

export default Header;
