import Image from "next/image";
import React from "react";

function Offering() {
  return (
    <div className="w-full p-11 md:p-16 space-y-6 md:space-y-11">
      {/* Title + Description */}
      <div className="flex flex-col space-y-3">
        <div className="flex flex-col">
          <span className="text-lg text-label-primary">We offer</span>
          <h2 className="text-4xl md:text-6xl tracking-[-0.04em] text-white">
            Expert Ceiling Design Solutions
          </h2>
        </div>
        <p className="w-full md:w-[650px] text-lg text-label-primary">
          We craft ceilings that elevate your space, combining style and
          practicality to meet your unique vision. Whether it&apos;s adding a
          modern pop design or creating an elegant fall ceiling, our expertise
          ensures every detail enhances comfort and functionality. Transform any
          room with ceilings that make a statement and bring your space to life.
        </p>
      </div>
      {/* Image Container */}
      <div className="h-[350px] md:h-[450px] w-full rounded-xl overflow-hidden group">
        <div className="w-full h-full relative scale-105 group-hover:scale-100 transition-transform ease-in-out duration-300">
          <Image
            src="/images/general/2.jpg"
            className="absolute object-cover"
            fill
            alt="What we offer"
          />
        </div>
      </div>
    </div>
  );
}

export default Offering;
