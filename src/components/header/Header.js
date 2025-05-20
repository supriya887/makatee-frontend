"use client";

import React from "react";
import { IoSearch, IoCallOutline, IoPersonOutline, IoHeartOutline, IoCartOutline } from "react-icons/io5";

function Header() {
  return (
    <header>
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
                        <div className="dropdown">
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
                                href="checkout-guest.php"
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
      <div className="container-fluid p-0 menu-box">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="navbar navbar-expand-xl">
                <div className="collapse navbar-collapse" id="main_nav">
                  <ul className="navbar-nav p-3 p-md-0">
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle active"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        Trophies{" "}
                      </a>
                      {/* Mega Menu */}
                      <div className="dropdown-menu mega-menu">
                        <div className="row">
                          <div className="col-12 col-md-3">
                            <ul>
                              <li>
                                <a href={`/product`}>
                                  1st, 2nd &amp; 3rd Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Achievement Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Aeroplane Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Air Hockey Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  American Football Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Archery Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Archery Trophies
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-12 col-md-3">
                            <ul>
                              <li>
                                <a href={`/product`}>Art Trophies</a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Athletics Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Attendance Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Badminton Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Badminton Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Baseball Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Basketball Trophies
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-12 col-md-3">
                            <ul>
                              <li>
                                <a href={`/product`}>
                                  Beach Volleyball Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Beauty Pageant Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Bodybuilding Trophies
                                </a>
                              </li>
                              <a href={`/product`}></a>
                              <li>
                                <a href={`/product`} />
                                <a href={`/product`}>
                                  Booby Prize Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>Bowls Trophies</a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Boxing Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  British Trophies
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-12 col-md-3">
                            <ul style={{ borderRight: 0 }}>
                              <li>
                                <a href={`/product`}>
                                  Canoeing &amp; Kayaking Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>Card Trophies</a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Carnival Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Cat Show Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Charity Fund Raising Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>Card Trophies</a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Carnival Trophies
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle active"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        Medals{" "}
                      </a>
                      {/* Mega Menu */}
                      <div className="dropdown-menu mega-menu">
                        <div className="row">
                          <div className="col-12 col-md-3">
                            <ul>
                              <li>
                                <a href={`/product`}>
                                  1st, 2nd &amp; 3rd Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Achievement Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Aeroplane Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Air Hockey Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  American Football Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Archery Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Archery Trophies
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-12 col-md-3">
                            <ul>
                              <li>
                                <a href={`/product`}>Art Trophies</a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Athletics Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Attendance Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Badminton Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Badminton Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Baseball Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Basketball Trophies
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-12 col-md-3">
                            <ul>
                              <li>
                                <a href={`/product`}>
                                  Beach Volleyball Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Beauty Pageant Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Bodybuilding Trophies
                                </a>
                              </li>
                              <a href={`/product`}></a>
                              <li>
                                <a href={`/product`} />
                                <a href={`/product`}>
                                  Booby Prize Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>Bowls Trophies</a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Boxing Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  British Trophies
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-12 col-md-3">
                            <ul style={{ borderRight: 0 }}>
                              <li>
                                <a href={`/product`}>
                                  Canoeing &amp; Kayaking Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>Card Trophies</a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Carnival Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Cat Show Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Charity Fund Raising Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>Card Trophies</a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Carnival Trophies
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle active"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        Crystal Awards
                      </a>
                      {/* Mega Menu */}
                      <div className="dropdown-menu mega-menu">
                        <div className="row">
                          <div className="col-12 col-md-3">
                            <ul>
                              <li>
                                <a href={`/product`}>
                                  1st, 2nd &amp; 3rd Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Achievement Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Aeroplane Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Air Hockey Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  American Football Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Archery Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Archery Trophies
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-12 col-md-3">
                            <ul>
                              <li>
                                <a href={`/product`}>Art Trophies</a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Athletics Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Attendance Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Badminton Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Badminton Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Baseball Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Basketball Trophies
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-12 col-md-3">
                            <ul>
                              <li>
                                <a href={`/product`}>
                                  Beach Volleyball Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Beauty Pageant Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Bodybuilding Trophies
                                </a>
                              </li>
                              <a href={`/product`}></a>
                              <li>
                                <a href={`/product`} />
                                <a href={`/product`}>
                                  Booby Prize Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>Bowls Trophies</a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Boxing Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  British Trophies
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-12 col-md-3">
                            <ul style={{ borderRight: 0 }}>
                              <li>
                                <a href={`/product`}>
                                  Canoeing &amp; Kayaking Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>Card Trophies</a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Carnival Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Cat Show Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Charity Fund Raising Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>Card Trophies</a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Carnival Trophies
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle active"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        Sheilds &amp; Plaques
                      </a>
                      {/* Mega Menu */}
                      <div className="dropdown-menu mega-menu">
                        <div className="row">
                          <div className="col-12 col-md-3">
                            <ul>
                              <li>
                                <a href={`/product`}>
                                  1st, 2nd &amp; 3rd Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Achievement Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Aeroplane Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Air Hockey Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  American Football Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Archery Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Archery Trophies
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-12 col-md-3">
                            <ul>
                              <li>
                                <a href={`/product`}>Art Trophies</a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Athletics Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Attendance Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Badminton Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Badminton Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Baseball Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Basketball Trophies
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-12 col-md-3">
                            <ul>
                              <li>
                                <a href={`/product`}>
                                  Beach Volleyball Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Beauty Pageant Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Bodybuilding Trophies
                                </a>
                              </li>
                              <a href={`/product`}></a>
                              <li>
                                <a href={`/product`} />
                                <a href={`/product`}>
                                  Booby Prize Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>Bowls Trophies</a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Boxing Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  British Trophies
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-12 col-md-3">
                            <ul style={{ borderRight: 0 }}>
                              <li>
                                <a href={`/product`}>
                                  Canoeing &amp; Kayaking Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>Card Trophies</a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Carnival Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Cat Show Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Charity Fund Raising Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>Card Trophies</a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Carnival Trophies
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle active"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        Cup Trophies{" "}
                      </a>
                      {/* Mega Menu */}
                      <div className="dropdown-menu mega-menu">
                        <div className="row">
                          <div className="col-12 col-md-3">
                            <ul>
                              <li>
                                <a href={`/product`}>
                                  1st, 2nd &amp; 3rd Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Achievement Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Aeroplane Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Air Hockey Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  American Football Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Archery Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Archery Trophies
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-12 col-md-3">
                            <ul>
                              <li>
                                <a href={`/product`}>Art Trophies</a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Athletics Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Attendance Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Badminton Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Badminton Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Baseball Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Basketball Trophies
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-12 col-md-3">
                            <ul>
                              <li>
                                <a href={`/product`}>
                                  Beach Volleyball Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Beauty Pageant Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Bodybuilding Trophies
                                </a>
                              </li>
                              <a href={`/product`}></a>
                              <li>
                                <a href={`/product`} />
                                <a href={`/product`}>
                                  Booby Prize Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>Bowls Trophies</a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Boxing Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  British Trophies
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-12 col-md-3">
                            <ul style={{ borderRight: 0 }}>
                              <li>
                                <a href={`/product`}>
                                  Canoeing &amp; Kayaking Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>Card Trophies</a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Carnival Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Cat Show Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Charity Fund Raising Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>Card Trophies</a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Carnival Trophies
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle active"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        Other Awards{" "}
                      </a>
                      {/* Mega Menu */}
                      <div className="dropdown-menu mega-menu">
                        <div className="row">
                          <div className="col-12 col-md-3">
                            <ul>
                              <li>
                                <a href={`/product`}>
                                  1st, 2nd &amp; 3rd Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Achievement Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Aeroplane Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Air Hockey Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  American Football Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Archery Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Archery Trophies
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-12 col-md-3">
                            <ul>
                              <li>
                                <a href={`/product`}>Art Trophies</a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Athletics Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Attendance Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Badminton Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Badminton Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Baseball Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Basketball Trophies
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-12 col-md-3">
                            <ul>
                              <li>
                                <a href={`/product`}>
                                  Beach Volleyball Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Beauty Pageant Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Bodybuilding Trophies
                                </a>
                              </li>
                              <a href={`/product`}></a>
                              <li>
                                <a href={`/product`} />
                                <a href={`/product`}>
                                  Booby Prize Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>Bowls Trophies</a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Boxing Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  British Trophies
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-12 col-md-3">
                            <ul style={{ borderRight: 0 }}>
                              <li>
                                <a href={`/product`}>
                                  Canoeing &amp; Kayaking Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>Card Trophies</a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Carnival Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Cat Show Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Charity Fund Raising Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>Card Trophies</a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Carnival Trophies
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle active"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        Custom Awards{" "}
                      </a>
                      {/* Mega Menu */}
                      <div className="dropdown-menu mega-menu">
                        <div className="row">
                          <div className="col-12 col-md-3">
                            <ul>
                              <li>
                                <a href={`/product`}>
                                  1st, 2nd &amp; 3rd Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Achievement Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Aeroplane Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Air Hockey Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  American Football Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Archery Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Archery Trophies
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-12 col-md-3">
                            <ul>
                              <li>
                                <a href={`/product`}>Art Trophies</a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Athletics Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Attendance Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Badminton Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Badminton Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Baseball Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Basketball Trophies
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-12 col-md-3">
                            <ul>
                              <li>
                                <a href={`/product`}>
                                  Beach Volleyball Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Beauty Pageant Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Bodybuilding Trophies
                                </a>
                              </li>
                              <a href={`/product`}></a>
                              <li>
                                <a href={`/product`} />
                                <a href={`/product`}>
                                  Booby Prize Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>Bowls Trophies</a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Boxing Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  British Trophies
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-12 col-md-3">
                            <ul style={{ borderRight: 0 }}>
                              <li>
                                <a href={`/product`}>
                                  Canoeing &amp; Kayaking Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>Card Trophies</a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Carnival Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Cat Show Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Charity Fund Raising Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>Card Trophies</a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Carnival Trophies
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle active"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        Custom Medals{" "}
                      </a>
                      {/* Mega Menu */}
                      <div className="dropdown-menu mega-menu">
                        <div className="row">
                          <div className="col-12 col-md-3">
                            <ul>
                              <li>
                                <a href={`/product`}>
                                  1st, 2nd &amp; 3rd Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Achievement Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Aeroplane Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Air Hockey Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  American Football Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Archery Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Archery Trophies
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-12 col-md-3">
                            <ul>
                              <li>
                                <a href={`/product`}>Art Trophies</a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Athletics Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Attendance Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Badminton Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Badminton Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Baseball Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Basketball Trophies
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-12 col-md-3">
                            <ul>
                              <li>
                                <a href={`/product`}>
                                  Beach Volleyball Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Beauty Pageant Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Bodybuilding Trophies
                                </a>
                              </li>
                              <a href={`/product`}></a>
                              <li>
                                <a href={`/product`} />
                                <a href={`/product`}>
                                  Booby Prize Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>Bowls Trophies</a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Boxing Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  British Trophies
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-12 col-md-3">
                            <ul style={{ borderRight: 0 }}>
                              <li>
                                <a href={`/product`}>
                                  Canoeing &amp; Kayaking Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>Card Trophies</a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Carnival Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Cat Show Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Charity Fund Raising Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>Card Trophies</a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Carnival Trophies
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle active"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        Occassions{" "}
                      </a>
                      {/* Mega Menu */}
                      <div className="dropdown-menu mega-menu">
                        <div className="row">
                          <div className="col-12 col-md-3">
                            <ul>
                              <li>
                                <a href={`/product`}>
                                  1st, 2nd &amp; 3rd Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Achievement Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Aeroplane Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Air Hockey Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  American Football Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Archery Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Archery Trophies
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-12 col-md-3">
                            <ul>
                              <li>
                                <a href={`/product`}>Art Trophies</a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Athletics Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Attendance Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Badminton Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Badminton Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Baseball Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Basketball Trophies
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-12 col-md-3">
                            <ul>
                              <li>
                                <a href={`/product`}>
                                  Beach Volleyball Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Beauty Pageant Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Bodybuilding Trophies
                                </a>
                              </li>
                              <a href={`/product`}></a>
                              <li>
                                <a href={`/product`} />
                                <a href={`/product`}>
                                  Booby Prize Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>Bowls Trophies</a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Boxing Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  British Trophies
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-12 col-md-3">
                            <ul style={{ borderRight: 0 }}>
                              <li>
                                <a href={`/product`}>
                                  Canoeing &amp; Kayaking Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>Card Trophies</a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Carnival Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Cat Show Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Charity Fund Raising Trophies
                                </a>
                              </li>
                              <li>
                                <a href={`/product`}>Card Trophies</a>
                              </li>
                              <li>
                                <a href={`/product`}>
                                  Carnival Trophies
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-menu">
        <nav className="navbar fixed-top">
          <div className="container">
            <div
              className="offcanvas offcanvas-end"
              tabIndex={-1}
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  <img
                    src="/assets/images/logo.png"
                    style={{ width: 50 }}
                    alt=""
                  />
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                />
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle active"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      Trophies{" "}
                    </a>
                    {/* Mega Menu */}
                    <div className="dropdown-menu mega-menu">
                      <div className="row">
                        <div className="col-12 col-md-12">
                          <ul>
                            <li>
                              <a href={`/product`}>
                                1st, 2nd &amp; 3rd Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Achievement Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Aeroplane Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Air Hockey Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                American Football Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>Archery Trophies</a>
                            </li>
                            <li>
                              <a href={`/product`}>Archery Trophies</a>
                            </li>
                            <li>
                              <a href={`/product`}>Art Trophies</a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Athletics Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Attendance Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Badminton Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Badminton Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Baseball Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Basketball Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Beach Volleyball Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Beauty Pageant Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Bodybuilding Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Booby Prize Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>Bowls Trophies</a>
                            </li>
                            <li>
                              <a href={`/product`}>Boxing Trophies</a>
                            </li>
                            <li>
                              <a href={`/product`}>British Trophies</a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Canoeing &amp; Kayaking Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>Card Trophies</a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Carnival Trophies
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle active"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      Medals{" "}
                    </a>
                    {/* Mega Menu */}
                    <div className="dropdown-menu mega-menu">
                      <div className="row">
                        <div className="col-12 col-md-12">
                          <ul>
                            <li>
                              <a href={`/product`}>
                                1st, 2nd &amp; 3rd Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Achievement Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Aeroplane Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Air Hockey Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                American Football Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>Archery Trophies</a>
                            </li>
                            <li>
                              <a href={`/product`}>Archery Trophies</a>
                            </li>
                            <li>
                              <a href={`/product`}>Art Trophies</a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Athletics Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Attendance Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Badminton Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Badminton Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Baseball Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Basketball Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Beach Volleyball Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Beauty Pageant Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Bodybuilding Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Booby Prize Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>Bowls Trophies</a>
                            </li>
                            <li>
                              <a href={`/product`}>Boxing Trophies</a>
                            </li>
                            <li>
                              <a href={`/product`}>British Trophies</a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Canoeing &amp; Kayaking Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>Card Trophies</a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Carnival Trophies
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle active"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      Crystal Awards
                    </a>
                    {/* Mega Menu */}
                    <div className="dropdown-menu mega-menu">
                      <div className="row">
                        <div className="col-12 col-md-12">
                          <ul>
                            <li>
                              <a href={`/product`}>
                                1st, 2nd &amp; 3rd Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Achievement Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Aeroplane Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Air Hockey Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                American Football Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>Archery Trophies</a>
                            </li>
                            <li>
                              <a href={`/product`}>Archery Trophies</a>
                            </li>
                            <li>
                              <a href={`/product`}>Art Trophies</a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Athletics Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Attendance Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Badminton Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Badminton Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Baseball Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Basketball Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Beach Volleyball Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Beauty Pageant Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Bodybuilding Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Booby Prize Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>Bowls Trophies</a>
                            </li>
                            <li>
                              <a href={`/product`}>Boxing Trophies</a>
                            </li>
                            <li>
                              <a href={`/product`}>British Trophies</a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Canoeing &amp; Kayaking Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>Card Trophies</a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Carnival Trophies
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle active"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      Sheilds &amp; Plaques
                    </a>
                    {/* Mega Menu */}
                    <div className="dropdown-menu mega-menu">
                      <div className="row">
                        <div className="col-12 col-md-12">
                          <ul>
                            <li>
                              <a href={`/product`}>
                                1st, 2nd &amp; 3rd Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Achievement Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Aeroplane Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Air Hockey Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                American Football Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>Archery Trophies</a>
                            </li>
                            <li>
                              <a href={`/product`}>Archery Trophies</a>
                            </li>
                            <li>
                              <a href={`/product`}>Art Trophies</a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Athletics Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Attendance Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Badminton Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Badminton Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Baseball Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Basketball Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Beach Volleyball Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Beauty Pageant Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Bodybuilding Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Booby Prize Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>Bowls Trophies</a>
                            </li>
                            <li>
                              <a href={`/product`}>Boxing Trophies</a>
                            </li>
                            <li>
                              <a href={`/product`}>British Trophies</a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Canoeing &amp; Kayaking Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>Card Trophies</a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Carnival Trophies
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle active"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      Cup Trophies{" "}
                    </a>
                    {/* Mega Menu */}
                    <div className="dropdown-menu mega-menu">
                      <div className="row">
                        <div className="col-12 col-md-12">
                          <ul>
                            <li>
                              <a href={`/product`}>
                                1st, 2nd &amp; 3rd Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Achievement Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Aeroplane Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Air Hockey Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                American Football Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>Archery Trophies</a>
                            </li>
                            <li>
                              <a href={`/product`}>Archery Trophies</a>
                            </li>
                            <li>
                              <a href={`/product`}>Art Trophies</a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Athletics Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Attendance Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Badminton Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Badminton Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Baseball Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Basketball Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Beach Volleyball Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Beauty Pageant Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Bodybuilding Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Booby Prize Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>Bowls Trophies</a>
                            </li>
                            <li>
                              <a href={`/product`}>Boxing Trophies</a>
                            </li>
                            <li>
                              <a href={`/product`}>British Trophies</a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Canoeing &amp; Kayaking Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>Card Trophies</a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Carnival Trophies
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle active"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      Other Awards{" "}
                    </a>
                    {/* Mega Menu */}
                    <div className="dropdown-menu mega-menu">
                      <div className="row">
                        <div className="col-12 col-md-12">
                          <ul>
                            <li>
                              <a href={`/product`}>
                                1st, 2nd &amp; 3rd Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Achievement Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Aeroplane Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Air Hockey Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                American Football Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>Archery Trophies</a>
                            </li>
                            <li>
                              <a href={`/product`}>Archery Trophies</a>
                            </li>
                            <li>
                              <a href={`/product`}>Art Trophies</a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Athletics Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Attendance Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Badminton Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Badminton Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Baseball Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Basketball Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Beach Volleyball Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Beauty Pageant Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Bodybuilding Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Booby Prize Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>Bowls Trophies</a>
                            </li>
                            <li>
                              <a href={`/product`}>Boxing Trophies</a>
                            </li>
                            <li>
                              <a href={`/product`}>British Trophies</a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Canoeing &amp; Kayaking Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>Card Trophies</a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Carnival Trophies
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle active"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      Custom Awards{" "}
                    </a>
                    {/* Mega Menu */}
                    <div className="dropdown-menu mega-menu">
                      <div className="row">
                        <div className="col-12 col-md-12">
                          <ul>
                            <li>
                              <a href={`/product`}>
                                1st, 2nd &amp; 3rd Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Achievement Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Aeroplane Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Air Hockey Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                American Football Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>Archery Trophies</a>
                            </li>
                            <li>
                              <a href={`/product`}>Archery Trophies</a>
                            </li>
                            <li>
                              <a href={`/product`}>Art Trophies</a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Athletics Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Attendance Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Badminton Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Badminton Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Baseball Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Basketball Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Beach Volleyball Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Beauty Pageant Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Bodybuilding Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Booby Prize Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>Bowls Trophies</a>
                            </li>
                            <li>
                              <a href={`/product`}>Boxing Trophies</a>
                            </li>
                            <li>
                              <a href={`/product`}>British Trophies</a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Canoeing &amp; Kayaking Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>Card Trophies</a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Carnival Trophies
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle active"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      Custom Medals{" "}
                    </a>
                    {/* Mega Menu */}
                    <div className="dropdown-menu mega-menu">
                      <div className="row">
                        <div className="col-12 col-md-12">
                          <ul>
                            <li>
                              <a href={`/product`}>
                                1st, 2nd &amp; 3rd Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Achievement Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Aeroplane Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Air Hockey Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                American Football Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>Archery Trophies</a>
                            </li>
                            <li>
                              <a href={`/product`}>Archery Trophies</a>
                            </li>
                            <li>
                              <a href={`/product`}>Art Trophies</a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Athletics Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Attendance Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Badminton Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Badminton Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Baseball Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Basketball Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Beach Volleyball Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Beauty Pageant Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Bodybuilding Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Booby Prize Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>Bowls Trophies</a>
                            </li>
                            <li>
                              <a href={`/product`}>Boxing Trophies</a>
                            </li>
                            <li>
                              <a href={`/product`}>British Trophies</a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Canoeing &amp; Kayaking Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>Card Trophies</a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Carnival Trophies
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle active"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      Occassions{" "}
                    </a>
                    {/* Mega Menu */}
                    <div className="dropdown-menu mega-menu">
                      <div className="row">
                        <div className="col-12 col-md-12">
                          <ul>
                            <li>
                              <a href={`/product`}>
                                1st, 2nd &amp; 3rd Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Achievement Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Aeroplane Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Air Hockey Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                American Football Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>Archery Trophies</a>
                            </li>
                            <li>
                              <a href={`/product`}>Archery Trophies</a>
                            </li>
                            <li>
                              <a href={`/product`}>Art Trophies</a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Athletics Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Attendance Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Badminton Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Badminton Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Baseball Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Basketball Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Beach Volleyball Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Beauty Pageant Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Bodybuilding Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Booby Prize Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>Bowls Trophies</a>
                            </li>
                            <li>
                              <a href={`/product`}>Boxing Trophies</a>
                            </li>
                            <li>
                              <a href={`/product`}>British Trophies</a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Canoeing &amp; Kayaking Trophies
                              </a>
                            </li>
                            <li>
                              <a href={`/product`}>Card Trophies</a>
                            </li>
                            <li>
                              <a href={`/product`}>
                                Carnival Trophies
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
