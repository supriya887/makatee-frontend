import React from "react";
import PlaceholderLoading from "react-placeholder-loading";

function HomeCategoryLoader() {
  return (
    <div>
      <div className="p-1 align-items-center justify-content-center d-flex">
        <PlaceholderLoading shape="rect" width={"100%"} height={"50vh"} />
      </div>

      <div className="mt-3 align-items-center justify-content-center d-flex">
        <PlaceholderLoading shape="rect" width={"100%"} height={30} style={{ maxWidth: 300 }} />
      </div>

      <div className="mt-3 align-items-center justify-content-center d-flex">
        <PlaceholderLoading shape="rect" width={"100%"} height={20} style={{ maxWidth: 500 }} />
      </div>

      <div className="mt-3 mb-3 d-flex flex-column flex-md-row flex-wrap justify-content-center">
        <div className="me-md-5 mb-3 mb-md-0">
          <PlaceholderLoading shape="circle" width={"100%"} height={250} style={{ maxWidth: 250 }} />
        </div>
        <div className="me-md-5 mb-3 mb-md-0">
          <PlaceholderLoading shape="circle" width={"100%"} height={250} style={{ maxWidth: 250 }} />
        </div>
        <div className="me-md-5 mb-3 mb-md-0">
          <PlaceholderLoading shape="circle" width={"100%"} height={250} style={{ maxWidth: 250 }} />
        </div>
        <div className="me-md-5 mb-3 mb-md-0">
          <PlaceholderLoading shape="circle" width={"100%"} height={250} style={{ maxWidth: 250 }} />
        </div>
        <div className="mb-3 mb-md-0">
          <PlaceholderLoading shape="circle" width={"100%"} height={250} style={{ maxWidth: 250 }} />
        </div>
      </div>
    </div>
  );
}

export default HomeCategoryLoader;
