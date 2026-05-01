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
        ctaLabel="Work with Us"
        ctaHref="#who-we-are"
        backgroundImageUrl="/path/to/image.jpg"
        overlayClassName="bg-black/40"
        heightClassName="h-[60vh] sm:h-[540px]"
      />
      <PartnerShipView />
      <ContactUsSection />
      <NewsletterSubscriptionSection />
    </>
  )
}

export default layout
