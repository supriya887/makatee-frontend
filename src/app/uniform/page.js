import React, { Suspense } from "react";
import UniformHomePage from "@/views/home/UniformHomePage";

export default function () {
  return (
    <Suspense>
      <UniformHomePage />
    </Suspense>
  );
}
