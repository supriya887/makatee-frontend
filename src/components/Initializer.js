"use client";

import { getContactUsDetailApi, menuCategoryApi } from "@/api";
import { setContactUsDetails } from "@/store/slices/app-slice";
import { fetchCart, fetchCartToken } from "@/store/slices/cart-slice";
import { setMenuCategories } from "@/store/slices/category-slice";
import { fetchWishlist } from "@/store/slices/wishlist-slice";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  IoLogoWhatsapp,
  IoPhonePortraitOutline,
  IoSearch,
} from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

function Initializer({ children }) {
  const dispatch = useDispatch();
  const app = useSelector((state) => state.app);

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

  useEffect(() => {
    async function init() {
      await getCartToken();
      await getCart();
      getWishlist();
      getMainCategoryList();
      getContactUsDetails();
    }

    init();
  }, []);

  const getCartToken = async () => {
    dispatch(fetchCartToken());
  };

  const getWishlist = async () => {
    const token = localStorage.getItem("makatee-access-token");
    token && dispatch(fetchWishlist());
  };

  const getMainCategoryList = async () => {
    let res = await menuCategoryApi({});

    if (res?.status == 1) {
      dispatch(setMenuCategories(res?.data || []));
    }
  };

  const getContactUsDetails = async () => {
    const res = await getContactUsDetailApi();
    if (res?.status == 1) {
      dispatch(setContactUsDetails(res?.data || []));
    }
  };

  const getCart = async () => {
    dispatch(fetchCart());
  };

  const initAOS = () => {
    if (window.AOS) {
      window.AOS.init({
        duration: 1000,
        once: true,
      });

      setTimeout(() => {
        window.AOS.refresh(); // Ensure it catches dynamically added elements
      }, 100); // wait for content like Swiper to fully render
    }
  };

  return (
    <>
      {children}
      {/* <div className="download-app">
        <a className="icon" href="">
          <IoPhonePortraitOutline color="white" />
        </a>
      </div> */}
      <div className="whatsapp-btn ">
        <a
          href={`https://api.whatsapp.com/send?phone=${app?.contactus_details?.whatsapp_no?.replace(/\D/g, "")}`}
          className="whatsapp-button "
          target="_blank"
        >
          <IoLogoWhatsapp size={24} color="white" />
        </a>
      </div>

      <div
        className="modal fade search-modal"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="input-field second-wrap">
                <div className="top-search ">
                  <form onSubmit={handleSearch}>
                    <div className="inner-form">
                      <div className="input-field first-wrap">
                        <div className="input-select">
                          <select
                            onChange={(e) => setCategory(e.target.value)}
                            value={category}
                            name="choices-single-default"
                          >
                            <option value="">All Categories</option>
                            <option value={"trophy"}>Trophy</option>
                            <option value={"uniform"}>Uniform</option>
                          </select>
                        </div>
                      </div>
                      <div className="d-flex w-100">
                        <div className="input-field second-wrap">
                          <input
                            id="search"
                            type="text"
                            value={searchTerm}
                            placeholder="Search for items..."
                            onChange={(e) => setSearchTerm(e.target.value)}
                          />
                        </div>
                        {searchTerm && (
                          <button
                            type="button"
                            style={{ fontSize: "larger" }}
                            onClick={(e) => {
                              setSearchTerm("");
                              router.push(
                                `/search?category=${category}&search_term=${""}`
                              );
                            }}
                          >
                            x
                          </button>
                        )}

                        <div className="input-field third-wrap">
                          <button
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            className="btn-search top-search-mobile"
                            type="submit"
                          >
                            <IoSearch color="white" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Initializer;
