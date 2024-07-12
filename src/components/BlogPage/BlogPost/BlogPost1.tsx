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
                    <h1>Transforming Your Cryptocurrency Initiative: Expanding Horizons for Enhanced Success</h1>
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
                                <div className="paragraph" topic-id='Understanding the Importance of Crypto Project Rebranding' ref={ref0}>
                                Cryptocurrency projects, like any business, sometimes need a fresh start. Crypto project rebranding can be a strategic move to revitalize a project, attract new investors, and reengage the community. The importance of rebranding lies in its ability to change public perception and redefine the project's goals and values. This process involves not just a change in logo or name, but a complete overhaul of the project's identity. It’s essential to communicate the reasons behind the rebranding clearly to stakeholders. Transparent communication ensures that existing investors remain confident in the project’s direction and new potential investors understand the value proposition. Successful rebranding can lead to increased visibility, improved user trust, and ultimately, enhanced project success.

Rebranding in the cryptocurrency world often involves addressing issues from the past, such as regulatory challenges, security breaches, or management changes. It’s crucial to showcase how these issues have been resolved and how the new brand represents a stronger, more secure, and forward-thinking project. This reassurance can restore confidence and attract new investments. Additionally, rebranding offers a chance to update technological aspects, such as blockchain protocols, and introduce new features that can make the project more competitive. In a fast-evolving market, staying relevant is key, and rebranding can be a tool to achieve that.
    
                                </div>
                                <div className="paragraph" topic-id="Key Steps to Effectively Rebrand Your Crypto Project" ref={ref}>
                                    
                                </div>
                                <div className="paragraph" topic-id="The Role of ICO Rebranding in Attracting New Investments" ref={ref1}>
                                    
                                </div>
                                <div className="paragraph" topic-id="Case Studies: Successful Crypto Project Rebranding" ref={ref2} >
                                   
                                </div>
                                <div className="paragraph" topic-id="Case Studies: Successful Crypto Project Rebranding" ref={ref2} >
                                   
                                </div>
                                <div className="paragraph" topic-id="Case Studies: Successful Crypto Project Rebranding" ref={ref2} >
                                   
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