
import React from "react";
import { IoCartOutline, IoHeartOutline } from "react-icons/io5";

function ProductCard1({ details }) {
  return (
    <div className="showcase-card">
      <div className="showcase-top">
        <div className="showcase-img">
          <a href="/wishlist" className="heart-img">
            {/* <ion-icon name="heart-outline" /> */}
            <IoHeartOutline />
          </a>
          <a href={`/product/${details?.slug}`}>
            <img src={details?.image_path} className="img-fluid" alt="" />
          </a>
        </div>
      </div>
      <div className="product-info">
        <a href={`/product/${details?.slug}`}>
          <p>{details?.product_name}</p>
          <div className="stock">In Stock</div>
        </a>
        <div
          className="product-price"
          style={{ justifyContent: "space-between" }}
        >
          <div className="product-amt">
            <div className="product-amt" />
            {details?.variants?.[0]?.discount < 1 ? (
              <>{details?.variants?.[0]?.price}</>
            ) : (
              <>
                <span className="slash-price">₹ {details?.variants?.[0]?.price}</span> ₹ {details?.variants?.[0]?.saleprice}
              </>
            )}
          </div>
          <a href="/cart" className="common-btn">
            <IoCartOutline size={20} /> Buy
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductCard1;
