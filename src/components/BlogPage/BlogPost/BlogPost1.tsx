// Blog Post - 1 "Portfolio"

import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { useMediaQuery } from 'usehooks-ts';
import { useInView } from 'react-intersection-observer';

import BlogPostHeader from './Header/BlogPostHeader';
import BlogPostFooter from './Footer/BlogPostFooter';
import './Style/BlogPost.scss';
import Cursor from '../../Cursor';


const BlogPost1: React.FC = () => {

    // =========== Title ===========
    document.title = "Portfolio - agencyAadu";

    // =========== Media Query ===========
    const isMobile = useMediaQuery("(max-width:430px)");


    // // =========== List of Topics ========
    // const topics: Topic [] = [
    //   {
    //       id: 'introduction',
    //       name: 'Introduction',
    //   },
    //   {
    //       id: 'visual-storytelling',
    //       name: 'Visual Storytelling',
    //   },
    //   {
    //       id: 'connecting-with-audience',
    //       name: 'Connecting with Audience',
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
            threshold: isMobile ? 0.7 : 1,
            delay: 100,
        }
    );
    const [ref, inView] = useInView(
        {
            threshold: isMobile ? 0.9 : 0.9,
            delay: 100,
        }
    );
    const [ref1, inView1] = useInView(
        {
            threshold: isMobile ? 0.9 : 1,
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

    const maxScrollPosition = isMobile ? 200 : 410;
    const isOverflowVisible = scrollPosition >= maxScrollPosition;


    // Topic Name
    const topicName = mainInView ? 
        (inView2 ? 'Conclusion' :
        inView1 ? 'Connecting With Audience' :
        inView ? 'Visual Storytelling' :
        inView0 ? 'Introduction' : '') : '';



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
                    <h1>Example</h1>
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
                                    Example    
                                </div>
                                <div className="paragraph" topic-id="visual-storytelling" ref={ref}>
                                    
                                </div>
                                <div className="paragraph" topic-id="connecting-with-audience" ref={ref1}>
                                    
                                </div>
                                <div className="paragraph" topic-id="conclusion" ref={ref2} >
                                   
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

export default BlogPost1;