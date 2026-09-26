import React from 'react'
import type { Metadata } from 'next'
import { ProjectHeader } from '@/components/progams/projectHeader'
import ProgrammeAccordionCards, { ProgrammeCard } from '@/components/programme-accordion-cards'
import workshopImage from '@/assets/images/workforce-readiness.jpg'

export const metadata: Metadata = {
  title: 'Digital Health Workforce Readiness Initiative | InnovateHealth Africa',
  description:
    "Equipping frontline health workers with the practical digital competencies they need to navigate new technologies, adapt to changing models of care, and contribute confidently to digitally enabled health systems.",
}

// Add new programmes to this list. Optional fields (deliveredWith, format,
// about, delivered, outcomes) are hidden automatically when left out.
const programmes: ProgrammeCard[] = [
  {
    id: 'digital-health-literacy-workshop-uch',
    title: 'Digital Health Literacy Workshop',
    image: workshopImage,
    imageAlt: 'Healthcare professionals in a facilitated digital health workshop session',
    location: 'University College Hospital, Ibadan',
    summary:
      'A practical, expert-facilitated digital health literacy programme delivered to healthcare staff at University College Hospital (UCH), Ibadan, in partnership with UCH.',
    deliveredWith: 'University College Hospital, Ibadan',
    format: 'In-facility workshop',
    about: [
      'A practical, expert-facilitated digital health literacy programme delivered to healthcare staff at University College Hospital (UCH), Ibadan, in partnership with UCH.',
      'The workshop combines digital competency assessment with targeted training, helping participating healthcare professionals understand their current capabilities and strengthen the skills required to engage with digital technologies in everyday clinical practice.',
    ],
    // delivered: ['...'],  // What was delivered / programme components
    // outcomes: ['...'],   // Programme outcomes / impact
  },
]

const Page = () => (
  <>
    <ProjectHeader
      title="Digital Health Workforce Readiness Initiative"
      description="Africa's health system is changing faster than the workforce has been prepared for. This initiative equips frontline health workers with the practical digital competencies they need to navigate new technologies, adapt to changing models of care, and contribute confidently to digitally enabled health systems."
      hideCta
    />
    <ProgrammeAccordionCards title="Programmes" programmes={programmes} />
  </>
)

export default Page
