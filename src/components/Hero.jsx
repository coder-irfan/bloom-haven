import React from "react";

function Hero() {
  return (
    <>
      <section
        id="home"
        className="relative pt-28 pb-10 md:pt-36 md:pb-24 lg:pt-36 lg:pb-16 xl:pb-14 px-4 sm:px-6 md:px-8 lg:px-16 max-w-[85rem] 2xl:max-w-[88rem] mx-auto"
      >
        <div className="absolute top-0 md:bottom-32 left-0 md:top-auto md:left-[-5rem] bg-colors-primary/15 md:bg-colors-pinkSoft/50 w-96 h-96 blur-[100px] rounded-full -z-10"></div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 sm:gap-14">
          <div className="max-w-xl lg:max-w-2xl space-y-3 md:space-y-4 text-center md:text-left">
            <p className="inline-block uppercase text-subtitle font-jost tracking-wider border-l-4 border-colors-primary">
              <span className="ml-4">Artificial Flower</span>
            </p>
            <h1 className="text-h1 font-medium text-colors-grayDark leading-tight">
              Unique Flowers{" "}
              <span className="text-colors-primary">Delivered</span> To Your
              Doorstep
            </h1>
            <p className="text-sm lg:text-base">
              Brighten your day with fresh, beautifully arranged flowers. Each
              bouquet is crafted with care to bring joy and elegance to any
              occasion.
            </p>
            <div className="pt-2 sm:pt-4 lg:pt-8">
              <a href="#shop" className="button">
                Shop Now
              </a>
            </div>
          </div>

          <div className="">
            <img
              src="images/flowers-2.webp"
              alt="flower"
              className="w-72 sm:w-96 md:w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
