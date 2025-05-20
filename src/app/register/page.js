import React, { Suspense } from "react";
import RegisterPage from "@/views/register/RegisterPage";

export default function () {
  return (
    <Suspense>
      <RegisterPage />
    </Suspense>
  );
}
