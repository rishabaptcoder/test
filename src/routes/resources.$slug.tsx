import { createFileRoute, notFound } from "@tanstack/react-router";
import { ResourceArticle } from "@/components/knowledge";
import { ButtonLink, Section } from "@/components/site";
import { canonicalLinks, findPublishedResource } from "@/lib/resources";

export const Route = createFileRoute("/resources/$slug")({
  loader: ({ params }) => {
    const resource = findPublishedResource(params.slug);
    if (!resource) throw notFound();
    return resource;
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.title} | Kaushal Hub Knowledge Library` },
      { name: "description", content: loaderData.summary },
      { property: "og:title", content: loaderData.title },
      { property: "og:description", content: loaderData.summary },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ] : [
      { title: "Resource unavailable | Kaushal Hub Knowledge Library" },
      { name: "description", content: "This resource is not available in the Kaushal Hub Knowledge Library." },
      { property: "og:title", content: "Resource unavailable | Kaushal Hub" },
      { property: "og:description", content: "Browse the Kaushal Hub Knowledge Library." },
      { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex, nofollow" },
    ],
    links: loaderData ? canonicalLinks(`/resources/${loaderData.slug}`) : [],
  }),
  component: ResourcePage,
  notFoundComponent: UnavailableResource,
});
function ResourcePage() { return <ResourceArticle resource={Route.useLoaderData()} />; }
function UnavailableResource() {
  return <Section><h1 className="h2">Resource unavailable</h1><div className="mt-8"><ButtonLink to="/resources">Back to the library</ButtonLink></div></Section>;
}