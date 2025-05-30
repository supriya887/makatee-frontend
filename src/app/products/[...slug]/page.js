import ProductListPage from "@/views/product/ProductListPage";
import React, { Suspense } from "react";

export default function () {
  return (
    <Suspense>
      <ProductListPage />
    </Suspense>
  );
}