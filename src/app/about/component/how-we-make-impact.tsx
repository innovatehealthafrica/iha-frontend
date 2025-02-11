import React from "react";
import Image from "next/image";
import Img1 from "@/assets/images/about-page/Img1.png";
import Img2 from "@/assets/images/about-page/Img2.png";
import Img3 from "@/assets/images/about-page/Img3.png";

export default function HowWeMakeImpact() {
  return (
    <section className="pb-20 max-w-screen-xl mx-auto px-8 lg:px-0">
      <div className="text-center mt-24">
        <h3 className="text-5xl text-center font-bold mb-12 text-primary">
          How We Make Impact{" "}
        </h3>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-3 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center max-w-lg">
            <Image
              className="mx-auto mb-4"
              height={350}
              width={350}
              src={Img1}
              alt={"co-creating image"}
            />
            <h4 className="font-semibold text-xl mb-2">
              Co-creating with the people
            </h4>
            <p className="font-light p-4">
              We collaborate directly with communities, healthcare workers, and
              various stakeholders to design and implement solutions that are
              deeply rooted in the realities and needs of the people we serve
            </p>
          </div>

          <div className="text-center max-w-lg">
            <Image
              className="mx-auto mb-4"
              src={Img2}
              height={350}
              width={350}
              alt={"Workforce Capacity Development image"}
            />
            <h4 className="font-semibold text-xl mb-2">
              Workforce Capacity Development{" "}
            </h4>
            <p className="font-light">
              We provide digital solutions and training that help healthcare
              workers use technology to deliver better patient care across
              Africa.
            </p>
          </div>

          <div className="text-center max-w-lg">
            <Image
              className="mx-auto mb-4"
              src={Img3}
              height={350}
              width={350}
              alt={"co-creating icon"}
            />
            <h4 className="font-semibold text-xl mb-2">
              Strategic Partnership{" "}
            </h4>
            <p className="font-light">
              We partner with organizations to develop innovative digital
              solutions that advance healthcare in Africa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
