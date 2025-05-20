import React, { Suspense } from "react";
import ProductDetailsPage from "@/views/product/ProductDetailsPage";

export default function () {
  return (
    <Suspense>
      <ProductDetailsPage />
    </Suspense>
  );
}