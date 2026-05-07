import React, { ReactNode } from 'react'
import ContactUsSection from '@/components/contact-us-section'
import { ProjectHeader } from '@/components/progams/projectHeader'
import NewsletterSubscriptionSection from '@/components/newsletter-subscription-section'
import PartnerShipView from '@/components/progams/partnerships'


const layout = () => {
  return (
    <>
      <ProjectHeader
        title="Partnership"
        description="We partner with organizations to develop innovative digital solutions that advance healthcare in Africa."
        ctaHref="#who-we-are"
        heightClassName="h-[60vh] sm:h-[540px]"
      />
      <PartnerShipView />
      <ContactUsSection />
      <NewsletterSubscriptionSection />
    </>
  )
}

export default layout
