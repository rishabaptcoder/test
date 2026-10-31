import { Link } from "@tanstack/react-router";
import { useState, type ReactNode, type ComponentProps } from "react";
import { ChevronDown, Menu, X, Check, ArrowRight, ArrowUpRight, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { cn } from "@/lib/utils";
import { upcomingPrograms, type UpcomingProgram } from "@/lib/upcoming-programs";

/* ---------- Button ---------- */
type Variant = "primary" | "secondary" | "inverse" | "text";
const FITT_LOGO_SRC = "/images/organisations/fitt-iit-delhi.png";
const btn: Record<Variant, string> = {
  primary: "h-12 px-6 rounded-md bg-saffron text-navy font-semibold hover:brightness-95",
  secondary: "h-12 px-6 rounded-md border border-navy text-navy font-semibold hover:bg-navy hover:text-primary-foreground",
  inverse: "h-12 px-6 rounded-md border border-primary-foreground/50 text-primary-foreground font-semibold hover:bg-primary-foreground/10",
  text: "text-navy font-semibold hover:gap-3",
};
export function buttonClass(v: Variant = "primary", extra?: string) {
  return cn("inline-flex items-center justify-center gap-2 text-[16px] transition-all", btn[v], extra);
}
export function SiteButton({ className, variant = "primary", ...props }: ComponentProps<"button"> & { variant?: Variant }) {
  return <button {...props} className={buttonClass(variant, className)} />;
}
export function ButtonLink({ to, hash, search, variant = "primary", children, className }: { to: string; hash?: string; search?: Record<string, unknown>; variant?: Variant; children: ReactNode; className?: string }) {
  return (
    <Link to={to} {...(hash ? { hash } : {})} {...(search ? { search } : {})} className={buttonClass(variant, className)}>
      {children}{variant === "text" && <ArrowRight className="h-4 w-4" />}
    </Link>
  );
}

/* ---------- Logos ---------- */
export function Logo({ light }: { light?: boolean }) {
  return (
    <Link to="/" className="inline-flex shrink-0 items-center">
      <img
        src="/images/brand/kaushal-hub-logo.png"
        alt="Kaushal Hub — Elevate Your Potential"
        width={1896}
        height={512}
        className={light ? "h-11 w-auto max-w-[164px] object-contain" : "h-9 w-auto max-w-[134px] object-contain sm:h-10 sm:max-w-[150px]"}
      />
    </Link>
  );
}
export function LogoMark({ label, small }: { label: string; small?: boolean }) {
  return (
    <span className={cn("inline-flex items-center font-medium text-slate", small ? "text-[11px]" : "text-small")}>
      {label}
    </span>
  );
}
export function FittPill({ label = "In association with FITT, IIT Delhi" }: { label?: string }) {
  return (
    <div className="inline-flex max-w-full flex-wrap items-center gap-x-3 gap-y-2">
      <img
        src={FITT_LOGO_SRC}
        alt="FITT, IIT Delhi"
        width={80}
        height={40}
        loading="lazy"
        className="h-8 w-auto max-w-[80px] object-contain"
      />
      <span className="text-small font-medium text-navy">{label}</span>
    </div>
  );
}

/* ---------- Navbar ---------- */
const links = [
  { to: "/programs", label: "Programs" },
  { to: "/resources", label: "Knowledge Library" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];
export function Navbar({
  ctaLabel = "Apply Now",
  ctaTo = "/experience-to-enterprise",
  ctaHash = "application",
}: {
  ctaLabel?: string;
  ctaTo?: string;
  ctaHash?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
      <div className="container-site flex h-16 items-center justify-between md:h-20">
        <Logo />
        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="text-[15px] text-ink hover:text-navy" activeProps={{ className: "font-semibold text-navy" }}>{l.label}</Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <ButtonLink to={ctaTo} hash={ctaHash}>
            {ctaLabel}
          </ButtonLink>
        </div>
        <SiteButton variant="text" className="h-10 w-10 p-2 md:hidden" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</SiteButton>
      </div>
      {open && (
        <nav className="border-t bg-background md:hidden">
          <div className="container-site flex flex-col py-4">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="border-b py-4 text-navy last:border-0">{l.label}</Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

export function StickyApply({
  ctaLabel = "Apply Now",
  ctaTo = "/experience-to-enterprise",
  ctaHash = "application",
}: {
  ctaLabel?: string;
  ctaTo?: string;
  ctaHash?: string;
}) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t bg-background/95 p-3 backdrop-blur md:hidden">
      <ButtonLink to={ctaTo} hash={ctaHash} className="w-full">
        {ctaLabel}
      </ButtonLink>
    </div>
  );
}

/* ---------- Footer ---------- */
export function Footer() {
  const col = (title: string, items: { label: string; to: string; hash?: string }[]) => (
    <div>
      <p className="eyebrow !text-primary-foreground/60">{title}</p>
      <ul className="mt-4 space-y-2 text-[15px]">
        {items.map(({ label, to, hash }) => <li key={label}><Link to={to} {...(hash ? { hash } : {})} className="text-primary-foreground/85 hover:text-primary-foreground">{label}</Link></li>)}
      </ul>
    </div>
  );
  const socialProfiles = [
    { name: "Facebook", Icon: Facebook },
    { name: "LinkedIn", Icon: Linkedin },
    { name: "Instagram", Icon: Instagram },
    { name: "YouTube", Icon: Youtube },
  ];
  return (
    <footer className="bg-ink pb-24 pt-12 text-primary-foreground md:pb-8 md:pt-14">
      <div className="container-site">
        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 xl:grid-cols-4">
          <div className="min-w-0">
            <Logo light />
            <p className="mt-4 max-w-sm text-[15px] leading-6 text-primary-foreground/75">An initiative of SNN Eduworld Pvt. Ltd., connecting people with practical learning, useful knowledge and new opportunities.</p>
          </div>
          <div className="min-w-0">
            {col("Explore", [
              { label: "Programs", to: "/programs" },
              { label: "Experience to Enterprise", to: "/experience-to-enterprise" },
              { label: "Knowledge Library", to: "/resources" },
            ])}
          </div>
          <div className="min-w-0">
            {col("About", [
              { label: "About Kaushal Hub", to: "/about" },
              { label: "Community", to: "/community" },
              { label: "Contact Us", to: "/contact" },
            ])}
          </div>
          <div className="min-w-0">
            <p className="eyebrow !text-primary-foreground/60">Get in Touch</p>
            <address className="mt-4 not-italic text-[15px] leading-6 text-primary-foreground/85">
              <span className="block">APTCODER C/O BHARAT IMPACT</span>
              <span className="block">C-26, C Block, Sector 59</span>
              <span className="block">Noida, Uttar Pradesh 201309</span>
            </address>
            <a href="mailto:hello@aptcoder.in" className="mt-2 block min-h-11 w-fit break-all text-[15px] text-primary-foreground/85 underline-offset-4 hover:text-primary-foreground hover:underline focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-ink">hello@aptcoder.in</a>
            <a href="tel:+919318497057" className="mt-2 block min-h-11 w-fit text-[15px] text-primary-foreground/85 underline-offset-4 hover:text-primary-foreground hover:underline focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-ink">+91-9318497057</a>
            <a href="https://www.google.com/maps/dir/?api=1&destination=APTCODER%20C%2FO%20BHARAT%20IMPACT%2C%20C-26%2C%20C%20Block%2C%20Sector%2059%2C%20Noida%2C%20Uttar%20Pradesh%20201309" target="_blank" rel="noreferrer" className="mt-2 inline-flex min-h-11 items-center gap-1 text-small text-primary-foreground/75 underline-offset-4 hover:text-primary-foreground hover:underline focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-ink">
              Get Directions <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <div className="mt-4">
              <p className="text-small font-medium text-primary-foreground/75">Social</p>
              <ul className="mt-2 flex items-center gap-4">
                {socialProfiles.map(({ name, Icon }) => (
                  <li key={name}>
                    <span role="img" aria-label={`${name}: no verified profile available`} className="inline-flex h-8 w-8 items-center justify-center text-primary-foreground/70">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-primary-foreground/15 pt-5 text-small text-primary-foreground/65">
          <span>© 2026 SNN Eduworld Pvt. Ltd.</span>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Layout primitives ---------- */
export function Section({ children, tint, white, className, id }: { children: ReactNode; tint?: boolean; white?: boolean; className?: string; id?: string }) {
  return <section id={id} className={cn("section-pad", tint ? "bg-tint" : white ? "bg-card" : "bg-background", className)}><div className="container-site">{children}</div></section>;
}
export function SectionHeader({ eyebrow, title, sub, center, light }: { eyebrow?: string; title: string; sub?: ReactNode; center?: boolean; light?: boolean }) {
  return (
    <div className={cn("max-w-3xl", center && "mx-auto text-center")}>
      {eyebrow && <p className={cn("eyebrow mb-4", light && "!text-saffron")}>{eyebrow}</p>}
      <h2 className={cn("h2", light && "!text-primary-foreground")}>{title}</h2>
      {sub && <p className={cn("mt-4", light ? "text-primary-foreground/75" : "text-slate")}>{sub}</p>}
    </div>
  );
}
export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("rounded-lg border bg-card p-6 md:p-8", className)}>{children}</div>;
}
export function FactTile({ label, value, note }: { label: string; value: string; note?: string }) {
  return (
    <div className="rounded-lg border bg-card p-5 md:p-6">
      <p className="eyebrow">{label}</p>
      <p className="mt-2 font-serif text-[20px] leading-7 text-navy">{value}</p>
      {note && <p className="mt-2 text-small text-slate">{note}</p>}
    </div>
  );
}
export function Tag({ children, tone = "tint" }: { children: ReactNode; tone?: "tint" | "saffron" }) {
  return <span className={cn("inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-small font-medium", tone === "tint" ? "bg-tint text-navy" : "bg-saffron/15 text-navy")}>{tone === "saffron" && <span className="h-1.5 w-1.5 rounded-full bg-saffron" />}{children}</span>;
}
export function CheckItem({ children }: { children: ReactNode }) {
  return <li className="flex gap-3"><Check className="mt-1 h-5 w-5 shrink-0 text-navy" strokeWidth={2} /><span>{children}</span></li>;
}
/** Internal review labels are hidden from the public site. */
export function WorkingCopy(_props: { children?: ReactNode }) {
  return null;
}

/* ---------- Brochure (shown only when a real file URL is set) ---------- */
export const BROCHURE_URL = "";
export function BrochureLink({ variant = "secondary", className }: { variant?: Variant; className?: string }) {
  if (!BROCHURE_URL) return null;
  return <a href={BROCHURE_URL} download className={buttonClass(variant, className)}>Download Brochure</a>;
}

/* ---------- Accordion ---------- */
export function Accordion({ items }: { items: { q: ReactNode; a: ReactNode; key?: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="divide-y rounded-lg border bg-card">
      {items.map((it, i) => (
        <div key={it.key ?? i}>
          <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-4 p-5 text-left md:p-6" aria-expanded={open === i}>
            <span className="h4 font-serif text-navy">{it.q}</span>
            <ChevronDown className={cn("h-5 w-5 shrink-0 text-navy transition-transform", open === i && "rotate-180")} />
          </button>
          {open === i && <div className="px-5 pb-6 text-slate md:px-6">{it.a}</div>}
        </div>
      ))}
    </div>
  );
}

/* ---------- Step ---------- */
export function Step({ n, title, text }: { n: number; title: string; text: string }) {
  return (
    <div className="flex gap-4">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-navy font-serif text-navy">{n}</span>
      <div><p className="font-semibold text-navy">{title}</p><p className="mt-1 text-small text-slate">{text}</p></div>
    </div>
  );
}

/* ---------- Form field ---------- */
const inputCls = "mt-2 w-full rounded-md border bg-card px-4 py-3 text-[16px] text-ink outline-none focus:border-navy focus:ring-1 focus:ring-navy";
export function Field({ label, name, type = "text", required, as, options, placeholder }: { label: string; name: string; type?: string; required?: boolean; as?: "textarea" | "select"; options?: string[]; placeholder?: string }) {
  return (
    <label className="block">
      <span className="text-small font-medium text-ink">{label}{required && " *"}</span>
      {as === "textarea" ? <textarea name={name} required={required} rows={4} placeholder={placeholder} className={inputCls} />
        : as === "select" ? <select name={name} required={required} className={inputCls} defaultValue=""><option value="" disabled>Select</option>{options?.map((o) => <option key={o}>{o}</option>)}</select>
        : <input name={name} type={type} required={required} placeholder={placeholder} className={inputCls} />}
    </label>
  );
}

/* ---------- Shared KH-level blocks ---------- */
export const areas: [string, string][] = [
  ["Practical learning", "Programs built around useful skills and application."],
  ["Emerging technology", "Learning connected to technologies changing how people work and build."],
  ["Entrepreneurship", "Practical routes for people exploring ventures."],
  ["Experts & industry", "Connecting learners with practitioners and real-world contexts."],
  ["Community", "A network of learners, alumni and experts."],
];
export function WhatWeDo() {
  return (
    <div className="grid gap-x-8 gap-y-10 border-t pt-10 sm:grid-cols-2 lg:grid-cols-5">
      {areas.map(([t, d], i) => (
        <div key={t}>
          <p className="font-serif text-small text-slate">0{i + 1}</p>
          <p className="eyebrow mt-3 !text-navy">{t}</p>
          <p className="mt-3 text-[16px] leading-6 text-slate">{d}</p>
        </div>
      ))}
    </div>
  );
}
export const principles = ["Practical over theoretical", "Evidence over assumption", "Expertise shared openly", "Progress measured by application"];
export function VisionMission() {
  return (
    <Section white>
      <div className="mx-auto max-w-4xl text-center">
        <p className="eyebrow">Our vision and mission</p>
        <h2 className="h2 mt-6">A world where useful knowledge leads to meaningful action.</h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate">A future in which people can access credible knowledge, build practical capabilities and pursue opportunities with greater clarity and confidence.</p>
        <div className="mx-auto my-10 h-px w-16 bg-saffron" />
        <p className="eyebrow !text-navy">Our mission</p>
        <p className="h4 mx-auto mt-4 max-w-3xl font-serif text-navy">To make practical knowledge accessible, connect learning with real-world application, and create pathways for people to develop their capabilities and act on new opportunities.</p>
      </div>
      <div className="mx-auto mt-16 max-w-5xl">
        <p className="eyebrow text-center">How we work</p>
        <div className="mt-6 grid grid-cols-2 border-y md:grid-cols-4">
          {principles.map((p, i) => <p key={p} className={cn("p-5 text-center font-serif text-[18px] text-navy", i > 0 && "md:border-l", i % 2 === 1 && "border-l")}>{p}</p>)}
        </div>
      </div>
    </Section>
  );
}
export function PeopleGrid({ n = 4, note }: { n?: number; note?: string }) {
  return (
    <>
      <div className={cn("grid grid-cols-2 gap-4 md:gap-6", n === 3 ? "md:grid-cols-3" : "md:grid-cols-4")}>
        {Array.from({ length: n }).map((_, i) => (
          <div key={i} className="overflow-hidden rounded-lg border bg-card">
            <div className="grid aspect-[4/5] place-items-center bg-tint text-small text-slate">[PLACEHOLDER photo]</div>
            <div className="p-4">
              <p className="font-serif text-[18px] text-navy">[PLACEHOLDER name]</p>
              <p className="text-small text-slate">Role, Organisation</p>
            </div>
          </div>
        ))}
      </div>
      {note && <p className="mt-6 text-small text-slate">{note}</p>}
    </>
  );
}
export function CtaBand({ title, text, primary, secondary, brochure }: { title: string; text?: string; primary: [string, string]; secondary?: [string, string]; brochure?: boolean }) {
  return (
    <section className="section-pad bg-navy">
      <div className="container-site flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <h2 className="h2 !text-primary-foreground">{title}</h2>
          {text && <p className="mt-4 text-primary-foreground/75">{text}</p>}
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <ButtonLink to={primary[1]}>{primary[0]}</ButtonLink>
          {brochure && <BrochureLink variant="inverse" />}
          {secondary && <ButtonLink to={secondary[1]} variant="inverse">{secondary[0]}</ButtonLink>}
        </div>
      </div>
    </section>
  );
}
export const SiteCta = () => <CtaBand title="Let’s help you take your next step." text="Explore practical learning programs, discover useful knowledge or connect with us to discuss an idea, opportunity or collaboration." primary={["Explore Programs", "/programs"]} secondary={["Get in Touch", "/contact"]} />;

/* ---------- Associations strip ---------- */
export function AssociationsStrip({ note = "Experience to Enterprise is a Kaushal Hub program offered in association with FITT, IIT Delhi." }: { label?: string; note?: ReactNode }) {
  return (
    <div className="border-y bg-card py-5">
      <div className="container-site flex flex-wrap items-center gap-x-4 gap-y-3">
        <img
          src={FITT_LOGO_SRC}
          alt="FITT, IIT Delhi"
          width={80}
          height={40}
          loading="lazy"
          className="h-8 w-auto max-w-[80px] object-contain"
        />
        <p className="text-small text-slate">{note}</p>
      </div>
    </div>
  );
}

/* ---------- Program card ---------- */
export function ProgramCard({ status, audience, title, text, link, footnote }: { status: "Coming soon" | "Details soon" | "Planned Program"; audience: string; title: string; text: ReactNode; link?: ReactNode; footnote?: ReactNode }) {
  return (
    <div className="flex flex-col rounded-lg border bg-card p-6">
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full border px-3 py-1 text-small font-medium text-slate">{status}</span>
        <Tag>{audience}</Tag>
      </div>
      <h3 className="h4 mt-5 font-serif">{title}</h3>
      <p className="mt-2 flex-1 text-[16px] leading-6 text-slate">{text}</p>
      {footnote && <p className="mt-3 text-small text-slate">{footnote}</p>}
      {link && <div className="mt-5">{link}</div>}
    </div>
  );
}
export function UpcomingProgramCard({ program }: { program: Pick<UpcomingProgram, "status" | "path" | "metadata" | "title" | "description"> }) {
  return (
    <article className="flex h-full min-w-0 flex-col rounded-lg border bg-card p-6">
      <span className="inline-flex w-fit rounded-sm bg-tint px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-navy">{program.status}</span>
      <h4 className="h4 mt-4 break-words font-serif text-navy">{program.title}</h4>
      <div className="mt-4 space-y-1 text-small text-slate">
        {program.metadata.map((item) => (
          <p key={item.label}><span className="font-semibold text-ink">{item.label}:</span> {item.value}</p>
        ))}
      </div>
      <p className="mt-4 flex-1 text-[15px] leading-6 text-slate">{program.description}</p>
      <div className="mt-6">
        <ButtonLink to={program.path} variant="text">
          View Program
        </ButtonLink>
      </div>
    </article>
  );
}
export function DevPrograms() {
  return (
    <>
      {upcomingPrograms.map((program) => (
        <UpcomingProgramCard key={program.slug} program={program} />
      ))}
    </>
  );
}

export function ImpactLine({ className }: { className?: string }) {
  return <p className={cn("font-serif text-[20px] italic leading-8 text-navy md:text-[24px] md:leading-9", className)}>In 12 weeks, go from a domain insight to a customer-tested venture, a financial model and an investor-ready pitch.</p>;
}

/* ---------- Signature feature ---------- */
export function SignatureFeature({ title, body, footnote }: { title: string; body: string; footnote: string }) {
  return (
    <div className="rounded-lg border border-navy bg-card p-6 md:p-8">
      <p className="eyebrow">Signature feature</p>
      <h3 className="h3 mt-4">{title}</h3>
      <p className="mt-4 text-slate">{body}</p>
      <p className="mt-6 border-t pt-4 text-small text-slate">{footnote}</p>
    </div>
  );
}
