import React from "react";
import { Modal } from "react-bootstrap";
import StarRatings from "react-star-ratings";

const OrderRatingModal = ({
  show,
  onHide,
  inputValue,

  inputOnChange,
  inputLabel,
  buttonOnclick,
  modalTitle,

  onChangeRating,
  numberofRating,
  rateOrderDetail,
}) => {
  const onCloseModal = () => {
    onHide();
  };

  return (
    <Modal
      show={show}
      onHide={onCloseModal}
      // className="product-quickview"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Rate this Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="col-12 mb-3">
              <div className="row">
                <a
                  href={`/product/${rateOrderDetail?.product_variant?.product?.slug}/${rateOrderDetail?.product_variant?.slug}`}
                  className="col-12 col-md-2"
                >
                  <div className="item-img">
                    <img
                      src={rateOrderDetail?.product_variant?.image_path}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </a>
                <div className="col-12 col-md-10">
                  <div className="item-content">
                    <p>
                      {" "}
                      {rateOrderDetail?.product_variant?.product?.product_name}
                    </p>
                    <div className="box size mr-2">
                      Size :{"  "}{rateOrderDetail?.product_variant?.variant_name}
                    </div>
                    {/* <div className="box color mr-2">
                      Color :
                      <ul>
                        <li className="swatch black">
                          <input
                            type="radio"
                            name="swatch_demo"
                            id="swatch_1"
                            defaultValue={1}
                            defaultChecked=""
                          />
                        </li>
                      </ul>
                    </div> */}
                    <div className="box size mr-2">
                      Qty : {"  "}{rateOrderDetail?.quantity}
                    </div>

                    <div className="product-amt">
                      <h5 className="price mb-0 mt-2">
                        <strong>₹ {rateOrderDetail?.total_price}</strong>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="row  media">
              <div className="col-lg-3 ">
                <a href={productPath}>
                  <img src={productImage} className="img-fluid" alt="" />
                </a>
              </div>

              <div className="col-lg-8 mt-3">
                <h5 className="rate_title">{productVariant}</h5>
              </div>
            </div> */}

            <div className="col-md-12 col-12 mt-0 mb-3 rate_star mt-3">
              <StarRatings
                starSpacing="1px"
                starHoverColor="#287bff"
                starRatedColor="#287bff"
                rating={Number(numberofRating)}
                starDimension="30px"
                changeRating={onChangeRating}
              />
            </div>

            <div className="comment mb-4 d-block">
              <h6 className="text-dark">Add a Written Review</h6>

              <textarea
                type="text"
                className="form-control"
                placeholder="What did you like or dislike? What did you use this product for?"
                cols={30}
                rows={5}
                value={inputValue}
                onChange={inputOnChange}
                // style={{ border: "0px solid", borderBottom: "1px solid" }}
              />
            </div>

            <button
              type="button"
              onClick={buttonOnclick}
              className="common-btn common-btn-purple mt-4 d-block w-100 text-center"
            >
              Submit
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default OrderRatingModal;
