import PaymentMethodPage from "@/views/checkout/PaymentMethodPage";
import React, { Suspense } from "react";

export default function () {
  return (
    <Suspense>
      <PaymentMethodPage />
    </Suspense>
  );
}
