import React, { Suspense } from "react";
import TermsAndConditionPage from "@/views/policy/TermsAndConditionPage";
import { WEBSITE_URL } from "@/utils/constants";
import { termsAndConditionApi } from "@/api";

export default function () {
  return (
    <Suspense>
      <TermsAndConditionPage />
    </Suspense>
  );
}

export async function generateMetadata({ params }) {
  let title = "Makatee";
  let description = "Makatee";
  let keywords = "Makatee";

  const res = await termsAndConditionApi({});

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
      canonical: WEBSITE_URL + `terms-conditions`,
    },
    openGraph: {
      title,
      description,
      url: WEBSITE_URL + "terms-conditions",
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
