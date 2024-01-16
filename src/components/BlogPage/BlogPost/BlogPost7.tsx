// Blog Post - 6 "WEB DEVELOPMENT"

import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { useMediaQuery } from 'usehooks-ts';

import BlogPostHeader from './Header/BlogPostHeader';
import BlogPostFooter from './Footer/BlogPostFooter';
import './Style/BlogPost.scss';
import Cursor from '../../Cursor';

const BlogPost7: React.FC = () => {

  // =========== Title ===========
  document.title = "Web Development - agencyAadu";

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
              <h1>Web Development</h1>
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
                              Hey bitches, it's ya boy Prashant here, the 19 year old male from India who has been slaying the web development game like a savage. And let me tell you, this shit is no joke.<br />
                              &nbsp; &nbsp; &nbsp; &nbsp;
                              You see, web development is like a crazy ex-girlfriend. At first, everything seems all rainbows and unicorns. You're excited to learn and create some dope websites. But then, BAM! Just like your ex, it hits you with a million problems and errors that make you want to pull your hair out. And sometimes, you even question why you got into this mess in the first place.<br />
                              &nbsp; &nbsp; &nbsp; &nbsp;
                              But don't worry my dear friends, because I have a solution for all your web development woes. And no, it's not your grandma's home remedy or your therapist's advice. It's something even better - agency.aadu. Yes, you heard it right. This agency is the real MVP when it comes to web development.<br />
                          </div>
                          <div className="paragraph">
                              &nbsp; &nbsp; &nbsp; &nbsp;
                              You might be wondering, 'But Prashant, who the hell is agency.aadu and how are they going to help me?' Well, let me break it down for you. Agency.aadu is a badass team of web development experts who can turn your basic website into a masterpiece. They have the skills, the experience, and the magic touch to make your website stand out from the rest.<br /><br />
                              &nbsp; &nbsp; &nbsp; &nbsp;
                              And as an intern at agencyAadu, let me tell you, these guys are no joke. They are the real deal. So, if you want to level up your web development game, then you need to get on board with agencyAadu. Trust me, they will make your ex-girlfriend (aka web development) jealous.
                          </div>
                          <div className="paragraph">
                              &nbsp; &nbsp; &nbsp; &nbsp;
                              Now, let's talk about all the perks of learning web development. First of all, you can work from anywhere in the world. Yup, you can sit on your couch and still make bank. Who needs a 9-5 job when you can be your own boss? And let's not forget the insane amount of money you can make. I mean, have you seen Mark Zuckerberg's net worth? Need I say more?<br />
                              &nbsp; &nbsp; &nbsp; &nbsp;
                              Oh, and let's not forget the satisfaction you get when a website you created goes live. It's like seeing your baby grow up and conquer the world. But trust me, creating a website is not a piece of cake. It takes determination, patience, and a whole lot of cursing when things don't go as planned. But let's be real, that's part of the fun.<br />
                              &nbsp; &nbsp; &nbsp; &nbsp;
                              And if you're someone who is always looking for a challenge, then web development is perfect for you. There's always something new to learn, a new coding language to master, and new tools to play around with. So, if you're someone who gets bored easily, then web development is your soulmate (or should I say solodev?).<br />
                          </div>
                          <div className="paragraph">
                              &nbsp; &nbsp; &nbsp; &nbsp;
                              So, my dear friends, if you want to rule the web development world and make your ex-girlfriend (I mean web development) regret leaving you, then agency.aadu is your knight in shining armor. They will guide you, mentor you, and help you unleash your full potential. And when you do, don't forget to thank ya boy Prashant for hooking you up with the ultimate web development agency.<br /><br />
                              Until next time, peace out peeps. Stay savage and keep coding.
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

export default BlogPost7;