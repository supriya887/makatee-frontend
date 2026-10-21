import React from "react";
import PlaceholderLoading from "react-placeholder-loading";

function HomeLoader() {
  return (
    <div>
      {/* Banner */}
      <section className="home-main-banner">
        <PlaceholderLoading shape="rect" width={"100%"} height={"50vh"} />
      </section>

      {/* Main Category Section */}
      <section className="main-category section-space">
        <div className="container">
          <div className="row">
            <div className="col-12 col-xxl-10 mx-auto">
              <div className="row">
                <div className="col-12 col-md-6 mb-3 mb-md-0">
                  <PlaceholderLoading shape="rect" width={"100%"} height={300} />
                </div>
                <div className="col-12 col-md-6">
                  <PlaceholderLoading shape="rect" width={"100%"} height={300} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Section */}
      <section className="category-section section-space">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center mb-3">
                <PlaceholderLoading shape="rect" width={"100%"} height={30} style={{ maxWidth: 400 }} />
              </div>
              <div className="text-center mb-4">
                <PlaceholderLoading shape="rect" width={"100%"} height={20} style={{ maxWidth: 500 }} />
              </div>
              <div className="d-flex flex-wrap justify-content-center">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div key={item} className="me-3 mb-3">
                    <PlaceholderLoading shape="circle" width={150} height={150} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeLoader;
