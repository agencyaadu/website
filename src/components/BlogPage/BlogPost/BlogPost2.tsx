// Blog Post - 2 "Meta Mayhem"

import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { useMediaQuery } from 'usehooks-ts';
import { useInView } from 'react-intersection-observer';

import BlogPostHeader from './Header/BlogPostHeader';
import BlogPostFooter from './Footer/BlogPostFooter';
import './Style/BlogPost.scss';
import Cursor from '../../Cursor';
      

const BlogPost2 = () => {

    // =========== Title ===========
    document.title = "Meta Mayhem - agencyAadu";

    const isMobile = useMediaQuery("(max-width:430px)");

    // // =========== List of Topics ========
    // const topics: Topic [] = [
    //   {
    //       id: 'unveiling-the-metaverse',
    //       name: 'Unveiling the Metaverse',
    //   },
    //   {
    //       id: 'navigating-the-metaverse',
    //       name: 'Navigating the Metaverse',
    //   },
    //   {
    //       id: 'potential',
    //       name: 'Potential',
    //   },
    //   {
    //       id: 'creating-your-digital-footprint',
    //       name: 'Creating your Digital Footprint',
    //   },
    //   {
    //       id: 'a-guided-digital-odyssey',
    //       name: 'A Guided Digital Odyssey',
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
            threshold: 1,
            delay: 100,
        }
    );
    const [ref1, inView1] = useInView(
        {
            threshold: isMobile ? 0.3 : 0.4,
            delay: 100,
        }
    );
    const [ref2, inView2] = useInView(
        {
            threshold: 0.6,
            delay: 100,
        }
    );
    const [ref3, inView3] = useInView(
        {
            threshold: 0.6,
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
        ( inView3 ? 'A Guided Digital Odyssey' :
        inView2 ? 'Creating your Digital Footprint' :
        inView1 ? 'Potential' :
        inView ? 'Navigating the Metaverse' :
        inView0 ? 'Unveiling the Metaverse' : '') : '';

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
                                <div className="paragraph" topic-id="unveiling-the-metaverse" ref={ref0}>
                                    Example
                                </div>
                                <div className="paragraph" topic-id="navigating-the-metaverse" ref={ref}>
                                    
                                </div>
                                <div className="paragraph" topic-id="potential" ref={ref1}>
                                    
                                </div>
                                <div className="paragraph" topic-id="creating-your-digital-footprint" ref={ref2}>
                                    
                                </div>
                                <div className="paragraph" topic-id="a-guided-digital-odyssey" ref={ref3}>
                                    
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

export default BlogPost2;