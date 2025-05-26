import React, { Suspense } from "react";
import DashboardPage from "@/views/dashboard/DashboardPage";

export default function () {
  return (
    <Suspense>
      <DashboardPage />
    </Suspense>
  );
}
