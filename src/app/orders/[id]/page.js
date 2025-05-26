import React, { Suspense } from "react";
import OrderDetailPage from "@/views/orders/OrderDetailPage";

export default function () {
  return (
    <Suspense>
      <OrderDetailPage />
    </Suspense>
  );
}