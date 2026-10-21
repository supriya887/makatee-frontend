"use client";

import { filterListApi, productListApi } from "@/api";
import Pagination from "@/components/custom/Pagination";
import MenuContainerDesktop from "@/components/header/MenuContainerDesktop";
import MenuContainerMobile from "@/components/header/MenuContainerMobile";
import Layout1 from "@/components/layout/Layout1";
import ProductCard1 from "@/components/product/ProductCard1";
import ProductFilterSection from "@/components/product/ProductFilterSection";
import ProductListLoader from "@/components/product/ProductListLoader";
import { TROPHY_HOME_ROUTE, UNIFORM_HOME_ROUTE } from "@/utils/constants";
import Lottie from "lottie-react";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import React, { useEffect, useState, useRef } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import loader from "../../../public/assets/lottie/loader.json";

function ProductListPage() {
  const { menuCategories } = useSelector((state) => state.category);

  const params = useParams();

  const pathname = usePathname();

  const router = useRouter();

  const slug = params?.slug || "";

  const searchParams = useSearchParams();

  const urlParams = new URLSearchParams(searchParams);

  const sortByValue = urlParams.get("sort_by");

  const [productData, setProductData] = useState({});
  const [productList, setProductList] = useState([]);

  const [loading, setLoading] = useState(true);

  const [filterList, setFilterList] = useState({});
  const [selectedFilter, setSelectedFilter] = useState([]);

  const [selectedRange, setSelectedRange] = useState([0, 0]);
  const [stockValue, setStockValue] = useState(1);

  const [page, setPage] = useState(parseInt(urlParams.get("page")) || 1);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const isLoadingNextPageRef = useRef(false);

  // Reset page when filters change
  useEffect(() => {
    if (page !== 1) {
      setPage(1);
    }
  }, [
    JSON.stringify(selectedFilter),
    sortByValue,
    selectedRange[0],
    selectedRange[1],
    stockValue,
  ]);

  // Fetch data when page changes
  useEffect(() => {
    if (isFetching) return;

    const fetchData = async () => {
      setIsFetching(true);
      setIsLoading(true);
      await getProductListApi(page);
      setIsLoading(false);
      setIsFetching(false);
      isLoadingNextPageRef.current = false;
    };

    fetchData();
  }, [
    page,
    JSON.stringify(selectedFilter),
    sortByValue,
    selectedRange[0],
    selectedRange[1],
    stockValue,
  ]);

  // Infinite scroll detection
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;
          const windowHeight = window.innerHeight;
          const documentHeight = document.documentElement.scrollHeight;
          const scrollBottom = scrollTop + windowHeight;
          const threshold = 500; // 500px before bottom

          const isNearBottom = scrollBottom >= documentHeight - threshold;

          if (
            isNearBottom &&
            !isLoading &&
            !isFetching &&
            !isLoadingNextPageRef.current
          ) {
            const currentPage = page;
            const totalPages = productData?.total_pages || 1;

            if (currentPage < totalPages) {
              isLoadingNextPageRef.current = true;
              setPage((prev) => prev + 1);
            }
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading, isFetching, page, productData?.total_pages]);

  useEffect(() => {
    getFilterList();
  }, []);

  const getProductListApi = async (pageNum = null) => {
    const pageToUse = pageNum || page;
    const res = await productListApi({
      category_slug: slug?.length > 0 ? slug[slug?.length - 1] : slug || "",
      filters: selectedFilter,
      sort_by: sortByValue,
      min_price: selectedRange[0],
      max_price: selectedRange[1],
      max_stock: stockValue,
      page: pageToUse,
    });

    if (res?.status == 1) {
      if (pageToUse > 1) {
        // Append for infinite scroll
        setProductList((prev) => [...prev, ...(res?.data?.list || [])]);
      } else {
        // Replace for new search/filter
        setProductData(res?.data);
        setProductList(res?.data?.list || []);
      }
    } else {
      res?.error && toast.error(res?.error);
    }
    setLoading(false);
  };

  const getFilterList = async () => {
    const res = await filterListApi({
      category_slug: slug?.length > 0 ? slug[slug?.length - 1] : slug || "",
    });

    if (res?.status == 1) {
      setFilterList(res?.data);
    }
  };

  const onSortChange = (sortValue) => {
    urlParams.set("sort_by", sortValue);
    router.push(`${pathname}?${urlParams.toString()}`);
  };

  const handlePageClick = (p) => {
    let page = p;
    urlParams.set("page", page);
    router.push(`${pathname}?${urlParams.toString()}`);
  };

  if (loading)
    return (
      <Layout1>
        <ProductListLoader />
      </Layout1>
    );

  return (
    <Layout1
      categoryMenu={
        menuCategories?.trophy_categories?.length > 0 ||
        menuCategories?.uniform_categories?.length > 0
          ? true
          : false
      }
      categoryList={
        productData?.category?.slug == TROPHY_HOME_ROUTE
          ? menuCategories?.trophy_categories
          : productData?.category?.slug == UNIFORM_HOME_ROUTE
          ? menuCategories?.uniform_categories
          : []
      }
    >
      <section className="breadcrumb-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-box">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    {productData?.breadcrums &&
                    Array.isArray(productData?.breadcrums) ? (
                      productData?.breadcrums?.map((breadcrumb, index) => {
                        const isLast =
                          index === productData?.breadcrums?.length - 1;
                        return (
                          <li
                            key={index}
                            className={`breadcrumb-item ${
                              isLast ? "active" : ""
                            }`}
                            aria-current={isLast ? "page" : undefined}
                          >
                            {breadcrumb?.url && breadcrumb?.url !== "" ? (
                              <a href={breadcrumb.url}>{breadcrumb.title}</a>
                            ) : (
                              <span>{breadcrumb.title}</span>
                            )}
                          </li>
                        );
                      })
                    ) : (
                      <li className="breadcrumb-item">
                        <a href="/">Home</a>
                      </li>
                    )}
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="product-listing-box">
        <div className="container section-space">
          <div className="row pt-15">
            <div className="col-12">
              <div className="items-total">
                Showing &nbsp;
                <strong>
                  {productData?.breadcrums?.length > 0
                    ? productData?.breadcrums[
                        productData?.breadcrums?.length - 1
                      ]?.title
                    : productData?.breadcrums || "Items"}
                </strong>{" "}
                - {productData?.total_records} results
              </div>
            </div>
            <div className="col-12">
              <div className="product-listing-section section-space">
                <div className="row">
                  <ProductFilterSection
                    filters={filterList}
                    onPress={(e) => setSelectedFilter(e)}
                    onRangeSelect={(e) => setSelectedRange(e)}
                    onSelectedStockValue={(e) => setStockValue(e)}
                  />
                  <div className="col-xxl-10 col-xl-9 col-lg-8 col-md-12 col-sm-12 col-12">
                    <div className="product-listing-right">
                      <div className="right_section_filter_result">
                        <div className="top-row-right">
                          <div className="row justify-content-end">
                            <div className="col-12 col-md-3 col-xxl-2">
                              <div>
                                <select
                                  className={"form-select"}
                                  onChange={(e) => onSortChange(e.target.value)}
                                  defaultValue={sortByValue}
                                >
                                  <option value="">Sort by</option>
                                  <option value="price_desc">
                                    Price - High to Low
                                  </option>
                                  <option value="price_asc">
                                    Price - Low to High
                                  </option>
                                </select>
                                {/* <CustomDropdown
                                  value={sortByValue}
                                  onChange={(e) => onSortChange(e.target.value)}
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
                                /> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {productList?.length > 0 ? (
                        <div className="row">
                          {productList?.map((product, productIndex) => {
                            return (
                              <div
                                key={productIndex}
                                className="col-xxl-3 col-sm-4 col-6 mb-5"
                              >
                                <ProductCard1 details={product} />
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        <p>No Product Found</p>
                      )}
                    </div>

                    {isLoading && (
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Lottie
                          animationData={loader}
                          height={50}
                          width={50}
                          style={{ height: 50, width: 50 }}
                          loop={true}
                        />
                      </div>
                    )}

                    {/* <Pagination
                      page={productData?.page}
                      total_pages={productData?.total_pages}
                      per_page={productData?.per_page}
                      onChange={handlePageClick}
                    /> */}
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
