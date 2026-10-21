import React, { Suspense } from "react";
import TrophyHomePage from "@/views/home/TrophyHomePage";
import { TROPHY_HOME_ROUTE } from "@/utils/constants";

export default function () {
  return (
    <Suspense>
      <TrophyHomePage type={TROPHY_HOME_ROUTE}/>
    </Suspense>
  );
}
