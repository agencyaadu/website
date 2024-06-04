// Blog Post - 10 "Blockchain Beyond Bitcoin"

import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { useMediaQuery } from 'usehooks-ts';
import { useInView } from 'react-intersection-observer';

import BlogPostHeader from './Header/BlogPostHeader';
import BlogPostFooter from './Footer/BlogPostFooter';
import './Style/BlogPost.scss';
import Cursor from '../../Cursor';
      

const BlogPost10 = () => {

    // =========== Title ===========
    document.title = "Blockchain Beyond Bitcoin - agencyAadu";

    const isMobile = useMediaQuery("(max-width:430px)");

    // // =========== List of Topics ========
    // const topics: Topic [] = [
    //   {
    //       id: 'introduction',
    //       name: 'Introduction',
    //   },
    //   {
    //       id: 'imagine-a-world-where',
    //       name: 'imagine A World Where',
    //   },
    //   {
    //       id: 'But-wait-theres-more',
    //       name: 'But wait, there's more!',
    //   },
    //   {
    //       id: 'its-not-all-rainbows',
    //       name: 'Ofc, it's not all rainbows',
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
            threshold: 1,
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
            threshold: 0.7,
            delay: 100,
        }
    );
    const [ref3, inView3] = useInView(
        {
            threshold: 0.7,
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
        ( inView3 ? 'Conclusion' :
        inView2 ? "Ofc, it's not all rainbows" :
        inView1 ? 'But wait, there is more!' :
        inView ? 'imagine A World Where' :
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
                                <div className="paragraph" topic-id="imagine-a-world-where" ref={ref}>
                                    
                                </div>
                                <div className="paragraph" topic-id="But-wait-theres-more" ref={ref1}>
                                    
                                </div>
                                <div className="paragraph" topic-id="its-not-all-rainbows" ref={ref2}>
                                    
                                </div>
                                <div className="paragraph" topic-id="Conclusion" ref={ref3}>
                                    
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

export default BlogPost10;