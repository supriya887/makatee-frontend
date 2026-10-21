import React, { Suspense } from "react";
import ProductDetailsPage from "@/views/product/ProductDetailsPage";
import { productDetailsApi } from "@/api";
import { WEBSITE_URL } from "@/utils/constants";

export default function () {
  return (
    <Suspense>
      <ProductDetailsPage />
    </Suspense>
  );
}

export async function generateMetadata({ params }) {
  let title = "Makatee";
  let description = "Makatee";
  let keywords = "Makatee";

  const { slug } = await params;


  const res = await productDetailsApi({ slug: slug });

  if (res?.status == 1) {
    title = res?.data?.seo_title || title;
    description = res?.data?.seo_description || description;
    keywords =
      res?.data?.seo_keywords
        ?.split(",")
        ?.map((item) => item?.trim()) || keywords;
  }

  return {
    title: title,
    description: description,
    keywords: keywords,
    alternates: {
      canonical: WEBSITE_URL + `product/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: WEBSITE_URL + `product/${slug}`,
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