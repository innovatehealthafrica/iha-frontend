import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "PitchYard 6-Month Support Model | InnovateHealth Africa",
  description:
    "From Idea to Investment-Ready — a six-phase progression framework that guides idea-stage and early-stage healthtech innovators from raw idea to investment-ready venture.",
}

const Page = () => {
  return (
    <article className="max-w-screen-md mx-auto px-6 lg:px-0 pt-4 pb-16 text-gray-800">
      <section className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">Model Overview</h2>
        <p className="text-base sm:text-lg leading-relaxed mb-6">
          The PitchYard Support Model is a six-phase progression framework designed to guide idea-stage and early-stage healthtech innovators through structured steps that transform raw ideas into investment-ready ventures. Each phase builds on the last, with flexibility to account for pivots, new insights, or early exits.
        </p>
        <p className="text-base sm:text-lg leading-relaxed mb-4">The model rests on three pillars:</p>
        <ol className="list-decimal pl-6 space-y-2 text-base sm:text-lg leading-relaxed">
          <li><strong>Validation</strong> — founders test assumptions with real users and markets.</li>
          <li><strong>Iteration</strong> — founders refine their solutions through prototypes and pilots.</li>
          <li><strong>Readiness</strong> — founders develop the tools, proof, and story needed to attract partners and investors.</li>
        </ol>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">Conceptual Flow</h2>
        <ul className="space-y-3 text-base sm:text-lg leading-relaxed">
          <li><strong>Input</strong> → Early-stage founder with an idea</li>
          <li>
            <strong>Process</strong> → 6 guided phases (reflection → validation → testing → prototyping → partnership prep → investment readiness)
          </li>
          <li>
            <strong>Output</strong> → Founder exits with one or more of:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Validated problem statement</li>
              <li>Proof of market interest</li>
              <li>Prototype or MVP tested in real life</li>
              <li>Investor/partner-ready pitch pack</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Phases of the Model</h2>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-primary mb-3">Phase 1: Reflection &amp; Focus (2 weeks)</h3>
          <ul className="list-disc pl-6 space-y-1 text-base sm:text-lg leading-relaxed">
            <li><strong>Activity:</strong> Reflection form + roadmap</li>
            <li><strong>Mechanism:</strong> Structured self-assessment and goal-setting</li>
            <li><strong>Output:</strong> Clear 3-step action plan + 6-month roadmap</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-primary mb-3">Phase 2: Understanding the Problem (3–4 weeks)</h3>
          <ul className="list-disc pl-6 space-y-1 text-base sm:text-lg leading-relaxed">
            <li><strong>Activity:</strong> 10–15 user interviews; simple sketches/mockups</li>
            <li><strong>Mechanism:</strong> Problem discovery and validation</li>
            <li><strong>Output:</strong> Evidence that the problem is real and urgent</li>
          </ul>
        </div>

        <div className="mb-8 bg-accent-100 border-l-4 border-primary rounded-md p-5">
          <h4 className="text-lg font-bold text-primary mb-2">Key questions for Phase 1 &amp; 2</h4>
          <ul className="list-disc pl-6 space-y-1 text-base leading-relaxed">
            <li>Does the problem even exist in the way I think it does?</li>
            <li>Who exactly experiences this problem most, and how urgent is it for them?</li>
            <li>How are people currently solving (or struggling with) this problem?</li>
            <li>Are there enough people or organizations with this problem to make my idea worth building?</li>
            <li>Would anyone actually care if my solution disappeared tomorrow?</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-primary mb-3">Phase 3: Testing the Idea (3–4 weeks)</h3>
          <ul className="list-disc pl-6 space-y-1 text-base sm:text-lg leading-relaxed">
            <li><strong>Activity:</strong> Build a basic version (sketch, WhatsApp flow, demo); test with 5–10 people</li>
            <li><strong>Mechanism:</strong> Early solution testing + initial partner interest</li>
            <li><strong>Output:</strong> Proof of early demand (LoI, pilot interest, positive user reactions)</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-primary mb-3">Phase 4: Prototype or Small Pilot (4 weeks)</h3>
          <ul className="list-disc pl-6 space-y-1 text-base sm:text-lg leading-relaxed">
            <li><strong>Activity:</strong> Build small working prototype; run pilot with few users/site</li>
            <li><strong>Mechanism:</strong> Real-world testing under controlled scope</li>
            <li><strong>Output:</strong> Evidence of usability, value, and measurable impact (2–3 KPIs)</li>
          </ul>
        </div>

        <div className="mb-8 bg-accent-100 border-l-4 border-primary rounded-md p-5">
          <h4 className="text-lg font-bold text-primary mb-2">Key questions for phase 3 &amp; 4</h4>
          <ul className="list-disc pl-6 space-y-1 text-base leading-relaxed">
            <li>Does my solution make sense to the people I&rsquo;m building for?</li>
            <li>When I show a simple version (sketch, demo, prototype), do people &ldquo;get it&rdquo;?</li>
            <li>Does it solve the problem better, cheaper, or faster than what exists today?</li>
            <li>What do early users complain about or suggest to improve?</li>
            <li>If I test this with a small group/site, do they continue using it after the first try?</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-primary mb-3">Phase 5: Getting Ready for Partners (3–4 weeks)</h3>
          <ul className="list-disc pl-6 space-y-1 text-base sm:text-lg leading-relaxed">
            <li><strong>Activity:</strong> Prepare short pack (problem, solution, results, next steps)</li>
            <li><strong>Mechanism:</strong> Synthesis and communication of evidence</li>
            <li><strong>Output:</strong> Partner-ready proof pack</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-primary mb-3">Phase 6: Preparing for Investment (3–4 weeks)</h3>
          <ul className="list-disc pl-6 space-y-1 text-base sm:text-lg leading-relaxed">
            <li><strong>Activity:</strong> Create 10–12 slide investor deck; practice pitches</li>
            <li><strong>Mechanism:</strong> Investor readiness training + narrative building</li>
            <li><strong>Output:</strong> Investment-ready presentation + confidence in approaching accelerators, angels, or grants</li>
          </ul>
        </div>

        <div className="mb-8 bg-accent-100 border-l-4 border-primary rounded-md p-5">
          <h4 className="text-lg font-bold text-primary mb-2">Key questions for phase 5 &amp; 6</h4>
          <ul className="list-disc pl-6 space-y-1 text-base leading-relaxed">
            <li>Can I clearly explain the problem, my solution, and why it matters in 2–3 minutes?</li>
            <li>Do I have at least some evidence — stories, data, or letters of intent — that shows demand?</li>
            <li>Do I understand how this solution could eventually make money or sustain itself?</li>
            <li>Can I answer, &ldquo;Why now? Why me/us?&rdquo; with confidence?</li>
            <li>Do I have a simple roadmap of what I&rsquo;ll do with the next funding or partnership?</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">Conditional Branching</h2>
        <p className="text-base sm:text-lg leading-relaxed mb-4">The model allows for different outcomes:</p>
        <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg leading-relaxed">
          <li>Validated → Prototype → Investor-ready (ideal path)</li>
          <li>Validated problem but weak solution → Pivot documented → Restart cycle</li>
          <li>Invalidated problem → Exit with clear insights, saving resources</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">Impact Pathway</h2>
        <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg leading-relaxed">
          <li><strong>Inputs:</strong> Early-stage founders, PitchYard platform, mentors/builders, tools, partner networks</li>
          <li><strong>Activities:</strong> Reflection, validation interviews, prototyping, pilots, storytelling, pitch preparation</li>
          <li><strong>Outputs:</strong> Proof packs, prototypes, pitch decks, partner MoUs, investor-ready founders</li>
          <li><strong>Outcomes:</strong> Founders gain clarity, traction, and readiness to scale</li>
          <li><strong>Impact:</strong> Stronger pipeline of investable African healthtech startups</li>
        </ul>
      </section>
    </article>
  )
}

export default Page
