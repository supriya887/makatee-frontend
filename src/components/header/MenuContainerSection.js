import { TROPHY_HOME_ROUTE, UNIFORM_HOME_ROUTE } from "@/utils/constants";
import React from "react";

function MenuContainerSection() {
  return (
    <>
      {/* Desktop Menu */}
      <div className="container-fluid p-0 menu-box d-none d-lg-block">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="navbar navbar-expand-lg py-0">
                <div className="collapse navbar-collapse" id="main_nav">
                  <ul className="navbar-nav p-3 p-md-0">
                    <li className="nav-item ">
                      <a className="nav-link active" href={`/`}>
                        Home
                      </a>
                    </li>
                    <li className="nav-item ">
                      <a
                        className="nav-link active"
                        href={`/${TROPHY_HOME_ROUTE}`}
                      >
                        Trophy
                      </a>
                    </li>
                    <li className="nav-item ">
                      <a
                        className="nav-link active"
                        href={`/${UNIFORM_HOME_ROUTE}`}
                      >
                        Uniform
                      </a>
                    </li>
                    <li className="nav-item ">
                      <a className="nav-link active" href={`/about-us`}>
                        About Us
                      </a>
                    </li>
                    <li className="nav-item ">
                      <a className="nav-link active" href={`/contact-us`}>
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Offcanvas Menu */}
      <div className="mobile-menu d-lg-none">
        <nav className="navbar fixed-top">
          <div className="container">
            <div
              className="offcanvas offcanvas-end"
              tabIndex={-1}
              id="offcanvasMenuSection"
              aria-labelledby="offcanvasMenuSectionLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasMenuSectionLabel">
                  <img
                    src="/assets/images/logo.png"
                    style={{ width: 50 }}
                    alt=""
                  />
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                />
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <a className="nav-link active" href={`/`}>
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      href={`/${TROPHY_HOME_ROUTE}`}
                    >
                      Trophy
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      href={`/${UNIFORM_HOME_ROUTE}`}
                    >
                      Uniform
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href={`/about-us`}>
                      About Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href={`/contact-us`}>
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default MenuContainerSection;
