// Blog Post - 15 "Apps for the Modern Entrepreneur"

import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { useMediaQuery } from 'usehooks-ts';
import { useInView } from 'react-intersection-observer';

import BlogPostHeader from './Header/BlogPostHeader';
import BlogPostFooter from './Footer/BlogPostFooter';
import './Style/BlogPost.scss';
import Cursor from '../../Cursor';
      

const BlogPost15 = () => {

    // =========== Title ===========
    document.title = "Apps for the Modern Entrepreneur - agencyAadu";

    const isMobile = useMediaQuery("(max-width:430px)");

    // // =========== List of Topics ========
    // const topics: Topic [] = [
    //   {
    //       id: 'introduction',
    //       name: 'Introduction',
    //   },
    //   {
    //       id: 'productivity-powerhouses',
    //       name: 'Productivity Powerhouses',
    //   },
    //   {
    //       id: 'financial-finesse',
    //       name: 'Financial Finesse',
    //   },
    //   {
    //       id: 'marketing-mavens',
    //       name: 'Marketing Mavens',
    //   },
    //   {
    //       id: 'focus-and-flow',
    //       name: 'Focus and Flow',
    //   },
    //   {
    //       id: 'bonus-tools',
    //       name: 'Bonus Tools',
    //   },
    //   {
    //       id: 'conclusion',
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
    const [ref3, inView3] = useInView(
        {
            threshold: 1,
            delay: 100,
        }
    );
    const [ref4, inView4] = useInView(
        {
            threshold: 1,
            delay: 100,
        }
    );
    const [ref5, inView5] = useInView(
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

    const maxScrollPosition = isMobile ? 200 : 410;
    const isOverflowVisible = scrollPosition >= maxScrollPosition;

    // Topic Name
    const topicName = mainInView ? 
        ( inView5 ? 'Conclusion' :
        inView4 ? 'Bonus Tools' :
        inView3 ? 'Focus and Flow' :
        inView2 ? 'Marketing Mavens' :
        inView1 ? 'Financial Finesse' :
        inView ? 'Productivity Powerhouses' :
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
                    <h1>Example</h1>
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
                                    Example
                                </div>
                                <div className="paragraph" topic-id="productivity-powerhouses" ref={ref}>
                                    
                                </div>
                                <div className="paragraph" topic-id="financial-finesse" ref={ref1}>
                                    
                                </div>
                                <div className="paragraph" topic-id="marketing-mavens" ref={ref2}>
                                    
                                </div>
                                <div className="paragraph" topic-id="Focus and Flow" ref={ref3}>
                                    
                                </div>
                                <div className="paragraph" topic-id="bonus-tools" ref={ref4}>
                                    
                                </div>
                                <div className="paragraph" topic-id="conclusion" ref={ref5}>
                                    
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

export default BlogPost15;