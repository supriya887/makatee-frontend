import { productListApi } from "@/api";
import { WEBSITE_URL } from "@/utils/constants";
import ProductListPage from "@/views/product/ProductListPage";
import React, { Suspense } from "react";

export default function () {
  return (
    <Suspense>
      <ProductListPage />
    </Suspense>
  );
}

export async function generateMetadata({ params }) {
  let title = "Makatee";
  let description = "Makatee";
  let keywords = "Makatee";

  const { slug } = await params;

  const category_slug = slug[slug?.length - 1] || slug || "";

  const res = await productListApi({ category_slug: category_slug });

  if (res?.status == 1) {
    title = res?.data?.category?.seo_title || title;
    description = res?.data?.category?.seo_description || description;
    keywords =
      res?.data?.category?.seo_keywords
        ?.split(",")
        ?.map((item) => item?.trim()) || keywords;
  }

  if (res?.status == 1) {
    title = res?.data?.seo_title || title;
    description = res?.data?.seo_description || description;
    keywords =
      res?.data?.seo_keywords?.split(",")?.map((item) => item?.trim()) ||
      keywords;
  }

  return {
    title: title,
    description: description,
    keywords: keywords,
    alternates: {
      canonical: WEBSITE_URL + `uniform/${slug?.join("/")}`,
    },
    openGraph: {
      title,
      description,
      url: WEBSITE_URL + `uniform/${slug?.join("/")}`,
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