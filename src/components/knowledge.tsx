import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ButtonLink, Section, SectionHeader } from "@/components/site";
import { getPublishedResources, resourceCategories, type Resource } from "@/lib/resources";

export function ResourceCard({ resource, presentation = "default", categoryLabel }: { resource: Resource; presentation?: "default" | "library"; categoryLabel?: string }) {
  const category = resourceCategories.find(item => item.id === resource.category);
  if (presentation === "library") {
    return <article className="group flex h-full min-w-0 flex-col rounded-lg border bg-card p-6 transition-colors duration-200 hover:border-navy/35 motion-reduce:transition-none">
      <div className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1">
        <span className="min-w-0 text-[11px] font-semibold leading-4 tracking-[0.08em] text-slate">{categoryLabel ?? category?.title}</span>
        <span className="shrink-0 whitespace-nowrap text-[11px] font-medium leading-4 tracking-[0.06em] text-slate">{resource.readingTime.toUpperCase()}</span>
      </div>
      <h3 className="h4 mt-4 font-serif text-navy">
        <Link to="/resources/$slug" params={{ slug: resource.slug }} className="rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2">{resource.title}</Link>
      </h3>
      <p className="mt-3 flex-1 text-[15px] leading-6 text-slate">{resource.summary}</p>
      <Link to="/resources/$slug" params={{ slug: resource.slug }} className="mt-6 inline-flex min-h-11 items-center gap-2 text-small font-semibold text-navy outline-none focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2">
        Read Article <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none" />
      </Link>
    </article>;
  }
  return <article className="flex flex-col border-t py-6">
    <p className="eyebrow">{category?.title} · {resource.readingTime}</p>
    <h3 className="h4 mt-4"><Link to="/resources/$slug" params={{ slug: resource.slug }}>{resource.title}</Link></h3>
    <p className="mt-3 flex-1 text-slate">{resource.summary}</p>
    <Link to="/resources/$slug" params={{ slug: resource.slug }} className="mt-5 inline-flex items-center gap-2 text-small font-semibold text-navy">Read Article <ArrowRight className="h-4 w-4" /></Link>
  </article>;
}

export function KnowledgePreview() {
  const previewSlugs = [
    "is-a-business-idea-worth-pursuing",
    "interview-potential-customers",
    "test-whether-customers-will-pay",
  ];
  const categoryLabels: Record<string, string> = {
    "is-a-business-idea-worth-pursuing": "IDEA VALIDATION",
    "interview-potential-customers": "CUSTOMER RESEARCH",
    "test-whether-customers-will-pay": "DEMAND VALIDATION",
  };
  const published = getPublishedResources().filter(resource => previewSlugs.includes(resource.slug));
  return <Section white>
    <div className="max-w-none">
      <p className="eyebrow mb-4">THE KAUSHAL HUB KNOWLEDGE LIBRARY</p>
      <h2 className="h2">Knowledge You Can Put to Work.</h2>
      <p className="mt-4 max-w-none text-slate">Explore practical guides to validating ideas, understanding customers and making better business decisions.</p>
    </div>
    {published.length > 0 ? <div className="mt-10 grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">{published.map(resource => <ResourceCard key={resource.slug} resource={resource} presentation="library" categoryLabel={categoryLabels[resource.slug]} />)}</div> : <p className="mt-8 text-small text-slate">The first resources are being prepared.</p>}
    <div className="mt-8"><ButtonLink to="/resources" variant="text">Explore the Knowledge Library</ButtonLink></div>
  </Section>;
}

export function ResourceArticle({ resource }: { resource: Resource }) {
  const related = getPublishedResources().filter(item => resource.relatedSlugs.includes(item.slug));
  return <>
    <Section>
      <div className="mx-auto max-w-3xl">
        <ButtonLink to="/resources" variant="text">Knowledge Library</ButtonLink>
        <p className="eyebrow mt-10">{resource.type}</p>
        <h1 className="h1 mt-4">{resource.title}</h1>
        <p className="mt-6 text-slate">{resource.introduction}</p>
        {(resource.author || resource.publishedAt) && <p className="mt-5 text-small text-slate">{resource.author}{resource.publishedAt && <> · Published <time dateTime={resource.publishedAt}>{resource.publishedAt}</time></>}{resource.updatedAt && <> · Updated <time dateTime={resource.updatedAt}>{resource.updatedAt}</time></>}</p>}
      </div>
    </Section>
    <Section white>
      <article className="mx-auto max-w-3xl space-y-12">
        {resource.sections.map(section => <section key={section.heading}><h2 className="h3">{section.heading}</h2><div className="mt-5 space-y-5 text-slate">{section.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}{section.example && <aside className="border-l-2 border-navy pl-5">{section.example}</aside>}</div></section>)}
        <section><h2 className="h3">Next steps</h2><ul className="mt-5 list-disc space-y-3 pl-5 text-slate">{resource.nextSteps.map(step => <li key={step}>{step}</li>)}</ul></section>
        {resource.assetUrl && <a href={resource.assetUrl} className="inline-flex items-center gap-2 font-semibold text-navy" target="_blank" rel="noopener noreferrer">Open {resource.type.toLowerCase()} <ArrowRight className="h-4 w-4" /></a>}
        {resource.programLink && <ButtonLink to="/experience-to-enterprise" variant="text">Explore Experience to Enterprise</ButtonLink>}
      </article>
    </Section>
    {related.length > 0 && <Section><SectionHeader title="Related resources" /><div className="mt-8 grid gap-8 md:grid-cols-2">{related.map(item => <ResourceCard key={item.slug} resource={item} />)}</div></Section>}
  </>;
}
