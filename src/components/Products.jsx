import React from "react";

const sellingProducts = [
  {
    id: "1",
    img: "images/flowers-3.webp",
    name: "Combo Bouquet 01",
    price: "$40.00",
    rate: "images/star.webp",
  },
  {
    id: "2",
    img: "images/flowers-4.webp",
    name: "Combo Bouquet 03",
    price: "$45.00",
    rate: "images/star.webp",
  },
  {
    id: "3",
    img: "images/flowers-5.webp",
    name: "Combo Bouquet 03",
    price: "$50.00",
    rate: "images/star.webp",
  },
];

function Products() {
  return (
    <>
      <section
        id="products"
        className="relative px-4 py-12 sm:px-6 md:py-14 md:px-8 md:pb-24 lg:py-12 xl:py-20 lg:px-16"
      >
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <span className="uppercase text-subtitle font-jost tracking-wider">
              Products
            </span>
            <h2 className="text-h2 font-medium text-colors-grayDark leading-tight">
              This Month’s Top Selling{" "}
              <span className="text-colors-primary">Products</span>
            </h2>
          </div>

          <div className="flex flex-col items-center sm:flex-row md:items-end justify-center gap-4 md:gap-6 md:flex-row">
            {sellingProducts.map((product) => (
              <div
                className="space-y-4 md:space-y-6 border-2 border-colors-pinkLight rounded-3xl sm:border-none p-4 w-full"
                key={product.id}
              >
                <div className="relative">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-72 sm:w-[450px] mx-auto"
                  />
                  <img
                    src="images/flowers-bg.webp"
                    alt=""
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 -z-10"
                  />
                </div>
                <div className="text-center flex flex-col justify-center max-w-[250px] mx-auto gap-2">
                  <h3 className="text-h3 font-medium font-jost text-colors-grayDark">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-evenly gap-6 text-sm md:text-base">
                    <span className="font-medium">{product.price}</span>
                    <div className="flex items-center gap-1 md:gap-2">
                      <img src={product.rate} alt="star" className="" />
                      <span className="">5.0</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
