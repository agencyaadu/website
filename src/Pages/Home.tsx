import React from "react";
import Hero from "../components/Hero";
import Response from "../components/Response";
import Footer from "../components/Footer";
import { useMediaQuery } from "usehooks-ts";

const Home = () => {
  const isTab = useMediaQuery("(max-width:768px)");

  return (
    <div>
      {!isTab ? (
        <>
          <section>
            <div className="app">
              <Hero />
            </div>
          </section>
          <section style={{ backgroundColor: "turquoise" }}>
            <Footer />
          </section>
        </>
      ) : (
        <Response />
      )}
    </div>
  );
};

export default Home;
