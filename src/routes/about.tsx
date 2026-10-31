import { createFileRoute } from "@tanstack/react-router";
import discussion from "@/assets/discussion.jpg";
import { ButtonLink, Section, SectionHeader, WhatWeDo } from "@/components/site";
import { canonicalLinks } from "@/lib/resources";
import { organisationLogos } from "@/lib/organisation-logos";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Kaushal Hub — An initiative of SNN Eduworld" },
      {
        name: "description",
        content:
          "An initiative of SNN Eduworld Pvt. Ltd., Kaushal Hub brings together practical learning, emerging technologies, entrepreneurship and a community built around knowledge and opportunity.",
      },
      { property: "og:title", content: "About Kaushal Hub" },
      {
        property: "og:description",
        content:
          "Practical learning, emerging technologies, entrepreneurship and a community built around knowledge and opportunity.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: canonicalLinks("/about"),
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="py-12 md:py-16">
        <div className="container-site grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <h1 className="h1">About Kaushal Hub</h1>
            <p className="mt-5 max-w-2xl text-slate">
              An initiative of SNN Eduworld Pvt. Ltd., Kaushal Hub brings together practical
              learning, emerging technologies, entrepreneurship and a community built around
              knowledge and opportunity.
            </p>
          </div>
          <img
            src={discussion}
            alt="Two professionals in discussion"
            width={1280}
            height={960}
            className="aspect-[4/3] max-h-[360px] w-full rounded-lg object-cover lg:col-span-5"
          />
        </div>
      </section>

      <Section white className="!py-10 md:!py-12">
        <SectionHeader title="Backed & Supported By" />
        <div className="mt-7 grid grid-cols-2 items-stretch gap-4 md:grid-cols-3 lg:grid-cols-4">
          {organisationLogos.map(({ name, src }) => (
            <div
              key={name}
              className="flex min-h-28 min-w-0 flex-col items-center justify-center gap-3 rounded-md border bg-background px-3 py-4 text-center"
            >
              <img
                src={src}
                alt={name}
                width={180}
                height={60}
                loading="lazy"
                className="h-12 w-full max-w-[180px] object-contain"
              />
              <span className="text-small font-medium text-navy">{name}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section className="!py-12 md:!py-16">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <SectionHeader eyebrow="Who we are" title="An organisation for practical learning." />
            <div className="mt-6 border-l-2 border-saffron pl-5">
              <p
                lang="hi"
                className="font-sans text-[22px] font-medium leading-9 text-navy md:text-[26px] md:leading-10"
                style={{
                  fontFamily:
                    '"Noto Sans Devanagari", "Kohinoor Devanagari", system-ui, sans-serif',
                }}
              >
                कौशल से कुशल भारत
              </p>
              <p className="mt-1 text-small text-slate">
                From individual capability to a more capable India.
              </p>
            </div>
          </div>
          <p className="max-w-2xl text-[17px] leading-7 text-slate lg:col-span-7">
            Kaushal Hub is an initiative of SNN Eduworld Pvt. Ltd. We develop learning programs,
            connect expertise with practical challenges, and create opportunities for people to
            explore new capabilities and ideas.
          </p>
        </div>
      </Section>

      <Section tint className="!py-12 md:!py-16">
        <SectionHeader eyebrow="What we do" title="Five areas we work across." />
        <div className="mt-8 md:mt-10">
          <WhatWeDo />
        </div>
      </Section>

      <Section tint className="!py-12 md:!py-16">
        <div className="max-w-none">
          <p className="eyebrow mb-4">Our ecosystem &amp; community</p>
          <h2 className="h2 max-w-none">A connected ecosystem for learning and opportunity.</h2>
          <p className="mt-4 max-w-5xl text-slate">
            Kaushal Hub brings together structured programs, practical resources and people with
            different kinds of experience. Whether someone is exploring a new subject, developing
            a capability or investigating an opportunity, the aim is to make relevant knowledge and
            connections easier to access.
          </p>
        </div>
        <div className="mt-8 grid gap-8 border-t pt-8 md:grid-cols-3 md:gap-6">
          <article className="flex min-w-0 flex-col">
            <h3 className="h4 font-serif text-navy">Programs</h3>
            <p className="mt-3 flex-1 text-[15px] leading-6 text-slate">
              Structured learning initiatives for different audiences and stages of development.
            </p>
            <ButtonLink to="/programs" variant="text" className="mt-4 w-fit">
              Explore Programs
            </ButtonLink>
          </article>
          <article className="flex min-w-0 flex-col">
            <h3 className="h4 font-serif text-navy">Knowledge Library</h3>
            <p className="mt-3 flex-1 text-[15px] leading-6 text-slate">
              Practical articles and guides to help people understand problems, test ideas and make
              better decisions.
            </p>
            <ButtonLink to="/resources" variant="text" className="mt-4 w-fit">
              Explore the Knowledge Library
            </ButtonLink>
          </article>
          <article className="flex min-w-0 flex-col">
            <h3 className="h4 font-serif text-navy">Community</h3>
            <p className="mt-3 flex-1 text-[15px] leading-6 text-slate">
              A space to connect with people who are learning, building, sharing expertise and
              exploring opportunities.
            </p>
            <ButtonLink to="/community" variant="text" className="mt-4 w-fit">
              Join the Community
            </ButtonLink>
          </article>
        </div>
      </Section>

      <Section white className="!pt-8 !pb-14 md:!pt-12 md:!pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow">OUR VISION &amp; MISSION</p>
          <p className="eyebrow mt-7 !text-navy">VISION</p>
          <h2 className="h2 mt-3">A world where useful knowledge leads to meaningful action.</h2>
          <p className="eyebrow mt-8 !text-navy">MISSION</p>
          <p className="mx-auto mt-3 max-w-3xl font-serif text-[18px] leading-7 text-navy md:text-[22px] md:leading-8">
            To make practical knowledge accessible, connect learning with real-world application,
            and create pathways for people to develop their capabilities and act on new
            opportunities.
          </p>
        </div>
      </Section>
    </>
  );
}
