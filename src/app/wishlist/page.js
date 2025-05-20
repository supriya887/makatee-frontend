import React, { Suspense } from "react";
import WishlistPage from "@/views/wishlist/WishlistPage";

export default function () {
  return (
    <Suspense>
      <WishlistPage />
    </Suspense>
  );
}
