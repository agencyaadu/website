import React from "react";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Connect from "../components/Connect";
import Footer from "../components/Footer";

const Home = () => {

  return (
    <div>
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
    </div>
  );
};

export default Home;
