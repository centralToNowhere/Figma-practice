import React, { FC } from "react";
import { Header } from "@/components/Header/Header";
import PromoImage from "@/assets/images/Promo-image.png";
import { Button } from "@/components/Button/Button";
import "./homepage.sass";

export const Homepage: FC = () => {
  return (
    <>
      <div className="decoration">
        <div className="decoration__dark-rect" />
        <div className="decoration__rect-right" />
      </div>
      <Header homepage={true} />
      <main className="home">
        <section className="home__promo-section">
          <div className="home__promo-text">
            <h1 className="home__heading">{`Get the next
level developments.`}</h1>
            <p className="home__text">
              Every line of code we deliver is carefully crafted by our in-house
              team of professional developers. While constantly looking for new
              horizons, challenges, and opportunities in the web development, we
              have focused our attention on these core areas:
            </p>
            <div className="home__buttons">
              <Button content={"Get a Quote"} type="secondary" />
              <Button content={"Schedule a call"} />
            </div>
          </div>
          <div className="home__rect-bottom" />
          <img
            src={PromoImage}
            alt="software development process"
            className="home__rect-image"
          />
        </section>
      </main>
    </>
  );
};
