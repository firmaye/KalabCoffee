import React from "react";
import { offer } from "../assets/images";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-lg:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          width={687}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col ">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red inline-block z-10 mt-3">
            Speacial
          </span>{" "}
          Offer
        </h2>
        <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">
          Experience something special with our limited-time offer!
        </h3>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-4 mb-5 info-text">
          At Kalab Coffee, we're excited to treat you to an exclusive deal.
          Enjoy our discount and make your coffee moments even more memorable.
          Don't miss out on this special offer. Visit Kalab Coffee, today to
          indulge in something extraordinary. <br /> <br /> Cheers, Kalab Coffee
        </p>
      </div>
    </section>
  );
};

export default SpecialOffer;
