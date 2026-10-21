import React from "react";
import PlaceholderLoading from "react-placeholder-loading";

function ProductListLoader() {
  return (
    <div>
      <section className="product-listing-box">
        <div className="container section-space">
          <div className="row">
            <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="product-listing-left">
                <PlaceholderLoading shape="rect" width={"100%"} height={30} />
                <div className="mt-3">
                  <PlaceholderLoading shape="rect" width={"80%"} height={30} />
                </div>
                <div className="mt-3">
                  <PlaceholderLoading shape="rect" width={"70%"} height={30} />
                </div>
                <div className="mt-3">
                  <PlaceholderLoading shape="rect" width={"100%"} height={200} />
                </div>
                <div className="mt-3">
                  <PlaceholderLoading shape="rect" width={"100%"} height={200} />
                </div>
              </div>
            </div>
            <div className="col-xxl-10 col-xl-9 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="product-listing-right">
                <div className="row">
                  <div className="col-xxl-3 col-sm-4 col-6 mb-5">
                    <PlaceholderLoading shape="rect" width={"100%"} height={300} />
                  </div>
                  <div className="col-xxl-3 col-sm-4 col-6 mb-5">
                    <PlaceholderLoading shape="rect" width={"100%"} height={300} />
                  </div>
                  <div className="col-xxl-3 col-sm-4 col-6 mb-5">
                    <PlaceholderLoading shape="rect" width={"100%"} height={300} />
                  </div>
                  <div className="col-xxl-3 col-sm-4 col-6 mb-5">
                    <PlaceholderLoading shape="rect" width={"100%"} height={300} />
                  </div>
                  <div className="col-xxl-3 col-sm-4 col-6 mb-5">
                    <PlaceholderLoading shape="rect" width={"100%"} height={300} />
                  </div>
                  <div className="col-xxl-3 col-sm-4 col-6 mb-5">
                    <PlaceholderLoading shape="rect" width={"100%"} height={300} />
                  </div>
                  <div className="col-xxl-3 col-sm-4 col-6 mb-5">
                    <PlaceholderLoading shape="rect" width={"100%"} height={300} />
                  </div>
                  <div className="col-xxl-3 col-sm-4 col-6 mb-5">
                    <PlaceholderLoading shape="rect" width={"100%"} height={300} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductListLoader;
