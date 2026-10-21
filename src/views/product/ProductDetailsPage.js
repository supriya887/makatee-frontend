"use client";

import { productDetailsApi } from "@/api";
import ImageCustUploader from "@/components/custom/ImageCustUploader";
import ImageUploader from "@/components/custom/ImageUploader";
import MenuContainerDesktop from "@/components/header/MenuContainerDesktop";
import MenuContainerMobile from "@/components/header/MenuContainerMobile";
import Layout1 from "@/components/layout/Layout1";
import ProductCard1 from "@/components/product/ProductCard1";
import ProductCard2 from "@/components/product/ProductCard2";
import ProductDetailLoader from "@/components/product/ProductDetailLoader";
import ProductSectionList from "@/components/product/ProductSectionList";
import { addToCartThunk } from "@/store/slices/cart-slice";
import { toggleWishlist } from "@/store/slices/wishlist-slice";
import { TROPHY_HOME_ROUTE, UNIFORM_HOME_ROUTE } from "@/utils/constants";
import moment from "moment";
import { useParams, usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import toast from "react-hot-toast";
import {
  IoArrowBack,
  IoArrowBackOutline,
  IoArrowForward,
  IoArrowForwardOutline,
  IoCartOutline,
  IoCheckmarkCircleOutline,
  IoClose,
  IoHeart,
  IoHeartOutline,
  IoLogoWhatsapp,
  IoStar,
} from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  EffectFade,
  FreeMode,
  Navigation,
  Pagination,
  Thumbs,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function ProductDetailsPage() {
  const { contactus_details } = useSelector((state) => state.app);
  const { access_token } = useSelector((state) => state.user);
  const { menuCategories } = useSelector((state) => state.category);

  const params = useParams();
  const dispatch = useDispatch();

  const pathname = usePathname();

  let extensionForImg = ["jpg", "png", "jpeg", "gif"];

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isCustomiseProduct, setIsCustomiseProduct] = useState(false);
  const [isCustomiseText, setIsCustomiseText] = useState("");
  const [isCustomiseImage, setIsCustomiseImage] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  const [details, setDetails] = useState({});

  const slug = params?.slug || "";
  const variantSlug = params?.variant_slug || "";

  const router = useRouter();

  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    const res = await productDetailsApi({
      product_slug: slug,
      product_variant_slug: variantSlug,
    });

    if (res?.status == 1) {
      setDetails(res.data);
    } else {
      res?.error && toast.error(res?.error);
    }
    setIsLoading(false);
  };

  const cartData = useSelector((state) => state.cart);
  const cart = cartData?.cart || {};
  const { wishlistItems } = useSelector((state) => state.wishlist);

  const cartItems = cart?.item_list || [];

  const cartItem = cartItems.find(
    (cartItem) => cartItem?.product_variant_id == details?.id
  );

  const wishlisted = wishlistItems.find(
    (item) => item?.product_variant_id == details?.id
  );

  const [show, setShow] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleShow = (index) => {
    setSelectedIndex(index);
    setShow(true);
  };

  const closeModal = () => setShow(false);

  if (isLoading) {
    return (
      <Layout1>
        <ProductDetailLoader />
      </Layout1>
    );
  }

  const customiseInput = details?.variants?.[0]?.product?.customise_input;

  const customiseInputArray = customiseInput?.trim()
    ? customiseInput
        .split(",")
        .map((i) => Number(i.trim()))
        .filter((n) => !isNaN(n))
    : [];

  return (
    <Layout1
      categoryMenu={
        menuCategories?.trophy_categories?.length > 0 ||
        menuCategories?.uniform_categories?.length > 0
          ? true
          : false
      }
      categoryList={
        details?.parent_category?.slug == TROPHY_HOME_ROUTE
          ? menuCategories?.trophy_categories
          : details?.parent_category?.slug == UNIFORM_HOME_ROUTE
          ? menuCategories?.uniform_categories
          : []
      }
    >
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
                    {/* <li className="breadcrumb-item">
                      <a href="#">Trophies</a>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      <a href="#">Crystal Trophies</a>
                    </li> */}
                    <li className="breadcrumb-item active" aria-current="page">
                      {" "}
                      {details?.product?.product_name}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-details-box section-space">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="product-detail-section">
                <div className="row">
                  <div className="col-lg-6 col-12">
                    <div className="product-detail-left">
                      {/* top gallery */}
                      <Swiper
                        loop={true}
                        spaceBetween={10}
                        slidesPerView={1}
                        // navigation={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="swiper gallery slider-one popup-gallery"
                      >
                        <div className="swiper-wrapper">
                          {details?.gallery?.length &&
                            details?.gallery?.map((el, i) => {
                              return (
                                <SwiperSlide key={i} className="swiper-slide">
                                  <a
                                    className="lightbox"
                                    onClick={() => handleShow(i)}
                                  >
                                    {el?.type == 1 ? (
                                      <img
                                        style={{
                                          height: "100%",
                                          width: "100%",
                                        }}
                                        src={el?.file}
                                      />
                                    ) : null}

                                    {el?.type == 2 ? (
                                      <div className="video">
                                        <iframe
                                          width="100%"
                                          height={"100%"}
                                          src={el?.file}
                                          title="YouTube video player"
                                          frameBorder={0}
                                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                          referrerPolicy="strict-origin-when-cross-origin"
                                          allowFullScreen=""
                                        />
                                      </div>
                                    ) : null}
                                  </a>
                                </SwiperSlide>
                              );
                            })}
                        </div>
                      </Swiper>

                      {/* thumbs */}
                      <Swiper
                        onSwiper={setThumbsSwiper}
                        // loop={true}
                        spaceBetween={20}
                        slidesPerView={4}
                        freeMode={true}
                        // navigation={true}
                        watchSlidesProgress={true}
                        // direction="horizontal"
                        modules={[FreeMode, Thumbs]}
                        className="swiper gallery-thumbs slider-two"
                      >
                        <div className="swiper-wrapper">
                          {details?.gallery?.length &&
                            details?.gallery?.map((el, i) => (
                              <SwiperSlide
                                key={i + "details"}
                                className="swiper-slide me-3"
                              >
                                {el?.type == 1 ? <img src={el?.file} /> : null}

                                {el?.type == 2 ? (
                                  <img
                                    src={`https://img.youtube.com/vi/${
                                      el?.file?.split("/embed/")[1]
                                    }/0.jpg`}
                                  />
                                ) : null}
                              </SwiperSlide>
                            ))}
                        </div>
                      </Swiper>
                    </div>
                  </div>
                  <div className="col-lg-6 col-12">
                    <div className="product-detail-right">
                      <h4>{details?.product?.product_name}</h4>
                      <div className="price-box">
                        <h4>
                          {" "}
                          <small className="discount-text">
                            {/* MRP */}{" "}
                            {details?.price != details?.saleprice ? (
                              <span className="slash">₹{details?.price}</span>
                            ) : null}
                          </small>{" "}
                          ₹ {details?.saleprice}
                        </h4>
                        {/* <span className="tax-text">inclusive of all taxes</span> */}
                      </div>
                      {details?.total_rating > 0 ? (
                        <div className="rate-box mt-0">
                          {details?.total_rating}{" "}
                          <IoStar role="img" className="md hydrated" />
                        </div>
                      ) : null}
                      <div className="product-custom mt-4">
                        <div className="size-box">
                          <h6>Size</h6>
                          <ul>
                            {details?.variants?.map((vitem, vindex) => {
                              return (
                                vitem?.is_show && (
                                  <li key={vindex}>
                                    <a
                                      onClick={() =>
                                        router.push(
                                          `/product/${slug}/${vitem?.slug}`
                                        )
                                      }
                                    >
                                      <button
                                        className={
                                          details?.slug == vitem?.slug
                                            ? "size-active"
                                            : "size"
                                        }
                                      >
                                        {vitem?.variant_name}
                                      </button>
                                    </a>
                                  </li>
                                )
                              );
                            })}
                          </ul>
                        </div>

                        {details?.product_attributes?.length > 0 &&
                          details?.product_attributes?.map((item, index) => {
                            return (
                              <div key={index} className="size-box">
                                <h6>{item?.title}</h6>
                                <ul>
                                  {item?.filter_values?.map(
                                    (pfitem, pfindex) => {
                                      const selectColorSlug =
                                        details?.variants?.find(
                                          (item) =>
                                            item?.selected_color
                                              ?.filter_value_id == pfitem?.id
                                        )?.slug;
                                      return (
                                        <li key={pfindex}>
                                          <a
                                            href={`/product/${slug}/${selectColorSlug}`}
                                          >
                                            <button
                                              className={
                                                details?.selected_color
                                                  ?.filter_value_id ==
                                                pfitem?.id
                                                  ? "size-active"
                                                  : "size"
                                              }
                                            >
                                              {pfitem?.value}
                                            </button>
                                          </a>
                                        </li>
                                      );
                                    }
                                  )}
                                </ul>
                              </div>
                            );
                          })}

                        <div className="d-flex">
                          <div className="quantity-box mb-4">
                            <h6>Quantity</h6>
                            <div className="quantity">
                              <div className="input-group  align-items-center">
                                <input
                                  type="button"
                                  defaultValue="-"
                                  className="qty-btn button-minus "
                                  data-field="quantity"
                                  onClick={() => {
                                    dispatch(
                                      addToCartThunk({
                                        productVariantId: details?.id,
                                        qty: cartItem ? cartItem?.qty - 1 : 1,
                                        custom_text: isCustomiseText || "",
                                        custom_photo:
                                          isCustomiseImage?.image || "",
                                      })
                                    );
                                  }}
                                />
                                <input
                                  size="5"
                                  readOnly
                                  type="number"
                                  // step={1}
                                  // max={10}
                                  // defaultValue={1}
                                  value={cartItem ? cartItem?.qty : 1}
                                  name="quantity"
                                  className="quantity-field text-center"
                                />
                                <input
                                  type="button"
                                  defaultValue="+"
                                  className="qty-btn button-plus "
                                  data-field="quantity"
                                  onClick={() => {
                                    dispatch(
                                      addToCartThunk({
                                        productVariantId: details?.id,
                                        qty: cartItem ? cartItem?.qty + 1 : 2,
                                        custom_text: isCustomiseText || "",
                                        custom_photo:
                                          isCustomiseImage?.image || "",
                                      })
                                    );
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        {details?.stock > 0 ? (
                          <div className="stock">
                            {" "}
                            <IoCheckmarkCircleOutline />
                            {"   "} In Stock{" "}
                            {details?.stock > 100 ? `100+` : details?.stock}{" "}
                            Available
                          </div>
                        ) : (
                          <div className="outofstock"> Out of Stock</div>
                        )}
                        <div className="feature-pointer mt-2">
                          <ion-icon name="shield-outline"></ion-icon> Estimated
                          Delivery : Up to 4 business days
                        </div>
                        <div className="feature-pointer mt-2">
                          <ion-icon name="shield-outline"></ion-icon>Free
                          Shipping & Returns : On all orders over Rs.500
                        </div>
                        <div className="feature-pointer mt-2">
                          <ion-icon name="shield-outline"></ion-icon>Secure
                          Checkout : Guaranteed Safe And Secure Checkout
                        </div>

                        {details?.variants?.[0]?.product?.is_customise == 1 ? (
                          <div className="customize-product mt-4">
                            <h5 className="d-flex mb-0">
                              <div className=" form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  checked={isCustomiseProduct}
                                  onChange={(e) => {
                                    setIsCustomiseProduct(!isCustomiseProduct);
                                    setIsCustomiseText("");
                                    setIsCustomiseImage({});
                                  }}
                                />
                              </div>
                              <div>
                                <strong>Customise your product</strong>
                                <br />
                                <small className="mb-5">
                                  Please add your text requirements in the box
                                  provided.{" "}
                                </small>
                              </div>
                            </h5>
                            {isCustomiseProduct ? (
                              <>
                                {customiseInputArray.includes(1) && (
                                  <div className="des-add">
                                    <h6> Text</h6>
                                    <textarea
                                      className="w-100"
                                      data-counter="upsell_group_note-counter3"
                                      name="upsell_group_note[3]"
                                      rows={5}
                                      maxLength={250}
                                      value={isCustomiseText}
                                      onChange={(e) =>
                                        setIsCustomiseText(e.target.value)
                                      }
                                    />
                                    <small>
                                      {" "}
                                      Remaining number of characters:{" "}
                                      <span className="upsell_group_note-3-counter">
                                        {250 - isCustomiseText?.length}
                                      </span>
                                    </small>
                                  </div>
                                )}

                                {customiseInputArray.includes(2) && (
                                  <div className="bg-white mt-2 p-3">
                                    <ImageCustUploader
                                      onUploadComplete={(fs) => {
                                        console.log("fs", fs);
                                        setIsCustomiseImage({
                                          image: fs[0]?.fileName,
                                          image_path: fs[0]?.filePath,
                                        });
                                      }}
                                      imageName={
                                        isCustomiseImage?.image || null
                                      }
                                      imagePath={
                                        isCustomiseImage?.image_path || null
                                      }
                                      removeImage={() =>
                                        setIsCustomiseImage({
                                          image: null,
                                          image_path: null,
                                        })
                                      }
                                    />
                                  </div>
                                )}
                              </>
                            ) : null}
                          </div>
                        ) : null}
                        <div className="buttons">
                          {cartItem ? (
                            <a
                              href="/cart"
                              className="common-btn addtocart-btn"
                            >
                              <IoCartOutline size={24} />
                              {"  "} Go to cart
                            </a>
                          ) : (
                            <a
                              className="common-btn addtocart-btn"
                              onClick={() => {
                                dispatch(
                                  addToCartThunk({
                                    productVariantId: details?.id,
                                    qty: cartItem?.qty ? cartItem?.qty : 1,
                                    custom_text: isCustomiseText || "",
                                    custom_photo: isCustomiseImage?.image || "",
                                  })
                                );
                              }}
                            >
                              <IoCartOutline size={24} />
                              {"  "} Add to Cart
                            </a>
                          )}

                          <a
                            onClick={() => {
                              access_token
                                ? dispatch(
                                    toggleWishlist({
                                      productId:
                                        details?.variants?.[0]?.product_id,
                                      productVariantId:
                                        details?.variants?.[0]?.id,
                                    })
                                  )
                                : router.push(`/login?returnUrl=${pathname}`);
                              // router.reload();
                            }}
                            className="common-btn wishlist-main-btn"
                          >
                            {wishlisted ? (
                              <IoHeart size={24} />
                            ) : (
                              <IoHeartOutline size={24} />
                            )}
                            Wishlist
                          </a>
                        </div>

                        <div className="whatsapp-detail mt-3">
                          {/* <ion-icon name="logo-whatsapp" /> */}
                          <IoLogoWhatsapp />
                          <p>
                            Do you need suggestion?
                            <br />{" "}
                            <a
                              href={`https://api.whatsapp.com/send?phone=${contactus_details?.mobile}?`}
                              target="_blank"
                            >
                              {" "}
                              Whatsapp Us : {contactus_details?.mobile}
                            </a>
                          </p>
                        </div>
                        <div className="product-code">
                          <hr className="mt-3" />
                          <div>
                            Product Code: <strong>{details?.sku} </strong>
                          </div>

                          {details?.reviews?.length > 0 ? (
                            <div className="rate-product-box">
                              <h5 className="review-head">
                                <div className="rate-box">
                                  {details?.total_rating} <IoStar />
                                  {/* <ion-icon name="star" role="img" /> */}
                                </div>
                                <a href="">
                                  {details?.total_rating} Ratings |{" "}
                                  {details?.reviews?.length} Reviews
                                </a>
                              </h5>
                              {/* <div className="review-image-gallery mt-5">
                            <div className="review-des">
                              <h5 className="mb-4 ">Customer Images</h5>
                              <a href="view-all-reviews.php">
                                View All Reviews{" "}
                              </a>
                            </div>
                            <Swiper
                          
                              modules={[EffectFade, Pagination, Navigation]}
                           
                              pagination={{ clickable: true }}
                              speed={1000}
                            
                              fadeEffect={{ crossFade: true }}
                              slidesPerView={6}
                              className="swiper customer-review-slider"
                              loop={true}
                              spaceBetween={2}
                            >
                              <div className="swiper-wrapper">
                                <SwiperSlide className="swiper-slide">
                                  <div className="category-box">
                                    <a href="">
                                      <div className="category-img">
                                        <img
                                          src="/assets/images/product-img/product1.jpg"
                                          className="img-fluid"
                                          alt=""
                                        />
                                      </div>
                                    </a>
                                  </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                  <div className="category-box">
                                    <a href="">
                                      <div className="category-img">
                                        <img
                                          src="/assets/images/product-img/product1.jpg"
                                          className="img-fluid"
                                          alt=""
                                        />
                                      </div>
                                    </a>
                                  </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                  <div className="category-box">
                                    <a href="">
                                      <div className="category-img">
                                        <img
                                          src="/assets/images/product-img/product1.jpg"
                                          className="img-fluid"
                                          alt=""
                                        />
                                      </div>
                                    </a>
                                  </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                  <div className="category-box">
                                    <a href="">
                                      <div className="category-img">
                                        <img
                                          src="/assets/images/product-img/product1.jpg"
                                          className="img-fluid"
                                          alt=""
                                        />
                                      </div>
                                    </a>
                                  </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                  <div className="category-box">
                                    <a href="">
                                      <div className="category-img">
                                        <img
                                          src="/assets/images/product-img/product1.jpg"
                                          className="img-fluid"
                                          alt=""
                                        />
                                      </div>
                                    </a>
                                  </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                  <div className="category-box">
                                    <a href="">
                                      <div className="category-img">
                                        <img
                                          src="/assets/images/product-img/product1.jpg"
                                          className="img-fluid"
                                          alt=""
                                        />
                                      </div>
                                    </a>
                                  </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                  <div className="category-box">
                                    <a href="">
                                      <div className="category-img">
                                        <img
                                          src="/assets/images/product-img/product1.jpg"
                                          className="img-fluid"
                                          alt=""
                                        />
                                      </div>
                                    </a>
                                  </div>
                                </SwiperSlide>

                              
                              </div>
                            </Swiper>
                          </div> */}
                              {/* <div className="swiper-pagination" /> */}
                              {/* <div class="swiper-button-next uniform-swiper-button-next"><i class="bi bi-arrow-right-short"></i></div>
                                      <div class="swiper-button-prev uniform-swiper-button-prev"><i class="bi bi-arrow-left-short"></i></div> */}

                              <div className="review-comment">
                                <h5 className="mb-3 mt-4">Reviews</h5>
                                {details?.reviews?.map((el, i) => {
                                  return (
                                    <div className="review-comment-box" key={i}>
                                      <div className="review-content">
                                        <div className="rate-box">
                                          {Number(el?.rating)} <IoStar />
                                          {/* <ion-icon name="star" /> */}
                                        </div>{" "}
                                        <small>
                                          {moment(el?.created_at).format(
                                            `DD MMM YYYY`
                                          )}
                                        </small>
                                      </div>
                                      <p>{el?.comment}</p>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 mt-5">
                    {" "}
                    <div id="more-info">
                      <div className="other-info mt-5">
                        <div className="description-box">
                          <nav>
                            <div
                              className="nav nav-tabs"
                              id="nav-tab"
                              role="tablist"
                            >
                              <button
                                className="nav-link active"
                                id="nav-profile-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#nav-profile"
                                type="button"
                                role="tab"
                                aria-controls="nav-profile"
                                aria-selected="false"
                              >
                                Description
                              </button>
                              <button
                                className="nav-link "
                                id="nav-home-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#nav-home"
                                type="button"
                                role="tab"
                                aria-controls="nav-home"
                                aria-selected="true"
                              >
                                Parameters
                              </button>
                            </div>
                          </nav>
                          <div className="tab-content " id="nav-tabContent">
                            <div
                              className="tab-pane fade active show"
                              id="nav-profile"
                              role="tabpanel"
                              aria-labelledby="nav-profile-tab"
                            >
                              {details?.product?.long_description ? (
                                <div
                                  style={{ lineHeight: "22px" }}
                                  dangerouslySetInnerHTML={{
                                    __html: details?.product?.long_description,
                                  }}
                                />
                              ) : (
                                <p>-</p>
                              )}
                            </div>
                            <div
                              className="tab-pane fade "
                              id="nav-home"
                              role="tabpanel"
                              aria-labelledby="nav-home-tab"
                            >
                              <table className="table">
                                {details?.product?.parameters?.length > 0 ? (
                                  <tbody>
                                    {details?.product?.parameters?.map(
                                      (item, index) => {
                                        return (
                                          <tr key={index}>
                                            <td>
                                              {" "}
                                              <b>{item?.parameters}:</b>
                                            </td>

                                            <td>{item?.value}</td>
                                          </tr>
                                        );
                                      }
                                    )}
                                  </tbody>
                                ) : null}
                              </table>
                            </div>
                          </div>
                        </div>
                        {/* <div className=" bulk-discount mt-4">
                              <IoCheckmarkCircleOutline />
                              <p>
                                BULK QUANTITY DISCOUNTS APPLICABLE TO THIS
                                PRODUCT. <br />{" "}
                                <a href="">
                                  Click here to see our quantity discounts
                                </a>
                              </p>
                            </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {details?.related_products?.length > 0 ? (
        <section className="similar-section section-space pt-0">
          <div className="container ">
            <div className="row">
              <div className="col-12">
                <div className="product-showcase-head">
                  <div className="row">
                    <div className="col-12">
                      <h4 className="product-left">Similar Products</h4>
                      <p className="text-center">
                        Our top-selling trophies—trusted favorites for every
                        event
                      </p>
                    </div>
                    <div className="col-12">
                      <div className="product-right">
                        <div>
                          {/* <a
                            href={`/${details?.parent_category?.slug}`}
                            className="common-btn"
                          >
                            View All
                          </a> */}
                        </div>
                        <div className="arrow-box">
                          <div className="swiper-button-prev similar-product-button-prev">
                            <IoArrowBackOutline />
                          </div>
                          <div className="swiper-button-next similar-product-button-next">
                            <IoArrowForwardOutline />
                          </div>
                        </div>
                        <ProductSectionList
                          nextEl=".similar-product-button-next"
                          prevEl=".similar-product-button-prev"
                          data={details?.related_products}
                          className="swiper similar-slider ps-2 pe-2 w-100"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}
      {/* <section className="similar-section">
        <div className="container section-space ">
          <div className="row">
            <div className="col-12">
              <div className="product-showcase-head ">
                <div className="row">
                  <div className="col-12 col-md-6">
                    <h4 className="product-left">Recently Viewed</h4>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="product-right">
                      <div>
                        <a href="/products" className="common-btn">
                          View All
                        </a>
                      </div>
                      <div className="arrow-box">
                        <div className="swiper-button-prev recent-view-button-prev">
                          <IoArrowBackOutline />
                        </div>
                        <div className="swiper-button-next recent-view-button-next">
                          <IoArrowForwardOutline />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
              <Swiper
                // centeredSlides={true}
                modules={[EffectFade, Navigation]}
                //   effect={"fade"}
                navigation={{
                  nextEl: ".recent-view-button-next",
                  prevEl: ".recent-view-button-prev",
                  disabledClass: "swiper-button-disabled",
                }}
                speed={1000}
                //  className="swiper-wrapper"
                fadeEffect={{ crossFade: true }}
                slidesPerView={4}
                className="swiper recent-view-slider"
                loop={true}
                spaceBetween={20}
              >
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <ProductCard2 categoryType={UNIFORM_HOME_ROUTE} />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <ProductCard2 categoryType={UNIFORM_HOME_ROUTE} />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <ProductCard2 categoryType={UNIFORM_HOME_ROUTE} />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <ProductCard2 categoryType={UNIFORM_HOME_ROUTE} />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <ProductCard2 categoryType={UNIFORM_HOME_ROUTE} />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <ProductCard2 categoryType={UNIFORM_HOME_ROUTE} />
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </section> */}

      <Modal
        show={show}
        onHide={closeModal}
        size="xl"
        centered
        backdrop="static"
        dialogClassName="modal-fullscreen"
      >
        <Modal.Body className="p-0 position-relative bg-dark">
          {/* Close Icon */}
          <IoClose
            onClick={closeModal}
            size={32}
            className="position-absolute text-white"
            style={{ top: 15, right: 20, zIndex: 1000, cursor: "pointer" }}
          />

          {/* Swiper */}
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".custom-swiper-next",
              prevEl: ".custom-swiper-prev",
            }}
            initialSlide={selectedIndex}
            slidesPerView={1}
            className="mySwiper"
            loop={true}
          >
            {details?.gallery?.map((src, idx) => (
              <SwiperSlide key={idx}>
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ height: "100vh" }}
                >
                  {src?.type == 1 ? (
                    <img
                      alt={`slide-${idx}`}
                      style={{ maxHeight: "100%", maxWidth: "100%" }}
                      src={src?.file}
                    />
                  ) : null}

                  {src?.type == 2 ? (
                    <iframe
                      width="100%"
                      height={"100%"}
                      src={src?.file}
                      title="YouTube video player"
                      frameBorder={0}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen=""
                    />
                  ) : null}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <div
            className="custom-swiper-prev text-white"
            style={{
              position: "absolute",
              top: "50%",
              left: 10,
              zIndex: 1000,
              transform: "translateY(-50%)",
              cursor: "pointer",
            }}
          >
            <IoArrowBack size={36} />
          </div>
          <div
            className="custom-swiper-next text-white"
            style={{
              position: "absolute",
              top: "50%",
              right: 10,
              zIndex: 1000,
              transform: "translateY(-50%)",
              cursor: "pointer",
            }}
          >
            <IoArrowForward size={36} />
          </div>
        </Modal.Body>
      </Modal>
    </Layout1>
  );
}

export default ProductDetailsPage;
