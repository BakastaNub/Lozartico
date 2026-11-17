import type { Metadata } from "next";

import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ZonesSection } from "@/components/ZonesSection";
import { websiteSchema } from "@/lib/schema";
import { canonical, indexableRobots } from "@/lib/seo";

export const metadata: Metadata = {
  alternates: canonical("/"),
  robots: indexableRobots,
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <ProjectsSection />
      <AboutSection />
      <ZonesSection />
      <ReviewsSection />
      <ContactSection />
      <JsonLd data={[websiteSchema()]} />
    </>
  );
}
