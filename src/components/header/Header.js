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
import { useRouter, useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";
import MenuContainerSection from "./MenuContainerSection";

function Header({ categoryMenu, categoryList }) {
  const { contactus_details } = useSelector((state) => state.app);
  const { access_token } = useSelector((state) => state.user);
  const { wishlistItems } = useSelector((state) => state.wishlist);

  const searchParams = useSearchParams();

  const urlParams = new URLSearchParams(searchParams);

  const [category, setCategory] = useState(urlParams?.get("category") || "");
  const [searchTerm, setSearchTerm] = useState(
    urlParams?.get("search_term") || ""
  );

  const cartData = useSelector((state) => state.cart);
  const cart = cartData?.cart || {};

  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();

    const term = searchTerm?.trim();

    if (term) {
      router.push(`/search?category=${category}&search_term=${term}`);
    } else {
      // Optional fallback
      router.push(`/search?category=${category}`);
    }
  };

  return (
    <header>
      <div className="container position-relative">
        <div className="headerbox">
          <div className="row">
            <div className="col-3 col-sm-3">
              <a className="navbar-brand" href="/">
                <img src="/assets/images/logo.png" alt="" />{" "}
              </a>
            </div>
            <div className="col-9 col-sm-9">
              <div className="main-header">
                <div className="right-contact-box">
                  <div className="d-none d-xl-block">
                    <div className="search-box">
                      <div className="top-search">
                        <form onSubmit={handleSearch}>
                          <div className="inner-form">
                            <div className="input-field first-wrap">
                              <div className="input-select custom-select">
                                <select
                                  onChange={(e) => setCategory(e.target.value)}
                                  value={category}
                                  name="choices-single-default"
                                  className="select-trigger"
                                >
                                  <option value="">SHOP BY CATEGORIES</option>
                                  <option value="trophy">TROPHY</option>
                                  <option value="uniform">UNIFORM</option>

                                  {/* <option>Ladies</option>
                                  <option>Men</option>
                                  <option>Clothing</option>
                                  <option>Footwear</option>
                                  <option>Accessories</option> */}
                                </select>
                              </div>
                            </div>

                            <div className="input-field second-wrap">
                              <input
                                id="search"
                                type="text"
                                value={searchTerm}
                                placeholder="Search Products..."
                                onChange={(e) => setSearchTerm(e.target.value)}
                              />
                            </div>
                            {searchTerm && (
                              <button
                                type="button"
                                onClick={(e) => {
                                  setSearchTerm("");
                                  router.push(
                                    `/search?category=${category}&search_term=${""}`
                                  );
                                }}
                                className="btn-close"
                              ></button>
                            )}
                            <div className="input-field third-wrap">
                              <button className="btn-search" type="submit">
                                <IoSearch />
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="mobile-search">
                      <div
                        className="icon"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                      >
                        <ion-icon name="search-outline"></ion-icon>
                      </div>
                    </div>
                  </div>
                  <div className="top-links call-btn d-none">
                    <div className="icon">
                      <IoCallOutline />
                      {/* <ion-icon name="call-outline" /> */}
                    </div>
                    {/* <a href="tel:919819207803">
                      <div className="call-box-content">
                        <small>Need Help?</small>
                        <br />
                        {contactus_details.mobile}
                      </div>
                    </a> */}
                  </div>
                  <div className="top-links">
                    <ul>
                      <li className="login-btn">
                        <div
                          onClick={() =>
                            access_token && router.push(`/dashboard`)
                          }
                          className={!access_token ? "dropdown" : null}
                        >
                          <a
                            href="#"
                            className="dropdown-toggle"
                            data-bs-toggle={!access_token ? "dropdown" : null}
                          >
                            <div className="icon user-icon">
                              {/* <ion-icon name="person-outline" /> */}
                              <IoPersonOutline />
                            </div>
                          </a>
                          <div className={`dropdown-menu dropdown-menu-right`}>
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
                            <div className="cart-item-counter">
                              {wishlistItems?.length || "0"}
                            </div>
                            {/* <ion-icon name="heart-outline" /> */}
                            <IoHeartOutline />
                          </div>
                        </a>
                      </li>
                      <li className="cart-btn">
                        <div className="dropdown">
                          <a
                            href="/cart"
                            className="dropdown-toggle"
                            data-bs-toggle=""
                          >
                            <div className="icon">
                              <div className="cart-item-counter">
                                {cart?.item_list?.length || 0}
                              </div>
                              {/* <ion-icon name="cart-outline" /> */}
                              <IoCartOutline />
                            </div>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <ul className="shopping-cart-popup">
                              <h5>Your Cart</h5>

                              {cart?.item_list?.length > 0 ? (
                                <>
                                  {cart?.item_list?.map((el, i) => {
                                    return (
                                      <li key={i} className="clearfix">
                                        <div className="row">
                                          <div className="col-3">
                                            <img
                                              src={el?.variant?.image_path}
                                              alt=""
                                              className="img-fluid"
                                            />
                                          </div>
                                          <div className="col-5">
                                            <div>
                                              <span className="item-name">
                                                {
                                                  el?.variant?.product
                                                    ?.product_name
                                                }
                                              </span>
                                              <span className="item-quantity">
                                                Quantity: {el?.qty}
                                              </span>
                                            </div>
                                          </div>
                                          <div className="col-4">
                                            {" "}
                                            <span className="item-price">
                                              ₹ {el?.total_price}
                                            </span>
                                          </div>
                                        </div>
                                      </li>
                                    );
                                  })}

                                  {access_token ? (
                                    <div className="d-flex gap-2">
                                      <a
                                        href="/cart"
                                        className="common-btn common-btn-purple"
                                      >
                                        Cart
                                      </a>
                                      <a
                                        href="/checkout"
                                        className="common-btn common-btn-purple"
                                      >
                                        Checkout
                                      </a>
                                    </div>
                                  ) : (
                                    <a
                                      href="/login"
                                      className="common-btn common-btn-purple"
                                    >
                                      Login
                                    </a>
                                  )}
                                </>
                              ) : (
                                <p>Your cart is currently empty.</p>
                              )}
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
                  {!categoryMenu && (
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasMenuSection"
                      aria-controls="offcanvasMenuSection"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon" />
                    </button>
                  )}
                </div>
                {categoryMenu ? (
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
                ) : null}
              </div>
            </div>
          </div>
          <div className="col-12 d-block d-xl-none"></div>
        </div>
      </div>
      {/* {menuCategories?.length > 0 && (
        <MenuContainerDesktop category={menuCategories || []} />
      )}
      {menuCategories?.length > 0 && (
        <MenuContainerMobile category={menuCategories || []} />
      )} */}

      {!categoryMenu ? <MenuContainerSection /> : null}
      {categoryList?.length > 0 && (
        <MenuContainerDesktop category={categoryList || []} />
      )}
      {categoryList?.length > 0 && (
        <MenuContainerMobile category={categoryList || []} />
      )}
    </header>
  );
}

export default Header;
