// Blog Post - 6 "LIFE OF A 19 YEAR OLD BLOGGER"

import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { useMediaQuery } from 'usehooks-ts';

import BlogPostHeader from './Header/BlogPostHeader';
import BlogPostFooter from './Footer/BlogPostFooter';
import './Style/BlogPost.scss';
import Cursor from '../../Cursor';

const BlogPost6: React.FC = () => {

  // =========== Title ===========
  document.title = "Life of a 19 Year Old Blogger - agencyAadu";

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
              <h1>Life of a 19 Year Old Blogger</h1>
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
                              Hey there, my beloved readers! Welcome to my blog, where I spill all the tea about my life and my love for Batman. Yep, I’m that cool 19-year-old Indian blogger who is obsessed with the Dark Knight.<br />
                              &nbsp; &nbsp; &nbsp; &nbsp;
                              First things first, let me introduce myself. My name is Prashant (yeah, I know, my parents weren't that creative with my name) and I’m a male (sorry to disappoint all the ladies out there, but let’s be real, we all know you’re here for the Batman references). I hail from the land of spices and Bollywood, India. But don’t worry, this blog post won't be about me trying to sell you a temple tour package or Bollywood dance lessons. I’m a blogger, not a tour guide.<br />
                          </div>
                          <div className="paragraph">
                              &nbsp; &nbsp; &nbsp; &nbsp;
                              As a blogger, I’m constantly trying to come up with new and interesting ideas to keep my readers entertained (aka stop them from clicking on that pesky “x” button). But let’s be real, the struggle is real. Sometimes I sit in front of my laptop for hours, trying to come up with a catchy title, only to end up with something like “10 Reasons Why Batman is the Best Superhero Ever” (which is actually true, fight me if you disagree).<br /><br />
                              &nbsp; &nbsp; &nbsp; &nbsp;
                              But my real inspiration behind starting this blog is my love for Batman. I mean, who wouldn’t be a fan of that brooding, billionaire, crime-fighting vigilante? I even have my own little Batman shrine in my room, complete with action figures, posters, and a life-size replica of the Batmobile (okay fine, it’s just a toy car, but you get the point). And don’t even get me started on the amount of money I’ve spent on Batman merchandise. My bank account is crying, but my heart is happy.
                          </div>
                          <div className="paragraph">
                              &nbsp; &nbsp; &nbsp; &nbsp;
                              Another reason why I love blogging is that I get to swear and curse as much as I want without getting judged (well, technically I can’t hear your judgment, so it doesn’t count). Trust me, I have a mouth like a sailor and I can’t help it. But hey, I think it adds to my charm, right? And don’t even get me started on the memes and dank jokes I throw in every post. I mean, if I can’t make you laugh, then what’s the point?<br />
                              &nbsp; &nbsp; &nbsp; &nbsp;
                              Oh, before I forget, let me subtly mention that I’m currently an intern at this amazing marketing agency called AADU. I know, it’s a weird name, but trust me, they are the best. They have allowed me to unleash my true blogging potential and have given me the freedom to write about whatever the hell I want. Plus, they pay me in snacks, which is basically all I need in life.<br />
                          </div>
                          <div className="paragraph">
                              &nbsp; &nbsp; &nbsp; &nbsp;
                              But enough about me, let’s talk about you. You, my dear reader, are the reason why I keep on blogging. Without you, this would just be a diary (and let’s be real, who reads diaries anymore?). So thank you for taking the time to read my ramblings and for being a part of this blogging journey with me.<br />
                              &nbsp; &nbsp; &nbsp; &nbsp;
                              Well, I think that’s enough about me for now. Stay tuned for my next post where I’ll dissect the latest Batman movie and give my brutal opinion on it. And for all my Indian readers, please don’t take offense, I am just trying to be edgy and funny. So until next time, keep calm and love Batman. Peace out.<br />
                              P.S. Sorry for the excessive use of curse words and slangs, my inner rebellious teenager couldn’t help it. But hey, it makes for good SEO optimization, right?
                          </div>
                          <div className="paragraph">
                            <strong>BLOGGER WRITING ABOUT BLOGGING</strong><br /><br />
                            &nbsp; &nbsp; &nbsp; &nbsp;
                            Okay, listen up web-heads, let’s talk about blogs. Yeah, that thing you’re scrolling through right now. And before you roll your eyes and think, “oh god, not another blog about blogs,” just hear me out.<br />
                            &nbsp; &nbsp; &nbsp; &nbsp;
                            Because let’s be real, blogs are like the Spiderman of the internet. They’re everywhere, they have a lot of fans, and they can be pretty damn cool.<br />
                            &nbsp; &nbsp; &nbsp; &nbsp;
                            You see, just like how Spidey swings around the city, blogs are our go-to when we need information or entertainment. And just like how Spiderman has different web-slinging techniques, blogs have their own unique styles and formats. Some are informative, some are funny, and some are just straight savage.<br />
                          </div>
                          <div className="paragraph">
                              &nbsp; &nbsp; &nbsp; &nbsp;
                              Speaking of savage, let’s talk about the mastermind behind this blog – Prashant. He’s a 19-year-old male, and let me tell you, he’s got some serious writing skills. He’s the brains behind this blog and he’s also an intern at agency.aadu. Yeah, that’s right, this blog is a subtle marketing tactic for the agency. But hey, can you blame us? We gotta give our boy Prashant some credit and get our agency name out there. #SorryNotSorry.<br />
                              &nbsp; &nbsp; &nbsp; &nbsp;
                              But let’s get back to the topic at hand – blogs. You know what’s funny about them? They’re like Spiderman pointing at each other. Yeah, I’m sure you’ve seen that meme. Well, that’s exactly how it is with blogs. They all have similar elements and yet they still manage to stand out in their own way.<br />
                          </div>
                          <div className="paragraph">
                              &nbsp; &nbsp; &nbsp; &nbsp;
                              And if that’s not impressive enough, let’s talk about the fact that blogs are basically like superheroes. They swoop in and save us from the boring content on the internet. They provide us with valuable information and give us a good laugh when we need it. They’re like our own personal heroes.<br />
                              &nbsp; &nbsp; &nbsp; &nbsp;
                              But let’s not forget about the curse words. Yeah, some blogs are known for their blunt and profane language. And to be honest, I fucking love it. There’s just something so satisfying about reading a blog that doesn’t give a damn and tells it like it is. So if you’re easily offended, you might want to steer clear of those blogs. But if you’re like me and appreciate a good use of curse words, then these blogs are right up your alley.<br />
                          </div>
                          <div className="paragraph">
                              &nbsp; &nbsp; &nbsp; &nbsp;
                              Now, let’s talk about the elephant in the room. A lot of people seem to think that blogging is an easy job. That all we do is sit behind a computer and type away. But let me tell you, it’s not that simple. Behind every blog, there’s a person pouring their heart and soul into their writing. It takes dedication, passion, and a lot of hard work. So next time you’re scrolling through a blog, take a moment to appreciate the effort that goes into it.<br />
                              &nbsp; &nbsp; &nbsp; &nbsp;
                              So there you have it folks, my take on blogs. They may be everywhere, but they are definitely not overrated. And let’s give a round of applause to Prashant and agency.aadu for creating this amazing space for us to read, learn, and laugh. Keep slinging those blogs, guys. We’re rooting for you. Now excuse me while I go back to scrolling through more blogs. Bye-bye!<br />
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

export default BlogPost6;