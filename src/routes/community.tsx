import { createFileRoute } from "@tanstack/react-router";
import { CommunityForm } from "@/components/ApplyForm";
import { Section, SectionHeader } from "@/components/site";
import { canonicalLinks } from "@/lib/resources";

const participationAreas = [
  {
    title: "Learn and Discover",
    description: "Find useful resources, learning opportunities and practical insights.",
  },
  {
    title: "Share Expertise",
    description: "Contribute knowledge, experience and perspectives that may help others.",
  },
  {
    title: "Connect and Collaborate",
    description: "Discover potential collaborators and explore relevant connections.",
  },
  {
    title: "Explore Opportunities",
    description: "Hear about upcoming programs, events and ways to participate.",
  },
];

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "The Kaushal Hub Community" },
      {
        name: "description",
        content:
          "Connect with the Kaushal Hub ecosystem to exchange knowledge, explore opportunities, learn from others and stay connected.",
      },
      { property: "og:title", content: "The Kaushal Hub Community" },
      {
        property: "og:description",
        content:
          "A space for people to exchange knowledge, explore opportunities, learn from others and stay connected with the Kaushal Hub ecosystem.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: canonicalLinks("/community"),
  }),
  component: Community,
});

function Community() {
  return (
    <>
      <Section className="!py-12 md:!py-16">
        <div className="max-w-4xl">
          <h1 className="h1">The Kaushal Hub Community</h1>
          <p className="mt-5 text-slate">
            A space for people to exchange knowledge, explore opportunities, learn from others and
            stay connected with the Kaushal Hub ecosystem.
          </p>
        </div>
      </Section>

      <Section white className="!py-10 md:!py-12">
        <SectionHeader title="Ways to participate" />
        <div className="mt-7 grid gap-6 border-t pt-7 sm:grid-cols-2 lg:grid-cols-4">
          {participationAreas.map((area) => (
            <article key={area.title} className="min-w-0">
              <h2 className="h4 font-serif text-navy">{area.title}</h2>
              <p className="mt-3 text-[15px] leading-6 text-slate">{area.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tint>
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            title="Join the Community"
            sub="Share a few details so we can understand your interests and how you might like to participate."
          />
          <div className="mt-8 rounded-lg border bg-card p-5 md:p-8">
            <p className="mb-6 text-small leading-6 text-slate" role="status">
              Community sign-up is being prepared. This form is not connected to a registration
              service yet, so submissions cannot currently be received.
            </p>
            <CommunityForm />
          </div>
        </div>
      </Section>
    </>
  );
}
