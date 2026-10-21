"use client";

import { searchProductListApi } from "@/api";
import Pagination from "@/components/custom/Pagination";
import Layout1 from "@/components/layout/Layout1";
import ProductCard1 from "@/components/product/ProductCard1";
import SearchProductLoader from "@/components/product/SearchProductLoader";
import Lottie from "lottie-react";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import React, { useEffect, useState, useRef } from "react";
import toast from "react-hot-toast";
import loader from "../../../public/assets/lottie/loader.json";

function SearchProductListPage() {
  const params = useParams();

  const pathname = usePathname();

  const router = useRouter();

  const searchParams = useSearchParams();

  const urlParams = new URLSearchParams(searchParams);

  const [productData, setProductData] = useState({});
  const [productList, setProductList] = useState([]);

  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const isFetchingRef = useRef(false);
  const isLoadingNextPageRef = useRef(false);

  // Fetch data when page changes
  useEffect(() => {
    if (isFetchingRef.current) return;

    const fetchData = async () => {
      setIsLoading(true);
      isFetchingRef.current = true;
      await getProductListApi(page);
      setIsLoading(false);
      isFetchingRef.current = false;
      isLoadingNextPageRef.current = false;
    };

    fetchData();
  }, [page]);

  // Infinite scroll detection
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const windowHeight = window.innerHeight;
          const documentHeight = document.documentElement.scrollHeight;
          const scrollBottom = scrollTop + windowHeight;
          const threshold = 500; // 500px before bottom
          
          const isNearBottom = scrollBottom >= documentHeight - threshold;

          if (isNearBottom && !isLoading && !isFetchingRef.current && !isLoadingNextPageRef.current) {
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
  }, [isLoading, page, productData?.total_pages]);

  useEffect(() => {
    if (isFetchingRef.current) return;
    setPage(1); // Reset page when search params change
  }, [
    searchParams.get("category"),
    searchParams.get("search_term"),
    searchParams.get("search_type"),
  ]);

  const getProductListApi = async (pageNum = null) => {
    const pageToUse = pageNum || page;
    const res = await searchProductListApi({
      category_slug: urlParams.get("category"),
      search_term: urlParams.get("search_term"),
      page: pageToUse,
      search_type: urlParams?.get("search_type"),
    });

    if (res?.status == 1) {
      if (pageToUse > 1) {
        // Append for infinite scroll
        setProductList((prev) => [...prev, ...(res?.data?.list || [])]);
      } else {
        // Replace for new search
        setProductData(res?.data);
        setProductList(res?.data?.list || []);
      }
    } else {
      res?.error && toast.error(res?.error);
    }
    setLoading(false);
  };

  const handlePageClick = (p) => {
    let page = p;
    urlParams.set("page", page);
    router.push(`${pathname}?${urlParams.toString()}`);
  };

  if (loading)
    return (
      <Layout1>
        <SearchProductLoader />
      </Layout1>
    );
  return (
    <Layout1>
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
                        // const isLast = index === productData?.breadcrums?.length - 1;
                        return (
                          <li
                            key={index}
                            className={`breadcrumb-item`}
                            // aria-current={isLast ? 'page' : undefined}
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
          <div className="row">
            <div className="col-12">
              <div className="items-total">
                <strong>Products</strong>- {productData?.total_records} items
              </div>
              <div className="product-listing-section section-space">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="product-listing-right">
                      {productList?.length > 0 ? (
                        <div className="row">
                          {productList?.map((product, productIndex) => {
                            return (
                              <div
                                key={productIndex}
                                className="col-xxl-2 col-xl-3 col-sm-4 col-6 mb-3"
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

export default SearchProductListPage;
