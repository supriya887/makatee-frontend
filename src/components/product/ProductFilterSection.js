import React from "react";

function ProductFilterSection() {
  return (
    <div className="col-lg-3 col-md-12 col-sm-12 col-12">
      <div className="mobile-none">
        <div className="product-listing-left">
          <div className="head-filter" id="toggleButton">
            <h6 className="text-uppercase text-black ">Filters</h6>
            <a href="">Clear ALL</a>
          </div>
          <div
            className="left_section_filter aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration={1500}
          >
            <div className="category_section">
              <h6>Price (Rs)</h6>
              <div className="slider">
                <div className="progress" />
              </div>
              <div className="range-input">
                <input
                  type="range"
                  className="range-min"
                  min={0}
                  max={10000}
                  defaultValue={2500}
                  step={100}
                />
                <input
                  type="range"
                  className="range-max"
                  min={0}
                  max={10000}
                  defaultValue={7500}
                  step={100}
                />
              </div>
              <div className="price-input">
                <div className="field">
                  <input
                    type="number"
                    className="input-min"
                    defaultValue={2500}
                  />
                </div>
                <div className="field">
                  <input
                    type="number"
                    className="input-max text-end"
                    defaultValue={7500}
                  />
                </div>
              </div>
            </div>
            <div className="category_section">
              <h6 className="title">Category</h6>
              <div className="checkbox_container">
                <ul>
                  <li>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        1st, 2nd &amp; 3rd Trophies{" "}
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault1"
                      >
                        Achievement Trophies
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault2"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault2"
                      >
                        Aeroplane Trophies
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault3"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault3"
                      >
                        Air Hockey Trophies
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="category_section">
              <h6 className="title">Material</h6>
              <div className="checkbox_container">
                <ul>
                  <li>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault4"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault4"
                      >
                        Wood
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault5"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault5"
                      >
                        Glass
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault6"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault6"
                      >
                        Acrylic
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault7"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault7"
                      >
                        Plastic
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="category_section">
              <h6 className="title">Color</h6>
              <div className="checkbox_container">
                <ul>
                  <li>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault8"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault8"
                      >
                        Gold
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault9"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault9"
                      >
                        Silver
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="category_section">
              <h6 className="title">Size</h6>
              <div className="checkbox_container">
                <ul>
                  <li>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault10"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault10"
                      >
                        100 - 250 mm
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault11"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault11"
                      >
                        250 - 500 mm
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault13"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault13"
                      >
                        501 - 550 mm
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault14"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault14"
                      >
                        551 - 1000 mm
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault15"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault15"
                      >
                        1000 + mm
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="desktop-none">
        <button id="toggleDashboard">Filters Toggle</button>
        <div
          className="product-listing-left"
          id="myDiv"
          style={{ display: "none" }}
        >
          <div className="head-filter" id="toggleButton">
            <h6 className="text-uppercase text-black ">Filters</h6>
            <a href="">Clear ALL</a>
          </div>
          <div className="left_section_filter">
            <div className="category_section">
              <h6>Price (Rs)</h6>
              <div className="slider">
                <div className="progress" />
              </div>
              <div className="range-input">
                <input
                  type="range"
                  className="range-min"
                  min={0}
                  max={10000}
                  defaultValue={2500}
                  step={100}
                />
                <input
                  type="range"
                  className="range-max"
                  min={0}
                  max={10000}
                  defaultValue={7500}
                  step={100}
                />
              </div>
              <div className="price-input">
                <div className="field">
                  <input
                    type="number"
                    className="input-min"
                    defaultValue={2500}
                  />
                </div>
                <div className="field">
                  <input
                    type="number"
                    className="input-max text-end"
                    defaultValue={7500}
                  />
                </div>
              </div>
            </div>
            <div className="category_section">
              <h6 className="title">Category</h6>
              <div className="checkbox_container">
                <ul>
                  <li>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        1st, 2nd &amp; 3rd Trophies{" "}
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault1"
                      >
                        Achievement Trophies
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault2"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault2"
                      >
                        Aeroplane Trophies
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault3"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault3"
                      >
                        Air Hockey Trophies
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="category_section">
              <h6 className="title">Material</h6>
              <div className="checkbox_container">
                <ul>
                  <li>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault4"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault4"
                      >
                        Wood
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault5"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault5"
                      >
                        Glass
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault6"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault6"
                      >
                        Acrylic
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault7"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault7"
                      >
                        Plastic
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="category_section">
              <h6 className="title">Color</h6>
              <div className="checkbox_container">
                <ul>
                  <li>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault8"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault8"
                      >
                        Gold
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault9"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault9"
                      >
                        Silver
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="category_section">
              <h6 className="title">Size</h6>
              <div className="checkbox_container">
                <ul>
                  <li>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault10"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault10"
                      >
                        100 - 250 mm
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault11"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault11"
                      >
                        250 - 500 mm
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault13"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault13"
                      >
                        501 - 550 mm
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault14"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault14"
                      >
                        551 - 1000 mm
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault15"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault15"
                      >
                        1000 + mm
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductFilterSection;
