import { useState } from "react";
import { Field, buttonClass } from "@/components/site";

function Done({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-lg border bg-card p-8">
      <h3 className="h3">{title}</h3>
      <p className="mt-3 text-slate">{text}</p>
    </div>
  );
}

const NOT_CONNECTED =
  "Online submissions are not connected yet, so your details have not been sent or stored. The form is ready; it still needs a configured destination before launch. Please check back soon.";

function Consent({ label }: { label: string }) {
  return (
    <label className="flex items-start gap-3 md:col-span-2">
      <input
        type="checkbox"
        name="consent"
        required
        className="mt-1.5 h-4 w-4 shrink-0 accent-navy"
      />
      <span className="text-small text-slate">{label} *</span>
    </label>
  );
}

/* -------------------------------------------------------
   EXPERIENCE TO ENTERPRISE — APPLICATION FORM
   Frontend only. No application data is sent or stored.
------------------------------------------------------- */

export function ApplyForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <Done
        title="Thank you for your interest."
        text="Your application form is complete. Online application processing will be enabled in a later phase. Your details have not been sent or stored."
      />
    );
  }

  return (
    <form
      className="grid gap-5 md:grid-cols-2"
      onSubmit={(e) => {
        e.preventDefault();

        const form = e.currentTarget;

        if (!form.reportValidity()) return;

        setSent(true);
      }}
    >
      {/* PERSONAL INFORMATION */}

      <div className="md:col-span-2">
        <h3 className="h3">Personal Information</h3>
        <p className="mt-2 text-small text-slate">
          Tell us a little about yourself and how we can contact you.
        </p>
      </div>

      <Field label="Full Name" name="name" required />

      <Field
        label="Email Address"
        name="email"
        type="email"
        required
      />

      <Field
        label="Mobile Number"
        name="phone"
        type="tel"
        required
      />

      <Field label="Current City" name="city" required />

      <Field label="State (optional)" name="state" />

      <Field
        label="LinkedIn Profile (optional)"
        name="linkedin"
        type="url"
      />

      {/* PROFESSIONAL BACKGROUND */}

      <div className="mt-4 md:col-span-2">
        <h3 className="h3">Professional Background</h3>
        <p className="mt-2 text-small text-slate">
          Help us understand your experience, expertise, and professional
          context.
        </p>
      </div>

      <Field
        label="Current Role / Designation"
        name="role"
        required
      />

      <Field
        label="Organisation / Company"
        name="org"
        required
      />

      <Field
        label="Years of Professional Experience"
        name="years"
        as="select"
        options={[
          "Less than 3 years",
          "3–5 years",
          "6–10 years",
          "11–15 years",
          "16–20 years",
          "More than 20 years",
        ]}
        required
      />

      <Field
        label="Industry / Domain"
        name="industry"
        as="select"
        options={[
          "Technology / IT",
          "Education",
          "Financial Services",
          "Manufacturing",
          "Healthcare",
          "Consulting / Professional Services",
          "Retail / Consumer",
          "Government / Public Sector",
          "Other",
        ]}
        required
      />

      <Field
        label="Current Employment Status"
        name="employment"
        as="select"
        options={[
          "Employed full-time",
          "Self-employed / Consultant",
          "Business owner",
          "Between roles",
          "Other",
        ]}
        required
      />

      <div className="md:col-span-2">
        <Field
          label="Briefly describe your professional experience and areas of expertise"
          name="experience"
          as="textarea"
          required
        />
      </div>

      {/* ENTREPRENEURIAL INTEREST */}

      <div className="mt-4 md:col-span-2">
        <h3 className="h3">Entrepreneurial Interests</h3>
        <p className="mt-2 text-small text-slate">
          You do not need to have a fully developed business idea to apply.
          Tell us what you are exploring and what you hope to achieve.
        </p>
      </div>

      <div className="md:col-span-2">
        <Field
          label="What interests you about the Experience to Enterprise program?"
          name="interest"
          as="textarea"
          required
        />
      </div>

      <Field
        label="Do you currently have an entrepreneurial idea?"
        name="idea"
        as="select"
        options={[
          "Yes, I have a specific idea",
          "I have identified a problem but not a solution",
          "I am exploring opportunities",
          "I am interested in intrapreneurship within my organisation",
          "I am considering acquiring or joining an existing business",
          "I am not sure yet",
        ]}
        required
      />

      <Field
        label="Have you spoken to potential customers or users?"
        name="customerResearch"
        as="select"
        options={[
          "Yes, several conversations",
          "Yes, one or two conversations",
          "Not yet",
          "Not applicable; I am still exploring",
        ]}
      />

      <div className="md:col-span-2">
        <Field
          label="What industry, problem, or opportunity would you like to explore? (Optional)"
          name="opportunity"
          as="textarea"
        />
      </div>

      <div className="md:col-span-2">
        <Field
          label="What would you like to achieve by the end of the program?"
          name="goals"
          as="textarea"
          required
        />
      </div>

      <Field
        label="How did you hear about Kaushal Hub?"
        name="source"
        as="select"
        options={[
          "LinkedIn",
          "Colleague / Professional Network",
          "Referral",
          "Search Engine",
          "Event / Webinar",
          "Kaushal Hub Website",
          "Other",
        ]}
        required
      />

      {/* ACKNOWLEDGEMENT */}

      <div className="md:col-span-2">
        <Consent
          label="I confirm that the information provided is accurate to the best of my knowledge."
        />
      </div>

      {/* SUBMIT */}

      <div className="md:col-span-2">
        <button
          type="submit"
          className={buttonClass("primary", "w-full md:w-auto")}
        >
          Submit Application
        </button>

        <p className="mt-4 text-small text-slate">
          This is a preview of the application form. Online application
          processing has not been enabled, and submitting this form will not
          send or save your information. Admission and associated opportunities
          are subject to eligibility and selection criteria.
        </p>
      </div>
    </form>
  );
}

