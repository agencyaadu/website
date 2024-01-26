// Blog Post - 9 "Buttercup: The Future of Work"

import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { useMediaQuery } from 'usehooks-ts';
import { useInView } from 'react-intersection-observer';

import BlogPostHeader from './Header/BlogPostHeader';
import BlogPostFooter from './Footer/BlogPostFooter';
import './Style/BlogPost.scss';
import Cursor from '../../Cursor';
      

const BlogPost9 = () => {

    // =========== Title ===========
    document.title = "Buttercup: The Future of Work - agencyAadu";

    const isMobile = useMediaQuery("(max-width:430px)");

    // // =========== List of Topics ========
    // const topics: Topic [] = [
    //   {
    //       id: 'introduction',
    //       name: 'Introduction',
    //   },
    //   {
    //       id: 'imagine-this',
    //       name: 'Imagine this',
    //   },
    //   {
    //       id: 'But-wait-theres-more',
    //       name: 'But wait, there's more!',
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
        inView1 ? 'But wait, there is more!' :
        inView ? 'Imagine This' :
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
                    <h1>Buttercup: The Future of Work</h1>
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
                                    <strong>Buttercup: The Future of Work is a Tech-Powered Rollercoaster!</strong><br /><br />
                                    
                                    &nbsp; &nbsp; &nbsp; &nbsp;
                                    Hold onto your hard hats, folks, because the future of work is about to take us on a wild ride! Buckle up, because technology is in the driver's seat, and it's not pulling any punches. <br /><br />
                                    
                                    &nbsp; &nbsp; &nbsp; &nbsp;
                                    Gone are the days of cubicles and water cooler gossip. The office of the future is a kaleidoscope of remote workers, AI-powered assistants, and robots that can probably make better coffee than you (sorry, Brenda). But fear not, fellow humans! This tech revolution isn't here to steal your jobs, it's here to transform them.<br /><br />

                                </div>
                                <div className="paragraph" topic-id="imagine-this" ref={ref}>
                                    <ul>
                                        <li><strong>Robot co-workers:</strong> Forget the Terminator, think friendly R2-D2s zipping around, taking care of the mundane tasks, freeing you up for the brain-bending, creativity-exploding stuff.</li>
                                        <li><strong>Virtual reality meetings:</strong> Ditch the stuffy conference rooms and teleport to a tropical beach for brainstorming sessions. Just don't forget to mute the parrot that keeps trying to steal your virtual stapler.</li>
                                        <li><strong>Brain-computer interfaces:</strong> No more fumbling with keyboards! Think a thought, write an email. Boom! Productivity skyrockets (although, the potential for accidental office-wide telepathic singing is a bit concerning).</li>
                                    </ul>
                                </div>
                                <div className="paragraph" topic-id="But-wait-theres-more" ref={ref1}>
                                    <ul>
                                        <li><strong>AI-Powered Learning:</strong> Forget cramming for exams, just download knowledge directly into your brain (cue the Matrix music).</li>
                                        <li><strong>Hyper-Personalised Workspaces:</strong>  Your office adapts to your mood, temperature, and even your favorite Spotify playlist. Adios, Monday blues!</li>
                                        <li><strong>Universal basic income:</strong> With robots doing most of the grunt work, who needs a traditional job? This could free up millions to pursue their passions, unleashing a wave of creativity and innovation.</li>
                                    </ul>
                                </div>
                                <div className="paragraph" topic-id="Conclusion" ref={ref2}>
                                    &nbsp; &nbsp; &nbsp; &nbsp;
                                    Of course, it's not all sunshine and robot high-fives. There are challenges to overcome, like the widening skills gap and the ethical considerations of AI. But here's the good news: we have the brains, the tech, and the collective human spirit to navigate this brave new world.<br /><br />
                                    &nbsp; &nbsp; &nbsp; &nbsp;
                                    So, embrace the change, my friends! Upskill, reskill, and get ready to ride the tech wave. The future of work is a thrilling adventure, and we're all in this together. Just remember, when the robot uprising comes (it's probably coming), try to be on the good side. They might need someone to make the coffee after all.<br /><br />
                                    &nbsp; &nbsp; &nbsp; &nbsp;
                                    Now, go forth and conquer, you magnificent tech-powered humans! And hey, if you see a robot stealing my stapler, let me know.<br />
                                    &nbsp; &nbsp; &nbsp; &nbsp;
                                    Don't forget to share your thoughts on the future of work in the comments below! Let's get this conversation rolling!<br />
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

export default BlogPost9;