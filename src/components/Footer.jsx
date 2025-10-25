import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

function Footer({ handleNotAvailable }) {
  return (
    <>
      <footer className="px-4 pt-12 pb-6 sm:px-6 md:pt-14 md:pb-8 md:px-8 lg:pt-20 lg:pb-10 xl:pt-24 lg:px-16 bg-colors-white space-y-6 md:space-y-8 xl:space-y-10">
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start text-center lg:text-left gap-8 lg:gap-10">
          <div className="space-y-3 lg:space-y-5 max-w-md lg:max-w-xs flex flex-col items-center justify-center lg:items-start lg:justify-start lg:text-left">
            <div className="flex items-center gap-2">
              <img
                src="images/logo.webp"
                alt="logo"
                className="w-9 h-9 lg:w-10 lg:h-10 brightness-90"
              />
              <p className="lg:text-lg text-colors-grayDark font-medium">
                Bloom Haven
              </p>
            </div>
            <p className="text-sm">
              Bloom Haven brings fresh, elegant flowers to your home with care
              and quality in every arrangement.
            </p>
            <div className="">
              <ul className="flex items-center gap-2 lg:text-lg text-colors-white">
                <li className="bg-colors-primary p-2 rounded-full hover:bg-colors-secondary transition-colors duration-300">
                  <a href="https://instagram.com" target="_blank" className="">
                    <FaInstagram />
                  </a>
                </li>
                <li className="bg-colors-primary p-2 rounded-full hover:bg-colors-secondary transition-colors duration-300">
                  <a href="https://facebook.com" target="_blank" className="">
                    <FaFacebook />
                  </a>
                </li>
                <li className="bg-colors-primary p-2 rounded-full hover:bg-colors-secondary transition-colors duration-300">
                  <a href="https://linkedin.com" target="_blank" className="">
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="bg-colors-primary p-2 rounded-full hover:bg-colors-secondary transition-colors duration-300">
                  <a href="https://youtube.com" target="_blank" className="">
                    <FaYoutube />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-2 lg:space-y-5">
            <h3 className="text-h3 font-medium text-colors-grayDark font-jost">
              Home
            </h3>
            <ul className="space-y-2 lg:space-y-3 text-sm xl:text-base">
              <li className="">
                <a href="#" className="hover-link">
                  Product
                </a>
              </li>
              <li className="">
                <a href="#" className="hover-link">
                  Pages
                </a>
              </li>
              <li className="">
                <a href="#" className="hover-link">
                  Blog
                </a>
              </li>
              <li className="">
                <a href="#" className="hover-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-2 lg:space-y-5">
            <h3 className="text-h3 font-medium text-colors-grayDark font-jost">
              Products
            </h3>
            <ul className="space-y-2 lg:space-y-3 text-sm xl:text-base">
              <li className="">
                <a href="#" className="hover-link">
                  Winter Collection
                </a>
              </li>
              <li className="">
                <a href="#" className="hover-link">
                  Summer Collection
                </a>
              </li>
              <li className="">
                <a href="#" className="hover-link">
                  Special Discount
                </a>
              </li>
              <li className="">
                <a href="#" className="hover-link">
                  Top Rated Products
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-2 lg:space-y-5">
            <h3 className="text-h3 font-medium text-colors-grayDark font-jost">
              Payment Methods
            </h3>
            <ul className="space-y-2 lg:space-y-3 text-sm xl:text-base">
              <li className="">
                <a href="#" className="hover-link">
                  Credit Card
                </a>
              </li>
              <li className="">
                <a href="#" className="hover-link">
                  Debit Card
                </a>
              </li>
              <li className="">
                <a href="#" className="hover-link">
                  Bank Transfer
                </a>
              </li>
              <li className="">
                <a href="#" className="hover-link">
                  Paypel
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-2 lg:space-y-5">
            <h3 className="text-h3 font-medium text-colors-grayDark font-jost">
              Get Online
            </h3>
            <img
              src="images/app-store-play-store.webp"
              alt="app store and play store"
              className="w-40 cursor-pointer"
              onClick={handleNotAvailable}
            />
          </div>
        </div>

        <hr className="" />

        <div className="flex items-center justify-between text-xs sm:text-sm md:text-base gap-2">
          <p className="">© {new Date().getFullYear()} all right reserved.</p>
          <p className="">
            Developed by{" "}
            <span className="text-colors-primary underline">
              <a
                href="https://coder-irfan-portfolio.onrender.com"
                target="_blank"
              >
                Coder Irfan
              </a>
            </span>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
