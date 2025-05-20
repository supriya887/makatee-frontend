import React, { Suspense } from "react";
import TermsAndConditionPage from "@/views/policy/TermsAndConditionPage";

export default function () {
  return (
    <Suspense>
      <TermsAndConditionPage />
    </Suspense>
  );
}
