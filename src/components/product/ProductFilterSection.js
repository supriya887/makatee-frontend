"use client";

import React, { useEffect, useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

function ProductFilterSection({
  list,
  filters = {},
  onPress,
  onRangeSelect,
  onSelectedStockValue,
}) {
  const [filterCategorySelected, setFilterCategorySelected] = useState([]);

  console.log("filters", filters);

  const [showFilter, setShowFilter] = useState(false);

  const minPrice = Number(filters?.price?.minimum) || 0;
  const maxPrice = Number(filters?.price?.maximum) || 1000;
  const maxStock = Number(filters?.availableStock?.maximum) || 100;
  const minStock = Number(filters?.availableStock?.minimum) || 0;

  const [selectedRange, setSelectedRange] = useState([0, 0]); // for API call
  const [tempRange, setTempRange] = useState([0, 0]);

  const [selectedStockValue, setSelectedStockValue] = useState(0);
  const [tempStock, setTempStock] = useState(0);

  useEffect(() => {
    // const minPrice = Number(filters?.price?.minimum) || 0;
    // const maxPrice = Number(filters?.price?.maximum) || 1000;
    // const minStock = Number(filters?.availableStock?.minimum) || 0;
    // const maxStock = Number(filters?.availableStock?.maximum) || 100;

    setSelectedRange([minPrice, maxPrice]);
    setTempRange([minPrice, maxPrice]);

    setSelectedStockValue(minStock);
    setTempStock(minStock);
  }, [filters]);

  useEffect(() => {
    onPress(filterCategorySelected);
  }, [filterCategorySelected]);

  useEffect(() => {
    onRangeSelect(selectedRange); // fires only once when scroll/input is done
  }, [selectedRange]);

  useEffect(() => {
    onSelectedStockValue(selectedStockValue);
  }, [selectedStockValue]);

  const onhandlePress = (filterId, filterValueId, checked) => {
    let selectedFilterGroup = [...filterCategorySelected];
    let existingFilter = selectedFilterGroup?.find(
      (item) => item?.filter_id === filterId
    );

    if (existingFilter) {
      // let checked =
      //   [...existingFilter?.value] || [];
      if (checked == false) {
        existingFilter.value = existingFilter?.value.filter(
          (item) => item !== filterValueId
        );

        if (existingFilter?.value?.length === 0) {
          selectedFilterGroup = selectedFilterGroup.filter(
            (item) => item?.filter_id !== filterId
          );
        }
      } else {
        if (existingFilter.filter_id == 3) {
          existingFilter.value[0] = filterValueId;
        } else {
          existingFilter?.value?.push(filterValueId);
        }
      }
    } else {
      selectedFilterGroup.push({
        filter_id: filterId,
        value: [filterValueId],
      });
    }

    setFilterCategorySelected(selectedFilterGroup);
  };

  const handleSliderChange = (values) => {
    setTempRange(values);
  };

  const handleSliderChangeComplete = (values) => {
    setSelectedRange(values); // this will trigger API via useEffect
  };

  const handleInputChange = (index, value) => {
    const updated = [...tempRange];
    updated[index] = Number(value);

    if (
      updated[0] >= minPrice &&
      updated[1] <= maxPrice &&
      updated[0] < updated[1]
    ) {
      setTempRange(updated);
      setSelectedRange(updated); // trigger API when manually entered
    }
  };

  const handleSliderChangeStock = (value) => {
    setTempStock(value);
  };
  const handleSliderChangeCompleteStock = (values) => {
    setSelectedStockValue(values); // this will trigger API via useEffect
  };

  const handleInputChangeStock = (e) => {
    const val = Number(e.target.value);
    if (val >= 0 && val <= maxStock) {
      setTempStock(val);
      setSelectedStockValue(val); // triggers API on manual entry
    }
  };

  const [expandedFilters, setExpandedFilters] = useState({});

  const toggleExpand = (filterId) => {
    setExpandedFilters((prev) => ({
      ...prev,
      [filterId]: !prev[filterId],
    }));
  };

  const clearAll = () => {
    setFilterCategorySelected([]);
    setSelectedStockValue(minStock);
    setSelectedRange([minPrice, maxPrice]);
  };

  return (
    
    <div className="col-xxl-2 col-xl-3 col-lg-4  col-md-12 col-sm-12 col-12">
      <div className="mobile-none">
        <div className="product-listing-left">
          <div className="head-filter" id="toggleButton">
            <h6 className="text-uppercase text-black ">Filters</h6>
            <a onClick={clearAll}>Clear ALL</a>
          </div>
          <div
            className="left_section_filter aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration={1500}
          >
            <div className="category_section">
              <h6>Price (Rs)</h6>

              <div style={{ width: "100%", marginTop: "1rem" }}>
                <Slider
                  range
                  min={minPrice}
                  max={maxPrice}
                  step={100}
                  value={tempRange}
                  allowCross={false}
                  onChange={handleSliderChange} // Live update slider
                  onChangeComplete={handleSliderChangeComplete}
                  trackStyle={[
                    { backgroundColor: "var(--color-3c57c6)", height: 6 },
                  ]}
                  handleStyle={[
                    {
                      borderColor: "var(--color-3c57c6)",
                      height: 20,
                      width: 20,
                    },
                    {
                      borderColor: "var(--color-3c57c6)",
                      height: 20,
                      width: 20,
                    },
                  ]}
                  railStyle={{ backgroundColor: "#ccc", height: 6 }}
                />
              </div>

              <div
                className="price-input"
                style={{ display: "flex", gap: "10px", marginTop: "1rem" }}
              >
                <div className="field" style={{ flex: 1 }}>
                  <input
                    type="number"
                    className="input-min"
                    value={tempRange[0]}
                    min={minPrice}
                    max={maxPrice}
                    onChange={(e) => handleInputChange(0, e.target.value)}
                  />
                </div>
                <div className="field" style={{ flex: 1 }}>
                  <input
                    type="number"
                    className="input-max"
                    value={tempRange[1]}
                    min={minPrice}
                    max={maxPrice}
                    onChange={(e) => handleInputChange(1, e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="category_section">
              <h6>Available Stock</h6>

              <div style={{ width: "100%", marginTop: "1rem" }}>
                <Slider
                  min={0}
                  max={maxStock}
                  value={tempStock}
                  step={10}
                  onChange={handleSliderChangeStock}
                  onChangeComplete={handleSliderChangeCompleteStock}
                  // onChangeComplete={handleSliderChangeStock}
                  trackStyle={{
                    backgroundColor: "var(--color-3c57c6)",
                    height: 6,
                  }}
                  handleStyle={{
                    borderColor: "var(--color-3c57c6)",
                    height: 20,
                    width: 20,
                  }}
                  railStyle={{ backgroundColor: "#ccc", height: 6 }}
                />
              </div>

              <div className="field" style={{ flex: 1 }}>
                <input
                  className="input-max"
                  type="number"
                  value={tempStock}
                  onChange={handleInputChangeStock}
                  min={0}
                  max={maxStock}
                />
              </div>
            </div>

            {filters?.list?.length > 0 &&
              filters.list.map((item, index) => {
                const isExpanded = expandedFilters[item.filter_id];
                const shouldShowToggle = item.filter_values.length > 5;
                const visibleItems = isExpanded
                  ? item.filter_values
                  : item.filter_values.slice(0, 5);

                return (
                  <div key={`filter-${index}`} className="category_section">
                    <h6 className="title">{item?.filter_name}</h6>
                    <div className="checkbox_container">
                      <ul>
                        {visibleItems.map((filter, i) => (
                          <li key={`filter-values-${i}`}>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="filter"
                                id={`filter-${item?.filter_id}-${filter?.id}`}
                                checked={
                                  filterCategorySelected
                                    .find(
                                      (val) =>
                                        val?.filter_id === item?.filter_id
                                    )
                                    ?.value?.includes(filter?.id) || false
                                }
                                onChange={(e) => {
                                  onhandlePress(
                                    item?.filter_id,
                                    filter?.id,
                                    e.target?.checked
                                  );
                                }}
                              />
                              <label
                                className="form-check-label"
                                htmlFor={`filter-${item?.filter_id}-${filter?.id}`}
                              >
                                {filter?.value}
                              </label>
                            </div>
                          </li>
                        ))}
                      </ul>
                      {shouldShowToggle && (
                        <div
                          className="view-all-toggle"
                          style={{
                            cursor: "pointer",
                            color: "#007bff",
                            marginTop: "5px",
                          }}
                          onClick={() => toggleExpand(item.filter_id)}
                        >
                          {isExpanded ? "Show Less" : "View All"}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div className="desktop-none">
        <button id="toggleDashboard" onClick={() => setShowFilter(!showFilter)}>
          Filters Toggle
        </button>
        {showFilter ? (
          <div className="product-listing-left" style={{}}>
            <div className="head-filter">
              <h6 className="text-uppercase text-black ">Filters</h6>
              <a onClick={clearAll}>Clear ALL</a>
            </div>
            <div className="left_section_filter">
              <div className="category_section">
                <h6>Price (Rs)</h6>

                <div style={{ width: "100%", marginTop: "1rem" }}>
                  <Slider
                    range
                    min={minPrice}
                    max={maxPrice}
                    step={100}
                    value={tempRange}
                    allowCross={false}
                    onChange={handleSliderChange} // Live update slider
                    onChangeComplete={handleSliderChangeComplete}
                    trackStyle={[
                      { backgroundColor: "var(--color-3c57c6)", height: 6 },
                    ]}
                    handleStyle={[
                      {
                        borderColor: "var(--color-3c57c6)",
                        height: 20,
                        width: 20,
                      },
                      {
                        borderColor: "var(--color-3c57c6)",
                        height: 20,
                        width: 20,
                      },
                    ]}
                    railStyle={{ backgroundColor: "#ccc", height: 6 }}
                  />
                </div>

                <div
                  className="price-input"
                  style={{ display: "flex", gap: "10px", marginTop: "1rem" }}
                >
                  <div className="field" style={{ flex: 1 }}>
                    <input
                      type="number"
                      className="input-min"
                      value={tempRange[0]}
                      min={minPrice}
                      max={maxPrice}
                      onChange={(e) => handleInputChange(0, e.target.value)}
                    />
                  </div>
                  <div className="field" style={{ flex: 1 }}>
                    <input
                      type="number"
                      className="input-max"
                      value={tempRange[1]}
                      min={minPrice}
                      max={maxPrice}
                      onChange={(e) => handleInputChange(1, e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="category_section">
                <h6>Available Stock</h6>

                <div style={{ width: "100%", marginTop: "1rem" }}>
                  <Slider
                    min={0}
                    max={maxStock}
                    value={tempStock}
                    step={10}
                    onChange={handleSliderChangeStock}
                    onChangeComplete={handleSliderChangeCompleteStock}
                    // onChangeComplete={handleSliderChangeStock}
                    trackStyle={{
                      backgroundColor: "var(--color-3c57c6)",
                      height: 6,
                    }}
                    handleStyle={{
                      borderColor: "var(--color-3c57c6)",
                      height: 20,
                      width: 20,
                    }}
                    railStyle={{ backgroundColor: "#ccc", height: 6 }}
                  />
                </div>

                <div className="field" style={{ flex: 1 }}>
                  <input
                    className="input-max"
                    type="number"
                    value={tempStock}
                    onChange={handleInputChangeStock}
                    min={0}
                    max={maxStock}
                  />
                </div>
              </div>
              {filters?.list?.length > 0 &&
                filters.list.map((item, index) => {
                  const isExpanded = expandedFilters[item.filter_id];
                  const shouldShowToggle = item.filter_values.length > 5;
                  const visibleItems = isExpanded
                    ? item.filter_values
                    : item.filter_values.slice(0, 5);

                  return (
                    <div key={`filter-${index}`} className="category_section">
                      <h6 className="title">{item?.filter_name}</h6>
                      <div className="checkbox_container">
                        <ul>
                          {visibleItems.map((filter, i) => (
                            <li key={`filter-values-${i}`}>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="filter"
                                  id={`filter-${item?.filter_id}-${filter?.id}`}
                                  checked={
                                    filterCategorySelected
                                      .find(
                                        (val) =>
                                          val?.filter_id === item?.filter_id
                                      )
                                      ?.value?.includes(filter?.id) || false
                                  }
                                  onChange={(e) => {
                                    onhandlePress(
                                      item?.filter_id,
                                      filter?.id,
                                      e.target?.checked
                                    );
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor={`filter-${item?.filter_id}-${filter?.id}`}
                                >
                                  {filter?.value}
                                </label>
                              </div>
                            </li>
                          ))}
                        </ul>
                        {shouldShowToggle && (
                          <div
                            className="view-all-toggle"
                            style={{
                              cursor: "pointer",
                              color: "#007bff",
                              marginTop: "5px",
                            }}
                            onClick={() => toggleExpand(item.filter_id)}
                          >
                            {isExpanded ? "Show Less" : "View All"}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default ProductFilterSection;
