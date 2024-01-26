// Blog Post - 12 "Crafting a Winning Social Media Strategy"

import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { useMediaQuery } from 'usehooks-ts';
import { useInView } from 'react-intersection-observer';

import BlogPostHeader from './Header/BlogPostHeader';
import BlogPostFooter from './Footer/BlogPostFooter';
import './Style/BlogPost.scss';
import Cursor from '../../Cursor';
      

const BlogPost12 = () => {

    // =========== Title ===========
    document.title = "Crafting a Winning Social Media Strategy - agencyAadu";

    const isMobile = useMediaQuery("(max-width:430px)");

    // // =========== List of Topics ========
    // const topics: Topic [] = [
    //   {
    //       id: 'introduction',
    //       name: 'Introduction',
    //   },
    //   {
    //       id: 'strategy',
    //       name: 'Strategy',
    //   },
    //   {
    //       id: 'bonus',
    //       name: 'Bonus',
    //   },
    //   {
    //       id: 'Conclusion',
    //       name: 'Conclusion',
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
            threshold: isMobile ? 0.5 : 1,
            delay: 100,
        }
    );
    const [ref, inView] = useInView(
        {
            threshold: 0.4,
            delay: 100,
        }
    );
    const [ref1, inView1] = useInView(
        {
            threshold: isMobile ? 0.3 : 1,
            delay: 100,
        }
    );
    const [ref2, inView2] = useInView(
        {
            threshold: isMobile ? 0.3 : 1,
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

    const maxScrollPosition = isMobile ? 200 : 410;
    const isOverflowVisible = scrollPosition >= maxScrollPosition;

    // Topic Name
    const topicName = mainInView ? 
        ( inView2 ? 'Conclusion' :
        inView1 ? 'Bonus' :
        inView ? 'Strategy' :
        inView0 ? 'Introduction' : '') : '';

    return (
        <>
        <div className="BlogPost-wrapper">
            {/* ======= Nav Bar ========= */}
            <BlogPostHeader />

            {/* =========================== BLOG PAGE =========================== */}
            <motion.div
                className="BlogPostContent"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 1, duration: 2 } }}
            >
                <div className="title">
                    <h1>Crafting a Winning Social Media Strategy</h1>
                </div>
                {/* === From where the static page starts === */}
                <div className="static-page">
                    <div className="topic">
                        <div className="topic-name">
                            {topicName}
                        </div>
                    </div>
                    <div className="scrolled-content" ref={mainRef}>
                        <div className='content'>
                            <div className='paragraphs' style={{overflowY: isOverflowVisible ? 'auto' : 'hidden'}}>
                                <div className="paragraph" topic-id="introduction" ref={ref0}>
                                    <strong>Crafting a Winning Social Media Strategy for Your Business: From Likes to Leads</strong><br /><br />
                                    
                                    &nbsp; &nbsp; &nbsp; &nbsp;
                                    In today's digital landscape, a thriving business needs a rock-solid social media strategy. It's not just about posting pictures and hoping for the best; it's about crafting a targeted approach that engages your audience, builds brand loyalty, and ultimately drives results.<br /><br />
                                </div>
                                <div className="paragraph" topic-id="benefits" ref={ref}>
                                    <ul>
                                        <li><strong>Step 1: Know Your Audience</strong><br /> Before you dive headfirst into content creation, take a step back and understand who you're trying to reach. Who are your ideal customers? What are their interests, needs, and pain points? What platforms do they frequent? Once you have a clear picture of your target audience, you can tailor your content and messaging accordingly.</li><br />
                                        <li><strong>Step 2: Choose the Right Platforms</strong><br /> Not all social media platforms are created equal. While Facebook might be a good fit for B2B businesses, Instagram might be more effective for reaching a younger demographic. Do your research and choose the platforms where your target audience is most active.</li><br />
                                        <li><strong>Step 3: Create Compelling Content</strong><br /> Now comes the fun part: creating content that resonates with your audience. This could include informative blog posts, eye-catching infographics, engaging videos, or even behind-the-scenes glimpses into your business. Remember, quality over quantity is key. Focus on creating valuable content that your audience will want to see, share, and comment on.</li><br />
                                        <li><strong>Step 4: Be Consistent</strong><br /> Building a strong social media presence takes time and effort. Don't post sporadically and then disappear for weeks on end. Develop a consistent posting schedule and stick to it. The more regularly you show up, the more likely you are to build a loyal following.</li><br />
                                        <li><strong>Step 5: Engage with Your Audience</strong><br /> Social media is a two-way street. Don't just broadcast your message into the void. Respond to comments and messages promptly, participate in conversations, and show your audience that you care about their feedback.</li><br />
                                        <li><strong>Step 6: Track Your Results</strong><br /> It's important to track your social media progress to see what's working and what's not. Use analytics tools to measure your engagement, reach, and website traffic. This data will help you refine your strategy and make sure you're getting the most out of your social media efforts.</li><br />
                                    </ul>
                                </div>
                                <div className="paragraph" topic-id="benefits" ref={ref1}>
                                    <ul>
                                        <li>Use relevant hashtags to increase your reach.</li>
                                        <li>Run social media contests and giveaways to generate excitement.</li>
                                        <li>Partner with influencers in your industry to reach a wider audience.</li>
                                        <li>Stay up-to-date with the latest social media trends and algorithms.</li>
                                    </ul>
                                </div>
                                <div className="paragraph" topic-id="Conclusion" ref={ref2}>
                                    &nbsp; &nbsp; &nbsp; &nbsp;
                                    By following these tips, you can create a winning social media strategy that drives results for your business. Remember, it's a marathon, not a sprint. Be patient, be consistent, and be creative, and you'll be well on your way to social media success.<br /><br />

                                    Happy social media-ing! <br />
                                    P.S. Don't forget to share this post with your friends and colleagues who are also looking to up their social media game!<br />
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
};

export default BlogPost12;