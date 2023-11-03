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
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
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
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
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
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", link: "/" },
      { name: "Air Max 1", link: "/" },
      { name: "Air Jordan 1", link: "/" },
      { name: "Air Force 2", link: "/" },
      { name: "Nike Waffle Racer", link: "/" },
      { name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@nike.com", link: "mailto:customer@nike.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
