import React from "react";

function Clients() {
  return (
    <>
      <section
        id="clients"
        className="relative px-4 py-12 sm:px-6 md:py-14 md:px-8 lg:py-20 xl:py-24 lg:px-16 max-w-6xl mx-auto scroll-mt-20"
      >
        <div className="absolute top-0 right-0 md:top-auto right:left-[-5rem] bg-colors-primary/15 md:bg-colors-pinkSoft/30 w-96 h-96 blur-[100px] rounded-full -z-10"></div>
        <div className="absolute top-0 md:bottom-32 left-0 md:top-auto md:left-[-5rem] bg-colors-accent/5 md:bg-colors-accent/10 w-96 h-96 blur-[100px] rounded-full -z-10"></div>
        <div className="space-y-8 lg:space-y-12">
          <div className="text-center space-y-2">
            <span className="uppercase text-subtitle font-jost tracking-wider">
              Testimonials
            </span>
            <h2 className="text-h2 font-medium text-colors-grayDark leading-tight">
              What Our <span className="text-colors-primary">Clients Say</span>
            </h2>
          </div>

          <div className="relative">
            <img
              src="images/quotes-1.webp"
              alt="quote"
              className="absolute w-10 md:w-16 xl:w-24 left-5 sm:left-8 -top-5 md:-top-8 lg:left-14 xl:-top-12"
            />
            <div className="space-y-6 lg:space-y-8 border-4 border-colors-secondary p-4 xl:p-8 rounded-tl-[1.5rem] rounded-br-[1.5rem] lg:rounded-tl-[4rem] lg:rounded-br-[4rem] ">
              <p className="text-justify lg:text-center leading-relaxed text-sm sm:text-base md:text-lg xl:text-xl">
                “I was amazed by how beautiful and well-crafted the wall hanging
                flowers were. The quality is outstanding, and every detail shows
                care and artistry. They completely transformed my living room
                and made it feel more vibrant. I’ve already recommended them to
                my friends — truly worth every penny!”
              </p>

              <div className="flex items-center justify-between">
                <p className="flex flex-col  font-jost tracking-wider border-l-4 border-colors-secondary">
                  <span className="ml-3 text-subtitle">Coder Irfan</span>
                  <span className="ml-3 text-sm md:text-base">
                    Full-Stack Developer
                  </span>
                </p>

                <img
                  src="images/5-stars.webp"
                  alt="5 stars"
                  className="w-20 lg:w-36"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Clients;
