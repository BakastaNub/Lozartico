import type { Metadata } from "next";

import { AboutSection } from "@/components/AboutSection";
import { ClientsSection } from "@/components/ClientsSection";
import { ContactSection } from "@/components/ContactSection";
import { CredentialsSection } from "@/components/CredentialsSection";
import { FaqSection } from "@/components/FaqSection";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { ProcessSection } from "@/components/ProcessSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TrustStrip } from "@/components/TrustStrip";
import { ZonesSection } from "@/components/ZonesSection";
import { homeFaqs } from "@/content/faqs";
import { faqPageSchema, websiteSchema } from "@/lib/schema";
import { canonical, indexableRobots } from "@/lib/seo";

export const metadata: Metadata = {
  alternates: canonical("/"),
  robots: indexableRobots,
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesSection />
      <ProjectsSection />
      <AboutSection />
      <ClientsSection />
      <CredentialsSection />
      <ProcessSection />
      <ZonesSection />
      <ReviewsSection />
      <FaqSection />
      <ContactSection />
      <JsonLd data={[websiteSchema(), faqPageSchema(homeFaqs)]} />
    </>
  );
}
