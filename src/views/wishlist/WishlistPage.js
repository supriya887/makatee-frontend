"use client";

import Layout1 from "@/components/layout/Layout1";
import { toggleWishlist } from "@/store/slices/wishlist-slice";
import { useRouter } from "next/navigation";
import React from "react";
import {
  IoCartOutline,
  IoCloseCircleOutline,
  IoHeartSharp,
} from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

function WishlistPage() {
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { access_token } = useSelector((state) => state.user);
  const router = useRouter();
  const dispatch = useDispatch();
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
                      Wishlist
                    </li>
                  </ol>
                </nav>
              </div>
               </div>
        
          </div>
        </div>
      </section>
      <section className="wishlist-page ">
        <div className="container section-space">
          <div className="row ">
            <div className="col-12">
             
              <div className="items-total">
                <strong>My Wishlist</strong>- {wishlistItems?.length} items
              </div>
            </div>
            <div className="col-12 product-list">
              {wishlistItems?.length > 0 ? (
                <div className="row">
                  {wishlistItems?.map((el, eindex) => {
                    return (
                      <div
                        key={eindex}
                        className="showcase-outer col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6"
                          // className="col-md-3 col-6 col-lg-2 mb-3"
                      >
                        <div className="close">
                          <a
                            onClick={() => {
                              access_token
                                ? dispatch(
                                    toggleWishlist({
                                      productId: el?.product_id,
                                      productVariantId: el?.product_variant_id,
                                    })
                                  )
                                : router.push("/loginreturnUrl=wishlist");
                            }}
                          >
                            {/* <ion-icon name="close-circle-outline" /> */}
                            <IoCloseCircleOutline size={25} color="#4f4f4f" />
                          </a>
                        </div>
                        <div className="showcase-card">
                          <div className="showcase-top">
                            {/* <div class="free-logo">Free Logo</div> */}
                            <div className="showcase-img">
                              <a className="heart-img active active">
                                {/* <ion-icon name="heart-sharp" /> */}
                                <IoHeartSharp />
                              </a>
                              <a
                                href={`/product/${el?.variant?.product?.slug}/${el?.variant?.slug}`}
                              >
                                <img
                                  src={el?.variant?.image_path}
                                  className="img-fluid"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                          <div className="product-info">
                            <p>{el?.variant?.product?.product_name}</p>
                            <div className="stock">
                              {el?.variant?.stock > 1
                                ? `In Stock`
                                : `Out of Stock`}
                            </div>
                            <div
                              className="product-price"
                              style={{ justifyContent: "space-between" }}
                            >
                              <div className="product-amt">
                                {el?.variant?.price ? (
                                  <>
                                    <div className="product-amt" />
                                    {el?.variant?.price !=
                                    el?.variant?.saleprice ? (
                                      <span className="slash-price">
                                        ₹ {el?.variant?.price}
                                      </span>
                                    ) : null}
                                    ₹ {el?.variant?.saleprice}
                                  </>
                                ) : null}
                              </div>
                              {/* <a href={`/cart`} className="common-btn">
                                <IoCartOutline /> Buy{" "}
                              </a> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p>Your wishlist is currently empty.</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout1>
  );
}

export default WishlistPage;
