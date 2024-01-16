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
              <h1>Intern of Agency Aadu</h1>
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
                              &nbsp; &nbsp; &nbsp; &nbsp;
                              Hey there, world! Prashant here, and I’m an intern at the kickass agency, AADU. Yep, you heard that right, I’m a badass content developer and writer, and I’m here to tell you a little bit about myself (and lowkey market my awesome workplace too).<br />
                              &nbsp; &nbsp; &nbsp; &nbsp;
                              First things first, let me introduce myself properly. I’m Prashant, but you can call me the Content King, because that’s what I do best – create killer content. I’ve always loved writing, ever since I was a little kid. In fact, I had dreams of becoming a famous writer, but then reality hit me hard and I ended up interning at AADU. But hey, I’m not complaining because this place is lit AF!<br />
                              &nbsp; &nbsp; &nbsp; &nbsp;
                              As a content developer at AADU, my days are filled with pouring over client briefs, brainstorming ideas, and using my incredible writing skills to craft engaging and effective content. And let me tell you, it’s not an easy job. Content writing requires a unique blend of creativity, research, and a touch of insanity. Okay, maybe more than just a touch, especially when it’s a Monday morning and you have a deadline looming over your head. But hey, that’s what caffeine is for, am I right?<br />
                          </div>
                          <div className="paragraph">
                              &nbsp; &nbsp; &nbsp; &nbsp;
                              Working at AADU has been one hell of an experience. Not only do I get to work with some of the most talented and hilarious people, but I also get to be a part of some amazing projects for our clients. And let me tell you, there’s never a dull moment at this agency. From cracking jokes during brainstorming sessions to pulling all-nighters to meet deadlines, it’s always a rollercoaster ride. But hey, we get shit done and we do it with style.<br /><br />
                              &nbsp; &nbsp; &nbsp; &nbsp;
                              Now, let’s get a little real here and drop some SEO knowledge. As a content developer, I know all about the importance of SEO (Search Engine Optimization). It’s what helps websites rank higher on search engines like Google. And let me tell you, incorporating keywords into your writing is no easy feat. It’s like playing a real-life game of Tetris, except instead of blocks, you’re using words. But hey, I’m a pro at it.
                          </div>
                          <div className="paragraph">
                              &nbsp; &nbsp; &nbsp; &nbsp;
                              Okay, now for some dank jokes – what did the SEO expert tell the content writer? “Use more keywords, you nerd!” Ha, see what I did there? Okay fine, it was a bad joke, but I tried. Anyways, back to talking about myself.<br />
                              &nbsp; &nbsp; &nbsp; &nbsp;
                              Apart from being a content developer, I’m also a music fanatic, an avid reader, and a proud meme connoisseur. So, if you ever need some music recommendations, book suggestions, or just a good laugh, hit me up. Oh, and did I mention that I’m a sucker for junk food and can devour a whole pizza in one sitting? Yeah, that’s one of my superpowers.<br />
                          </div>
                          <div className="paragraph">
                              &nbsp; &nbsp; &nbsp; &nbsp;
                              Well, that’s enough self-promotion for one day. Bottom line is, I’m just a regular guy, trying to make it in the big, bad world of content development. And being an intern at AADU has definitely given me a kickstart in my career. So, if you’re looking for top-notch content and a fun, energetic team to work with, hit up AADU and ask for the Content King. I’ll make sure your website is #1 on Google (Okay, maybe not #1, but definitely top 10).<br /><br />
                              That’s it from me for now, but if you want to know more about my adventures at AADU (and trust me, there are many), stay tuned for my next blog post. Till then, stay lit my friends. Peace out!
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