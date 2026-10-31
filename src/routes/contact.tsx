import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Field, Section, SectionHeader, buttonClass } from "@/components/site";
import { canonicalLinks } from "@/lib/resources";

const directionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=APTCODER%20C%2FO%20BHARAT%20IMPACT%2C%20C-26%2C%20C%20Block%2C%20Sector%2059%2C%20Noida%2C%20Uttar%20Pradesh%20201309";

const socialProfiles = [
  { name: "Facebook", Icon: Facebook },
  { name: "LinkedIn", Icon: Linkedin },
  { name: "Instagram", Icon: Instagram },
  { name: "YouTube", Icon: Youtube },
];

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): { interest?: string } => {
    const interest = search["interest"];
    return typeof interest === "string" ? { interest } : {};
  },
  head: () => ({
    meta: [
      { title: "Contact Kaushal Hub" },
      {
        name: "description",
        content: "Contact Kaushal Hub with a question, partnership idea or general enquiry.",
      },
      { property: "og:title", content: "Contact Kaushal Hub" },
      {
        property: "og:description",
        content: "Have a question or idea to discuss? Get in touch with Kaushal Hub.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: canonicalLinks("/contact"),
  }),
  component: Contact,
});

function Contact() {
  const [notSent, setNotSent] = useState(false);

  return (
    <>
      <Section className="!py-12 md:!py-16">
        <h1 className="h1">Contact Us</h1>
        <p className="mt-4 max-w-none text-slate">
          Have a question, a partnership idea or something you’d like to discuss with our team? Get
          in touch.
        </p>
      </Section>

      <Section white className="!py-10 md:!py-12">
        <div className="grid gap-8 border-t pt-7 md:grid-cols-3 md:gap-6">
          <section aria-labelledby="visit-us-heading">
            <h2 id="visit-us-heading" className="h4 font-serif text-navy">
              Visit Us
            </h2>
            <address className="mt-3 not-italic leading-7 text-slate">
              <span className="block font-medium text-ink">APTCODER C/O BHARAT IMPACT</span>
              <span className="block">C-26, C Block, Sector 59</span>
              <span className="block">Noida, Uttar Pradesh 201309</span>
            </address>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noreferrer"
              className={buttonClass(
                "text",
                "mt-3 w-fit focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2",
              )}
            >
              Get Directions <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </section>

          <section aria-labelledby="call-us-heading">
            <h2 id="call-us-heading" className="h4 font-serif text-navy">
              Call Us
            </h2>
            <a
              href="tel:+919318497057"
              className="mt-3 inline-flex min-h-11 items-center font-medium text-navy underline-offset-4 hover:underline focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
            >
              +91-9318497057
            </a>
          </section>

          <section aria-labelledby="email-us-heading">
            <h2 id="email-us-heading" className="h4 font-serif text-navy">
              Email Us
            </h2>
            <a
              href="mailto:hello@aptcoder.in"
              className="mt-3 inline-flex min-h-11 items-center font-medium text-navy underline-offset-4 hover:underline focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
            >
              hello@aptcoder.in
            </a>
          </section>
        </div>
      </Section>

      <Section className="!py-12 md:!py-16">
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            title="How can we help?"
            sub="Tell us a little about your enquiry, and our team will have the context needed to respond."
          />
          <form
            className="mt-8 grid gap-5 rounded-lg border bg-card p-5 md:grid-cols-2 md:p-8"
            onSubmit={(event) => {
              event.preventDefault();
              if (!event.currentTarget.reportValidity()) return;
              setNotSent(true);
            }}
          >
            <Field label="Full name" name="name" required />
            <Field label="Work email" name="email" type="email" required />
            <Field label="Organisation" name="organisation" />
            <Field
              label="Enquiry type"
              name="enquiryType"
              as="select"
              required
              options={[
                "General enquiry",
                "Partnership or collaboration",
                "Institutional or corporate enquiry",
                "Media or other enquiry",
              ]}
            />
            <div className="md:col-span-2">
              <Field label="Message" name="message" as="textarea" required />
            </div>
            <div className="md:col-span-2">
              <button type="submit" className={buttonClass("primary", "w-full md:w-auto")}>
                Send Enquiry
              </button>
              {notSent && (
                <p className="mt-4 text-small leading-6 text-slate" role="alert">
                  Your enquiry has not been sent because this form is not connected to a submission
                  service yet. Please call +91-9318497057 to reach us.
                </p>
              )}
            </div>
          </form>
        </div>
      </Section>

      <Section white className="!py-10 md:!py-12">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="h3">Connect with Kaushal Hub</h2>
          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {socialProfiles.map(({ name, Icon }) => (
              <li key={name}>
                <span
                  role="img"
                  aria-label={`${name} profile link not available`}
                  className="inline-flex items-center gap-2 text-small text-slate"
                >
                  <Icon className="h-5 w-5 text-navy" aria-hidden="true" />
                  <span>{name}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-3 text-small text-slate">
          Social profile links will be added when official destinations are available.
        </p>
      </Section>
    </>
  );
}
