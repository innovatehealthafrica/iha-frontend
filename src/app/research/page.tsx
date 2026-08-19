import React from 'react'
import type { Metadata } from 'next'
import PillarCardGrid, { PillarCard } from '@/components/pillar-card-grid'
import researchPlaceholder from "@/assets/images/Mpox.jpg";
import digitalHealthReadinessReport from "@/assets/images/the_state_of_digital_health_readines_in_the_african_health_workforce_report_2026.png";

export const metadata: Metadata = {
  title: "Implementation Research | InnovateHealth Africa",
  description:
    "Scientific evidence on how digital health is experienced across African health systems, turning insight into stronger programmes, policies, and investment.",
};

const cards: PillarCard[] = [
  {
    id: 'digital-health-readiness-report-2026',
    title:
      'The State of Digital Health Readiness in the African Health Workforce Report - 2026',
    description:
      'The first comprehensive, evidence-based assessment of digital health readiness among health workers across Sub-Saharan Africa. Drawing on global health workforce indices, national digital health strategies, and peer-reviewed literature spanning 48 countries, this inaugural report maps the structural conditions shaping workforce readiness and synthesises what the empirical evidence reveals about how health workers across the region are engaging with digital health in practice. Essential reading for policymakers, health workforce planners, digital health implementers, and the global health investment community.',
    image: digitalHealthReadinessReport,
    externalLink: { label: "Read the Report", href: "https://drive.google.com/file/d/1fPco94lJAnaRF6sXylFvRr182F_8NCFP/view?usp=sharing" },
    readMoreHref: "https://drive.google.com/file/d/1fPco94lJAnaRF6sXylFvRr182F_8NCFP/view?usp=sharing",
  },
  {
    id: 'ai-diagnostic-review',
    title:
      'AI-Powered Diagnostic Tools for Infectious Diseases in Low-Resource Settings: A Comprehensive Review',
    description:
      'A comprehensive review of how AI-powered diagnostic tools are being designed, deployed, and evaluated for infectious diseases in low-resource healthcare settings across Africa.',
    image: researchPlaceholder,
    externalLink: { label: "Read More", href: "https://preprints.jmir.org/preprint/84758" },
  },
]

const Page = () => <PillarCardGrid title="Our Research" cards={cards} />

export default Page
