import React from "react";

export function PitchYardHeader() {
  return (
    <section className="z-0 relative bg-primary flex flex-col items-center justify-center py-24 lg:py-32 px-6">
      <div className="relative z-10 text-center max-w-screen-lg space-y-4 lg:space-y-6">
        <p className="uppercase tracking-widest text-primary-bright-orange text-sm lg:text-base font-semibold">
          PitchYard
        </p>

        <h1 className="text-primary-bright-orange font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight">
          PitchYard 6-Month Support Model
        </h1>

        <p className="text-white font-medium text-lg lg:text-2xl">
          From Idea to Investment-Ready
        </p>
      </div>
    </section>
  );
}
