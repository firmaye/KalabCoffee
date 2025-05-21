import React from "react";
import { products } from "../constants";
import PopularProductCard from "../Components/PopularProductCard";
const PopularProduct = () => {
  return (
    <section id="products" className="max-container max-sm:mt-5">
      <div className="flex flex-col justify-start gap-5 ">
        <h2 className="text-4xl font-palanqui">
          <span className="text-coral-red">Kalab </span>Cafe Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray ">
          At Kalab Cafe, we are passionate about serving the perfect cup of
          coffee. Step into our cozy and inviting space, where you can indulge
          in the rich aromas and flavors that only a carefully crafted coffee
          can offer.
        </p>
      </div>
      <div className=" mt-16 grid lg:grid-cols-3  sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14 ">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProduct;
