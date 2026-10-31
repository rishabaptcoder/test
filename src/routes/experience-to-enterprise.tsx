import { createFileRoute } from "@tanstack/react-router";
import { AlertCircle, Landmark, MessageSquareText, MonitorPlay, Video } from "lucide-react";
import workshop from "@/assets/workshop.jpg";
import {
  Accordion,
  ButtonLink,
  Card,
  CheckItem,
  FactTile,
  FittPill,
  Section,
  SectionHeader,
} from "@/components/site";
import { ExperienceApplicationForm } from "@/components/experience-application-form";
import { SampleDossier } from "@/components/sample-dossier";
import { canonicalLinks } from "@/lib/resources";

export const Route = createFileRoute("/experience-to-enterprise")({
  head: () => ({
    meta: [
      { title: "Experience to Enterprise | Kaushal Hub" },
      {
        name: "description",
        content:
          "Explore a 12-week venture-building certificate program for experienced professionals, focused on customer validation, practical experimentation and business viability.",
      },
      { property: "og:title", content: "Experience to Enterprise | Kaushal Hub" },
      {
        property: "og:description",
        content:
          "Test the leap before you take it. A 12-week venture-building program for experienced professionals.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: canonicalLinks("/experience-to-enterprise"),
  }),
  component: Program,
});

const modules: [string, string, string, string][] = [
  [
    "Founder Foundations and Validation",
    "Weeks 1–3",
    "Choosing an entrepreneurial pathway, personal runway and family-finance planning, employment-contract checkpoints including IP and moonlighting, finding problems in your industry, customer discovery with 15+ interviews, buyer mapping, willingness-to-pay tests, and a pilot-first MVP.",
    "Opportunity brief, validated problem statement, pilot scope.",
  ],
  [
    "Build and Operate",
    "Weeks 4–5",
    "AI for non-coders, prompt engineering, no-code prototypes and workflow automation, data-privacy basics including the DPDP Act, briefing developers and vendors, and running a venture alongside a job.",
    "Working prototype or automated workflow, core SOP.",
  ],
  [
    "Go-to-Market",
    "Weeks 6–7",
    "Ideal customer profile, positioning, founder-led content with AI, network-led B2B selling, referrals, outbound, pilot-to-contract conversion, and channel partnerships.",
    "90-day go-to-market plan.",
  ],
  [
    "Finance, Funding and Pitching",
    "Weeks 8–9",
    "Unit economics and pricing, cash flow and runway, a simple three-statement financial model, GST and tax basics, funding routes including bootstrapping, customer-funded growth, angels, venture capital, debt, government schemes and grants, incubators, cap-table basics, entity choice, and pitch and Q&A practice.",
    "Financial model, funding-path memo, 10-slide pitch deck.",
  ],
  [
    "Legal, Leadership and Metrics",
    "Weeks 10–11",
    "Founders’ agreements, IP and trademarks, customer and vendor contracts, compliance calendar, co-founder selection and equity, first hires and advisors, transition planning from a corporate role, KPIs and dashboards, and pivot/persevere/stop decisions.",
    "Legal checklist, team and transition plan, KPI dashboard.",
  ],
  [
    "Capstone and Demo Day",
    "Week 12",
    "A 10-minute pitch and prototype or pilot demonstration, followed by Q&A before a mock investor and mentor panel.",
    "Final pitch and project submission plan.",
  ],
];

const audience = [
  [
    "Mid-career managers",
    "Professionals exploring an independent venture or a new business opportunity.",
  ],
  [
    "Domain specialists",
    "People with deep knowledge of a particular industry, customer problem, or market.",
  ],
  ["Consultants", "Professionals looking to build a scalable business around their expertise."],
  [
    "Senior individual contributors",
    "Experienced professionals with specialised knowledge and industry relationships.",
  ],
];

const after = [
  [
    "Month 1 after completion",
    "Submit a Venture Project Dossier covering the problem and supporting evidence, prototype or pilot results, business model and financials, a 10-slide pitch, and a five-minute video.",
  ],
  [
    "Evaluation",
    "Submissions are assessed against the published rubric, including problem evidence, traction, solution quality, team capability, scalability and feasibility.",
  ],
  [
    "Selected ventures",
    "Outstanding ventures may be considered for incubation or other support, subject to FITT’s selection process and available opportunities.",
  ],
  [
    "Potential support",
    "Selected ventures may receive incubation, investor connections where applicable, and funding or grant support where available. The Kaushal Hub community provides a separate opportunity to remain connected with peers and alumni.",
  ],
];

const faqs: [string, string][] = [
  [
    "Who is this program for?",
    "Experience to Enterprise is designed for experienced professionals who want to investigate entrepreneurship and evaluate a business opportunity using their industry experience and networks.",
  ],
  [
    "Do I need a technical or coding background?",
    "No. The program introduces AI-assisted tools, no-code approaches and ways to work with developers or vendors where required.",
  ],
  [
    "Can I participate while continuing to work?",
    "The program is designed for professionals exploring entrepreneurship alongside their current commitments. The indicative weekly commitment is about 10 hours.",
  ],
  [
    "What is the duration and format?",
    "The program runs for 12 weeks, with approximately six hours of live sessions and four hours of self-paced learning and venture work per week. It combines online learning with a 2–3 day campus immersion at IIT Delhi.",
  ],
  [
    "What is the fee structure?",
    "The ₹99 fee is for initial interest registration. The ₹4,000 program-registration fee is separate from the ₹80,000 program fee.",
  ],
  [
    "Does the program guarantee incubation or funding?",
    "No. Selected ventures may be considered for incubation, investor connections or funding and grant support, subject to evaluation, availability and the applicable selection process.",
  ],
];

const expertPerspectives = [
  {
    category: "Entrepreneurship",
    quote: "[Expert perspective on identifying meaningful problems and validating a business opportunity.]",
    role: "Entrepreneurship Expert",
  },
  {
    category: "Venture Building",
    quote: "[Expert perspective on turning an early idea into a testable product or service.]",
    role: "Venture-Building Practitioner",
  },
  {
    category: "Business and Markets",
    quote: "[Expert perspective on understanding customers, building a business model and reaching the market.]",
    role: "Business and Market Expert",
  },
  {
    category: "Innovation and Technology",
    quote: "[Expert perspective on using technology and practical experimentation to build a venture.]",
    role: "Innovation and Technology Expert",
  },
];

function Program() {
  return (
    <>
      <section className="section-pad !pb-10 md:!pb-12">
        <div className="container-site grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <img
            src={workshop}
            alt="Professionals in a working session"
            width={1280}
            height={960}
            className="aspect-[4/3] w-full rounded-xl object-cover lg:col-span-5"
          />
          <div className="lg:col-span-7">
            <p className="eyebrow">A Kaushal Hub + FITT, IIT Delhi program</p>
            <h1 className="h1 mt-5">Experience to Enterprise</h1>
            <p className="h3 mt-5 font-serif text-navy">Test the leap before you take it.</p>
            <p className="mt-5 max-w-2xl text-slate">
              A 12-week venture-building program for experienced professionals who want to explore
              entrepreneurship, test a business opportunity, and engage real customers before
              deciding on their next move.
            </p>
            <div className="mt-5">
              <FittPill />
            </div>
            <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-small font-medium text-navy">
              {[
                "12 weeks",
                "About 10 hours per week",
                "Online + campus immersion at IIT Delhi",
                "Co-branded certificate",
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink to="/experience-to-enterprise" hash="application">
                Apply Now
              </ButtonLink>
              <ButtonLink to="/experience-to-enterprise" hash="curriculum" variant="secondary">
                Explore the Program
              </ButtonLink>
            </div>
          </div>
        </div>
        <div className="container-site mt-10 grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-5">
          <FactTile label="Duration" value="12 weeks" />
          <FactTile
            label="Weekly commitment"
            value="~10 hours"
            note="6 live + 4 self-paced and venture work"
          />
          <FactTile label="Format" value="Online + campus immersion at IIT Delhi" />
          <FactTile label="Background" value="No technical background required" />
          <FactTile label="Participants" value="Experienced professionals" />
        </div>
      </section>

      <Section className="!pt-10 md:!pt-12">
        <SectionHeader title="What makes this program different" />
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <Card>
            <h3 className="h3 font-serif text-navy">Your Brand, Your Idea, Your IP</h3>
            <p className="mt-4 leading-7 text-slate">
              Build with a clearer understanding of how intellectual property can support your
              venture. Eligible participants may explore IP-related guidance, including invention
              disclosure and patent-search support through FITT’s relevant processes.
            </p>
            <p className="mt-4 border-t pt-4 text-small text-slate">
              Any IP support is subject to eligibility and applicable processes. Patent filing and
              grant outcomes are not guaranteed.
            </p>
          </Card>
          <Card>
            <h3 className="h3 font-serif text-navy">The Batch Invests in Itself</h3>
            <p className="mt-4 leading-7 text-slate">
              Every participant contributes to a shared investment pool as part of the program fee.
              At Demo Day, a panel of judges evaluates the ventures, and the cohort votes on which
              promising venture or ventures should receive the pool’s support. This creates an
              opportunity for participants to back promising ideas emerging from their own batch.
            </p>
            <p className="mt-4 border-t pt-4 text-small text-slate">
              Eligibility, selection criteria and the final allocation process will be communicated
              as part of the program terms.
            </p>
          </Card>
        </div>
      </Section>

      <Section white>
        <div className="max-w-none">
          <p className="eyebrow mb-4">Expert perspectives</p>
          <h2 className="h2">What Experts Say About the Program</h2>
          <p className="mt-4 text-slate lg:whitespace-nowrap">
            Perspectives from practitioners and experts on building ventures, testing ideas and
            turning experience into action.
          </p>
        </div>
        <p className="mt-6 rounded-md border border-saffron/50 bg-saffron/10 p-4 text-small leading-6 text-navy" role="note">
          Preview content: these are placeholders, not real expert quotations or endorsements. Replace them with approved perspectives and attributions before public launch.
        </p>
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {expertPerspectives.map((perspective) => (
            <article key={perspective.category} className="flex h-full min-w-0 flex-col rounded-lg border bg-card p-5">
              <p className="eyebrow">{perspective.category}</p>
              <blockquote className="mt-4 flex-1 font-serif text-[18px] leading-7 text-navy">
                {perspective.quote}
              </blockquote>
              <div className="mt-6 border-t pt-4">
                <p className="font-semibold text-navy">Expert Name</p>
                <p className="mt-1 text-small text-slate">{perspective.role}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section tint>
        <SectionHeader
          eyebrow="Who it’s for"
          title="Experienced professionals exploring entrepreneurship while still working."
          sub="Typically aged 30–50, with industry knowledge, networks and credibility."
        />
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {audience.map(([title, text]) => (
            <Card key={title} className="!p-5">
              <h3 className="font-serif text-[20px] leading-7 text-navy">{title}</h3>
              <p className="mt-3 text-small leading-6 text-slate">{text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section white id="curriculum">
        <SectionHeader
          eyebrow="Curriculum"
          title="Six modules, twelve weeks."
          sub="From opportunity discovery to customer validation, building, commercial planning and a final presentation, you’ll work on your own venture opportunity throughout the program."
        />
        <div className="relative mt-9 pl-8 md:pl-12">
          <div className="absolute bottom-6 left-3 top-6 w-px bg-border md:left-5" />
          <div className="space-y-3">
            {modules.map(([title, weeks, content, output], index) => (
              <div key={title} className="relative">
                <span className="absolute -left-8 top-5 grid h-6 w-6 place-items-center rounded-full border border-navy bg-card text-[12px] font-semibold text-navy md:-left-12 md:h-10 md:w-10 md:text-small">
                  {index + 1}
                </span>
                <Accordion
                  items={[
                    {
                      key: title,
                      q: (
                        <>
                          <span className="eyebrow block !text-slate">{weeks}</span>
                          <span className="mt-1 block">
                            Module {index + 1} — {title}
                          </span>
                        </>
                      ),
                      a: (
                        <div className="space-y-4">
                          <p>{content}</p>
                          <p className="rounded-md bg-tint p-4 text-navy">
                            <span className="font-semibold">You produce: </span>
                            {output}
                          </p>
                        </div>
                      ),
                    },
                  ]}
                />
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="md:p-10">
            <p className="eyebrow">Build while you work</p>
            <h2 className="h3 mt-4">You don’t have to quit your job on day one.</h2>
            <p className="mt-4 text-slate">
              About 10 hours a week lets you test an opportunity before making a career transition.
              The program provides a structured way to investigate assumptions and gather evidence
              while continuing to work. It does not promise business success.
            </p>
          </Card>
          <Card className="md:p-10">
            <p className="eyebrow">AI and no-code</p>
            <h2 className="h3 mt-4">Move faster as a non-technical founder.</h2>
            <p className="mt-4 text-slate">
              Explore AI-assisted research, prompt engineering, no-code tools, workflow automation
              and rapid prototyping. Learn how to test ideas and brief developers or vendors when
              more complex technology is needed.
            </p>
          </Card>
        </div>
      </Section>

      <Section tint>
        <SectionHeader title="How it works." />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {(
            [
              [
                Video,
                "Live sessions",
                "Learn with experts from the FITT network and Kaushal Hub faculty.",
              ],
              [
                MonitorPlay,
                "Self-paced learning",
                "Work through tutorials and assessments on the Kaushal Hub platform.",
              ],
              [
                MessageSquareText,
                "Venture feedback",
                "Apply the learning to your own opportunity and receive feedback on your work.",
              ],
              [
                Landmark,
                "Campus immersion",
                "Participate in an in-person campus immersion at FITT, IIT Delhi.",
              ],
            ] as const
          ).map(([Icon, title, text]) => (
            <Card key={title} className="!p-6">
              <Icon className="h-7 w-7 text-navy" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="mt-4 font-semibold text-navy">{title}</h3>
              <p className="mt-2 text-small leading-6 text-slate">{text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="md:p-9">
            <p className="eyebrow">Campus immersion</p>
            <h3 className="h3 mt-4">2–3 days at FITT, IIT Delhi</h3>
            <ul className="mt-5 space-y-3 text-slate">
              <CheckItem>Dates to be announced.</CheckItem>
              <CheckItem>Meals included; travel and accommodation not included.</CheckItem>
              <CheckItem>Physical certificate handed over during the immersion.</CheckItem>
            </ul>
          </Card>
          <Card className="md:p-9">
            <p className="eyebrow">Certificate</p>
            <h3 className="h3 mt-4">Co-branded certificate</h3>
            <ul className="mt-5 space-y-3 text-slate">
              <CheckItem>Minimum 70% attendance.</CheckItem>
              <CheckItem>Minimum 40% cumulative evaluation score.</CheckItem>
              <CheckItem>Physical certificate during the immersion.</CheckItem>
              <CheckItem>Encrypted digital certificate that can be verified online.</CheckItem>
            </ul>
            <p className="mt-5 border-t pt-4 text-small text-slate">
              The certificate confirms program completion against the stated requirements; it does
              not guarantee the success of a venture.
            </p>
          </Card>
        </div>
      </Section>

      <Section tint>
        <SectionHeader
          eyebrow="After the program"
          title="What can follow, for selected ventures."
        />
        <ol className="mt-8 grid gap-x-6 gap-y-7 sm:grid-cols-2 xl:grid-cols-4">
          {after.map(([title, text], index) => (
            <li key={title} className="border-t-2 border-navy pt-4">
              <p className="font-serif text-small text-slate">0{index + 1}</p>
              <h3 className="h4 mt-2 font-serif text-navy">{title}</h3>
              <p className="mt-2 text-small leading-6 text-slate">{text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8">
          <SampleDossier embedded />
        </div>
        <div className="mt-7 flex gap-4 rounded-lg border border-saffron/50 bg-saffron/10 p-5">
          <AlertCircle
            className="h-6 w-6 shrink-0 text-navy"
            strokeWidth={1.5}
            aria-hidden="true"
          />
          <p className="text-small font-medium leading-6 text-navy">
            These opportunities are selective and subject to evaluation, availability and FITT
            arrangements. No incubation, investor access or funding is guaranteed.
          </p>
        </div>
      </Section>

      <Section white id="registration-process">
        <SectionHeader
          title="Program Fee and Registration Process"
          sub="Begin by sharing your motivation and entrepreneurial interests. Learn more about the program through an introductory webinar and counselling before proceeding to program registration."
        />
        <ol className="relative mt-9 ml-3 max-w-4xl border-l border-border">
          <li className="relative pb-8 pl-9 last:pb-0">
            <span className="absolute -left-[17px] top-0 grid h-8 w-8 place-items-center rounded-full border border-navy bg-card font-serif text-small text-navy">
              1
            </span>
            <h3 className="h4 font-serif text-navy">Apply Now</h3>
            <p className="mt-2 leading-7 text-slate">
              Share your professional background, motivation for exploring entrepreneurship, and the
              opportunity or business problem you are interested in investigating.
            </p>
            <ButtonLink
              to="/experience-to-enterprise"
              hash="application"
              variant="text"
              className="mt-3"
            >
              Go to application form
            </ButtonLink>
          </li>
          <li className="relative pb-8 pl-9 last:pb-0">
            <span className="absolute -left-[17px] top-0 grid h-8 w-8 place-items-center rounded-full border border-navy bg-card font-serif text-small text-navy">
              2
            </span>
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <h3 className="h4 font-serif text-navy">Initial Interest Registration</h3>
              <p className="font-serif text-2xl font-semibold text-navy">₹99</p>
            </div>
            <p className="mt-2 leading-7 text-slate">
              Complete the initial interest-registration step to proceed with the introductory
              process. This is the initial interest-registration fee.
            </p>
          </li>
          <li className="relative pb-8 pl-9 last:pb-0">
            <span className="absolute -left-[17px] top-0 grid h-8 w-8 place-items-center rounded-full border border-navy bg-card font-serif text-small text-navy">
              3
            </span>
            <h3 className="h4 font-serif text-navy">Attend the Introductory Webinar</h3>
            <p className="mt-2 leading-7 text-slate">
              Learn about the program structure, curriculum, expectations, and participation
              requirements before deciding whether to proceed.
            </p>
            <p className="mt-2 text-small text-slate">
              The webinar date and joining details will be communicated to applicants.
            </p>
          </li>
          <li className="relative pb-8 pl-9 last:pb-0">
            <span className="absolute -left-[17px] top-0 grid h-8 w-8 place-items-center rounded-full border border-navy bg-card font-serif text-small text-navy">
              4
            </span>
            <h3 className="h4 font-serif text-navy">Program Counselling</h3>
            <p className="mt-2 leading-7 text-slate">
              Discuss your interests, professional background, and expectations to better understand
              whether the program aligns with your goals.
            </p>
            <p className="mt-2 text-small text-slate">
              Counselling arrangements are subject to the program’s actual process.
            </p>
          </li>
          <li className="relative pb-8 pl-9 last:pb-0">
            <span className="absolute -left-[17px] top-0 grid h-8 w-8 place-items-center rounded-full border border-navy bg-card font-serif text-small text-navy">
              5
            </span>
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <h3 className="h4 font-serif text-navy">Program Registration</h3>
              <p className="font-serif text-2xl font-semibold text-navy">₹4,000</p>
            </div>
            <p className="mt-2 leading-7 text-slate">
              If you decide to proceed after the webinar and counselling, complete the separate
              program-registration step.
            </p>
            <p className="mt-3 rounded-md border border-navy/15 bg-tint p-4 text-small font-semibold leading-6 text-navy">
              The ₹4,000 program-registration fee is separate from the ₹80,000 program fee.
            </p>
          </li>
          <li className="relative pl-9">
            <span className="absolute -left-[17px] top-0 grid h-8 w-8 place-items-center rounded-full border border-navy bg-card font-serif text-small text-navy">
              6
            </span>
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <h3 className="h4 font-serif text-navy">Program Fee</h3>
              <p className="font-serif text-2xl font-semibold text-navy">₹80,000</p>
            </div>
            <p className="mt-2 leading-7 text-slate">
              The program fee for the 12-week Experience to Enterprise certificate program.
            </p>
          </li>
        </ol>
      </Section>

      <Section tint id="application" className="scroll-mt-24 md:scroll-mt-28">
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            title="Apply for Experience to Enterprise"
            sub="Tell us about your professional background, your motivation for exploring entrepreneurship, and what you hope to gain from the program."
          />
          <div className="mt-8 rounded-lg border bg-card p-5 md:p-8">
            <ExperienceApplicationForm />
          </div>
        </div>
      </Section>

      <Section white>
        <div>
          <SectionHeader title="Frequently Asked Questions" />
          <div className="mt-7">
            <Accordion items={faqs.map(([q, a]) => ({ q, a, key: q }))} />
          </div>
        </div>
      </Section>
    </>
  );
}
