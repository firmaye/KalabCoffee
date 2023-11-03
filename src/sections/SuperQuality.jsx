import React from "react";
import Button from "../Components/Button";
import kalab from "../assets/images/kalab.jpg";
import { arrowRight } from "../assets/icons";
const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-start max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col ">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          About{" "}
          <span className="text-coral-red inline-block z-10 mt-3">Kalab</span>{" "}
          Coffee
        </h2>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-4 mb-14 info-text">
          At Kalab Coffee, we are passionate about crafting exceptional coffee
          experiences. From the finest beans to expert baristas, we take pride
          in every detail to deliver a perfect cup. Our cozy cafe provides a
          warm and inviting atmosphere to savor your favorite brew. Join us for
          a moment of relaxation, connection, and delicious treats made with
          locally sourced ingredients. We are proud to be a part of this vibrant
          community, and we strive to give back in meaningful ways. Come and
          experience the difference at Kalab Coffee.
        </p>
        <div className="mt-1">
          <Button
            label="Show details"
            iconURL={arrowRight}
            width={15}
            height={5}
            className="ml-2 rounded-full w-5 h-5"
          />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={kalab}
          width={450}
          height={450}
          alt="Kalab"
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
