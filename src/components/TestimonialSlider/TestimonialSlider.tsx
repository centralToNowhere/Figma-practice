import React, { FC, useState } from "react";
import "./testimonialSlider.sass";

interface Testimonial {
  avatarUrl: string;
  content: string;
  name: string;
  position: string;
  company: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

export const TestimonialSlider: FC<TestimonialSliderProps> = (props) => {
  const [cardIndex, setCardIndex] = useState<number>(0);

  const currentTestimonial = props.testimonials[cardIndex];

  return (
    <div className="testimonial-slider">
      <div className="testimonial-card-container">
        <div className="testimonial-card">
          <img
            src={currentTestimonial.avatarUrl}
            alt="reviewer's avatar"
            className="testimonial-card__avatar"
          />
          <p className="testimonial-card__text">{currentTestimonial.content}</p>
          <p className="testimonial-card__reviewer-name">
            {currentTestimonial.name}
          </p>
          <div className="testimonial-card__company-info">
            <span className="testimonial-card__reviewer-position">
              {currentTestimonial.position}
            </span>
            <span className="testimonial-card__reviewer-company">
              {currentTestimonial.company}
            </span>
          </div>
        </div>
        <div className="testimonial-card-shadow" />
      </div>
      <div className="testimonial-arrows">
        <div
          className={`testimonial-arrow-prev${
            cardIndex === 0 ? "_disabled" : ""
          }`}
          onClick={() => {
            setCardIndex((prev) => {
              return prev - 1 >= 0 ? prev - 1 : 0;
            });
          }}
        />
        <div
          className={`testimonial-arrow-next${
            cardIndex === props.testimonials.length - 1 ? "_disabled" : ""
          }`}
          onClick={() => {
            setCardIndex((prev) => {
              return prev + 1 < props.testimonials.length
                ? prev + 1
                : props.testimonials.length - 1;
            });
          }}
        />
      </div>
    </div>
  );
};
