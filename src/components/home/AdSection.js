import React from "react";

function AdSection({ ads }) {
  return (
    <section className="ad-section section-space">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-5 col-md-12">
            <a href="">
              <div className="ads-box">
                {/* <div className="ads-content">
                       <h4>Get Your Customised medal &amp; Trophy</h4>
                       <p>
                         Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                         Tenetur aliquid delectus hic asperiores commodi alias?
                       </p>
                     </div> */}
                <img src={ads?.[0]} className="img-fluid" />
              </div>
            </a>
          </div>
          <div className="col-12 col-lg-7 col-md-12">
            <div className="row">
              <div className="col-12 col-lg-7 col-md-12">
                <div className="ad-img-2">
                  <a href="">
                    <div className="ads-box">
                      {/* <div className="ads-content">
                             <h4>Get Your Customised medal &amp; Trophy</h4>
                             <p>
                               Lorem ipsum dolor, sit amet consectetur adipisicing
                               elit. Tenetur aliquid delectus hic asperiores
                               commodi alias?
                             </p>
                           </div> */}
                      <img src={ads?.[1]} className="img-fluid" />
                    </div>
                  </a>
                </div>
                <div className="ad-img-3">
                  <a href="">
                    <div className="ads-box">
                      {/* <div className="ads-content">
                             <h4>Get Your Customised medal &amp; Trophy</h4>
                             <p>
                               Lorem ipsum dolor, sit amet consectetur adipisicing
                               elit. Tenetur aliquid delectus hic asperiores
                               commodi alias?
                             </p>
                           </div> */}
                      <img src={ads?.[2]} className="img-fluid" />
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-12 col-lg-5 col-md-12">
                <a href="">
                  <div className="ad-img-4 ads-box">
                    {/* <div className="ads-content">
                           <h4>Get Your Customised medal &amp; Trophy</h4>
                           <p>
                             Lorem ipsum dolor, sit amet consectetur adipisicing
                             elit. Tenetur aliquid delectus hic asperiores commodi
                             alias?
                           </p>
                         </div> */}
                    <img src={ads?.[3]} className="img-fluid" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdSection;
