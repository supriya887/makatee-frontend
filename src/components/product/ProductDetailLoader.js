import React from "react";
import PlaceholderLoading from "react-placeholder-loading";

function ProductDetailLoader() {
  return (
    <div>
      {/* Breadcrumb */}
      <section className="breadcrumb-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <PlaceholderLoading shape="rect" width={"100%"} height={30} style={{ maxWidth: 400 }} />
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="product-details-box section-space">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="product-detail-section">
                <div className="row">
                  <div className="col-lg-6 col-12 mb-4 mb-lg-0">
                    <div className="product-detail-left">
                      <PlaceholderLoading shape="rect" width={"100%"} height={500} />
                    </div>
                  </div>
                  <div className="col-lg-6 col-12">
                    <div className="product-detail-right">
                      <PlaceholderLoading shape="rect" width={"100%"} height={30} />
                      <div className="mt-3">
                        <PlaceholderLoading shape="rect" width={"80%"} height={30} />
                      </div>
                      <div className="mt-3">
                        <PlaceholderLoading shape="rect" width={"70%"} height={30} />
                      </div>
                      <div className="mt-3">
                        <PlaceholderLoading shape="rect" width={"80%"} height={30} />
                      </div>
                      <div className="mt-5 d-flex flex-column flex-md-row">
                        <div className="me-md-3 mb-3 mb-md-0">
                          <PlaceholderLoading shape="rect" width={"100%"} height={50} style={{ minWidth: 150 }} />
                        </div>
                        <div>
                          <PlaceholderLoading shape="rect" width={"100%"} height={50} style={{ minWidth: 150 }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="section-space">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center mb-4">
                <PlaceholderLoading shape="rect" width={"100%"} height={30} style={{ maxWidth: 300 }} />
              </div>
              <div className="row">
                <div className="col-xxl-3 col-sm-4 col-6 mb-5">
                  <PlaceholderLoading shape="rect" width={"100%"} height={400} />
                </div>
                <div className="col-xxl-3 col-sm-4 col-6 mb-5">
                  <PlaceholderLoading shape="rect" width={"100%"} height={400} />
                </div>
                <div className="col-xxl-3 col-sm-4 col-6 mb-5">
                  <PlaceholderLoading shape="rect" width={"100%"} height={400} />
                </div>
                <div className="col-xxl-3 col-sm-4 col-6 mb-5">
                  <PlaceholderLoading shape="rect" width={"100%"} height={400} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductDetailLoader;
