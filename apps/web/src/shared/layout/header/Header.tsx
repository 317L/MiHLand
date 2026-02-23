"use client";
import { AppLink } from "@/shared/ui/Links";
import { Button } from "@/shared/ui/button";
import { MihLogo } from "@/shared/ui/icon/icons";

const NAV_PRIMARY = [
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/technologies", label: "Technologies" },
  { href: "/case-studies", label: "Case studies" },
];

const NAV_SECONDARY = [
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
];

function Nav({ items }: { items: { href: string; label: string }[] }) {
  return (
    <ul className="flex items-center gap-6">
      {items.map(({ href, label }) => (
        <li key={href}>
          <AppLink
            href={href}
            variant="neutral"
            size="bodySm"
            className="font-normal opacity-90 hover:opacity-100"
          >
            {label}
          </AppLink>
        </li>
      ))}
    </ul>
  );
}
export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-bg-page">
      <div className="mx-auto flex h-14 max-w-[120rem] items-center justify-between px-6">
        <div className="flex items-center gap-24">
          <AppLink href="/" underline="none">
            <MihLogo className="h-6 w-auto text-black" />
          </AppLink>
          <nav aria-label="Primary navigation" className="hidden md:block">
            <Nav items={NAV_PRIMARY} />
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <nav aria-label="Secondary navigation" className="hidden md:block">
            <Nav items={NAV_SECONDARY} />
          </nav>

          <Button
            variant="inverse"
            size="sm"
            rounded="full"
            className="hidden md:inline-flex h-7 px-4 text-[13px]"
          >
            Contact
          </Button>

          <button
            className="md:hidden flex h-8 w-10 items-center justify-center rounded-md border border-border-default"
            aria-label="Open menu"
          >
            <span className="h-0.5 w-5 bg-text-primary" />
          </button>
        </div>
      </div>
    </header>
  );
}