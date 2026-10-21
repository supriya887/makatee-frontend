import React, { Suspense } from "react";
import VideosPage from "@/views/product/VideosPage";

export default function () {
  return (
    <Suspense>
     <VideosPage />
    </Suspense>
  );
}
