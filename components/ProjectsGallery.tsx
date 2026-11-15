"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

import type { Project } from "@/content/projects";
import {
  ArrowUpRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CloseIcon,
} from "./Icons";

type ProjectsGalleryProps = {
  projects: Project[];
};

export function ProjectsGallery({ projects }: ProjectsGalleryProps) {
  const [active, setActive] = useState<number | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);

  const close = useCallback(() => {
    setActive(null);
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  }, []);

  const move = useCallback(
    (direction: 1 | -1) => {
      setActive((current) => {
        if (current === null) {
          return current;
        }

        return (current + direction + projects.length) % projects.length;
      });
    },
    [projects.length],
  );

  useEffect(() => {
    if (active === null) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }

      if (event.key === "ArrowRight") {
        move(1);
      }

      if (event.key === "ArrowLeft") {
        move(-1);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [active, close, move]);

  const activeProject = active !== null ? projects[active] : null;
  const activeIndex = active ?? 0;

  return (
    <>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <article
            className="project-card"
            key={project.slug}
            data-reveal
            style={
              {
                "--reveal-delay": `${index * 70}ms`,
              } as CSSProperties
            }
          >
            <button
              className="project-card__button"
              type="button"
              onClick={(event) => {
                triggerRef.current = event.currentTarget;
                setActive(index);
              }}
            >
              <span className="sr-only">Ampliar proyecto: </span>
              <span className="project-card__media">
                <Image
                  className="project-card__image"
                  src={project.image.src}
                  alt={project.image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <span className="project-card__badge">{project.category}</span>
                <span className="project-card__zoom" aria-hidden="true">
                  <ArrowUpRightIcon size={18} />
                </span>
              </span>
              <span className="project-card__body">
                <span className="project-card__meta">
                  {project.location} · {project.year}
                </span>
                <span className="project-card__title">{project.title}</span>
                <span className="project-card__text">{project.description}</span>
              </span>
            </button>
          </article>
        ))}
      </div>

      {activeProject ? (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Proyecto: ${activeProject.title}`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              close();
            }
          }}
        >
          <div className="lightbox__panel">
            <button
              className="lightbox__close"
              type="button"
              onClick={close}
              aria-label="Cerrar galería"
              ref={closeRef}
            >
              <CloseIcon size={22} />
            </button>

            <div className="lightbox__media">
              <Image
                className="lightbox__image"
                src={activeProject.image.src}
                alt={activeProject.image.alt}
                width={activeProject.image.width}
                height={activeProject.image.height}
                sizes="(max-width: 900px) 90vw, 560px"
              />
            </div>

            <div className="lightbox__info">
              <div>
                <span className="lightbox__meta">
                  {activeProject.category} · {activeProject.location} ·{" "}
                  {activeProject.year}
                </span>
                <h3>{activeProject.title}</h3>
                <p>{activeProject.description}</p>
              </div>

              <div className="lightbox__nav">
                <button
                  type="button"
                  onClick={() => move(-1)}
                  aria-label="Proyecto anterior"
                >
                  <ChevronLeftIcon size={20} />
                </button>
                <span>
                  {activeIndex + 1} / {projects.length}
                </span>
                <button
                  type="button"
                  onClick={() => move(1)}
                  aria-label="Proyecto siguiente"
                >
                  <ChevronRightIcon size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
