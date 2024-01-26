// Blog Post - 13 "Building Your Personal Brand"

import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { useMediaQuery } from 'usehooks-ts';
import { useInView } from 'react-intersection-observer';

import BlogPostHeader from './Header/BlogPostHeader';
import BlogPostFooter from './Footer/BlogPostFooter';
import './Style/BlogPost.scss';
import Cursor from '../../Cursor';
      

const BlogPost13 = () => {

    // =========== Title ===========
    document.title = "Building Your Personal Brand - agencyAadu";

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
                    <h1>Building Your Personal Brand</h1>
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
                                    <strong>Building Your Personal Brand in the Digital Age: Rise Above the Noise</strong><br /><br />
                                    
                                    &nbsp; &nbsp; &nbsp; &nbsp;
                                    In a world saturated with online personas, crafting a distinct and impactful personal brand can feel like building a sandcastle in a hurricane. But fear not, fellow digital voyagers! With strategy and a dash of audacity, you can carve your niche and establish yourself as a force to be reckoned with.<br /><br />
                                </div>
                                <div className="paragraph" topic-id="benefits" ref={ref}>
                                    <ul>
                                        <li><strong>Step 1: Know Yourself</strong><br /> Before you embark on your branding journey, it's crucial to understand your core values, passions, and expertise. What are you genuinely good at? What lights your creative fire? What unique perspective can you offer the world? This introspection forms the bedrock of your brand identity.</li><br />
                                        <li><strong>Step 2: Define Your Target Audience</strong><br /> Who are you trying to reach with your brand? Identifying your ideal audience helps tailor your content and messaging to resonate with them. Are you a budding entrepreneur targeting fellow hustlers? An aspiring photographer aiming to capture hearts with your lens? Be specific, and it will show in your content.</li><br />
                                        <li><strong>Step 3: Choose Your Platform(s)</strong><br /> Not all platforms are created equal. Where will your target audience engage with your brand? While LinkedIn might be your haven for professional networking, Instagram could be your canvas for showcasing your artistic flair. Choose platforms where you can authentically express yourself and reach your desired audience.</li><br />
                                        <li><strong>Step 4: Content is King (and Queen!)</strong><br /> Create high-quality, engaging content that showcases your expertise and resonates with your audience. Informative articles, captivating videos, or simply witty tweets – find your voice and deliver value. Remember, consistency is key: build a loyal following by regularly offering fresh content.</li><br />
                                        <li><strong>Step 5: Engage and Network</strong><br /> Authenticity is the heart and soul of a successful personal brand. Don't try to be someone you're not, or chase fleeting trends. Embrace your quirks, let your personality shine through, and connect with your audience on a genuine level. People connect with real people, not carefully curated avatars.</li><br />
                                        <li><strong>Step 7: Be Patient and Persistent</strong><br /> Building a strong personal brand takes time and effort. Don't get discouraged by overnight success stories – those are often the exception, not the rule. Stay focused, keep creating valuable content, and be patient. Consistency and resilience are your allies in this digital marathon.</li><br />
                                    </ul>
                                </div>
                                <div className="paragraph" topic-id="benefits" ref={ref1}>
                                    &nbsp; &nbsp; &nbsp; &nbsp;
                                    Remember, your personal brand is a living, breathing entity, constantly evolving along with you. Embrace the journey, experiment, and have fun! The digital world awaits your unique voice, so go forth and make your mark! <br /><br />
                                    Bonus Tip: Track your progress! Analyze your engagement, website traffic, and follower growth to understand what's working and what needs tweaking. Data is your compass, guiding you towards a stronger, more impactful brand.                   
                                </div>
                                <div className="paragraph" topic-id="Conclusion" ref={ref2}>
                                    Now get out there and build your digital legacy! The world needs your voice.<br /><br />

                                    Happy social media-ing! <br />
                                    P.S. Don't forget to share this post with your friends who are also on their personal branding journey! Together, let's build a vibrant and diverse online community.<br />
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

export default BlogPost13;