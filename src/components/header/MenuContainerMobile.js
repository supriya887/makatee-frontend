import React from "react";
import { IoCaretDownOutline } from "react-icons/io5";

function MenuContainerMobile({ category }) {
  return (
    <div className="mobile-menu">
      <nav className="navbar fixed-top">
        <div className="container">
          <div
            className="offcanvas offcanvas-end"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
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
                {category?.length &&
                  category?.map((categoryItem, categoryIndex) => {
                    return (
                      <li key={categoryIndex} className="nav-item dropdown">
                        <a
                          className="nav-link active"
                          href="#"
                          data-bs-toggle="dropdown"
                        >
                          {categoryItem?.category_name}{" "}
                          {categoryItem?.children?.length > 0 && (
                            <IoCaretDownOutline />
                          )}
                        </a>
                        {/* Mega Menu */}
                        {categoryItem?.children?.length > 0 ? (
                          <div className="dropdown-menu mega-menu">
                            <div className="row">
                              <div className="col-12 col-md-12">
                                <ul>
                                  {categoryItem?.children?.map(
                                    (catChildItem, catChildIndex) => {
                                      return (
                                        <li key={`child-${catChildIndex}`}>
                                          <a href={`/products/${catChildItem?.slug}`}>
                                            {catChildItem?.category_name}
                                          </a>
                                        </li>
                                      );
                                    }
                                  )}
                                </ul>
                              </div>
                            </div>
                          </div>
                        ) : null}
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default MenuContainerMobile;
