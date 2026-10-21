import { aboutUsApi } from "@/api";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

function AboutSection() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      // await getDataApi();
    }
    fetchData();
  }, []);

  // const getDataApi = async () => {
  //   let response = await aboutUsApi();

  //   if (response?.status == 1) {
  //     setData(response?.data);
  //     setLoading(false);
  //   } else {
  //     response?.error && toast.error(res?.error);
  //     setLoading(false);
  //   }
  //   setLoading(false);
  // };

  return (
    <section className="about-section section-space overflow-hidden "  >
      <div className="container">
        <div className="row">
          {/* <div
            className="col-12 col-md-1 mx-auto mb-8"
            data-aos="zoom-in"
            data-aos-easing="ease-in"
          ></div> */}
          <div
            className="col-12 col-md-5 mx-auto mb-8 text-center"
            data-aos="fade-right"
            data-aos-offset={300}
            data-aos-easing="liner"
          >
            {/* <img
              src="/assets/images/best-quality.png"
              alt=""
              className="quality-img"
            /> */}
            <img src={data?.pageimages} className="img-fluid" alt="" />
          </div>
          <div
            className="col-12 col-md-6 mx-auto mb-8"
            data-aos="fade-left"
            data-aos-offset={300}
            data-aos-easing="liner"
          >
            <h3 className="section-heading">About Makatee</h3>
            <div
              style={{ lineHeight: "22px" }}
              dangerouslySetInnerHTML={{ __html: data?.content }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
