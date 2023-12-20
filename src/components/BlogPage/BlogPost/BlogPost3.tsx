// Blog Post - 2 "Navigating the Cloud"

import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { useMediaQuery } from 'usehooks-ts';
import { useInView } from 'react-intersection-observer';

import Response from '../../Response';
import BlogPostHeader from './Header/BlogPostHeader';
// import BlogPostFooter from './Footer/BlogPostFooter';
import './Style/BlogPost.scss';
      

const BlogPost3 = () => {
    const isTab = useMediaQuery("(max-width:768px)");

    // // =========== List of Topics ========
    // const topics: Topic [] = [
    //   {
    //       id: 'introduction',
    //       name: 'Introduction',
    //   },
    //   {
    //       id: 'cloud-security',
    //       name: 'Cloud Security',
    //   },
    //   {
    //       id: 'choose-us?',
    //       name: 'Choose Us?',
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
            threshold: 0.7,
            delay: 100,
        }
    );
    const [ref, inView] = useInView(
        {
            threshold: 0.8,
            delay: 100,
        }
    );
    const [ref1, inView1] = useInView(
        {
            threshold: 0.6,
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
        inView1 ? 'Choose Us?' :
        inView ? 'Cloud Security' :
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
                            <h2>Navigating the Cloud</h2>
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
                                            A Hilarious Journey into Cloud Security Networks. <br /><br />Welcome, cloud enthusiasts, tech aficionados, and anyone who's ever wondered if the cloud is just a mythical place where data goes to relax and take a break. Today, we're diving into the nebulous world of Cloud Security Networks, and guess what? We're not just talking about it—we're making it as engaging as a comedy show! Buckle up for a hilarious journey through the clouds! <br /><br />So, you've heard about the cloud. It's not the cotton candy-filled haven we imagined as kids, but it's equally fascinating. Imagine your data floating around in the digital stratosphere, mingling with other bits and bytes, and occasionally catching a virtual tan. Sounds like a party, right?
                                        </div>
                                        <div className="paragraph" topic-id="cloud-security" ref={ref}>
                                            Now, let's talk security. Every party needs a bouncer, even the ones happening in the digital cloud. Enter Cloud Security Networks—the ultimate guardians of your precious data. They're like the digital superheroes, protecting your information from cyber villains, data breaches, and other virtual mischiefs. <br /><br />Picture this: Cloud Security Networks are the cyber bouncers at the virtual nightclub. They stand at the digital entrance, scrutinizing every bit and byte that wants to join the party. "Hey, you with the suspicious code, step aside!" It's a wild world up there, but our digital bouncers are not here to mess around. <br /><br />In the cloud, security is not just about stern faces and serious codes. It's a dance—an intricate ballet of firewalls pirouetting gracefully and encryption algorithms cha-cha-ing to the rhythm of data protection. Who knew security could be so entertaining?
                                        </div>
                                        <div className="paragraph" topic-id="choose-us" ref={ref1}>
                                            Now, here's the punchline: at www.aadu.agency, we're not just cloud enthusiasts; we're your digital comedy club for all things tech. Our team of expert performers—uh, we mean developers—knows how to make the serious business of Cloud Security Networks sound like a stand-up routine. <br /><br />1.  <strong>Laughs Guaranteed:</strong> Because who said tech discussions have to be boring? We inject humor into every line of code and every layer of security. <br /><br />2. <strong>Cloud Security Wizards:</strong> Our team knows their way around the digital dance floor. From firewalls doing the moonwalk to encryption algorithms doing the floss, we've got it all covered. <br /><br />3. <strong>Your Data's Best Friend:</strong> We take Cloud Security seriously, so you can relax and enjoy the virtual party without worrying about gatecrashers.
                                        </div>
                                        <div className="paragraph" topic-id="conclusion" ref={ref2}>
                                        If you're ready to turn the serious business of Cloud Security into a comedy show, www.aadu.agency is your ticket to the front row. We make the digital dance of firewalls and encryption a side-splitting spectacle. Connect with us today, and let's make your Cloud Security journey as entertaining as a night out at the virtual comedy club! <br /><br />Remember, in the world of clouds, laughter is the best security policy. Visit wwww.aadu.agency now, and let's turn your digital security into a comedy masterpiece!
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

export default BlogPost3;