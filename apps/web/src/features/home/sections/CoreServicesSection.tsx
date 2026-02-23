import Link from "next/link";
import { CoreServicesCarousel, type ServiceCardItem } from "./CoreServicesCarousel.client";

// If your Button is exported from "@/shared/ui", use that instead.
import { Button } from "@/shared/ui/button";

const SERVICES: ServiceCardItem[] = [
  {
    title: "Custom development",
    href: "/services/custom-development",
    imageSrc: "/images/services/custom-development.png",
    imageAlt: "Custom development",
    description:
      "Web, mobile, and embedded builds with QA automation and measurable outcomes.",
  },
  {
    title: "DevOps & cloud (AWS)",
    href: "/services/devops-cloud",
    imageSrc: "/images/services/devops-cloud.png",
    imageAlt: "DevOps & cloud (AWS)",
    description:
      "CI/CD, IaC, monitoring, cost & security posture; migrations and HA/DR.",
  },
  {
    title: "Custom development",
    href: "/services/custom-development",
    imageSrc: "/images/services/custom-development.png",
    imageAlt: "Custom development",
    description:
      "Web, mobile, and embedded builds with QA automation and measurable outcomes.",
  },
  {
    title: "Systems & data integrations",
    href: "/services/integrations",
    imageSrc: "/images/services/integrations.png",
    imageAlt: "Systems & data integrations",
    description:
      "API-first orchestration for ERP/CRM/payments and telco stacks with auditable flows and SLAs.",
  },
  {
    title: "Systems & data integrations",
    href: "/services/integrations",
    imageSrc: "/images/services/integrations.png",
    imageAlt: "Systems & data integrations",
    description:
      "API-first orchestration for ERP/CRM/payments and telco stacks with auditable flows and SLAs.",
  },
  // add more services; carousel will loop smoothly
];

export function CoreServicesSection() {
  return (
    <section className="py-pad-section">
      <div className="mx-auto max-w-[var(--container-max)] px-pad-md">
        <div className="mb-gap-lg flex items-start justify-between gap-gap-md">
          <div className="max-w-[70ch]">
            <p className="text-sm text-muted-foreground">What we do</p>
            <h2 className="mt-gap-xs text-2xl font-semibold">
              We combine custom development, DevOps & cloud, integrations, AI, and cybersecurity into one delivery model.
            </h2>
          </div>

          {/* Top-right button like Figma */}
          <div className="pt-gap-xs">
            {/* If your Button supports asChild, this is best: */}

            <Link href="/services/devops-cloud" className="shrink-0">
              <Button type="button">
                Our workflow <span aria-hidden>→</span>
              </Button>
            </Link>

            {/* If your Button DOESN'T support asChild, use this instead:
            <Link href="/services/devops-cloud">
              <Button>Our workflow →</Button>
            </Link>
            */}
          </div>
        </div>

        <CoreServicesCarousel items={SERVICES}  />
      </div>
    </section>
  );
}
