// Blog Post - 2 "Meta Mayhem"

import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { useMediaQuery } from 'usehooks-ts';
import { useInView } from 'react-intersection-observer';

import Response from '../../Response';
import BlogPostHeader from './Header/BlogPostHeader';
// import BlogPostFooter from './Footer/BlogPostFooter';
import './Style/BlogPost.scss';
      

const BlogPost2 = () => {
    const isTab = useMediaQuery("(max-width:768px)");

    // // =========== List of Topics ========
    // const topics: Topic [] = [
    //   {
    //       id: 'introduction',
    //       name: 'Introduction',
    //   },
    //   {
    //       id: 'potential',
    //       name: 'Potential',
    //   },
    //   {
    //       id: 'problem',
    //       name: 'Problem',
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
            threshold: 1,
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

    const maxScrollPosition = 410;
    const isOverflowVisible = scrollPosition >= maxScrollPosition;

    // Topic Name
    const topicName = mainInView ? 
        (inView2 ? 'Conclusion' :
        inView1 ? 'Problem' :
        inView ? 'Potential' :
        inView0 ? 'Introduction' : '') : '';

    return (
        <div>
            {!isTab ? (
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
                            <h2>Meta Mayhem</h2>
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
                                            Is the Metaverse More Than Just Mark Zuckerberg's Midlife Crisis? <br /><br />Buckle up, folks, we're diving into the Meta-verse! No, not that cheesy sci-fi film from the 90s, but the real deal – Mark Zuckerberg's brainchild that's turning the internet inside out. <br /><br />But hold on, before you strap on your VR headset and dive headfirst into the virtual unknown, let's take a moment to ask: is the Metaverse truly the futuristic utopia Zuckerberg envisions, or is it just a shiny new toy for tech giants and a breeding ground for privacy nightmares?
                                        </div>
                                        <div className="paragraph" topic-id="potential" ref={ref}>
                                            Let's be honest, the Metaverse is still in its awkward teenage phase. It's full of bugs, glitches, and enough awkward interactions to make even the most confident social butterfly blush. Imagine attending a virtual business meeting where your avatar accidentally does the robot instead of shaking hands. Cringeworthy? Absolutely. <br /><br />But here's the thing: the Metaverse has potential. We're talking about revolutionizing the way we work, socialize, and even learn. Want to collaborate with colleagues worldwide without leaving your living room? Boom, the Metaverse has you covered. Want to attend a virtual concert with your favorite band, even if they're performing on the moon? No problem, Metaverse to the rescue!
                                        </div>
                                        <div className="paragraph" topic-id="problem" ref={ref1}>
                                            But with great potential comes great responsibility. We need to be wary of the potential pitfalls of the Metaverse: privacy concerns, addiction, and the ever-present threat of Zuckerberg becoming our virtual overlord. Let's face it, the last thing we need is another platform for him to collect our data and feed our insatiable need for virtual validation.
                                        </div>
                                        <div className="paragraph" topic-id="conclusion" ref={ref2}>
                                            So, is the Metaverse the future? Only time will tell. But one thing's for sure: it's going to be one wild ride. And guess what? We (wink, wink) can help you navigate this digital frontier.
                                            <br /><br />** We can build you a website that's not only Metaverse-ready but also visually stunning, ridiculously functional, and guaranteed to make you the envy of your virtual neighbors. <br /> <br />So, ditch the FOMO and join the Meta-revolution! Contact us today and let's build your digital footprint in the virtual world before it's too late. And who knows, maybe you'll even become the next virtual influencer, leaving Mark Zuckerberg green with envy. Just remember, we're here to help you navigate the Metaverse, not become its next victim.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
                {/* ======== Footer ========= */}
                {/* <BlogPostFooter /> */}
                </>
            ) : (
                <Response />
            )}
        </div>
    )
};

export default BlogPost2;