import React, { FC } from "react";
import { Header } from "@/components/Header/Header";
import PromoImage1 from "@/assets/images/Promo-image.png";
import PromoImage2 from "@/assets/images/Promo-image2.jpg";
import PromoImage3 from "@/assets/images/Promo-image3.jpg";
import ServiceIcon1 from "@/assets/images/Service-icon1.png";
import ServiceIcon2 from "@/assets/images/Service-icon2.png";
import ServiceIcon3 from "@/assets/images/Service-icon3.png";
import ServiceIcon4 from "@/assets/images/Service-icon4.png";
import TestimonialAvatar from "@/assets/images/testimonials/TestimonialAvatar.png";
import { Button } from "@/components/Button/Button";
import { ChatIcon } from "@/components/Chat/ChatIcon";
import { TestimonialSlider } from "@/components/TestimonialSlider/TestimonialSlider";
import { Title } from "@/components/Title/Title";
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
          <h1 className="home__heading_hidden">
            Get the next level developments.
          </h1>
          <div className="home__promo-text">
            <h1 className="home__heading">
              <p className="home__heading-p">Get the next</p>
              <p className="home__heading-p">level developments.</p>
            </h1>
            <p className="home__promo-text-p">
              Every line of code we deliver is carefully crafted by our in-house
              team of professional developers. While constantly looking for new
              horizons, challenges, and opportunities in the web development, we
              have focused our attention on these core areas:
            </p>
            <div className="home__promo-buttons">
              <Button content={"Get a Quote"} />
              <Button content={"Schedule a call"} type="secondary" />
            </div>
          </div>
          <div className="home__promo-rectangle">
            <div className="home__rect-bottom" />
            <img
              src={PromoImage1}
              alt="software development process"
              className="home__rect-image"
            />
          </div>
        </section>
        <ChatIcon />
        <section>
          <h2 className="home__heading_hidden">Our Core Services</h2>
          <div className="home__services">
            <img
              src={PromoImage2}
              alt="office"
              className="home__services-image"
            />
            <div>
              <div className="home__services-description">
                <h2 className="home__services-heading">Our Core Services</h2>
                <p>
                  Our technology solutions are perfectly designed to ensure the
                  virtual world meets your needs.
                </p>
              </div>
              <div className="home__services-item">
                <img src={ServiceIcon1} alt="service icon" />
                <div className="home__services-item-description">
                  <h3 className="home__services-item-heading">
                    Web Development
                  </h3>
                  <p>
                    We convert any design file: PSD, Sketch, Figma, Adobe XD to
                    pixel-perfect, semantic, and standard-compliant HTML/CSS
                    templates.
                  </p>
                </div>
              </div>
              <div className="home__services-item">
                <img src={ServiceIcon2} alt="service icon" />
                <div className="home__services-item-description">
                  <h3 className="home__services-item-heading">
                    Mobile Applications
                  </h3>
                  <p>
                    We do highly customizable, easy-to-manage, and extendable
                    WordPress solutions. Plugins, themes, or an eCommerce. We
                    can do it.
                  </p>
                </div>
              </div>
              <div className="home__services-item">
                <img src={ServiceIcon3} alt="service icon" />
                <div className="home__services-item-description">
                  <h3 className="home__services-item-heading">
                    Shopify & Woo Commerce Development
                  </h3>
                  <p>
                    We know the ins and outs of Shopify & WooCommerce and we can
                    help you get your eCommerce site running in a matter of
                    weeks.
                  </p>
                </div>
              </div>
              <div className="home__services-item">
                <img src={ServiceIcon4} alt="service icon" />
                <div className="home__services-item-description">
                  <h3 className="home__services-item-heading">
                    Vue - React Development & Email Template Coding
                  </h3>
                  <p>
                    Performance, Scalability, Reusable Components, One Way Data
                    Flow - the perfect ingredients for building websites or web
                    apps; also high class coding for email marketing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2 className="home__heading_hidden">Partnership for agencies</h2>
          <div className="home__feature-card">
            <div className="home__feature-card-left">
              <img
                src={PromoImage3}
                alt="office"
                className="home__feature-card-image"
              />
            </div>
            <div className="home__feature-card-right">
              <div className="home__feature-card-line" />
              <h2 className="home__feature-card-heading">
                Partnership for agencies
              </h2>
              <p>
                A reliable coding partner that delivers solutions to your
                business challenges and stays by your side in the long term.
                Having the whole spectrum of web development expertise, we are
                here to take care of your projects while making it possible for
                you to focus on growing your own business.
              </p>
              <div className="home__feature-card-buttons">
                <Button content={"Partnership Details"} />
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2 className="home__heading_hidden">Testimonials</h2>
          <div className="home__testimonials">
            <div className="home__testimonials-desc">
              <Title
                children={<h2 className="heading-small">TESTIMONIALS</h2>}
              />
              <p>See how are clients feel about us.</p>
            </div>
            <TestimonialSlider
              testimonials={[
                {
                  content:
                    "Working with the PETRONG team has been a huge success! They're\n" +
                    "good people who care deeply about our business!",
                  avatarUrl: TestimonialAvatar,
                  name: "John Doe",
                  position: "CEO",
                  company: "Leonard Technologies",
                },
                {
                  content:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" +
                    " ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco" +
                    " laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in" +
                    " voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat" +
                    " non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                  avatarUrl: TestimonialAvatar,
                  name: "Eod Nhoj",
                  position: "Team Leader",
                  company: "Brain Dead Software",
                },
              ]}
            />
          </div>
        </section>
        <div className="home__about-pacioli">
          <Title children={<h2 className="heading-small">ABOUT PACIOLI</h2>} />
        </div>
        <section>
          <h2 className="home__heading_hidden">Petrong & Pacioli</h2>
          <div className="home__feature-card">
            <div className="home__feature-card-left">
              <img
                src={PromoImage3}
                alt="office"
                className="home__feature-card-image_second"
              />
            </div>
            <div className="home__feature-card-right_second">
              <h2 className="home__feature-card-heading">Petrong & Pacioli</h2>
              <p>
                Pacioli is the flagship product at petrong software solutions, a
                tailored digital lending tools that helps microfinance
                institutions to efficiently and quickly onboard customers and to
                account reconciliation with financial inclution as the
                motivation.
                <br />
                Pacioli improves female customers comfort with the service by
                specifically design for unique constraint.
              </p>
              <div className="home__feature-card-buttons">
                <Button content={"Pacioli"} />
                <Button content={"Demo Video"} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
