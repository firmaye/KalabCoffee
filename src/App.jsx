import React from "react";
import {
  Hero,
  CustomerReviews,
  SuperQuality,
  Footer,
  SpecialOffer,
  Subscribe,
  PopularProduct,
  Services,
} from "./sections/index";
import Navbar from "./Components/Navbar";
const App = () => (
  <main className="relative">
    <Navbar />
    <section className="xl:padding-l wide:padding-r padding-b ">
      <Hero />
    </section>
    <section className="padding">
      <PopularProduct />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffer />
    </section>
    <section className="bg-orange-100 padding ">
      <CustomerReviews />
    </section>
    <section className="padding ">
      <Subscribe />
    </section>
    <section className=" bg-orange-950 padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
);

export default App;
