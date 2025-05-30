import { chunkArray } from "@/utils/helper";
import React from "react";
import { IoCaretDownOutline, IoChevronDown } from "react-icons/io5";

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
                            href="#"
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
                                                href={`/products/${categoryChildItem?.slug}`}
                                              >
                                                {
                                                  categoryChildItem?.category_name
                                                }
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
