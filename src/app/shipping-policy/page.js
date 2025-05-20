import React, { Suspense } from "react";
import ShippingPolicyPage from "@/views/policy/ShippingPolicyPage";

export default function () {
  return (
    <Suspense>
      <ShippingPolicyPage />
    </Suspense>
  );
}
