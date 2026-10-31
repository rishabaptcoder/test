import { ButtonLink, Section, SectionHeader } from "@/components/site";
import type { UpcomingProgram, UpcomingProgramSection } from "@/lib/upcoming-programs";

export function UpcomingProgramDetail({ program }: { program: UpcomingProgram }) {
  return (
    <>
      <Section tint className="!py-10 md:!py-14">
        <div className="max-w-5xl">
          <ButtonLink to="/programs" variant="text">
            All Programs
          </ButtonLink>
          <p className="eyebrow mt-8 inline-flex rounded-sm bg-card px-2 py-1 text-navy">
            {program.status}
          </p>
          <h1 className="h1 mt-4">{program.title}</h1>
          <p className="h3 mt-5 font-serif text-navy">{program.subtitle}</p>
          <p className="mt-5 max-w-3xl text-slate">{program.pageDescription ?? program.description}</p>
          <dl className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {program.details.map((detail) => (
              <div key={detail.label} className="min-w-0 rounded-md border bg-card p-4">
                <dt className="eyebrow">{detail.label}</dt>
                <dd className="mt-2 text-small font-medium text-navy">{detail.value}</dd>
              </div>
            ))}
          </dl>
          <p
            role="status"
            className="mt-6 border-l-2 border-saffron pl-4 text-small font-medium text-navy"
          >
            {program.heroNotice}
          </p>
        </div>
      </Section>

      {program.sections.map((section, index) => (
        <ProgramContentSection key={`${section.kind}-${index}`} section={section} />
      ))}

      <Section white>
        <div className="max-w-3xl border-t pt-6">
          <p className="eyebrow">UPCOMING PROGRAM</p>
          <p className="mt-3 text-slate">{program.finalNotice}</p>
          <div className="mt-5">
            <ButtonLink to="/programs" variant="text">
              Explore all programs
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}

function ProgramContentSection({ section }: { section: UpcomingProgramSection }) {
  if (section.kind === "learning") {
    return (
      <Section white>
        <SectionHeader title={section.title} />
        <div
          className={`mt-8 grid gap-4 ${section.columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"}`}
        >
          {section.items.map((item) => (
            <article key={item.title} className="rounded-lg border bg-background p-5 md:p-6">
              <h3 className="h4 font-serif text-navy">{item.title}</h3>
              <p className="mt-3 text-[15px] leading-6 text-slate">{item.description}</p>
            </article>
          ))}
        </div>
      </Section>
    );
  }

  if (section.kind === "journey") {
    return (
      <Section tint>
        <SectionHeader title={section.title} sub={section.note} />
        <ol className="mt-8 grid gap-x-8 gap-y-2 sm:grid-cols-2">
          {section.steps.map((step) => (
            <li key={step.period} className="border-t py-5">
              <p className="eyebrow">{step.period}</p>
              <h3 className="h4 mt-2 font-serif text-navy">{step.title}</h3>
              <p className="mt-2 text-[15px] leading-6 text-slate">{step.description}</p>
            </li>
          ))}
        </ol>
      </Section>
    );
  }

  if (section.kind === "campus") {
    return (
      <Section white>
        <div className="grid gap-5 md:grid-cols-12 md:items-start">
          <h2 className="h2 md:col-span-5">{section.title}</h2>
          <p className="max-w-3xl text-slate md:col-span-7">{section.body}</p>
        </div>
      </Section>
    );
  }

  if (section.kind === "audience") {
    return (
      <Section>
        <SectionHeader title={section.title} />
        {section.body && (
          <p className="mt-5 max-w-3xl text-slate">{section.body}</p>
        )}
        {section.groups && (
          <div className="mt-8 grid gap-x-8 gap-y-6 md:grid-cols-3">
            {section.groups.map((group) => (
              <article key={group.title} className="border-t pt-5">
                <h3 className="h4 font-serif text-navy">{group.title}</h3>
                <p className="mt-3 text-[15px] leading-6 text-slate">{group.description}</p>
              </article>
            ))}
          </div>
        )}
      </Section>
    );
  }

  if (section.kind === "structure") {
    return (
      <Section tint>
        <SectionHeader title={section.title} />
        <ol className="mt-8 max-w-5xl">
          {section.items.map((item, index) => (
            <li
              key={item.title}
              className="grid gap-2 border-t py-5 md:grid-cols-12 md:gap-6"
            >
              <p className="font-serif text-small text-slate md:col-span-1">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="h4 font-serif text-navy md:col-span-4">{item.title}</h3>
              <p className="text-[15px] leading-6 text-slate md:col-span-7">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </Section>
    );
  }

  if (section.kind === "outcomes") {
    return (
      <Section white>
        <SectionHeader title={section.title} />
        <ul className="mt-7 grid max-w-4xl gap-4 sm:grid-cols-2">
          {section.items.map((item) => (
            <li key={item} className="flex gap-3 border-t pt-4 text-slate">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-saffron" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Section>
    );
  }

  return (
    <Section>
      <div className="grid gap-6 md:grid-cols-12 md:items-start">
        <h2 className="h2 md:col-span-5">{section.title}</h2>
        <div className="md:col-span-7">
          <p className="text-slate">{section.body}</p>
          <ul className="mt-5 space-y-3 text-small text-slate">
            {section.details.map((detail) => (
              <li key={detail} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron" aria-hidden="true" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
