// Blog Post - 5 "INTERN OF AGENCY AADU"

import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { useMediaQuery } from 'usehooks-ts';

import BlogPostHeader from './Header/BlogPostHeader';
import BlogPostFooter from './Footer/BlogPostFooter';
import './Style/BlogPost.scss';
import Cursor from '../../Cursor';

const BlogPost5: React.FC = () => {

  // =========== Title ===========
  document.title = "Intern of Agency Aadu - agencyAadu";

  // =========== Media Query ===========
  const isMobile = useMediaQuery("(max-width:430px)");

  // =========== Scroll to Topic ===========
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
      setScrollPosition(window.scrollY);
  };

  useEffect(() => {
      window.addEventListener('scroll', handleScroll);

      // Clean up the event listener when the component unmounts
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  const maxScrollPosition = isMobile ? 200 : 410;
  const isOverflowVisible = scrollPosition >= maxScrollPosition;


  return (
    <>
    <div className="BlogPost-wrapper">

      {/* ======= Nav Bar ========= */}
      <BlogPostHeader />

      {/* ===== BLOG PAGE ===== */}
      <motion.div
          className='BlogPostContent'
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 1, duration: 2 } }}
          >
          <div className="title">
              <h1>Example</h1>
          </div>
          {/* === From where the static page starts === */}
          <div className="static-page">
              <div className="topic">
                  <div className="topic-name" style={{display: 'none'}}>
                      <p>none</p>
                  </div>
              </div>
              <div className='scrolled-content'>
                  <div className='content'>
                      <div className='paragraphs' style={{overflowY: isOverflowVisible ? 'auto' : 'hidden'}}>
                          <div className="paragraph">
                              Example
                          </div>
                          <div className="paragraph">
                              
                          </div>
                          <div className="paragraph">
                              
                          </div>
                          <div className="paragraph">
                              
                          </div>
                      </div>
                  </div>
                  
                  {/* ======== Footer ========= */}
                  <BlogPostFooter />
              </div>
          </div>
      </motion.div>

    <Cursor />
    </div>
    </>
  )
}

export default BlogPost5;