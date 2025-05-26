import React, { Suspense } from "react";
import AddressPage from "@/views/address/AddressPage";

export default function () {
  return (
    <Suspense>
      <AddressPage />
    </Suspense>
  );
}