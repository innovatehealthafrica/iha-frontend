import React, { ReactNode } from 'react'
import ContactUsSection from '@/components/contact-us-section'
import { ProjectHeader } from '@/components/progams/projectHeader'
import NewsletterSubscriptionSection from '@/components/newsletter-subscription-section'


const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <ProjectHeader

      />
      {children}
      <ContactUsSection />
      <NewsletterSubscriptionSection />
    </>
  )
}

export default layout
