import { Hero } from "@/components/hero/hero";
import { CredentialsStrip } from "@/components/sections/credentials-strip";
import { AboutPreview } from "@/components/sections/about-preview";
import { ProjectsPreview } from "@/components/sections/projects-preview";
import { SkillsPreview } from "@/components/sections/skills-preview";
import { ExperiencePreview } from "@/components/sections/experience-preview";
import { ContactCta } from "@/components/sections/contact-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <CredentialsStrip />
      <AboutPreview />
      <ProjectsPreview />
      <SkillsPreview />
      <ExperiencePreview />
      <ContactCta />
    </>
  );
}
