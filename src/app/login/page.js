import React, { Suspense } from "react";
import LoginPage from "@/views/login/LoginPage";

export default function () {
  return (
    <Suspense>
      <LoginPage />
    </Suspense>
  );
}