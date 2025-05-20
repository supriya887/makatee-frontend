"use client";

import Layout1 from "@/components/layout/Layout1";
import React from "react";
import {
  IoCartOutline,
  IoCloseCircleOutline,
  IoHeartSharp,
} from "react-icons/io5";

function WishlistPage() {
  return (
    <Layout1>
      <section className="wishlist-page ">
        <div className="container section-space pt-0">
          <div className="row ">
            <div className="col-12">
              <div className="breadcrumb-box">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Wishlist
                    </li>
                  </ol>
                </nav>
              </div>
              <div className="items-total">
                <strong>My Wishlist</strong>- 104 items
              </div>
            </div>
            <div className="col-12 product-list">
              <div className="row">
                <div className="showcase-outer col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                  <div className="close">
                    <a href="">
                      {/* <ion-icon name="close-circle-outline" /> */}
                      <IoCloseCircleOutline size={25} color="#cccccc" />
                    </a>
                  </div>
                  <div className="showcase-card">
                    <div className="showcase-top">
                      {/* <div class="free-logo">Free Logo</div> */}
                      <div className="showcase-img">
                        <a href="/wishlist" className="heart-img active active">
                          {/* <ion-icon name="heart-sharp" /> */}
                          <IoHeartSharp />
                        </a>
                        <img
                          src="/assets/images/category/trophies/product-img/3.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="product-info">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                      </p>
                      <div className="stock">In Stock</div>
                      <div
                        className="product-price"
                        style={{ justifyContent: "space-between" }}
                      >
                        <div className="product-amt">
                          <div className="product-amt" />
                          <span className="slash-price">₹ 459</span>₹ 199
                        </div>
                        <a href={`/cart`} className="common-btn">
                          {/* <ion-icon name="cart-outline" /> */}
                          <IoCartOutline /> Buy{" "}
                        </a>
                      </div>
                    </div>
                    {/* <div class="showcase-overlay">
                              <div class="showcase-navigation">



                                  <a href={`/cart`} class="common-btn"><i class="bi bi-cart"></i> Move to Cart
                                  </a>
                                  <div></div>
                              </div>
                          </div> */}
                  </div>
                </div>
                <div className="showcase-outer col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                  <div className="close">
                    <a href="">
                      {/* <ion-icon name="close-circle-outline" /> */}
                      <IoCloseCircleOutline size={25} color="#cccccc" />
                    </a>
                  </div>
                  <div className="showcase-card">
                    <div className="showcase-top">
                      {/* <div class="free-logo">Free Logo</div> */}
                      <div className="showcase-img">
                        <a href="/wishlist" className="heart-img active">
                          {/* <ion-icon name="heart-sharp" /> */}
                          <IoHeartSharp />
                        </a>
                        <img
                          src="/assets/images/category/trophies/product-img/4.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="product-info">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                      </p>
                      <div className="stock">In Stock</div>
                      <div
                        className="product-price"
                        style={{ justifyContent: "space-between" }}
                      >
                        <div className="product-amt">
                          <div className="product-amt" />
                          <span className="slash-price">₹ 459</span>₹ 199
                        </div>
                        <a href={`/cart`} className="common-btn">
                          {/* <ion-icon name="cart-outline" /> */}
                          Buy{" "}
                        </a>
                      </div>
                    </div>
                    {/* <div class="showcase-overlay">
                              <div class="showcase-navigation">



                                  <a href={`/cart`} class="common-btn"><i class="bi bi-cart"></i> Move to Cart
                                  </a>
                                  <div></div>
                              </div>
                          </div> */}
                  </div>
                </div>
                <div className="showcase-outer col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                  <div className="close">
                    <a href="">
                      {/* <ion-icon name="close-circle-outline" /> */}
                      <IoCloseCircleOutline size={25} color="#cccccc" />
                    </a>
                  </div>
                  <div className="showcase-card">
                    <div className="showcase-top">
                      {/* <div class="free-logo">Free Logo</div> */}
                      <div className="showcase-img">
                        <a href="/wishlist" className="heart-img active">
                          {/* <ion-icon name="heart-sharp" /> */}
                          <IoHeartSharp />
                        </a>
                        <img
                          src="/assets/images/category/trophies/product-img/5.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="product-info">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                      </p>
                      <div className="stock">In Stock</div>
                      <div
                        className="product-price"
                        style={{ justifyContent: "space-between" }}
                      >
                        <div className="product-amt">
                          <div className="product-amt" />
                          <span className="slash-price">₹ 459</span>₹ 199
                        </div>
                        <a href={`/cart`} className="common-btn">
                          {/* <ion-icon name="cart-outline" /> */}
                          Buy{" "}
                        </a>
                      </div>
                    </div>
                    {/* <div class="showcase-overlay">
                              <div class="showcase-navigation">



                                  <a href={`/cart`} class="common-btn"><i class="bi bi-cart"></i> Move to Cart
                                  </a>
                                  <div></div>
                              </div>
                          </div> */}
                  </div>
                </div>
                <div className="showcase-outer col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                  <div className="close">
                    <a href="">
                      {/* <ion-icon name="close-circle-outline" /> */}
                      <IoCloseCircleOutline size={25} color="#cccccc" />
                    </a>
                  </div>
                  <div className="showcase-card">
                    <div className="showcase-top">
                      {/* <div class="free-logo">Free Logo</div> */}
                      <div className="showcase-img">
                        <a href="/wishlist" className="heart-img active">
                          {/* <ion-icon name="heart-sharp" /> */}
                          <IoHeartSharp />
                        </a>
                        <img
                          src="/assets/images/category/trophies/product-img/6.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="product-info">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                      </p>
                      <div className="stock">In Stock</div>
                      <div
                        className="product-price"
                        style={{ justifyContent: "space-between" }}
                      >
                        <div className="product-amt">
                          <div className="product-amt" />
                          <span className="slash-price">₹ 459</span>₹ 199
                        </div>
                        <a href={`/cart`} className="common-btn">
                          {/* <ion-icon name="cart-outline" /> */}
                          Buy{" "}
                        </a>
                      </div>
                    </div>
                    {/* <div class="showcase-overlay">
                              <div class="showcase-navigation">



                                  <a href={`/cart`} class="common-btn"><i class="bi bi-cart"></i> Move to Cart
                                  </a>
                                  <div></div>
                              </div>
                          </div> */}
                  </div>
                </div>
                <div className="showcase-outer col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                  <div className="close">
                    <a href="">
                      {/* <ion-icon name="close-circle-outline" /> */}
                      <IoCloseCircleOutline size={25} color="#cccccc" />
                    </a>
                  </div>
                  <div className="showcase-card">
                    <div className="showcase-top">
                      {/* <div class="free-logo">Free Logo</div> */}
                      <div className="showcase-img">
                        <a href="/wishlist" className="heart-img active">
                          {/* <ion-icon name="heart-sharp" /> */}
                          <IoHeartSharp />
                        </a>
                        <img
                          src="/assets/images/category/trophies/product-img/7.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="product-info">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                      </p>
                      <div className="stock">In Stock</div>
                      <div
                        className="product-price"
                        style={{ justifyContent: "space-between" }}
                      >
                        <div className="product-amt">
                          <div className="product-amt" />
                          <span className="slash-price">₹ 459</span>₹ 199
                        </div>
                        <a href={`/cart`} className="common-btn">
                          {/* <ion-icon name="cart-outline" /> */}
                          Buy{" "}
                        </a>
                      </div>
                    </div>
                    {/* <div class="showcase-overlay">
                              <div class="showcase-navigation">



                                  <a href={`/cart`} class="common-btn"><i class="bi bi-cart"></i> Move to Cart
                                  </a>
                                  <div></div>
                              </div>
                          </div> */}
                  </div>
                </div>
                <div className="showcase-outer col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                  <div className="close">
                    <a href="">
                      {/* <ion-icon name="close-circle-outline" /> */}
                      <IoCloseCircleOutline size={25} color="#cccccc" />
                    </a>
                  </div>
                  <div className="showcase-card">
                    <div className="showcase-top">
                      {/* <div class="free-logo">Free Logo</div> */}
                      <div className="showcase-img">
                        <a href="/wishlist" className="heart-img active">
                          {/* <ion-icon name="heart-sharp" /> */}
                          <IoHeartSharp />
                        </a>
                        <img
                          src="/assets/images/category/trophies/product-img/8.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="product-info">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                      </p>
                      <div className="stock">In Stock</div>
                      <div
                        className="product-price"
                        style={{ justifyContent: "space-between" }}
                      >
                        <div className="product-amt">
                          <div className="product-amt" />
                          <span className="slash-price">₹ 459</span>₹ 199
                        </div>
                        <a href={`/cart`} className="common-btn">
                          {/* <ion-icon name="cart-outline" /> */}
                          Buy{" "}
                        </a>
                      </div>
                    </div>
                    {/* <div class="showcase-overlay">
                              <div class="showcase-navigation">



                                  <a href={`/cart`} class="common-btn"><i class="bi bi-cart"></i> Move to Cart
                                  </a>
                                  <div></div>
                              </div>
                          </div> */}
                  </div>
                </div>
                <div className="showcase-outer col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                  <div className="close">
                    <a href="">
                      {/* <ion-icon name="close-circle-outline" /> */}
                      <IoCloseCircleOutline size={25} color="#cccccc" />
                    </a>
                  </div>
                  <div className="showcase-card">
                    <div className="showcase-top">
                      {/* <div class="free-logo">Free Logo</div> */}
                      <div className="showcase-img">
                        <a href="/wishlist" className="heart-img active">
                          {/* <ion-icon name="heart-sharp" /> */}
                          <IoHeartSharp />
                        </a>
                        <img
                          src="/assets/images/category/trophies/product-img/3.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="product-info">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                      </p>
                      <div className="stock">In Stock</div>
                      <div
                        className="product-price"
                        style={{ justifyContent: "space-between" }}
                      >
                        <div className="product-amt">
                          <div className="product-amt" />
                          <span className="slash-price">₹ 459</span>₹ 199
                        </div>
                        <a href={`/cart`} className="common-btn">
                          {/* <ion-icon name="cart-outline" /> */}
                          Buy{" "}
                        </a>
                      </div>
                    </div>
                    {/* <div class="showcase-overlay">
                              <div class="showcase-navigation">



                                  <a href={`/cart`} class="common-btn"><i class="bi bi-cart"></i> Move to Cart
                                  </a>
                                  <div></div>
                              </div>
                          </div> */}
                  </div>
                </div>
                <div className="showcase-outer col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                  <div className="close">
                    <a href="">
                      {/* <ion-icon name="close-circle-outline" /> */}
                      <IoCloseCircleOutline size={25} color="#cccccc" />
                    </a>
                  </div>
                  <div className="showcase-card">
                    <div className="showcase-top">
                      {/* <div class="free-logo">Free Logo</div> */}
                      <div className="showcase-img">
                        <a href="/wishlist" className="heart-img active">
                          {/* <ion-icon name="heart-sharp" /> */}
                          <IoHeartSharp />
                        </a>
                        <img
                          src="/assets/images/category/trophies/product-img/4.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="product-info">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                      </p>
                      <div className="stock">In Stock</div>
                      <div
                        className="product-price"
                        style={{ justifyContent: "space-between" }}
                      >
                        <div className="product-amt">
                          <div className="product-amt" />
                          <span className="slash-price">₹ 459</span>₹ 199
                        </div>
                        <a href={`/cart`} className="common-btn">
                          {/* <ion-icon name="cart-outline" /> */}
                          Buy{" "}
                        </a>
                      </div>
                    </div>
                    {/* <div class="showcase-overlay">
                              <div class="showcase-navigation">



                                  <a href={`/cart`} class="common-btn"><i class="bi bi-cart"></i> Move to Cart
                                  </a>
                                  <div></div>
                              </div>
                          </div> */}
                  </div>
                </div>
                <div className="showcase-outer col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                  <div className="close">
                    <a href="">
                      {/* <ion-icon name="close-circle-outline" /> */}
                      <IoCloseCircleOutline size={25} color="#cccccc" />
                    </a>
                  </div>
                  <div className="showcase-card">
                    <div className="showcase-top">
                      {/* <div class="free-logo">Free Logo</div> */}
                      <div className="showcase-img">
                        <a href="/wishlist" className="heart-img active">
                          {/* <ion-icon name="heart-sharp" /> */}
                          <IoHeartSharp />
                        </a>
                        <img
                          src="/assets/images/category/trophies/product-img/5.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="product-info">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                      </p>
                      <div className="stock">In Stock</div>
                      <div
                        className="product-price"
                        style={{ justifyContent: "space-between" }}
                      >
                        <div className="product-amt">
                          <div className="product-amt" />
                          <span className="slash-price">₹ 459</span>₹ 199
                        </div>
                        <a href={`/cart`} className="common-btn">
                          {/* <ion-icon name="cart-outline" /> */}
                          Buy{" "}
                        </a>
                      </div>
                    </div>
                    {/* <div class="showcase-overlay">
                              <div class="showcase-navigation">



                                  <a href={`/cart`} class="common-btn"><i class="bi bi-cart"></i> Move to Cart
                                  </a>
                                  <div></div>
                              </div>
                          </div> */}
                  </div>
                </div>
                <div className="showcase-outer col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                  <div className="close">
                    <a href="">
                      {/* <ion-icon name="close-circle-outline" /> */}
                      <IoCloseCircleOutline size={25} color="#cccccc" />
                    </a>
                  </div>
                  <div className="showcase-card">
                    <div className="showcase-top">
                      {/* <div class="free-logo">Free Logo</div> */}
                      <div className="showcase-img">
                        <a href="/wishlist" className="heart-img active">
                          {/* <ion-icon name="heart-sharp" /> */}
                          <IoHeartSharp />
                        </a>
                        <img
                          src="/assets/images/category/trophies/product-img/6.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="product-info">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                      </p>
                      <div className="stock">In Stock</div>
                      <div
                        className="product-price"
                        style={{ justifyContent: "space-between" }}
                      >
                        <div className="product-amt">
                          <div className="product-amt" />
                          <span className="slash-price">₹ 459</span>₹ 199
                        </div>
                        <a href={`/cart`} className="common-btn">
                          {/* <ion-icon name="cart-outline" /> */}
                          Buy{" "}
                        </a>
                      </div>
                    </div>
                    {/* <div class="showcase-overlay">
                              <div class="showcase-navigation">



                                  <a href={`/cart`} class="common-btn"><i class="bi bi-cart"></i> Move to Cart
                                  </a>
                                  <div></div>
                              </div>
                          </div> */}
                  </div>
                </div>
                <div className="showcase-outer col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                  <div className="close">
                    <a href="">
                      {/* <ion-icon name="close-circle-outline" /> */}
                      <IoCloseCircleOutline size={25} color="#cccccc" />
                    </a>
                  </div>
                  <div className="showcase-card">
                    <div className="showcase-top">
                      {/* <div class="free-logo">Free Logo</div> */}
                      <div className="showcase-img">
                        <a href="/wishlist" className="heart-img active">
                          {/* <ion-icon name="heart-sharp" /> */}
                          <IoHeartSharp />
                        </a>
                        <img
                          src="/assets/images/category/trophies/product-img/7.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="product-info">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                      </p>
                      <div className="stock">In Stock</div>
                      <div
                        className="product-price"
                        style={{ justifyContent: "space-between" }}
                      >
                        <div className="product-amt">
                          <div className="product-amt" />
                          <span className="slash-price">₹ 459</span>₹ 199
                        </div>
                        <a href={`/cart`} className="common-btn">
                          {/* <ion-icon name="cart-outline" /> */}
                          Buy{" "}
                        </a>
                      </div>
                    </div>
                    {/* <div class="showcase-overlay">
                              <div class="showcase-navigation">



                                  <a href={`/cart`} class="common-btn"><i class="bi bi-cart"></i> Move to Cart
                                  </a>
                                  <div></div>
                              </div>
                          </div> */}
                  </div>
                </div>
                <div className="showcase-outer col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                  <div className="close">
                    <a href="">
                      {/* <ion-icon name="close-circle-outline" /> */}
                      <IoCloseCircleOutline size={25} color="#cccccc" />
                    </a>
                  </div>
                  <div className="showcase-card">
                    <div className="showcase-top">
                      {/* <div class="free-logo">Free Logo</div> */}
                      <div className="showcase-img">
                        <a href="/wishlist" className="heart-img active">
                          {/* <ion-icon name="heart-sharp" /> */}
                          <IoHeartSharp />
                        </a>
                        <img
                          src="/assets/images/category/trophies/product-img/8.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="product-info">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                      </p>
                      <div className="stock">In Stock</div>
                      <div
                        className="product-price"
                        style={{ justifyContent: "space-between" }}
                      >
                        <div className="product-amt">
                          <div className="product-amt" />
                          <span className="slash-price">₹ 459</span>₹ 199
                        </div>
                        <a href={`/cart`} className="common-btn">
                          {/* <ion-icon name="cart-outline" /> */}
                          Buy{" "}
                        </a>
                      </div>
                    </div>
                    {/* <div class="showcase-overlay">
                              <div class="showcase-navigation">



                                  <a href={`/cart`} class="common-btn"><i class="bi bi-cart"></i> Move to Cart
                                  </a>
                                  <div></div>
                              </div>
                          </div> */}
                  </div>
                </div>
                {/* <div class="col-12">
                                      <div class="pagination-box">
                                          <nav aria-label="Page navigation example">
                                              <ul class="pagination justify-content-center">
                                                  <li class="page-item disabled">
                                                      <a class="page-link" href="#" tabindex="-1"
                                                          aria-disabled="true">Previous</a>
                                                  </li>
                                                  <li class="page-item"><a class="page-link" href="#">1</a></li>
                                                  <li class="page-item"><a class="page-link" href="#">2</a></li>
                                                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                                                  <li class="page-item">
                                                      <a class="page-link" href="#">Next</a>
                                                  </li>
                                              </ul>
                                          </nav>
                                      </div>
                                  </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout1>
  );
}

export default WishlistPage;
