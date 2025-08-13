"use client";

import ContactUsSection from "@/components/contact-us-section";
import PartnerSection from "@/app/(landing-page)/components/partners-section";
import Header from "./component/header";
import WhoWeAre from "./component/who-we-are";
import HowWeMakeImpact from "./component/how-we-make-impact";
import TeamMembers from "./component/team-members";

export default function About() {
  return (
    <>
      <Header />

      <WhoWeAre />

      <HowWeMakeImpact />

      <PartnerSection />

      {/* Team */}
      <section className="py-16">
        <h3 className="text-3xl sm:text-5xl text-center font-bold mb-8 sm:mb-12 text-primary">
          Meet The <span className="text-primary-bright-orange">Team</span> at
          IHA
        </h3>

        <div className="max-w-screen-xl mx-auto px-8 lg:px-0">
          <TeamMembers />
        </div>
      </section>

      <ContactUsSection />
    </>
  );
}
