import React from "react";

const wallhangFlowers = [
  {
    id: "1",
    img: "images/flowers-6.webp",
    bgImg: "images/gradient-bg-1.webp",
    name: "Twilight Bloom",
    description:
      "Brighten any room with Twilight Bloom — elegant hanging flowers crafted to bring warmth, color, and natural beauty into your space effortlessly.",
    price: "$24.00",
  },
  {
    id: "2",
    img: "images/flowers-7.webp",
    bgImg: "images/gradient-bg-2.webp",
    name: "Velvet Cascade",
    description:
      "Velvet Cascade adds charm and sophistication with cascading blooms that transform your walls into a lush, inviting floral display for every occasion.",
    price: "$28.00",
  },
  {
    id: "3",
    img: "images/flowers-8.webp",
    bgImg: "images/gradient-bg-3.webp",
    name: "Morning Dew",
    description:
      "Morning Dew brings freshness and serenity with delicate hanging flowers, perfect for adding life, texture, and a touch of nature to your home.",
    price: "$30.00",
  },
];

function Shop({ handleNotAvailable }) {
  return (
    <>
      <section
        id="shop"
        className="px-4 py-8 sm:px-6 md:py-10 md:px-8 md:pb-24 lg:pb-12 lg:pt-36 xl:pb-20 xl:pt-40 lg:px-16 scroll-mt-52"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 xl:gap-8">
          {wallhangFlowers.map((flower) => (
            <div
              className="bg-colors-white flex flex-col rounded-lg"
              key={flower.id}
            >
              <div className="relative">
                <img
                  src={flower.bgImg}
                  alt="gradient"
                  className="absolute -bottom-1/2 sm:-bottom-1/4 lg:-bottom-3/4 z-0 opacity-50"
                />
                <img
                  src={flower.img}
                  alt={flower.name}
                  className="lg:-mt-40 mx-auto sm:mx-0 md:ml-auto w-56 sm:w-64 md:w-auto lg:z-10 relative"
                />
              </div>
              <div className="p-6 md:p-4 flex-1 flex flex-col gap-2 lg:gap-4">
                <h3 className="font-jost text-h3 font-semibold text-colors-primary">
                  {flower.name}
                </h3>
                <p className="text-sm">{flower.description}</p>
                <div className="flex items-center justify-between gap-2 mt-auto pt-4 sm:pt-0">
                  <h4 className="text-h4 font-">{flower.price}</h4>
                  <button onClick={handleNotAvailable} className="button">
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Shop;
