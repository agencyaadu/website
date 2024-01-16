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
                    <h1>Meta Mayhem</h1>
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
                                    &nbsp; &nbsp; &nbsp; &nbsp;
                                    Get ready for a thrilling journey into the Metaverse – not just some old sci-fi fantasy, but the real deal brought to life by none other than Mark Zuckerberg, reshaping the very essence of the internet.<br /><br />
                                    
                                    &nbsp; &nbsp; &nbsp; &nbsp;
                                    But before you gear up with your VR headset and dive headfirst into this digital wonderland, let's pause for a moment. Is the Metaverse truly the futuristic utopia that Zuckerberg envisions, or is it merely another shiny plaything for the big tech giants, possibly paving the way for privacy nightmares? <br /><br />
                                </div>
                                <div className="paragraph" topic-id="navigating-the-metaverse" ref={ref}>
                                    &nbsp; &nbsp; &nbsp; &nbsp;
                                    Let's be honest – the Metaverse is currently navigating its awkward teenage phase. It's grappling with bugs, glitches, and enough cringe-worthy interactions to make even the most socially adept person blush. Just picture attending a virtual business meeting where your avatar decides to break into the robot dance instead of a professional handshake. Awkward? Absolutely. <br />

                                    &nbsp; &nbsp; &nbsp; &nbsp;
                                    Yet, amid this digital adolescence, the Metaverse holds immense potential. It has the power to revolutionize the way we work, socialize, and learn. Imagine collaborating with colleagues worldwide without leaving the comfort of your living room – the Metaverse has you covered. Want to attend a virtual concert featuring your favorite band, even if they're performing on the moon? No problem, the Metaverse is your ticket to such extraordinary experiences.
                                </div>
                                <div className="paragraph" topic-id="potential" ref={ref1}>
                                    &nbsp; &nbsp; &nbsp; &nbsp;
                                    However, with great potential comes great responsibility. We must tread carefully and be wary of the potential pitfalls of the Metaverse – privacy concerns, the risk of addiction, and the looming threat of Zuckerberg evolving into a virtual overlord. The last thing we need is another platform for him to collect our data and fuel our insatiable need for virtual validation. <br /><br />

                                    &nbsp; &nbsp; &nbsp; &nbsp;
                                    So, is the Metaverse the future? Only time will reveal its true trajectory. One thing's for certain – it's going to be one wild ride. And guess what? (Cue the sly wink) We're not just spectators; we're your trusted guides through this digital frontier. At www.aadu.agency, we can craft a website that seamlessly fits into the Metaverse, a digital masterpiece that not only looks incredible but functions flawlessly, ensuring you stand out in your virtual neighborhood. <br /><br />

                                    &nbsp; &nbsp; &nbsp; &nbsp;
                                    Say goodbye to FOMO and jump aboard the Meta-revolution! Reach out today, and let's carve out your digital footprint in the virtual world before it becomes the hottest destination in town. Who knows, you might just become the next big virtual influencer, leaving Mark Zuckerberg a tad green with envy.

                                </div>
                                <div className="paragraph" topic-id="creating-your-digital-footprint" ref={ref2}>
                                    Remember, we're here to help you navigate the Metaverse, not become its next casualty. Ready for the adventure? Your digital odyssey awaits! <br /><br />

                                    &nbsp; &nbsp; &nbsp; &nbsp;
                                    And as you embark on this journey, consider the exciting possibilities awaiting you within the Metaverse. Picture a realm where virtual classrooms offer engaging and immersive learning experiences, breaking down geographical barriers and expanding educational horizons. Envision a workplace where global teams seamlessly collaborate, transcending physical distances and unlocking unparalleled efficiency. <br /><br />

                                    &nbsp; &nbsp; &nbsp; &nbsp;
                                    Yet, in the midst of this digital evolution, we can't ignore the cautionary tales. Privacy becomes a paramount concern, with personal data traversing virtual landscapes. The allure of the Metaverse must not blind us to the potential risks – from data breaches to the overarching control of a few tech giants.

                                </div>
                                <div className="paragraph" topic-id="a-guided-digital-odyssey" ref={ref3}>
                                    &nbsp; &nbsp; &nbsp; &nbsp;
                                    As we ponder the Metaverse's destiny, it's crucial to emphasize the role of individual agency. Your digital presence within this realm is not just a passive experience; it's an opportunity to shape and define your virtual identity. Crafting a website that mirrors your uniqueness is not merely a trend; it's a strategic move to establish your distinctiveness in the crowded digital sphere. <br /><br />
                                    &nbsp; &nbsp; &nbsp; &nbsp;
                                    At www.aadu.agency, we don't just build websites; we craft digital narratives that seamlessly integrate into the Metaverse. Our expertise goes beyond the technical – we understand the nuances of creating an online persona that resonates with authenticity. Your website isn't just a part of the Metaverse; it's a dynamic extension of who you are. <br /><br />
                                    &nbsp; &nbsp; &nbsp; &nbsp;
                                    So, as you contemplate the unfolding Metaverse saga, let www.aadu.agency be your companion on this digital odyssey. Together, let's navigate the uncharted territories, ensuring that your virtual presence not only survives but thrives in this ever-evolving landscape. Ready to make your mark in the Metaverse? Let's embark on this adventure together!

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