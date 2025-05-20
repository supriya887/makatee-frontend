import React, { Suspense } from "react";
import CheckoutPage from "@/views/checkout/CheckoutPage";

export default function () {
  return (
    <Suspense>
      <CheckoutPage />
    </Suspense>
  );
}