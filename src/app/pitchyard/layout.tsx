import React, { ReactNode } from 'react'
import ContactUsSection from '@/components/contact-us-section'
import NewsletterSubscriptionSection from '@/components/newsletter-subscription-section'
import { PitchYardHeader } from './components/pitchyard-header'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <PitchYardHeader />
      {children}
      <ContactUsSection />
      <NewsletterSubscriptionSection />
    </>
  )
}

export default Layout
