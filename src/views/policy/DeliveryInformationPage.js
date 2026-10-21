"use client";

import { deliveryInformationApi } from "@/api";
import Layout1 from "@/components/layout/Layout1";
import Preloader from "@/components/Preloader";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

function DeliveryInformationPage() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      await getDataApi();
    }
    fetchData();
  }, []);

  const getDataApi = async () => {
    let response = await deliveryInformationApi();

    if (response?.status == 1) {
      setData(response?.data?.content);
      setLoading(false);
    } else {
      response?.error && toast.error(res?.error);
      setLoading(false);
    }
    setLoading(false);
  };

  if (loading) return <Preloader />;

  return (
    <Layout1>
      <section className="policy-page section-space">
        <div className="container">
          <div className="row ">
            <div className="col-12 col-md-10 col-lg-8 mx-auto ">
              <h4 className="mb-4 pb-4 text-center">Delivery Information </h4>
              <div
                style={{ lineHeight: "22px" }}
                dangerouslySetInnerHTML={{ __html: data }}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout1>
  );
}

export default DeliveryInformationPage;
