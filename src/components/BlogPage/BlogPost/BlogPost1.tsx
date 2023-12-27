// Blog Post - 1 "Portfolio"

import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { useMediaQuery } from 'usehooks-ts';
import { useInView } from 'react-intersection-observer';

import Response from '../../Response';
import BlogPostHeader from './Header/BlogPostHeader';
import BlogPostFooter from './Footer/BlogPostFooter';
import './Style/BlogPost.scss';


const BlogPost1: React.FC = () => {

    // =========== Media Query ===========
    const isTab = useMediaQuery("(max-width:768px)");


    // // =========== List of Topics ========
    // const topics: Topic [] = [
    //   {
    //       id: 'introduction',
    //       name: 'Introduction',
    //   },
    //   {
    //       id: 'power-of-portfolio',
    //       name: 'Power of Portfolio',
    //   },
    //   {
    //       id: 'inspiring-portfolios',
    //       name: 'Inspiring Portfolios',
    //   },
    //   {
    //       id: 'visual-storytelling',
    //       name: 'Visual Storytelling',
    //   },
    // ];


    // =========== Intersection Observer ===========
    const [mainRef, mainInView] = useInView(
        {
            threshold: 1,
            delay: 100,
        }
    );
    const [ref0, inView0] = useInView(
        {
            threshold: 1,
            delay: 100,
        }
    );
    const [ref, inView] = useInView(
        {
            threshold: 1,
            delay: 100,
        }
    );
    const [ref1, inView1] = useInView(
        {
            threshold: 1,
            delay: 100,
        }
    );
    const [ref2, inView2] = useInView(
        {
            threshold: 1,
            delay: 100,
        }
    );

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

    const maxScrollPosition = 410;
    const isOverflowVisible = scrollPosition >= maxScrollPosition;


    // Topic Name
    const topicName = mainInView ? 
        (inView2 ? 'Visual Storytelling' :
        inView1 ? 'Inspiring Portfolios' :
        inView ? 'Power of Portfolio' :
        inView0 ? 'Introduction' : '') : '';



      return (
          <div>
            {!isTab ? (
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
                            <h2>Portfolio</h2>
                        </div>
                        {/* === From where the static page starts === */}
                        <div className="static-page">
                            <div className="topic">
                                <div className="topic-name">
                                    {topicName}
                                </div>
                            </div>
                            <div className='scrolled-content' ref={mainRef}>
                                <div className='content'>
                                    <div className='paragraphs' style={{overflowY: isOverflowVisible ? 'auto' : 'hidden'}}>
                                        <div className="paragraph" topic-id='introduction' ref={ref0}>
                                            &nbsp; &nbsp; &nbsp; &nbsp;
                                            Hey there! Get ready to join me on a cool trip into the world of personal websites, where artists, designers, and all sorts of talented folks show off their awesome work. I'm super excited to share some tips and stories that'll help you make your own website stand out. <br />
                                            &nbsp; &nbsp; &nbsp; &nbsp;
                                            Think of your portfolio as a fancy online resume – but way cooler. In today's digital world, having a great-looking portfolio is like having a golden ticket. It's how you show off your skills and catch the eye of people who might want to work with you.
                                            Your portfolio isn't just about the work you do; it's also about showing off a bit of who you are. We'll chat about putting your personality into your site – you know, making it feel like you.
                                        </div>
                                        <div className="paragraph" topic-id="power-of-portfolio" ref={ref}>
                                            &nbsp; &nbsp; &nbsp; &nbsp;
                                            I've been on this journey myself, creating my own portfolio at www.aadu.agency, and I'm going to sprinkle in a bit of what I've learned along the way. But don't worry, it's not just about me – we're going to check out some amazing portfolios from different fields to get those creative juices flowing. <br />
                                            &nbsp; &nbsp; &nbsp; &nbsp;
                                            We'll chat about why it's not just about having pretty pictures on your site but telling a story. Imagine your portfolio as a visual storybook that takes people on a journey through your work. It's about picking the best pictures, organizing them nicely, and creating an experience that keeps people interested.
                                        </div>
                                        <div className="paragraph" topic-id="inspiring-portfolios" ref={ref1}>
                                            &nbsp; &nbsp; &nbsp; &nbsp;
                                            Next up, we'll talk about making your site easy for visitors to use. You want them to easily find what they're looking for and maybe stick around for a bit. It's like making your own website a cozy place that people want to hang out in. <br />
                                            &nbsp; &nbsp; &nbsp; &nbsp;
                                            Now, your portfolio isn't just about the work you do; it's also about showing off a bit of who you are. We'll chat about putting your personality into your site – you know, making it feel like you. Finding that sweet spot between being professional and being yourself is the key. In my own portfolio, this mix has helped me connect with people who share my vision.
                                        </div>
                                        <div className="paragraph" topic-id="visual-storytelling" ref={ref2} >
                                            &nbsp; &nbsp; &nbsp; &nbsp;
                                            So, get ready for a journey that's not just about websites but about unlocking your creative side. We'll borrow some cool ideas from different folks, and hey, if you're curious, swing by my portfolio at www.aadu.agency. Let's chat and figure out how to make your own portfolio shine. <br />
                                            Remember, your portfolio is like a megaphone for your talents. Let's make some noise and open up new doors for your awesome self! Ready to get started?
                                        </div>
                                    </div>
                                </div>
                                
                                {/* ======== Footer ========= */}
                                <BlogPostFooter />
                            </div>
                        </div>
                    </motion.div>
                
                </div>
                </>
            ) : (
                <Response />
            )}
        </div>
    )
};

export default BlogPost1;