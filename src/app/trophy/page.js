import React, { Suspense } from "react";
import TrophyHomePage from "@/views/home/TrophyHomePage";

export default function () {
  return (
    <Suspense>
      <TrophyHomePage />
    </Suspense>
  );
}
