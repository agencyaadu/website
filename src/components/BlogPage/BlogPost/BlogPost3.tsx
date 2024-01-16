// Blog Post - 3 "Navigating the Cloud"

import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { useMediaQuery } from 'usehooks-ts';
import { useInView } from 'react-intersection-observer';

import BlogPostHeader from './Header/BlogPostHeader';
import BlogPostFooter from './Footer/BlogPostFooter';
import './Style/BlogPost.scss';
import Cursor from '../../Cursor';
      

const BlogPost3 = () => {

    document.title = "Navigating the Cloud - agencyAadu"

    const isMobile = useMediaQuery("(max-width:430px)");

    // // =========== List of Topics ========
    // const topics: Topic [] = [
    //   {
    //       id: 'introduction',
    //       name: 'Introduction',
    //   },
    //   {
    //       id: 'ai-in-daily-life',
    //       name: 'AI in Daily Life',
    //   },
    //   {
    //       id: 'conclusion!',
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
            threshold: 0.7,
            delay: 100,
        }
    );
    const [ref, inView] = useInView(
        {
            threshold: isMobile ? 0.6 : 0.8,
            delay: 100,
        }
    );
    const [ref1, inView1] = useInView(
        {
            threshold: isMobile ? 0.5 : 0.6,
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
        (inView1 ? 'Conclusion' :
        inView ? 'AI in Daily Life' :
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
                    <h1>Navigating the Cloud</h1>
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
                                    Can you believe the journey we've taken from A.I. being the star of sci-fi flicks to becoming our everyday companion? It's like having a quirky house elf straight out of our favorite fantasy series, showing up unexpectedly – from shaping our social media feeds to suggesting the perfect comeback (or throwing in an autocorrect curveball). <br /><br />

                                    &nbsp; &nbsp; &nbsp; &nbsp;
                                    But relax, no need to panic! A.I. isn't scheming to take your job or turn us into an army of robots (at least, not yet... let's keep it that way). It's more like that friend who makes life a bit smoother, a bit funnier, and maybe a tad more intriguing. Picture it as the roommate who occasionally leaves you scratching your head, thinking, "What on earth are you up to now?" <br /><br />

                                    &nbsp; &nbsp; &nbsp; &nbsp;
                                    So, how exactly is A.I. adding that extra dash of excitement to our lives? Here are a few ways it's making things more interesting!

                                </div>
                                <div className="paragraph" topic-id="ai-in-daily-life" ref={ref}>
                                    <strong>Mastering the Art of Dating Profiles and Tweets:</strong><br />
                                    Feeling stuck with your dating profile? A.I.'s got your back, creating a bio so magnetic that potential matches can't resist (or at least swiping right like it's a sport). And when the tweet muse isn't cooperating, let A.I. take the reins, crafting that perfect witty comment or profound insight that might just break the internet (or at least get a chuckle from your grandma). <br /><br />
                                    <strong>Dreaming Up Homes and Nailing Website Design:</strong><br />
                                    Say goodbye to traditional architects and designers – A.I. is the new design wizard, conjuring up a home tailored exactly to your whims, whether you're into sleek minimalism or a cozy den with a cat paradise. And the headache of building a website? A.I.'s got you covered, creating stunning sites in record time (leaving you free to hunt down the ultimate cat GIF for your homepage). <br /><br />
                                </div>
                                <div className="paragraph" topic-id="conclusion" ref={ref1}>
                                    <strong>Beyond the Ordinary:</strong><br />
                                    But A.I. isn't limiting itself to the mundane. Imagine a future where A.I. plays a role in solving scientific mysteries, writes novels to rival the classics, and composes music that would make Beethoven do a double-take. It's a bit mind-boggling, and the future is shaping up to be wonderfully... unpredictable. <br /><br />
                                    <strong>Ready to Dive into the A.I. Wave?</strong><br />
                                    We (hint, hint) can be your ticket to the A.I. revolution, creating a website that's not just visually stunning but A.I.-powered. Imagine a site that understands you, learns your quirks, and delivers an experience that's truly out of this world. <br /><br />
                                
                                    So, what's holding you back? A.I. is like the coolest thing in town, making life easier, funnier, and maybe a bit more bizarre. Just keep an eye on your robot pizza chef – who knows what culinary surprises it might whip up next. Ready to embark on the A.I. adventure? Let's make it happen!
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

export default BlogPost3;