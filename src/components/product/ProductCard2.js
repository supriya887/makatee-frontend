import { TROPHY_HOME_ROUTE, UNIFORM_HOME_ROUTE } from "@/utils/constants";
import React from "react";
import { IoCartOutline, IoHeartOutline } from "react-icons/io5";

function ProductCard2({ categoryType }) {
  return (
    <div className="showcase-card">
      <div className="showcase-top">
        <div className="showcase-img">
          <a href="/wishlist" className="heart-img">
            {/* <ion-icon name="heart-outline" /> */}
            <IoHeartOutline />
          </a>
          <a href={`/product/details`}>
            {categoryType == UNIFORM_HOME_ROUTE ? (
              <img
                src="/assets/images/category/uniforms/uniform-img.png"
                className="img-fluid"
                alt=""
              />
            ) : null}
            {categoryType == TROPHY_HOME_ROUTE ? (
              <img
                src="/assets/images/category/trophies/trophy-img.png"
                className="img-fluid"
                alt=""
              />
            ) : null}
          </a>
        </div>
      </div>
      <div className="product-info">
        <a href={`/product/details`}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          <div className="stock">In Stock</div>
        </a>
        <div
          className="product-price"
          style={{ justifyContent: "space-between" }}
        >
          <div className="product-amt">
            <span className="slash-price">₹ 459</span> ₹ 199
          </div>
          <a href="/cart" className="common-btn">
            <IoCartOutline size={20} /> Buy
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductCard2;
