import React, { Suspense } from "react";
import ShippingPolicyPage from "@/views/policy/ShippingPolicyPage";
import { WEBSITE_URL } from "@/utils/constants";
import { shippingPolicyApi } from "@/api";

export default function () {
  return (
    <Suspense>
      <ShippingPolicyPage />
    </Suspense>
  );
}

export async function generateMetadata({ params }) {
  let title = "Makatee";
  let description = "Makatee";
  let keywords = "Makatee";

  const res = await shippingPolicyApi({});

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
      canonical: WEBSITE_URL + `shipping-policy`,
    },
    openGraph: {
      title,
      description,
      url: WEBSITE_URL + "shipping-policy",
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