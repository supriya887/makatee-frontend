import React, { Suspense } from "react";
import CartPage from "@/views/cart/CartPage";

export default function () {
  return (
    <Suspense>
      <CartPage />
    </Suspense>
  );
}
