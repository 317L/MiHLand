import Link from "next/link";
import { FooterNewsletter } from "./FooterNewsletter.client";
import {
  footerCta,
  footerColumns,
  footerLegalLinks,
  footerLocations,
  footerMeta,
  footerSocial,
} from "./footer.data";
import { IECIcon, ISOIcon, LanguageIcon, MihLogo } from "@/shared/ui/icon/icons";

type FooterLink = { href: string; label: string; external?: boolean };
type FooterColumn = { title: string; links: FooterLink[] };

const HEADING =
  "font-sans text-[14px] font-normal leading-normal text-[var(--semantic-action-inverse-inverse,#111)]";
const LINK =
  "inline-block text-xs leading-4 text-[var(--semantic-action-inverse-inverse,#111)] no-underline hover:underline";

function splitGroups(lines: string[]) {
  const out: string[][] = [];
  let cur: string[] = [];
  for (const line of lines) {
    if (!line.trim()) {
      if (cur.length) out.push(cur);
      cur = [];
    } else {
      cur.push(line);
    }
  }
  if (cur.length) out.push(cur);
  return out;
}

const servicesIndustries: FooterColumn[] = footerColumns.filter(
  (c) => c.title === "Services" || c.title === "Industries",
);

const techCaseAbout: FooterColumn[] = footerColumns.filter(
  (c) => c.title === "Technologies" || c.title === "Case studies" || c.title === "About us",
);

const locationGroups = splitGroups(footerLocations.lines);

function SmartLink({
  href,
  external,
  className,
  children,
}: {
  href: string;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={className}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer noopener" : undefined}
    >
      {children}
    </Link>
  );
}

function LinksList({ links }: { links: FooterLink[] }) {
  return (
    <ul className="m-0 grid list-none gap-1 p-0">
      {links.map((l) => (
        <li key={l.href} className="leading-4">
          <SmartLink href={l.href} external={l.external} className={LINK}>
            {l.label}
          </SmartLink>
        </li>
      ))}
    </ul>
  );
}

function ColumnBlock({ c }: { c: FooterColumn }) {
  return (
    <div>
      <div className={HEADING}>{c.title}</div>
      <LinksList links={c.links} />
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden text-text-primary" aria-label="Site footer">
      <div aria-hidden="true" className="footer-gradient pointer-events-none absolute inset-0" />

      <div className="relative mx-auto w-full max-w-480 px-4 py-20 sm:px-6 md:px-8">
        <section className="flex flex-col items-center text-center pb-24" aria-labelledby="footer-cta">
          <h2
            id="footer-cta"
            className="text-[3.5rem] font-medium leading-16 tracking-[-0.07rem] text-center"
          >
            Let’s talk about your <br /> next big project
          </h2>

          <p className="mt-5 text-[1.5rem] leading-7 tracking-[-0.015rem]">
            {footerCta.leadLines[0]} <br /> {footerCta.leadLines[1]}
          </p>

          <p className="mt-8 max-w-[68ch] text-sm">{footerCta.note}</p>

          <div className="mt-8">
            <SmartLink
              href={footerCta.button.href}
              className="inline-flex items-center gap-2 rounded-full bg-action-primary px-6 py-3 text-action-primaryText hover:opacity-90"
            >
              {footerCta.button.label}
              <span aria-hidden="true">→</span>
            </SmartLink>
          </div>
        </section>

        <section className="flex flex-col gap-6" aria-label="Footer links and information">
          <div className="grid grid-cols-12 items-start gap-x-12 gap-y-10">
            <div className="col-span-12 flex w-full max-w-116 flex-col items-start gap-12 lg:col-span-4">
              <MihLogo className="h-10 w-auto text-(--semantic-action-inverse-inverse,#111)" />

              <div className="flex w-full flex-col items-start gap-6">
                <p className="text-sm text-(--semantic-action-inverse-inverse,#111)">
                  {footerMeta.newsletterText}
                </p>

                <FooterNewsletter />
              </div>
            </div>

            <div className="col-span-12 grid grid-cols-12 items-start gap-x-12 gap-y-10 lg:col-span-8">
              <nav className="col-span-12 sm:col-span-6 xl:col-span-4" aria-label="Services and industries">
                <div className="mx-auto w-full max-w-85">
                  <div className="flex flex-col gap-8">
                    {servicesIndustries.map((c) => (
                      <ColumnBlock key={c.title} c={c} />
                    ))}
                  </div>
                </div>
              </nav>

              <nav className="col-span-12 sm:col-span-6 xl:col-span-4" aria-label="Technologies, case studies, and about us">
                <div className="mx-auto w-full max-w-[21.25rem]">
                  <div className="flex flex-col gap-8">
                    {techCaseAbout.map((c) => (
                      <ColumnBlock key={c.title} c={c} />
                    ))}
                  </div>
                </div>
              </nav>

              <div className="col-span-12 xl:col-span-4">
                <div className="mx-auto w-full max-w-54">
                  <div className={`${HEADING} mb-3`}>{footerLocations.title}</div>

                  <address className="m-0 not-italic">
                    <div className="flex flex-col gap-6">
                      {locationGroups.map((group, gi) => (
                        <div
                          key={gi}
                          className="flex flex-col gap-0.5 text-xs leading-4 text-(--semantic-action-inverse-inverse,#111)"
                        >
                          {group.map((line, li) => (
                            <div key={`${gi}-${li}`}>{line}</div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </address>
                </div>
              </div>
            </div>
          </div>

          <p className="text-xs">{footerMeta.translationNotice}</p>

          <hr className="h-px border-0 bg-border-default/60" />

          <div className="flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="inline-flex items-center gap-2" aria-label="Current language">
              <LanguageIcon className="h-4 w-4" aria-hidden="true" />
              <span>{footerMeta.languageLabel}</span>
            </div>

            <nav className="inline-flex flex-wrap items-center gap-2" aria-label="Social links">
              {footerSocial.map((s, idx) => (
                <span key={s.href} className="inline-flex items-center gap-2">
                  <SmartLink href={s.href} external={s.external} className="text-text-primary no-underline hover:underline">
                    {s.label}
                  </SmartLink>
                  {idx < footerSocial.length - 1 ? <span aria-hidden="true">·</span> : null}
                </span>
              ))}
            </nav>
          </div>

          <hr className="h-px border-0 bg-border-default/60" />

          <div className="flex flex-wrap items-center justify-between gap-4">
            <nav className="inline-flex flex-wrap items-center gap-6" aria-label="Legal links">
              {footerLegalLinks.map((l) => (
                <SmartLink key={l.href} href={l.href} className="text-xs no-underline hover:underline">
                  {l.label}
                </SmartLink>
              ))}
              <small className="text-xs leading-4">
                © {year} mih Holding. “mih” and the mih Holding logo are registered trademarks of the company.
              </small>
            </nav>

            <div className="inline-flex items-center gap-3" aria-label="Certifications">
              <span className="inline-flex items-center gap-2">
                <ISOIcon className="h-4 w-4" aria-hidden="true" />
                <span className="text-xs">ISO</span>
              </span>
              <span className="inline-flex items-center gap-2">
                <IECIcon className="h-4 w-4" aria-hidden="true" />
                <span className="text-xs">IEC</span>
              </span>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}