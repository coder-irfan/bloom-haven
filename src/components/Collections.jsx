import React, { useRef } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const images = [
  "images/flowers-9.webp",
  "images/flowers-10.webp",
  "images/flowers-11.webp",
  "images/flowers-12.webp",
  "images/flowers-13.webp",
  "images/flowers-14.webp",
  "images/flowers-15.webp",
  "images/flowers-17.webp",
  "images/flowers-18.webp",
  "images/flowers-19.webp",
  "images/flowers-20.webp",
  "images/flowers-21.webp",
  "images/flowers-22.webp",
];

function Collections() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="px-4 py-12 sm:px-6 md:py-14 md:px-8 md:pb-24 lg:py-12 xl:py-20 lg:px-16 bg-colors-pinkVeryLight">
        <div className="space-y-6 lg:space-y-12">
          <div className="text-center space-y-2">
            <span className="uppercase text-subtitle font-jost tracking-wider">
              Collection
            </span>
            <h2 className="text-h2 font-medium text-colors-grayDark leading-tight">
              Our Best <span className="text-colors-primary">Collections</span>
            </h2>
          </div>

          <div className="relative">
            <button
              onClick={() => scroll("left")}
              className="absolute -left-2 sm:-left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 bg-colors-white hover:bg-colors-pinkLight 
              transition-colors duration-300 rounded-full p-2 lg:p-4 shadow-md"
            >
              <FaChevronLeft className="sm:text-lg lg:text-xl" />
            </button>

            <div
              ref={scrollRef}
              className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-3 md:gap-4 lg:gap-6 px-4 scrollbar-hide py-4"
            >
              {images.map((src, index) => (
                <div
                  className="flex-shrink-0 snap-start w-28 sm:w-36 md:w-52 lg:w-64 xl:w-80"
                  key={index}
                >
                  <img
                    src={src}
                    alt={`flowers-${index}`}
                    className="rounded-lg border-2 border-colors-white hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>

            <button
              onClick={() => scroll("right")}
              className="absolute -right-2 sm:-right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 bg-colors-white hover:bg-colors-pinkLight transition-colors duration-300 rounded-full p-2 md:p-4 shadow-md"
            >
              <FaChevronRight className="sm:text-lg lg:text-xl" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Collections;
