import { createFileRoute, Outlet, useRouterState } from "@tanstack/react-router";
import { ButtonLink, Card, FittPill, Section, UpcomingProgramCard } from "@/components/site";
import { canonicalLinks } from "@/lib/resources";
import { upcomingPrograms } from "@/lib/upcoming-programs";

export const Route = createFileRoute("/programs")({
  head: ({ matches }) => ({
    meta: [
      { title: "Programs — Kaushal Hub" },
      {
        name: "description",
        content:
          "Practical programs designed around capability, opportunity and real-world application.",
      },
      { property: "og:title", content: "Programs — Kaushal Hub" },
      {
        property: "og:description",
        content:
          "Practical programs designed around capability, opportunity and real-world application.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: matches.some((match) => String(match.routeId) === "/programs/$programSlug")
      ? []
      : canonicalLinks("/programs"),
  }),
  component: Programs,
});

function Programs() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  if (pathname !== "/programs" && pathname !== "/programs/") {
    return <Outlet />;
  }

  return (
    <>
      <section className="section-pad !py-8 md:!py-12">
        <div className="container-site">
          <p className="eyebrow">OUR PROGRAMS</p>
          <h1 className="h1 mt-3 max-w-none md:!text-[48px] md:!leading-[56px]">
            Find the right program for what you want to build.
          </h1>
          <p className="mt-4 max-w-none text-slate">
            Practical programs for experienced professionals, students and people exploring emerging
            technologies.
          </p>
        </div>
      </section>
      <Section tint className="!py-8 md:!py-12">
        <p className="eyebrow mb-4">FEATURED PROGRAM</p>
        <Card className="md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="h2">Experience to Enterprise</h2>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-green-200 bg-green-50 px-3 py-1 text-small font-medium text-green-700">
              <span className="h-1.5 w-1.5 rounded-full bg-green-600" aria-hidden="true" />
              ENROLLING NOW
            </span>
          </div>
          <p className="h4 mt-2 font-serif text-navy">Test the leap before you take it.</p>
          <p className="mt-4 text-slate">
            A 12-week venture-building program for experienced professionals exploring
            entrepreneurship.
          </p>
          <div className="mt-5"><FittPill /></div>
          <div className="mt-5 grid gap-3 border-t pt-5 sm:grid-cols-3">
            <p className="text-small font-medium text-navy">12 weeks</p>
            <p className="text-small font-medium text-navy">~10 hours per week</p>
            <p className="text-small font-medium text-navy">Online + campus immersion at IIT Delhi</p>
          </div>
          <div className="mt-8">
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink to="/experience-to-enterprise" hash="application">
                Apply Now
              </ButtonLink>
              <ButtonLink to="/experience-to-enterprise" variant="secondary">
                View Program
              </ButtonLink>
            </div>
          </div>
        </Card>
        <p className="eyebrow mb-4 mt-12">UPCOMING PROGRAMS</p>
        <div className="grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
          {upcomingPrograms.map((program) => (
            <UpcomingProgramCard key={program.title} program={program} />
          ))}
        </div>
      </Section>
    </>
  );
}
