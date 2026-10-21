"use client";

import { videoApi } from "@/api";
import Layout1 from "@/components/layout/Layout1";
import SearchProductLoader from "@/components/product/SearchProductLoader";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

function VideosPage() {
  const params = useParams();

  const pathname = usePathname();

  const router = useRouter();

  const searchParams = useSearchParams();

  const urlParams = new URLSearchParams(searchParams);

  const [videoList, setVideoList] = useState({});

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getVideoListApi();
  }, [urlParams.toString()]);

  const getVideoListApi = async () => {
    const res = await videoApi({
      page: urlParams.get("page"),
    });

    if (res?.status == 1) {
      setVideoList(res?.videos);
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
      <section className="product-listing-box">
        <div className="container section-space pt-0">
          <div className="row">
            <div className="col-12">
              <div className="items-total mt-3">
                <strong>Videos</strong>- {videoList?.length} items
              </div>
            </div>
            <div className="col-12">
              <div className="product-listing-section section-space">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="product-listing-right">
                      {videoList?.length > 0 ? (
                        <div className="row">
                          {videoList?.map((el, i) => {
                            return (
                              <div
                                key={i}
                                className="col-md-3 col-sm-4 col-12 mb-3"
                              >
                                <div className="showcase-card">
                                  <div className="showcase-top">
                                    <div className="showcase-img">
                                      <iframe
                                        width="100%"
                                        height={300}
                                        src={el?.video_url}
                                        title="YouTube video player"
                                        frameBorder={0}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen=""
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        <p>No Videos Found</p>
                      )}
                    </div>

                    {/* <Pagination
                      page={videoList?.page}
                      totalPages={videoList?.total_pages}
                      per_page={videoList?.per_page}
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

export default VideosPage;
