// Blog Post - 14 "Conquering Your Fears"

import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { useMediaQuery } from 'usehooks-ts';
import { useInView } from 'react-intersection-observer';

import BlogPostHeader from './Header/BlogPostHeader';
import BlogPostFooter from './Footer/BlogPostFooter';
import './Style/BlogPost.scss';
import Cursor from '../../Cursor';
      

const BlogPost14 = () => {

    // =========== Title ===========
    document.title = "Conquering Your Fears - agencyAadu";

    const isMobile = useMediaQuery("(max-width:430px)");

    // // =========== List of Topics ========
    // const topics: Topic [] = [
    //   {
    //       id: 'introduction',
    //       name: 'Introduction',
    //   },
    //   {
    //       id: 'strategy',
    //       name: 'Strategy',
    //   },
    //   {
    //       id: 'bonus',
    //       name: 'Bonus',
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
            threshold: 0.4,
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
            threshold: isMobile ? 0.3 : 1,
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
        inView1 ? 'Bonus' :
        inView ? 'Strategy' :
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
                    <h1>Conquering Your Fears</h1>
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
                                    <strong>Conquering Your Fears in the Digital Age: One Tiny Step to a Gigantic You</strong><br /><br />
                                    
                                    &nbsp; &nbsp; &nbsp; &nbsp;
                                    Fear. It's the little voice in your head whispering "don't" when your heart screams "do." It's the icy hand gripping your ankle just as you peek over the edge of the cliff. It's the monster under the bed, the gremlin in the machine, the reason you haven't even considered...well, everything you secretly dream of.<br /><br />
                                    &nbsp; &nbsp; &nbsp; &nbsp;
                                    But here's the thing about fear: it's a paper tiger. Roaring loud, yes, but ultimately harmless unless you let it cage you. And guess what? You hold the key.<br /><br />
                                </div>
                                <div className="paragraph" topic-id="benefits" ref={ref}>
                                    &nbsp; &nbsp; &nbsp; &nbsp;
                                    Conquering your fears isn't about becoming some fearless superhero (though, hey, if that's your vibe, rock on!). It's about taking back control, one tiny step at a time. Here's your map to becoming the bolder, braver you:<br /><br />
                                    <ul>
                                        <li><strong>Own Your Fear:</strong>&nbsp;Naming the beast is half the battle. Acknowledge your fear, understand its source, and refuse to let it define you. You're scared of public speaking? Awesome! Now let's find a supportive Toastmasters group and slay that dragon!</li><br />
                                        <li><strong>Break it Down:</strong>&nbsp;Don't jump off the cliff right away. Start with a baby step. Want to travel solo? Book a weekend trip to a nearby city. Fear writing that novel? Commit to five minutes of brainstorming every day. Small victories build confidence, chipping away at the fear mountain.</li><br />
                                        <li><strong>Reframe the Narrative:</strong>&nbsp;Fear whispers "failure." You scream back, "opportunity!" Every attempt, even a perceived "failure," is a learning experience, a stepping stone. You didn't fail that audition; you gained invaluable stage experience. See? Perspective shift magic!</li><br />
                                        <li><strong>Befriend the "What If":</strong>&nbsp;Fear loves the "what ifs," the worst-case scenarios playing on repeat. Instead, imagine the "what thens." What if you nailed that presentation? What then? The possibilities, my friend, are endless and infinitely more exciting.</li><br />
                                        <li><strong>Celebrate Every Win:</strong>&nbsp;Big or small, acknowledge your progress. Danced in front of the mirror? High five! Had a productive writing session? Treat yourself to that fancy coffee! Celebrating fuels motivation, keeping you on the path to bigness.</li><br />
                                    </ul>
                                </div>
                                <div className="paragraph" topic-id="benefits" ref={ref1}>
                                    &nbsp; &nbsp; &nbsp; &nbsp;
                                    Remember, conquering your fears is a journey, not a destination. There will be stumbles, there will be doubts, but there will also be breakthroughs and moments of pure exhilaration. So, take that first tiny step, embrace the shivers, and watch yourself become the person you were always meant to be: a magnificent, fear-defying YOU! <br /><br />
                                    Bonus Tip:  Find your tribe! Surround yourself with supportive people who believe in you and your ability to conquer. Together, you can climb any mountain, fear or otherwise.
                                </div>
                                <div className="paragraph" topic-id="Conclusion" ref={ref2}>
                                    Now go forth, brave adventurer! The world awaits your courage, and let this be your mantra: "I am not afraid. I am capable. I am unstoppable."
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

export default BlogPost14;