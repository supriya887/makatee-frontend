import React, { Suspense } from "react";
import AboutUsPage from "@/views/policy/AboutUsPage";
import { aboutUsApi } from "@/api";
import { WEBSITE_URL } from "@/utils/constants";

export default function () {
  return (
    <Suspense>
      <AboutUsPage />
    </Suspense>
  );
}

export async function generateMetadata({ params }) {
  let title = "Makatee";
  let description = "Makatee";
  let keywords = "Makatee";

  const res = await aboutUsApi({});

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
      canonical: WEBSITE_URL + `about-us`,
    },
    openGraph: {
      title,
      description,
      url: WEBSITE_URL + "about-us",
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
