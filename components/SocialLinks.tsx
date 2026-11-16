import { siteConfig } from "@/content/site";
import { GoogleIcon, InstagramIcon, TikTokIcon } from "./Icons";

const socialLinks = [
  {
    label: "Instagram",
    href: siteConfig.instagramUrl,
    icon: InstagramIcon,
  },
  {
    label: "TikTok",
    href: siteConfig.tiktokUrl,
    icon: TikTokIcon,
  },
  {
    label: "Google",
    href: siteConfig.googleReviewsUrl,
    icon: GoogleIcon,
  },
];

type SocialLinksProps = {
  className?: string;
  label?: string;
};

export function SocialLinks({
  className,
  label = "Redes sociales",
}: SocialLinksProps) {
  return (
    <nav
      className={`social-links${className ? ` ${className}` : ""}`}
      aria-label={label}
    >
      {socialLinks.map((link) => {
        const Icon = link.icon;

        return (
          <a
            className="social-link"
            href={link.href}
            key={link.label}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon size={17} />
            {link.label}
          </a>
        );
      })}
    </nav>
  );
}
