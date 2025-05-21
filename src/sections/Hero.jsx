import React from "react";
import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";
import { useState } from "react";

import { coffees, statistics } from "../constants";
import CoffeeCard from "../Components/CoffeeCard";
import { coffee1 } from "../assets/images";

const Hero = () => {
  const [bigCoffeeImg, setBigCoffeeImg] = useState(coffee1);

  return (
    <section
      id="home"
      className="w-full flex lg:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative lg:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28">
        <h2 className="text-xl font-montserrat text-coral-red">
          Coffee is chemistry
        </h2>

        <h1 className="mt-10  font-palanquin  text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="lg:bg-white lg:whitespace-nowrap relative z-10 pr-10 mb-10">
            Awaken your sense
          </span>
          <br />
          <span className="text-coral-red inline-block z-10 mt-3">
            Kalab
          </span>{" "}
          Cafe
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Stop by today and discover why Kalab coffee is more than just a coffee
          shop—it's a place where coffee enthusiasts and friends become a part
          of our vibrant community.
        </p>

        <Button label="Visit Now" iconURL={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center lg:min-h-screen max-lg:py-20  bg-cover max-lg:bg-hero  bg-center">
        {" "}
        <img
          src={bigCoffeeImg}
          alt="Coffee collection"
          width={400}
          height={400}
          className="object-contain relative z-10 "
        />
        <div className="flex  absolute sm:gap-6 gap-4 -bottom-[-5%] sm:left-[10%] max-sm:px-6">
          {coffees.map((image, index) => (
            <div key={index}>
              <CoffeeCard
                index={index}
                imgURL={image}
                changeBigCoffeeImage={(coffee) => setBigCoffeeImg(coffee)}
                bigCoffeeImg={bigCoffeeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
