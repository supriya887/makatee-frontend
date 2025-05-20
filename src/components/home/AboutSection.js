import React from "react";

function AboutSection() {
  return (
    <section className="about-section section-space overflow-hidden">
      <div className="container">
        <div className="row">
          <div
            className="col-12 col-md-1 mx-auto mb-8"
            data-aos="zoom-in"
            data-aos-easing="ease-in"
          ></div>
          <div
            className="col-12 col-md-5 mx-auto mb-8 text-center"
            data-aos="fade-right"
            data-aos-offset={300}
            data-aos-easing="liner"
          >
            <img
              src="/assets/images/best-quality.png"
              alt=""
              className="quality-img"
            />
            <img
              src="/assets/images/about-img.png"
              className="img-fluid"
              alt=""
            />
          </div>
          <div
            className="col-12 col-md-6 mx-auto mb-8"
            data-aos="fade-left"
            data-aos-offset={300}
            data-aos-easing="liner"
          >
            <h3 className="section-heading">About Makatee</h3>
            <p>
              Welcome to Makatee – the online store for the champion in all of
              us. Get exclusive trophies, medals, and awards for events of all
              kinds, from grassroots sports clubs to corporate functions.
              Whether you're hosting a local competition or a prestigious
              corporate event, we’ve got the perfect award to celebrate every
              achievement.
            </p>
            <h4>Why Choose Makatee?</h4>
            <p>
              Customizable Awards: Personalize your trophies with your company
              logo or event design. We offer FREE engraving on all trophies, so
              your awards look exactly the way you want them to.
            </p>
            <p>
              Submit Your Artwork: Add a unique touch by submitting your custom
              artwork for custom glass awards or your very own acrylic trophy
              designs. We bring your vision to life!
            </p>
            <p>
              Wide Range of Corporate Awards: From bespoke glass trophies to
              engraved hip flasks and clocks, we offer a large selection of
              corporate awards. Plus, we’ll add your company logo FREE of
              charge!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
