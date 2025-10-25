import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";

function Header({ scrolled, handleNotAvailable }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="relative font-jost">
        <div
          className={`2xl:max-w-[100rem] mx-auto px-4 sm:px-6 md:px-8 py-3 md:py-4 lg:px-16 fixed top-0 right-0 left-0 z-[60]
          transition-color duration-300 ${
            scrolled
              ? "bg-colors-pinkVeryLight shadow-sm shadow-colors-pinkSoft"
              : "bg-transparent"
          }`}
        >
          <div
            className={`md:hidden fixed w-screen h-screen opacity-80 inset-0 bg-black transition-all duration-700 z-20
            ${
              isOpen
                ? "translate-x-0 delay-100 pointer-events-auto"
                : "translate-x-full delay-200 pointer-events-none"
            }`}
          ></div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src="images/logo.webp"
                alt="logo"
                className="w-9 h-9 lg:w-10 lg:h-10 brightness-90"
              />
              <p className="lg:text-lg font-medium">Bloom Haven</p>
            </div>

            <div className="z-50">
              <nav
                className={`md:relative fixed top-0 right-0 h-full w-4/5 md:left-0 sm:w-2/3 transition-all duration-700 pt-24 pr-6 md:pr-0 md:pt-0
                md:h-auto md:w-auto md:translate-x-0 bg-colors-pinkVeryLight md:bg-transparent space-y-4 md:space-y-0 ${
                  isOpen ? "translate-x-0" : "translate-x-full"
                }`}
              >
                <ul className="flex flex-col md:flex-row items-end md:items-center gap-4 lg:gap-6 text-base lg:text-lg font-medium">
                  <li className="hover-link">
                    <a href="#home" className="">
                      Home
                    </a>
                  </li>
                  <li className="h-[0.06rem] w-full bg-colors-grayMedium md:hidden"></li>
                  <li className="hover-link">
                    <a href="#products" className="">
                      Products
                    </a>
                  </li>
                  <li className="h-[0.05rem] w-full bg-colors-grayMedium md:hidden"></li>
                  <li className="hover-link">
                    <a href="#shop" className="">
                      Shop
                    </a>
                  </li>
                  <li className="h-[0.05rem] w-full bg-colors-grayMedium md:hidden"></li>
                  <li className="hover-link">
                    <a href="#benefits" className="">
                      Benefits
                    </a>
                  </li>
                  <li className="h-[0.05rem] w-full bg-colors-grayMedium md:hidden"></li>
                  <li className="hover-link">
                    <a href="#clients" className="">
                      Clients
                    </a>
                  </li>
                  <li className="h-[0.06rem] w-full bg-colors-grayMedium md:hidden"></li>
                </ul>

                <div className="flex items-center justify-end gap-3 lg:gap-4 md:hidden">
                  <div
                    onClick={handleNotAvailable}
                    className="bg-colors-primary p-2 rounded-full hover:bg-colors-secondary transition-all duration-300 cursor-pointer"
                  >
                    <img
                      src="images/favorite.webp"
                      alt="favorite"
                      className="w-4"
                    />
                  </div>
                  <div
                    onClick={handleNotAvailable}
                    className="bg-colors-primary p-2 rounded-full hover:bg-colors-secondary transition-all duration-300 cursor-pointer"
                  >
                    <img src="images/cart.webp" alt="cart" className="w-4" />
                  </div>
                  <div
                    onClick={handleNotAvailable}
                    className="bg-colors-primary p-2 rounded-full hover:bg-colors-secondary transition-all duration-300 cursor-pointer"
                  >
                    <img src="images/user.webp" alt="user" className="w-4" />
                  </div>
                </div>

                {isOpen && (
                  <div
                    className="absolute top-3.5 right-5 sm:right-6 text-[1.4rem] md:hidden border border-colors-primary rounded-md p-1"
                    onClick={() => setIsOpen(false)}
                  >
                    <FaTimes
                      aria-label="Close Menu"
                      className="cursor-pointer text-colors-primary"
                    />
                  </div>
                )}
              </nav>
            </div>

            <div
              className="hidden sm:flex items-center gap-3 lg:gap-4 sm:pr-12 md:pr-0
            "
            >
              <div
                onClick={handleNotAvailable}
                className="bg-colors-primary p-2 rounded-full hover:bg-colors-secondary transition-all duration-300 cursor-pointer"
              >
                <img src="images/search.webp" alt="search" className="w-4" />
              </div>
              <div
                onClick={handleNotAvailable}
                className="bg-colors-primary p-2 rounded-full hover:bg-colors-secondary transition-all duration-300 cursor-pointer"
              >
                <img
                  src="images/favorite.webp"
                  alt="favorite"
                  className="w-4"
                />
              </div>
              <div
                onClick={handleNotAvailable}
                className="bg-colors-primary p-2 rounded-full hover:bg-colors-secondary transition-all duration-300 cursor-pointer"
              >
                <img src="images/cart.webp" alt="cart" className="w-4" />
              </div>
              <div
                onClick={handleNotAvailable}
                className="bg-colors-primary p-2 rounded-full hover:bg-colors-secondary transition-all duration-300 cursor-pointer"
              >
                <img src="images/user.webp" alt="user" className="w-4" />
              </div>
            </div>
          </div>
          {!isOpen && (
            <div
              className="absolute top-3.5 right-5 sm:right-6 text-[1.4rem] md:hidden border border-colors-primary rounded-md p-1"
              onClick={() => setIsOpen(true)}
            >
              <FaBars
                aria-label="Open Menu"
                className="cursor-pointer text-colors-primary"
              />
            </div>
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
