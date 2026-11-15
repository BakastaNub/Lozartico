import type { CSSProperties } from "react";

import { reviews } from "@/content/reviews";
import { siteConfig } from "@/content/site";
import { GoogleIcon, StarIcon } from "./Icons";
import { SectionHeading } from "./SectionHeading";

export function ReviewsSection() {
  return (
    <section className="section section--cream reviews" id="opiniones">
      <div className="container">
        <div className="section-head">
          <SectionHeading
            eyebrow="Opiniones"
            title="Clientes que repiten y recomiendan"
            text="La mejor forma de saber cómo trabajamos es escuchar a quien ya nos ha confiado su casa o su negocio."
          />
          <a
            className="section-link"
            href={siteConfig.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GoogleIcon size={18} />
            Ver opiniones en Google
          </a>
        </div>

        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <figure
              className="review-card"
              key={review.name}
              data-reveal
              style={
                {
                  "--reveal-delay": `${index * 80}ms`,
                } as CSSProperties
              }
            >
              <div
                className="review-card__stars"
                role="img"
                aria-label={`${review.rating} de 5 estrellas`}
              >
                {Array.from({ length: review.rating }).map((_, starIndex) => (
                  <StarIcon key={starIndex} size={17} />
                ))}
              </div>

              <blockquote>
                <p>{review.text}</p>
              </blockquote>

              <figcaption>
                <span className="review-card__avatar" aria-hidden="true">
                  {review.name.charAt(0)}
                </span>
                <span className="review-card__author">
                  <strong>{review.name}</strong>
                  <span>{review.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="reviews__note">
          Opiniones de clientes. Puedes consultar la ficha pública de Lozartico
          en Google para ver más.
        </p>
      </div>
    </section>
  );
}
