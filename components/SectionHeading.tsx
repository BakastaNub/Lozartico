import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  text?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
  id?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
  as: Heading = "h2",
  id,
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`section-heading section-heading--${align} ${className}`.trim()}
      data-reveal
    >
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <Heading id={id}>{title}</Heading>
      {text ? <p>{text}</p> : null}
    </div>
  );
}
