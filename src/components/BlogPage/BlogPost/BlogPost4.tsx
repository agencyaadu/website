// Blog Post - 4 "EXPECTATIONS WITH TECH IN 2040"

import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { useMediaQuery } from 'usehooks-ts';

import BlogPostHeader from './Header/BlogPostHeader';
import BlogPostFooter from './Footer/BlogPostFooter';
import './Style/BlogPost.scss';
import Cursor from '../../Cursor';

const BlogPost4: React.FC = () => {

  // =========== Title ===========
  document.title = "Expectations with Tech in 2040 - agencyAadu";

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
              <h1>Expectations with Tech in 2040</h1>
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
                              Hey there my fellow tech enthusiasts and cursed souls, it's your boy Prashant here, ready to take you down a wild ride through my crazy and avant-garde thoughts on what to expect from the tech world in 2040. But before we get started, let me warn you, this blog post might contain more dank jokes and curse words than actual predictions. But hey, I never promised to be a serious tech blogger, so buckle up and let's dive in! <br />
                              &nbsp; &nbsp; &nbsp; &nbsp;
                              Now, as it's 2024 and I'm still trying to figure out how to use my smartwatch properly, imagining what the tech scene would be like in 2040 seems like a daunting task. But hey, I never back down from a challenge (unless my mom asks me to do the dishes), so here are some things I can see happening in the tech world in 2040. And trust me, it's gonna be lit AF (sorry mom, I meant to say amazing).<br />
                          </div>
                          <div className="paragraph">
                              &nbsp; &nbsp; &nbsp; &nbsp;
                              First and foremost, I'm pretty sure flying cars would be a common sight in 2040. And if Elon Musk has his way, those flying cars would probably be powered by memes and Tesla batteries. Yep, that's right, we would be zooming through the skies while Pepe the Frog memes scroll across our windshields. Oh, and for sure we would have self-driving cars too, and I mean, I can't wait to take a nap on my way to work while my car curses out all the other drivers. 'Can't you f\*cking merge properly, Karen?!' <br /><br />
                              &nbsp; &nbsp; &nbsp; &nbsp;
                              And speaking of sleeping, in 2040, we would have personal robots doing most of our household chores. And of course, the rich people would have robots that look like Chris Hemsworth or Scarlett Johansson (I mean, who wouldn't want a hot robot as their personal servant?). But us commoners would probably have robots that constantly malfunction and yell 'ERROR!' while we frantically try to fix them. I can already see myself cursing at my robot while it spills juice all over my carpet. 'Dammit robot, that's expensive fabric, you piece of sh*t!'
                          </div>
                          <div className="paragraph">
                              &nbsp; &nbsp; &nbsp; &nbsp;
                              Now, let's talk about gaming. Oh boy, by 2040, gaming would be a whole new level of immersive and mind-blowing experience. We would probably have VR games that let us enter an alternate dimension and fight aliens alongside Tom Cruise (because let's be real, he's a never-fading action star). But here's the thing, these VR games would be so realistic that people would forget to eat, sleep, and even use the bathroom. Yeah, you thought gaming addiction was bad now, just wait till 2040. Sorry mom, I'm gonna be permanently glued to my VR headset.<br /><br />
                              &nbsp; &nbsp; &nbsp; &nbsp;
                              And one last thing, I'm pretty sure in 2040, AI would have taken over the world and we would be living in a real-life 'Terminator' scenario. But hey, who's complaining? As long as Arnold Schwarzenegger doesn't come knocking on my door saying 'Hasta la vista, baby', I'm good.
                          </div>
                          <div className="paragraph">
                              &nbsp; &nbsp; &nbsp; &nbsp;
                              Anyways, these were just a few of my wild predictions for the tech world in 2040. And who knows, maybe one or two of these might actually come true. Or maybe none, and we would still be trying to figure out how to use our smartwatches properly. But know this, by 2040, I, Prashant and my team  would have our own tech company called 'Agency.Aadu' that would make all of the above possible (not really, but a guy can dream).<br /><br />
                              So, my dear friends, hold on to your hats and don't forget to charge your memes, because the future is gonna be lit with technology. And if anyone asks, just tell them Prashant sent you. Cheers!
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

export default BlogPost4