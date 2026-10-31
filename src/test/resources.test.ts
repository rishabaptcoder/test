import { describe, expect, it } from "vitest";
import {
  getPublishedResources,
  isPublishedResource,
  publishedPagePaths,
  resources,
  type Resource,
} from "@/lib/resources";

const completeResource: Resource = {
  slug: "approved-guide",
  title: "Guide",
  summary: "Summary",
  category: "ideas",
  type: "Practical guide",
  status: "published",
  editorialApproved: true,
  introduction: "The question and context.",
  sections: [{ heading: "Evidence", paragraphs: ["An editor-reviewed explanation."] }],
  nextSteps: ["Review the evidence."],
  relatedSlugs: [],
};

describe("Knowledge publishing safeguards", () => {
  it("publishes the complete, substantive Knowledge Library catalogue", () => {
    const published = getPublishedResources();
    const articlePaths = publishedPagePaths().filter((path) => path.startsWith("/resources/"));
    expect(published).toHaveLength(36);
    expect(new Set(published.map((resource) => resource.slug)).size).toBe(36);
    expect(articlePaths).toHaveLength(36);
    expect(
      published.every(
        (resource) =>
          resource.introduction.trim() &&
          resource.sections.length >= 3 &&
          resource.nextSteps.length > 0,
      ),
    ).toBe(true);
    expect(resources.map((resource) => resource.title)).toContain(
      "How Do You Know If a Business Idea Is Worth Pursuing?",
    );
    expect(resources.map((resource) => resource.title)).toContain(
      "How to Build a Business While Keeping Your Full-Time Job",
    );
  });
  it("does not expose drafts even when they have content", () => {
    expect(isPublishedResource({ ...completeResource, status: "draft" })).toBe(false);
  });
  it("requires editorial approval before publishing", () => {
    expect(isPublishedResource({ ...completeResource, editorialApproved: false })).toBe(false);
    expect(isPublishedResource(completeResource)).toBe(true);
  });
  it("does not publish an empty article template", () => {
    expect(isPublishedResource({ ...completeResource, sections: [] })).toBe(false);
  });
  it("does not publish a downloadable resource without a real asset", () => {
    expect(isPublishedResource({ ...completeResource, type: "Worksheet" })).toBe(false);
    expect(
      isPublishedResource({
        ...completeResource,
        type: "Worksheet",
        assetUrl: "/approved-worksheet.pdf",
      }),
    ).toBe(true);
  });
});
