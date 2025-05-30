"use client";

import { productListApi } from "@/api";
import CustomDropdown from "@/components/custom/CustomDropdown";
import Layout1 from "@/components/layout/Layout1";
import ProductCard1 from "@/components/product/ProductCard1";
import ProductCard2 from "@/components/product/ProductCard2";
import ProductFilterSection from "@/components/product/ProductFilterSection";
import { TROPHY_HOME_ROUTE } from "@/utils/constants";
import { useParams, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { IoCartOutline, IoCloseSharp, IoHeartOutline } from "react-icons/io5";

function ProductListPage() {
  const params = useParams();

  const pathname = usePathname();

  const slug = params?.slug || "";

  const [formValues, setFormValues] = useState({});

  const [productData, setProductData] = useState({});

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductListApi();
  }, []);

  const getProductListApi = async () => {
    const res = await productListApi({
      category_slug: slug,
    });

    if (res?.status == 1) {
      setProductData(res?.data);
    } else {
      res?.error && toast.error(res?.error);
    }
    setLoading(false);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Layout1>
      <section className="product-listing-box">
        <div className="container section-space pt-0">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-box">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#">{productData?.category?.category_name || 'Trophies'}</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Crystal Trophies
                    </li>
                  </ol>
                </nav>
              </div>
              <div className="items-total">
                <strong>Crystal Trophies</strong>- 125487 items
              </div>
            </div>
            <div className="col-12">
              <div className="product-listing-section section-space">
                <div className="row">
                  <ProductFilterSection />
                  <div className="col-lg-9 col-md-12 col-sm-12 col-12">
                    <div className="product-listing-right">
                      <div className="right_section_filter_result">
                        <div className="top-row-right">
                          <div className="row">
                            <div className="col-12 col-md-3">
                              <div>
                                <CustomDropdown
                                  value={formValues?.sortBy}
                                  onChange={handleOnChange}
                                  className={"form-select"}
                                  options={[
                                    { id: "", label: "Sort by" },
                                    { id: 1, label: "Recommended" },
                                    { id: 2, label: "What's New" },
                                    { id: 3, label: "Popularity" },
                                    { id: 1, label: "Discount" },
                                    { id: 2, label: "Price:High to Low" },
                                    { id: 3, label: "Price:Low to High" },
                                  ]}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {loading ? (
                        <p>Loading.....</p>
                      ) : (
                        <>
                          {productData?.list?.length > 0 ? (
                            <div className="row">
                              {productData?.list?.map(
                                (product, productIndex) => {
                                  return (
                                    <div
                                      key={productIndex}
                                      className="col-md-4 col-sm-6 col-12 mb-3"
                                    >
                                      <ProductCard1 details={product} />
                                    </div>
                                  );
                                }
                              )}
                            </div>
                          ) : (
                            <p>No Product Found</p>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout1>
  );
}

export default ProductListPage;
