import React from "react";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Response from "../components/Response";
import { useMediaQuery } from "usehooks-ts";
import Connect from "../components/Connect";
import Footer from "../components/Footer";
// import Up from "../../assets/images/Vector.svg";

const Home = () => {
  const isTab = useMediaQuery("(max-width:768px)");

  return (
    <div>
      {!isTab ? (
        <>
          <section>
            <motion.div
              className="main"
              id='up'
            >
              <div className="app">
                <Hero />
              </div>
              <a href="#down" style={{textDecoration:"none"}}>
                <div className="footerish">
                  <Footer />
                </div>
              </a>

              <a href="#up" style={{textDecoration:"none"}}>
                <section>
                  <div className="contact" id="down">
                    <Connect />
                  </div>
                </section>
              </a>
            </motion.div>
          </section>
        </>
      ) : (
        <Response />
      )}
    </div>
  );
};

export default Home;
