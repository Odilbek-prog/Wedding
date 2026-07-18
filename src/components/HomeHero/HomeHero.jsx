import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

import "./HomeHero.scss";

import phoneVideo from "../../assets/videos/timeline.mp4";

import template1 from "../../assets/images/template1.jpg";
import template2 from "../../assets/images/template2.webp";
import template3 from "../../assets/images/template3.webp";
import template4 from "../../assets/images/template4.webp";
import template5 from "../../assets/images/template5.jpg";

function HomeHero() {
  const { t } = useTranslation();

  const videoRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current) return;

    videoRef.current.play().catch(() => {});
  }, []);

  const templates = [
    template1,
    template2,
    template3,
    template4,
    template5,
    template1,
    template2,
    template3,
    template4,
    template5,
  ];

  return (
    <section className="homeHero">
      <div className="homeHero__blur homeHero__blur--1"></div>

      <div className="homeHero__blur homeHero__blur--2"></div>

      <div className="homeHero__slider">
        <div className="homeHero__track">
          {[...templates, ...templates].map((image, index) => (
            <div className="homeHero__card" key={index}>
              <img src={image} alt="" />
            </div>
          ))}
        </div>
      </div>

      <div className="homeHero__container">
        <div className="homeHero__left">
          <span className="homeHero__badge">Premium Wedding Invitations</span>

          <h1>{t("home.title")}</h1>

          <p>{t("home.description")}</p>
        </div>

        <div className="homeHero__right">
          <div className="homeHero__phone">
            <div className="homeHero__phoneFrame">
              <div className="homeHero__dynamicIsland"></div>

              <div className="homeHero__screen">
                <video ref={videoRef} autoPlay muted loop playsInline>
                  <source src={phoneVideo} type="video/mp4" />
                </video>
              </div>
            </div>

            <div className="homeHero__phoneGlow"></div>
          </div>
          <a
            href="#templates"
            className="homeHero__button homeHero__button--primary"
          >
            {t("home.templates")}
          </a>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
