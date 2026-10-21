import React, { Suspense } from "react";
import HomePage from "@/views/home/HomePage";

export default function () {
  return (
    <Suspense>
      <HomePage />
    </Suspense>
  );
}