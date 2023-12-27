import React from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from '@uidotdev/usehooks';
import Footer from '../components/Footer';
import Connect from '../components/Connect';
import Response from '../components/Response';
import Work from '../components/work';

const Portfolio = () => {
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
                <Work />
              </div>
              <a href="#down" style={{textDecoration:'none'}}>
                <div className="footerish">
                  <Footer />
                </div>
              </a>

              <a href="#up" style={{textDecoration:'none'}}>
                <section>
                  <div className="contact" id='down'>
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
  )
}

export default Portfolio;