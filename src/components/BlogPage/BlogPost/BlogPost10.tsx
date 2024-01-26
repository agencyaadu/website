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
                    <h1>Blockchain Beyond Bitcoin</h1>
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
                                    &nbsp; &nbsp; &nbsp; &nbsp;
                                    <strong>Unlocking a Pandora's Box of Possibilities</strong><br /><br />
                                    
                                    &nbsp; &nbsp; &nbsp; &nbsp;
                                    Forget fancy cars and Lamborghinis, the real gold rush of the 21st century is happening in the invisible world of digital ledgers and encrypted blocks. We're talking about blockchain, the technology behind cryptocurrency, but its potential stretches far beyond Bitcoin's flashy headlines. So, put down your mining rig and step into the real revolution.<br /><br />
                                </div>
                                <div className="paragraph" topic-id="imagine-a-world-where" ref={ref}>
                                    <ul>
                                        <li><strong>Supply chains are crystal clear:</strong> Every mango from Mexico, every diamond from Dubai, tracked seamlessly from farm to finger, eliminating counterfeits and shady middlemen. Think avocado toast with guaranteed ethical sourcing!</li>
                                        <li><strong>Voting is a breeze:</strong> No more hanging chads or ballot box stuffing. Secure, transparent elections with instant results, powered by the tamper-proof magic of blockchain. Democracy 2.0, minus the filibusters.</li>
                                        <li><strong>Your medical records are your own:</strong> Say goodbye to data breaches and bureaucratic nightmares. Securely store your medical history on a blockchain, accessible only to you and authorized professionals. HIPAA who?</li>
                                    </ul>
                                </div>
                                <div className="paragraph" topic-id="But-wait-theres-more" ref={ref1}>
                                    <ul>
                                        <li><strong>Smart contracts:</strong>  Imagine agreements that execute automatically when conditions are met, no lawyers or loopholes needed. Rent a house when the payment hits the blockchain, sell a stock when it reaches your target price. The possibilities are endless (and slightly terrifying, if you think about self-driving cars programmed with road rage algorithms).</li>
                                        <li><strong>Art that can't be faked:</strong>   Digital artists rejoice! Blockchain-based certificates of authenticity put an end to art forgeries. Your pixelated cat portrait is now an investment-grade masterpiece (just don't tell your grandma).</li>
                                        <li><strong>A decentralized internet:</strong> Break free from the Big Tech overlords! Blockchain can power a web where data is distributed, censorship is impossible, and your cat videos are truly your own. The cat revolution is nigh!</li>
                                    </ul>
                                </div>
                                <div className="paragraph" topic-id="its-not-all-rainbows" ref={ref2}>
                                    <ul>
                                        <li><strong>Scalabilty Issues:</strong>  Can blockchain handle the volume of transactions needed for global adoption? Only time (and a lot of code) will tell.</li>
                                        <li><strong>Energy Consumption:</strong>   Mining some cryptocurrencies is an energy hog, raising concerns about environmental impact. But hey, solar-powered hamster wheels anyone?</li>
                                        <li><strong>Regulation:</strong> Governments are still grappling with how to tame this wild crypto beast, and overzealous regulation could stifle innovation.</li>
                                    </ul>
                                </div>
                                <div className="paragraph" topic-id="Conclusion" ref={ref3}>
                                    &nbsp; &nbsp; &nbsp; &nbsp;
                                    Blockchain is a game-changer, a Pandora's Box of possibilities waiting to be unleashed. It's not just about money, it's about trust, transparency, and reimagining how the world works. So, dive in, explore, and let's build a future where blockchain isn't just a buzzword, but a revolution with real teeth (and maybe some robot lawyers to handle the legalities).<br /><br />

                                    Remember, the future is decentralized, and you're invited to the party. Just don't forget your dancing shoes (and your skepticism...it's a wild world out there). <br />
                                    Did this blog spark your curiosity? Share your thoughts on the potential of blockchain in the comments below! Let's get the conversation rolling and build a future that's as secure as it is strange (and maybe a little bit cat-tastic).
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