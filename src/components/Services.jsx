import React from "react";

function Services() {
  return (
    <>
      <section className="px-4 sm:px-6 md:px-8 py-6 md:py-10 lg:px-16 max-w-[85rem] 2xl:max-w-[88rem] mx-auto">
        <div
          className="flex flex-wrap items-center sm:justify-around gap-6 sm:gap-12 bg-colors-white rounded-tl-3xl sm:rounded-tl-[3rem] 
          rounded-br-3xl sm:rounded-br-[3rem] px-6 md:px-4 py-8 md:py-10 font-jost"
        >
          <div className="flex items-center gap-4">
            <img
              src="images/shopping.webp"
              alt="shopping"
              className="w-8 md:w-10 lg:w-12"
            />
            <div className="">
              <p className="text-colors-grayDark font-medium text-sm sm:text-base lg:text-lg">
                Free Shopping
              </p>
              <span className="text-xs sm:text-sm">
                Cost on all order $0.00
              </span>
            </div>
          </div>
          <span className="w-1 h-8 border bg-colors-primary hidden md:flex"></span>
          <div className="flex items-center gap-4">
            <img
              src="images/truck.webp"
              alt="truck"
              className="w-8 md:w-10 lg:w-12"
            />
            <div className="">
              <p className="text-colors-grayDark font-medium text-sm sm:text-base lg:text-lg">
                Free Delivery
              </p>
              <span className="text-xs sm:text-sm">We offer FREE delivery</span>
            </div>
          </div>
          <span className="w-1 h-8 border bg-colors-primary hidden md:flex"></span>
          <div className="flex items-center gap-4">
            <img
              src="images/gift.webp"
              alt="gift"
              className="w-8 md:w-10 lg:w-12"
            />
            <div className="">
              <p className="text-colors-grayDark font-medium text-sm sm:text-base lg:text-lg">
                Free Gift
              </p>
              <span className="text-xs sm:text-sm">We offer FREE gifts</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
