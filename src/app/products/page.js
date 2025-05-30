import React, { Suspense } from "react";
import ProductListPage from "@/views/product/ProductListPage";

export default function () {
  return (
    <Suspense>
      <ProductListPage />
    </Suspense>
  );
}