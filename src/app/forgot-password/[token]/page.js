import React, { Suspense } from "react";
import ResetPasswordPage from "@/views/reset-password/ResetPasswordPage";

export default function () {
  return (
    <Suspense>
      <ResetPasswordPage />
    </Suspense>
  );
}
