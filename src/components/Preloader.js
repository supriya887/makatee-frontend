"use client";

import React from "react";
import Layout1 from "./layout/Layout1";
import Lottie from "lottie-react";
import loader from "../../public/assets/lottie/loader.json";

function Preloader() {
  return (
    <Layout1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 350
        }}
      >
        <Lottie
          animationData={loader}
          height={200}
          width={200}
          style={{ height: 200, width: 200 }}
          loop={true}
        />
      </div>
    </Layout1>
  );
}

export default Preloader;
