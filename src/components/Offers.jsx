import React, { useState, useEffect } from "react";

function Offers() {
  const THIRTY_DAYS = 30 * 24 * 60 * 60 * 1000;

  // Store start time in localStorage so countdown continues if page reloads
  const [timeLeft, setTimeLeft] = useState(() => {
    const savedStart = localStorage.getItem("countdownStart");
    const startTime = savedStart ? parseInt(savedStart, 10) : Date.now(); // This ensures that if the user reloads the page, the countdown continues from where it left off.
    const diff = THIRTY_DAYS - (Date.now() - startTime);
    return diff > 0 ? diff : THIRTY_DAYS;
  });

  useEffect(() => {
    // Save start time if not already saved
    if (!localStorage.getItem("countdownStart")) {
      localStorage.setItem("countdownStart", Date.now().toString());
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1000) {
          // Reset it after reaching 0
          localStorage.setItem("countdownStart", Date.now().toString());
          return THIRTY_DAYS;
        }
        return prev - 1000;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Convert milliseconds into days, hours, minutes, seconds
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  return (
    <>
      <section className="px-4 py-8 sm:px-6 md:py-10 md:px-8 lg:py-12 x3:py-12 lg:px-16">
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <span className="uppercase text-subtitle font-jost tracking-wider">
              Offers
            </span>
            <h2 className="text-h2 font-medium text-colors-grayDark leading-tight">
              Deal Of The Day
            </h2>
          </div>
          <div className="flex items-center justify-center gap-2 sm:gap-4 lg:gap-8 font-jost text-center text-colors-white">
            <div className="bg-colors-primary w-14 sm:w-16 lg:w-20 py-1 rounded-md">
              <h3 className="text-h3">{days}</h3>
              <span className="text-sm md:text-base">Days</span>
            </div>
            <div className="bg-colors-primary w-14 sm:w-16 lg:w-20 py-1 rounded-md">
              <h3 className="text-h3">{hours.toString().padStart(2, "0")}</h3>
              <span className="text-sm md:text-base">Hours</span>
            </div>
            <div className="bg-colors-primary w-14 sm:w-16 lg:w-20 py-1 rounded-md">
              <h3 className="text-h3">{minutes.toString().padStart(2, "0")}</h3>
              <span className="text-sm md:text-base">Mins</span>
            </div>
            <div className="bg-colors-primary w-14 sm:w-16 lg:w-20 py-1 rounded-md">
              <h3 className="text-h3">{seconds.toString().padStart(2, "0")}</h3>
              <span className="text-sm md:text-base">Secs</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Offers;
