import React, {useState, useEffect} from "react";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Response from "../components/Response";
import { useMediaQuery } from "usehooks-ts";
import Connect from "../components/Connect";
import Footer from "../components/Footer";
// import Up from "../../assets/images/Vector.svg";

const Home = () => {
  const [isArrow, setIsArrow] = useState(false);
  const isTab = useMediaQuery("(max-width:768px)");

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowDown") {
        setIsArrow(true);
      } else if (event.key === "ArrowUp") {
        setIsArrow(false);
      }
    };

    const handleScroll = () => {
      setIsArrow(!isArrow);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {!isTab ? (
        <>
          <section>
            <motion.div
              className="main"
              animate={{
                translateY : isArrow ? '-50%' : '0%',
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className="app">
                <Hero />
              </div>
              <div className="footerish" onClick={() => setIsArrow(true)}>
                <Footer />
              </div>
              <section>
                <div className="contact" onClick={() => setIsArrow(false)}>
                  <Connect />
                </div>
              </section>
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