/* -------------------------------------------------------
   GENERAL ENQUIRY FORM
------------------------------------------------------- */

export function EnquiryForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <Done
        title="Online enquiries are not open yet."
        text={NOT_CONNECTED}
      />
    );
  }

  return (
    <form
      className="grid gap-5 md:grid-cols-2"
      onSubmit={(e) => {
        e.preventDefault();

        if (!e.currentTarget.reportValidity()) return;

        setSent(true);
      }}
    >
      <Field label="Name" name="name" required />

      <Field
        label="Email"
        name="email"
        type="email"
        required
      />

      <Field label="Organisation" name="org" />

      <Field
        label="I am interested in"
        name="topic"
        as="select"
        required
        options={[
          "Program enquiry",
          "Community",
          "Partnership",
          "Expert or faculty",
          "General enquiry",
        ]}
      />

      <div className="md:col-span-2">
        <Field
          label="Message"
          name="message"
          as="textarea"
          required
        />
      </div>

      <div className="md:col-span-2">
        <button
          type="submit"
          className={buttonClass("primary", "w-full md:w-auto")}
        >
          Submit Enquiry
        </button>
      </div>
    </form>
  );
}

/* -------------------------------------------------------
   PROGRAM INTEREST REGISTRATION
------------------------------------------------------- */

export const interestPrograms = [
  "Entrepreneurship for School Students",
  "Entrepreneurship for Undergraduate Students",
  "AI & Future Skills",
  "Generative AI in Action with Microsoft Intelligent Tools",
  "Experience to Enterprise",
] as const;

export function InterestForm({
  program,
}: {
  program?: string | undefined;
}) {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <Done
        title="Interest registration is not connected yet."
        text={NOT_CONNECTED}
      />
    );
  }

  const options =
    program &&
    (interestPrograms as readonly string[]).includes(program)
      ? [
          program,
          ...interestPrograms.filter((p) => p !== program),
        ]
      : [...interestPrograms];

  return (
    <form
      className="grid gap-5 md:grid-cols-2"
      onSubmit={(e) => {
        e.preventDefault();

        if (!e.currentTarget.reportValidity()) return;

        setSent(true);
      }}
    >
      <Field label="Name" name="name" required />

      <Field
        label="Email"
        name="email"
        type="email"
        required
      />

      <Field
        label="Program of Interest"
        name="program"
        as="select"
        required
        options={options}
      />

      <Field
        label="Organisation or Institution (optional)"
        name="org"
      />

      <div className="md:col-span-2">
        <Field
          label="Anything you'd like us to know? (optional)"
          name="message"
          as="textarea"
        />
      </div>

      <Consent label="I agree to be contacted by Kaushal Hub about this program." />

      <div className="md:col-span-2">
        <button
          type="submit"
          className={buttonClass("primary", "w-full md:w-auto")}
        >
          Register Interest
        </button>

        <p className="mt-4 text-small text-slate">
          We use your details only to contact you about the program you
          choose. Registering interest is not an application and does not
          reserve a seat.
        </p>
      </div>
    </form>
  );
}

/* -------------------------------------------------------
   COMMUNITY INTEREST FORM
------------------------------------------------------- */

export const communityInterests = [
  "Entrepreneurship and startups",
  "AI and emerging technologies",
  "Professional learning",
  "Knowledge sharing and mentoring",
  "Collaboration and partnerships",
  "Other",
] as const;

export function CommunityForm() {
  const [submissionAttempted, setSubmissionAttempted] = useState(false);

  return (
    <form
      className="grid gap-5 md:grid-cols-2"
      onSubmit={(e) => {
        e.preventDefault();

        if (!e.currentTarget.reportValidity()) return;

        setSubmissionAttempted(true);
      }}
    >
      <Field label="Full name" name="name" required />

      <Field
        label="Email address"
        name="email"
        type="email"
        required
      />

      <Field
        label="Primary area of interest"
        name="interest"
        as="select"
        required
        options={[...communityInterests]}
      />

      <Field label="Current role or background (optional)" name="background" />

      <Field label="Organisation (optional)" name="organisation" />

      <Field label="LinkedIn profile (optional)" name="linkedin" type="url" />

      <div className="md:col-span-2">
        <Field
          label="What would you like to contribute or gain from the community? (optional)"
          name="contributionOrGain"
          as="textarea"
        />
      </div>

      <Consent label="I agree to receive community-related updates from Kaushal Hub." />

      <div className="md:col-span-2">
        <button
          type="submit"
          className={buttonClass("primary", "w-full md:w-auto")}
        >
          Join the Community
        </button>

        <p className="mt-4 text-small leading-6 text-slate">
          If a submission service is connected, your details will be used for community
          participation follow-up. Community updates will only be sent if you consent. This page
          does not transmit or store your details yet.
        </p>
        {submissionAttempted && (
          <p className="mt-4 text-small leading-6 text-slate" role="alert">
            We could not submit your details because this form is not connected to a registration
            service yet. Your information remains in the form and has not been sent or saved.
          </p>
        )}
      </div>
    </form>
  );
}
