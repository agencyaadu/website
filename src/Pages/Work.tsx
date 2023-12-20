import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from '@uidotdev/usehooks';
import Footer from '../components/Footer';
import Connect from '../components/Connect';
import Response from '../components/Response';
import Work from '../components/work';

const Portfolio = () => {
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

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
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
                <Work />
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
  )
}

export default Portfolio;