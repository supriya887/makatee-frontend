import React, { Suspense } from "react";
import OrderHistoryPage from "@/views/orders/OrderHistoryPage";

export default function () {
  return (
    <Suspense>
      <OrderHistoryPage />
    </Suspense>
  );
}