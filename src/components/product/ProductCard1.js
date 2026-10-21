"use client";

import { toggleWishlist } from "@/store/slices/wishlist-slice";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoCartOutline, IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

function ProductCard1({ details }) {
  const dispatch = useDispatch();
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { access_token } = useSelector((state) => state.user);
  const router = useRouter();

  return (
    <div className="showcase-card">
      <div className="showcase-top">
        <div className="showcase-img">
          <a
            onClick={() =>
              access_token
                ? dispatch(
                    toggleWishlist({
                      productId: details?.variants?.[0]?.product_id,
                      productVariantId: details?.variants?.[0]?.id,
                    })
                  )
                : router.push(`/login`)
            }
            className={
              wishlistItems.find(
                (item) => item?.product_variant_id == details?.variants?.[0]?.id
              )
                ? "heart-img active active"
                : "heart-img"
            }
          >
            {wishlistItems.find(
              (item) => item?.product_variant_id == details?.variants?.[0]?.id
            ) ? (
              <IoHeartSharp />
            ) : (
              <IoHeartOutline />
            )}
          </a>
          <a href={`/product/${details?.slug}/${details?.variants?.[0]?.slug}`}>
            <img
              src={details?.variants?.[0]?.image_path}
              className="img-fluid"
              alt=""
            />
          </a>
        </div>
      </div>
      <div className="product-info">
        <a href={`/product/${details?.slug}`}>
          <p>{details?.product_name}</p>
          {details?.variants?.[0]?.stock > 0 ? (
            <div className="stock">In Stock </div>
          ) : (
            <div className="outofstock">Out of Stock</div>
          )}
        </a>
        <div
          className="product-price"
          style={{ justifyContent: "space-between" }}
        >
          {details?.variants?.[0]?.price ? (
            <div className="product-amt">
              <div className="product-amt" />
              {details?.variants?.[0]?.discount < 1 ? (
                <> ₹ {details?.variants?.[0]?.price}</>
              ) : (
                <>
                  <span className="slash-price">
                    ₹ {details?.variants?.[0]?.price}
                  </span>{" "}
                  ₹ {details?.variants?.[0]?.saleprice}
                </>
              )}
            </div>
          ) : null}
          {/* <a href="/cart" className="common-btn">
            <IoCartOutline size={20} /> Buy
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default ProductCard1;
