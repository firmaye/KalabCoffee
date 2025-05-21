import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  co1,
  co2,
  co3,
  buna1,
  buna2,
  buna3,
  buna4,
  buna5,
  buna6,
  coffee1,
  coffee2,
  coffee3,
  customer1,
  customer2,
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#customer-review", label: "Reviews" },
  { href: "#contact-us", label: "Contact Us" },
];

export const coffees = [
  {
    thumbnail: coffee1,
    bigCoffee: co1,
  },
  {
    thumbnail: coffee2,
    bigCoffee: co2,
  },
  {
    thumbnail: coffee3,
    bigCoffee: co3,
  },
];

export const statistics = [
  { value: "50+", label: "Coffee Suppliers" },
  { value: "20k+", label: "Customers" },
];

export const products = [
  {
    imgURL: buna1,
    name: "Milk Coffee",
    price: "$20.20",
    rating: "(5.0)",
  },
  {
    imgURL: buna6,
    name: "Sandwitch with Coffee",
    price: "$10.20",
    rating: "(4.9)",
  },
  {
    imgURL: buna3,
    name: "Take away coffee",
    price: "$22.20",
    rating: "(5.0)",
  },
  {
    imgURL: buna4,
    name: "Ice Coffee",
    price: "$23.20",
    rating: "(5.5)",
  },
  {
    imgURL: buna2,
    name: "Chocolate Coffee",
    price: "$10.20",
    rating: "(5.5)",
  },
  {
    imgURL: buna5,
    name: "Sandwitch with Coffee",
    price: "$33.20",
    rating: "(5.0)",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free Delivery Service",
    subtext:
      "Sit back, relax, and let us handle the delivery while you indulge in the perfect cup of coffee.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext:
      "Our dedicated team of experienced roasters carefully selects and roasts each batch to perfection, ensuring that every sip is a moment of pure delight.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "I absolutely love the cozy atmosphere and incredible coffee at Kalab Coffee!I highly recommend Kalab Coffee for anyone seeking a memorable coffee experience.",
  },
  {
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "If you're looking for a coffee house that goes above and beyond, Kalab Coffee is the place to be.Trust me, once you've experienced Kalab Coffee, you'll keep coming back for more.",
  },
  {
    imgURL: customer1,
    customerName: "Mongeskar Brown",
    rating: 4.5,
    feedback:
      "What a hidden gem! Kalab Coffee is a coffee lover's paradise.The coffee is exceptional, with a smoothness and flavor that's hard to beat.Kalab Coffee has become my go-to coffee destination.",
  },
];

export const footerLinks = [
  {
    title: "Menu",
    links: [
      { name: "Home", link: "#home" },
      { name: "About Us", link: "#about-us" },
      { name: "Products", link: "#products" },
      { name: "Customer Review", link: "#customer-review" },
      { name: "Contact Us", link: "#contact-us" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "kalabcoffe@gmail.com", link: "/" },
      { name: "+251 987342512", link: "/" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
