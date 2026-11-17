"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { siteConfig } from "@/content/site";
import { whatsappHref } from "@/lib/contact";
import {
  ArrowUpRightIcon,
  CloseIcon,
  MailIcon,
  MenuIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "./Icons";

const navLinks = [
  { label: "Servicios", href: "/#servicios" },
  { label: "Trabajos", href: "/#trabajos" },
  { label: "Empresa", href: "/#empresa" },
  { label: "Contacto", href: "/#contacto" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const burgerRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const menu = menuRef.current;
    const focusable = menu?.querySelectorAll<HTMLElement>("a[href], button");

    focusable?.[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        window.requestAnimationFrame(() => burgerRef.current?.focus());
        return;
      }

      if (event.key !== "Tab" || !focusable || focusable.length === 0) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <header className="site-header">
        <div className="container nav">
          <Link
            className="nav__brand"
            href="/"
            aria-label="Lozartico, ir al inicio"
            onClick={() => setOpen(false)}
          >
            <Image
              className="nav__logo"
              src="/images/logo-lozartico.webp"
              alt="Lozartico"
              width={800}
              height={219}
              priority
            />
          </Link>

          <nav className="nav__links" aria-label="Navegación principal">
            {navLinks.map((link) => (
              <Link key={link.href} className="nav__link" href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="nav__actions">
            <a className="nav__phone" href={`tel:${siteConfig.phone}`}>
              <PhoneIcon size={16} />
              <span>{siteConfig.phoneDisplay}</span>
            </a>
            <a
              className="btn btn--primary nav__cta"
              href={whatsappHref("Hola, quiero solicitar un presupuesto.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={18} />
              Presupuesto
            </a>
            <button
              className="nav__burger"
              type="button"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              ref={burgerRef}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <div className="nav__mobile" id="mobile-menu" ref={menuRef}>
          <nav className="nav__mobile-links" aria-label="Navegación móvil">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                className="nav__mobile-link"
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
                <ArrowUpRightIcon size={18} />
              </Link>
            ))}
          </nav>

          <div className="nav__mobile-contact">
            <a
              className="btn btn--primary btn--block"
              href={whatsappHref("Hola, quiero solicitar un presupuesto.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={18} />
              Pedir presupuesto por WhatsApp
            </a>
            <div className="nav__mobile-row">
              <a href={`tel:${siteConfig.phone}`}>
                <PhoneIcon size={18} />
                {siteConfig.phoneDisplay}
              </a>
              <a href={`mailto:${siteConfig.email}`}>
                <MailIcon size={18} />
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

