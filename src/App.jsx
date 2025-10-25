import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Products from "./components/Products";
import Offers from "./components/Offers";
import Shop from "./components/Shop";
import WhyUs from "./components/WhyUs";
import Collections from "./components/Collections";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

function App() {
  const [scrolled, setScrolled] = useState(false);

  const changeNavbar = () => {
    if (window.scrollY >= 120) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbar);
    return () => window.removeEventListener("scroll", changeNavbar);
  });

  const handleNotAvailable = () => {
    toast.error("Currently Not Available.");
  };

  return (
    <>
      <Header scrolled={scrolled} handleNotAvailable={handleNotAvailable} />
      <Hero />
      <div className="bg-colors-pinkVeryLight">
        <Services />
      </div>
      <Products />
      <div className="bg-colors-whiteshBg">
        <Offers />
        <Shop handleNotAvailable={handleNotAvailable} />
      </div>
      <WhyUs />
      <Collections />
      <Clients />
      <Footer handleNotAvailable={handleNotAvailable} />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Slide}
        toastStyle={{
          margin: "0.2rem",
          maxWidth: "90vw",
          fontSize: "0.9rem",
          backgroundColor: "#FFD0D0",
          color: "#303030",
        }}
        containerStyle={{
          padding: "0.5rem",
        }}
      />
    </>
  );
}

export default App;
