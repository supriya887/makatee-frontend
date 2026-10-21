import React, { Suspense } from "react";
import SearchProductListPage from "@/views/product/SearchProductListPage";
import { WEBSITE_URL } from "@/utils/constants";
import { searchProductListApi } from "@/api";

export default function () {
  return (
    <Suspense>
      <SearchProductListPage />
    </Suspense>
  );
}

export async function generateMetadata({ params }) {
  let title = "Makatee";
  let description = "Makatee";
  let keywords = "Makatee";

  const res = await searchProductListApi({});

  if (res?.status == 1) {
    title = res?.data?.seo_title || title;
    description = res?.data?.seo_description || description;
    keywords =
      res?.data?.seo_keywords?.split(",").map((item) => item?.trim()) ||
      keywords;
  }

  return {
    title: title,
    description: description,
    keywords: keywords,
    alternates: {
      canonical: WEBSITE_URL + `search`,
    },
    openGraph: {
      title,
      description,
      url: WEBSITE_URL + "search",
      siteName: "Makatee",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}