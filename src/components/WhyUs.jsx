import React from "react";
import {
  FaInfinity,
  FaPaintBrush,
  FaLeaf,
  FaShieldAlt,
  FaStar,
  FaRibbon,
} from "react-icons/fa";

const whyUs = [
  {
    id: "1",
    title: "Lifetime Use",
    description:
      "Our flowers are designed to last and retain their beauty for years, bringing lasting joy to your home or office space.",
    icon: FaInfinity,
  },
  {
    id: "2",
    title: "Customization",
    description:
      "Tailor your floral arrangements to suit your style, colors, and preferences for a truly unique and personal touch.",
    icon: FaPaintBrush,
  },
  {
    id: "3",
    title: "Eco-friendly",
    description:
      "We care for the planet, using sustainable materials and environmentally friendly methods in every floral creation.",
    icon: FaLeaf,
  },
  {
    id: "4",
    title: "Comical Free",
    description:
      "Enjoy worry-free decor with our flowers, crafted with safe, non-toxic materials that are gentle for every space.",
    icon: FaShieldAlt,
  },
  {
    id: "5",
    title: "Best Quality",
    description:
      "Each bloom is carefully selected and arranged to ensure premium quality, beauty, and attention to detail every time.",
    icon: FaStar,
  },
  {
    id: "6",
    title: "Wall Hanging",
    description:
      "Decorate your walls with elegance using our hanging floral designs, perfect for adding charm and life to any room.",
    icon: FaRibbon,
  },
];

function WhyUs() {
  return (
    <>
      <section
        id="benefits"
        className="px-4 py-12 sm:px-6 md:py-14 md:px-8 lg:py-20 xl:py-24 lg:px-16"
      >
        <div className="space-y-8 lg:space-y-10">
          <div className="text-center space-y-2">
            <span className="uppercase text-subtitle font-jost tracking-wider">
              Benefits
            </span>
            <h2 className="text-h2 font-medium text-colors-grayDark leading-tight">
              Why Choose{" "}
              <span className="text-colors-primary">Our Flowers</span>
            </h2>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4
        "
          >
            {whyUs.map((us) => {
              const Icon = us.icon;
              return (
                <div
                  className={`p-6 text-center flex flex-col items-center justify-center gap-4 lg:gap-6 rounded-md
                ${
                  us.id === "1"
                    ? "bg-colors-accent/30"
                    : us.id === "2"
                    ? "bg-colors-primary/30"
                    : us.id === "3"
                    ? "bg-colors-accent/30"
                    : us.id === "4"
                    ? "bg-colors-primary/30"
                    : us.id === "5"
                    ? "bg-colors-accent/30"
                    : us.id === "6"
                    ? "bg-colors-primary/30"
                    : ""
                }`}
                  key={us.id}
                >
                  <Icon className="text-4xl lg:text-5xl text-colors-primary" />
                  <div className="space-y-1">
                    <h3 className="text-h3 text-colors-grayDark font-jost font-medium">
                      {us.title}
                    </h3>
                    <p className="text-sm sm:text-base">{us.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyUs;
