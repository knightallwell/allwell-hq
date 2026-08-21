import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { CertGallery } from "@/components/certifications/cert-gallery";
import { certifications, credlyUrl, credlySkillsUrl } from "@/lib/data/certifications";

const count = certifications.length;

export const metadata: Metadata = {
  title: "Certifications",
  description: `${count} professional certifications and badges from WorldQuant University, IBM, Google, Wharton, Cisco and Nexford University.`,
};

export default function CertificationsPage() {
  return (
    <Section
      eyebrow="Credentials"
      title="Certifications"
      description={
        <>
          {count} credentials, most tagged with Credly-verified skills — Professional Certificates
          and Honors distinctions first, the rest below. Search by skill, e.g.
          &ldquo;PyTorch&rdquo; or &ldquo;Quantitative Finance&rdquo;.{" "}
          <a
            href={credlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-4 hover:opacity-80"
          >
            View the full verified badge wallet
          </a>{" "}
          or the{" "}
          <a
            href={credlySkillsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-4 hover:opacity-80"
          >
            Skills Wallet
          </a>{" "}
          on Credly.
        </>
      }
    >
      <CertGallery />
    </Section>
  );
}
