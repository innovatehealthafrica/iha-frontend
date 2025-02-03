"use client";

import ContactUsSection from "@/components/contact-us-section";
import PartnerSection from "@/app/(landing-page)/components/partners-section";
import linkedinIcon from "@/assets/images/about-page/Vector.png";
import Header from "./component/header";
import WhoWeAre from "./component/who-we-are";
import HowWeMakeImpact from "./component/how-we-make-impact";
import ScrollableTags from "./component/scrollable-tags";
import TeamMembers from "./component/team-members";

export default function About() {
  return (
    <>
      {/* Header */}

      <Header />
      {/* Who we are */}

      <WhoWeAre />

      {/* How We Make Impact */}
      <HowWeMakeImpact />
      {/* Partners */}
      <PartnerSection />

      {/* Team */}
      <section className="max-w-screen-xl mx-auto px-8 lg:px-0 py-16">
        <h3 className="text-5xl text-center font-bold mb-12 text-primary">
          Meet The <span className="text-primary-bright-orange">Team</span> at
          IHA
        </h3>
        <div className="flex gap-4 mx-4 items-center justify-center align-middle mb-6">
          <ScrollableTags />
        </div>
        <TeamMembers />
      </section>

      {/* Contact us */}
      <ContactUsSection />
    </>
  );
}
