// Blog Post - 16 "The future of work"

import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { useMediaQuery } from 'usehooks-ts';
import { useInView } from 'react-intersection-observer';

import BlogPostHeader from './Header/BlogPostHeader';
import BlogPostFooter from './Footer/BlogPostFooter';
import './Style/BlogPost.scss';
import Cursor from '../../Cursor';
      

const BlogPost16 = () => {

    // =========== Title ===========
    document.title = "The future of work - agencyAadu";

    const isMobile = useMediaQuery("(max-width:430px)");

    // // =========== List of Topics ========
    // const topics: Topic [] = [
    //   {
    //       id: 'introduction',
    //       name: 'Introduction',
    //   },
    //   {
    //       id: 'imagine-this',
    //       name: 'Imagine This',
    //   },
    //   {
    //       id: 'but-wait-theres-more',
    //       name: 'But wait, there's more!',
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
        inView1 ? "But wait, there's more!" :
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
                    <h1>The future of work</h1>
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
                                    <strong>The future of work: how technology is changing the game</strong><br /><br />
                                    
                                    &nbsp; &nbsp; &nbsp; &nbsp;
                                    Buckle up, buttercup, because the future of work is a thrilling tech-powered rollercoaster! Robots, AI, and virtual reality are shaking the foundation of everything we thought we knew about jobs. But fear not, my fellow humans, because this revolution isn't here to steal your lunch money, it's here to transform your experience.<br /><br />
                                </div>
                                <div className="paragraph" topic-id="imagine-this" ref={ref}>
                                    <ul>
                                        <li><strong>Robot co-workers:</strong>&nbsp;Forget Frankenstein's monster, think friendly R2-D2s zipping around, taking care of the mundane tasks, freeing you up for the brain-bending, creativity-exploding stuff.</li><br />
                                        <li><strong>Virtual reality meetings:</strong>&nbsp;Ditch the stuffy conference rooms and teleport to a tropical beach for brainstorming sessions. Just don't forget to mute the parrot that keeps trying to steal your virtual stapler.</li><br />
                                        <li><strong>Brain-computer interfaces:</strong>&nbsp;No more fumbling with keyboards! Think a thought, write an email. Boom! Productivity skyrockets (although, the potential for accidental office-wide telepathic singing is a bit concerning).</li><br />
                                    </ul>
                                </div>
                                <div className="paragraph" topic-id="but-wait-theres-more" ref={ref1}>
                                    <ul>
                                        <li><strong>AI-powered learning:</strong>&nbsp;Forget cramming for exams, just download knowledge directly into your brain (cue the Matrix music).</li><br />
                                        <li><strong>Hyper-personalized workspaces:</strong>&nbsp;Your office adapts to your mood, temperature, and even your favorite Spotify playlist. Adios, Monday blues!</li><br />
                                        <li><strong>Universal basic income:</strong>&nbsp;With robots doing most of the grunt work, who needs a traditional job? This could free up millions to pursue their passions, unleashing a wave of creativity and innovation.</li><br />
                                    </ul>
                                </div>
                                <div className="paragraph" topic-id="conclusion" ref={ref2}>
                                    &nbsp; &nbsp; &nbsp; &nbsp;
                                    Of course, it's not all sunshine and robot high-fives. There are challenges to overcome, like the widening skills gap and the ethical considerations of AI. But here's the good news: we have the brains, the tech, and the collective human spirit to navigate this brave new world.<br /><br />
                                    So, embrace the change! Upskill, reskill, and get ready to ride the tech wave.** Here are some ways to prepare for the future of work: <br /><br />
                                    <ul>
                                        <li><strong>Focus on transferable skills:</strong>&nbsp;Learn to learn, be adaptable, and cultivate critical thinking and problem-solving abilities. These skills will be valuable in any job, no matter how much technology changes.</li><br />
                                        <li><strong>Embrace lifelong learning:</strong>&nbsp;The days of one-and-done education are over. Stay curious, explore new fields, and keep your knowledge bank up-to-date.</li><br />
                                        <li><strong>Get comfortable with technology:</strong>&nbsp;Don't be afraid of robots and AI. Learn how to use them to your advantage, and they can become your powerful allies in the workplace.</li><br />
                                        <li><strong>Develop your network:</strong>&nbsp;Build relationships with people in your field, both online and offline. This network will be invaluable for finding new opportunities and staying ahead of the curve.</li><br />
                                    </ul>
                                    &nbsp; &nbsp; &nbsp; &nbsp;
                                    Remember, the future of work is what we make it. So, let's make it a future where technology empowers us, not replaces us. Let's work together to create a world where everyone has the opportunity to thrive, with or without a stapler-stealing parrot in their virtual meeting.<br /><br />
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

export default BlogPost16;