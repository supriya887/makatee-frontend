import { chunkArray } from "@/utils/helper";
import React from "react";
import {
  IoCaretDownOutline,
  IoChevronDown,
  IoChevronForward,
} from "react-icons/io5";

function MenuContainerDesktop({ category }) {
  return (

      <div className="container-fluid p-0 menu-box">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="navbar navbar-expand-xl">
                <div className="collapse navbar-collapse" id="main_nav">
                  <ul className="navbar-nav p-3 p-md-0">
                    {category?.length &&
                      category?.map((categoryItem, categoryIndex) => {
                        return (
                          <li key={categoryIndex} className="nav-item dropdown">
                            <a
                              className="nav-link active"
                              href={`/${categoryItem?.full_slug}`}
                              data-bs-toggle="dropdown"
                            >
                              {categoryItem?.category_name}
                              {categoryItem?.children?.length > 0 && (
                                <IoCaretDownOutline />
                              )}
                            </a>
                            {/* Mega Menu */}
                            {categoryItem?.children?.length > 0 ? (
                              <div className="dropdown-menu mega-menu">
                                <div className="row">
                                  {chunkArray(categoryItem.children, 5).map(
                                    (childGroup, groupIndex) => (
                                      <div
                                        className="col-12 col-md-3"
                                        key={groupIndex}
                                      >
                                        <ul>
                                          {childGroup.map(
                                            (categoryChildItem, childIndex) => (
                                              <li key={childIndex}>
                                                <a
                                                  href={`/${categoryChildItem?.full_slug}`}
                                                  className="d-flex align-items-center gap-2"
                                                >
                                                  <IoChevronForward
                                                    className="flex-shrink-0"
                                                    style={{
                                                      fontSize: "0.875rem",
                                                    }}
                                                  />
                                                  <span>
                                                    {
                                                      categoryChildItem?.category_name
                                                    }
                                                  </span>
                                                  <span
                                                    style={{ fontSize: "14px" }}
                                                  >
                                                    {" "}
                                                    -{" "}
                                                    {
                                                      categoryChildItem?.products_count
                                                    }
                                                  </span>
                                                </a>
                                              </li>
                                            )
                                          )}
                                        </ul>
                                      </div>
                                    )
                                  )}
                                </div>
                              </div>
                            ) : null}
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default MenuContainerDesktop;
