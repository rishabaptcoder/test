import { FileText } from "lucide-react";
import { Section, SectionHeader, buttonClass } from "@/components/site";
import { SAMPLE_DISCLOSURE, SAMPLE_DOSSIER_URL } from "@/lib/resources";

const contents = [
  ["The Problem", "Who experiences the problem, how it is currently addressed and what the evidence suggests."],
  ["Customer Validation", "Interview findings, customer needs, existing alternatives and evidence of willingness to pay."],
  ["The Solution", "A prototype, pilot or minimum viable offer, with the reasoning behind its design."],
  ["The Business Model", "Target customers, pricing assumptions, delivery costs and revenue logic."],
  ["The Go-to-Market Plan", "How the venture could reach its first customers."],
  ["The Financial Model", "Key assumptions, costs, cash requirements and potential risks."],
  ["The Next Decision", "What has been validated, what remains uncertain and whether the venture should proceed, pivot or stop."],
];

export function SampleDossier({ embedded = false }: { embedded?: boolean }) {
  const content = <>
    <div className="flex items-start justify-between gap-6">
      <SectionHeader eyebrow="See the expected output" title="What does a finished venture project look like?" sub="Entrepreneurship is easier to evaluate when you can see the work behind the idea." />
      <FileText className="hidden h-12 w-12 shrink-0 text-navy sm:block" strokeWidth={1} aria-hidden="true" />
    </div>
    <h3 className="h4 mt-8">Sample Venture Project Dossier</h3>
    {SAMPLE_DOSSIER_URL && <p className="mt-4 max-w-3xl text-slate">Explore an illustrative Venture Project Dossier to understand how customer evidence, a proposed solution, financial assumptions and a go-to-market plan come together.</p>}
    <ol className="mt-10 grid gap-x-12 md:grid-cols-2">
      {contents.map(([title, description], index) => <li key={title} className="flex gap-5 border-t py-6">
        <span className="font-serif text-small text-slate">0{index + 1}</span>
        <div><h4 className="h4">{title}</h4><p className="mt-2 text-[16px] leading-6 text-slate">{description}</p></div>
      </li>)}
    </ol>
    {SAMPLE_DOSSIER_URL && <div className="mt-8"><a href={SAMPLE_DOSSIER_URL} target="_blank" rel="noopener noreferrer" className={buttonClass()}>View Sample Venture Project Dossier</a><p className="mt-4 text-small text-slate">{SAMPLE_DISCLOSURE}</p></div>}
  </>;

  return embedded ? <section id="sample-dossier" className="border-t pt-6">{content}</section> : <Section tint id="sample-dossier">{content}</Section>;
}
