import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Section } from "@/components/site";
import { ResourceCard } from "@/components/knowledge";
import {
  canonicalLinks,
  getPublishedResources,
  resourceCategories,
  type ResourceCategory,
} from "@/lib/resources";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/resources/")({
  head: () => ({
    meta: [
      { title: "Knowledge Library | Practical Business Resources — Kaushal Hub" },
      {
        name: "description",
        content:
          "Explore practical guides to validating ideas, understanding customers and making better business decisions.",
      },
      { property: "og:title", content: "The Kaushal Hub Knowledge Library" },
      {
        property: "og:description",
        content:
          "Explore practical guides to validating ideas, understanding customers and making better business decisions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: canonicalLinks("/resources"),
  }),
  component: KnowledgeLibrary,
});

function KnowledgeLibrary() {
  const published = getPublishedResources();
  const [filter, setFilter] = useState<ResourceCategory | "all">("all");
  const [displayLimit, setDisplayLimit] = useState(9);
  const filtered =
    filter === "all" ? published : published.filter((resource) => resource.category === filter);
  const visible = filtered.slice(0, displayLimit);
  const categoryLabels: Record<string, string> = {
    "is-a-business-idea-worth-pursuing": "IDEA VALIDATION",
    "interview-potential-customers": "CUSTOMER RESEARCH",
    "test-whether-customers-will-pay": "DEMAND VALIDATION",
    "mvp-prototype-or-pilot": "MVP & PROTOTYPING",
    "calculate-business-break-even": "BUSINESS FINANCE",
    "build-a-business-alongside-employment": "BUILDING ALONGSIDE EMPLOYMENT",
  };
  return (
    <>
      <Section className="!pb-8 md:!pb-10">
        <p className="eyebrow">The Kaushal Hub Knowledge Library</p>
        <h1 className="h1 mt-5 max-w-none">Knowledge You Can Put to Work.</h1>
        <p className="mt-4 max-w-none text-slate">
          Explore practical guides to validating ideas, understanding customers and making better
          business decisions.
        </p>
      </Section>
      <Section white className="!pt-8 md:!pt-10">
        <div role="group" aria-label="Filter by topic" className="flex flex-wrap gap-2">
          <button
            onClick={() => {
              setFilter("all");
              setDisplayLimit(9);
            }}
            aria-pressed={filter === "all"}
            className={cn(
              "rounded-full border px-4 py-2 text-small font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2",
              filter === "all"
                ? "bg-navy text-primary-foreground"
                : "bg-card text-navy hover:bg-tint",
            )}
          >
            All topics
          </button>
          {resourceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setFilter(category.id);
                setDisplayLimit(9);
              }}
              aria-pressed={filter === category.id}
              className={cn(
                "rounded-full border px-4 py-2 text-small font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2",
                filter === category.id
                  ? "bg-navy text-primary-foreground"
                  : "bg-card text-navy hover:bg-tint",
              )}
            >
              {category.title}
            </button>
          ))}
        </div>
        <p className="mt-5 text-small text-slate" aria-live="polite">
          Showing {visible.length} of {filtered.length} articles
        </p>
        {visible.length > 0 ? (
          <div className="mt-10 grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((resource) => (
              <ResourceCard
                key={resource.slug}
                resource={resource}
                presentation="library"
                categoryLabel={categoryLabels[resource.slug]}
              />
            ))}
          </div>
        ) : (
          <p className="mt-10 border-t pt-8 text-slate">
            No resources in this topic yet. New articles and guides are added as they are ready.
          </p>
        )}
        {visible.length < filtered.length && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setDisplayLimit((limit) => limit + 9)}
              className="rounded-md border border-navy px-5 py-3 text-small font-semibold text-navy transition-colors hover:bg-tint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
            >
              Load More Articles
            </button>
          </div>
        )}
      </Section>
    </>
  );
}
