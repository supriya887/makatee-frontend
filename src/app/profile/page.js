import ProfilePage from "@/views/dashboard/ProfilePage";
import React, { Suspense } from "react";

export default function () {
  return (
    <Suspense>
      <ProfilePage />
    </Suspense>
  );
}