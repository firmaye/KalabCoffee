import React from "react";
import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";
const Subscribe = () => {
  return (
    <section className=" max-container " id="contact-us">
      <h3 className="font-bold font-palanquin text-center text-4xl mb-10">
        <span className="text-coral-red">Contact</span> Us
      </h3>
      <div className=" bg-orange-100  max-w-200 mx-auto  rounded-lg shadow-md  p-10 lg:w-[70%] sm:w-[100%] ">
        <form action="">
          <div className="mb-4">
            <label
              htmlFor=""
              className="block text-coral-red text-sm font-semibold mb-2"
            >
              Your Name
            </label>
            <input
              placeholder="Your name..."
              type="text"
              className="w-full px-3 py-2 border rounded-lg bg-coral-red focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor=""
              className="block text-coral-red text-sm font-semibold mb-2"
            >
              Email
            </label>
            <input
              placeholder="Your email..."
              type="email"
              className="w-full px-3 py-2 border rounded-lg  bg-coral-red focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor=""
              className="block text-coral-red text-sm font-semibold mb-2"
            >
              Your Message
            </label>
            <textarea
              rows="4"
              placeholder="Type your message here..."
              type=""
              className="w-full px-3 py-2 border rounded-lg  bg-coral-red focus:border-blue-500"
              required
            />
          </div>
        </form>
        <Button label="Send" iconURL={arrowRight} />
      </div>
    </section>
  );
};

export default Subscribe;
