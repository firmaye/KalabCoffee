import { hamburger } from "../assets/icons";

import { navLinks } from "../constants";
import coffee from "../assets/images/coffee.png";

const Navbar = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={coffee}
            alt="logo"
            width={90}
            height={60}
            className="m-0 w-[90px] h-[60px]"
          />
        </a>
        <ul className="flex-1 flex justify-end items-center gap-16 max-lg:hidden pr-20">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-red-400 font-bold"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger icon" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
