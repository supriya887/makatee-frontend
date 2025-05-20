import React, { Suspense } from "react";
import PrivacyPolicyPage from "@/views/policy/PrivacyPolicyPage";

export default function () {
  return (
    <Suspense>
      <PrivacyPolicyPage />
    </Suspense>
  );
}
