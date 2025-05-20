import React, { Suspense } from "react";
import ForgotPasswordPage from "@/views/forgot-password/ForgotPasswordPage";

export default function () {
  return (
    <Suspense>
      <ForgotPasswordPage />
    </Suspense>
  );
}
