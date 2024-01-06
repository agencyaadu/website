import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import Connect from '../components/Connect';
import Work from '../components/work';
import "../index.css";

const Portfolio = () => {

  return (
    <div>
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
    </div>
  )
}

export default Portfolio;