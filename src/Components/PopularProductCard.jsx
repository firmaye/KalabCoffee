import React from "react";
import { star } from "../assets/icons";
const PopularProductCard = (props) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img
        src={props.imgURL}
        alt={props.name}
        className="w-[280px] h-[240px]"
      />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          {props.rating}
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {props.name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-21x leading-normal">
        {props.price}
      </p>
    </div>
  );
};

export default PopularProductCard;
