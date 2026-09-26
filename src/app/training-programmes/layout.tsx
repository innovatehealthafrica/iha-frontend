import React, { ReactNode } from 'react'
import ContactUsSection from '@/components/contact-us-section'
import NewsletterSubscriptionSection from '@/components/newsletter-subscription-section'

// The hero header lives in each page (not here) so nested initiative pages
// such as /training-programmes/digital-health-workforce-readiness-initiative
// can render their own hero while still sharing the footer sections below.
const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <ContactUsSection />
      <NewsletterSubscriptionSection />
    </>
  )
}

export default layout
