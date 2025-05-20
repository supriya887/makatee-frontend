import React, { Suspense } from "react";
import AddAddressPage from "@/views/address/AddAddressPage";

export default function () {
  return (
    <Suspense>
      <AddAddressPage />
    </Suspense>
  );
}