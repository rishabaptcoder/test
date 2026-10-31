import { QueryClient } from "@tanstack/react-query";
import { createMemoryHistory, createRouter, RouterProvider } from "@tanstack/react-router";
import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { routeTree } from "@/routeTree.gen";

describe("homepage FAQ", () => {
  it("shows each question and expands each answer", async () => {
    const router = createRouter({
      routeTree,
      history: createMemoryHistory({ initialEntries: ["/"] }),
      context: { queryClient: new QueryClient() },
    });
    await router.load();
    render(<RouterProvider router={router} />);

    const questions = [
      [
        "What is Kaushal Hub?",
        "Kaushal Hub is a learning and knowledge platform by SNN Eduworld Pvt. Ltd.",
      ],
      [
        "Who can participate in Kaushal Hub programs?",
        "Each program page specifies its intended audience and eligibility.",
      ],
      [
        "What programs does Kaushal Hub offer?",
        "Some programs are currently available, while others are in development.",
      ],
      [
        "What is the difference between a program and the Knowledge Library?",
        "Programs provide structured learning experiences with defined topics, formats and durations.",
      ],
      [
        "Do I need to register to access the Knowledge Library?",
        "Visitors can explore the available articles and guides through the website without enrolling in a program.",
      ],
      [
        "How can I join the Kaushal Hub community?",
        "Any community updates will be subject to the preferences you provide.",
      ],
      [
        "Can I collaborate with Kaushal Hub or contribute my expertise?",
        "Potential collaborations will be considered based on their relevance and feasibility.",
      ],
      [
        "How can I find out about upcoming programs?",
        "its dates and registration details will be published when confirmed.",
      ],
    ];

    for (const [question, answerSnippet] of questions) {
      const trigger = screen.getByRole("button", { name: question });
      expect(trigger).toHaveAttribute("aria-expanded", "false");
      fireEvent.click(trigger);
      expect(trigger).toHaveAttribute("aria-expanded", "true");
      expect(document.body.textContent).toContain(answerSnippet);
    }

    const faq = screen.getByRole("heading", { name: "Questions About Kaushal Hub" }).parentElement
      ?.parentElement;
    expect(faq).toBeTruthy();
    fireEvent.click(screen.getByRole("button", { name: "What programs does Kaushal Hub offer?" }));
    expect(within(faq as HTMLElement).getByRole("link", { name: "Programs page" })).toHaveAttribute(
      "href",
      "/programs",
    );
    fireEvent.click(
      screen.getByRole("button", {
        name: "What is the difference between a program and the Knowledge Library?",
      }),
    );
    expect(
      within(faq as HTMLElement).getByRole("link", { name: "Knowledge Library" }),
    ).toHaveAttribute("href", "/resources");
    fireEvent.click(
      screen.getByRole("button", { name: "How can I join the Kaushal Hub community?" }),
    );
    expect(
      within(faq as HTMLElement).getByRole("link", { name: "Community page" }),
    ).toHaveAttribute("href", "/community");
    fireEvent.click(
      screen.getByRole("button", {
        name: "Can I collaborate with Kaushal Hub or contribute my expertise?",
      }),
    );
    expect(
      within(faq as HTMLElement).getByRole("link", { name: "Partner with Us" }),
    ).toHaveAttribute("href", "/contact");
    expect(within(faq as HTMLElement).getByRole("link", { name: "contact us" })).toHaveAttribute(
      "href",
      "/contact",
    );
  });
});
