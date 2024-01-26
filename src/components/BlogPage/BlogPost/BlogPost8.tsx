// Blog Post - 8 "Cybersecurity in 2024"

import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { useMediaQuery } from 'usehooks-ts';
import { useInView } from 'react-intersection-observer';

import BlogPostHeader from './Header/BlogPostHeader';
import BlogPostFooter from './Footer/BlogPostFooter';
import './Style/BlogPost.scss';
import Cursor from '../../Cursor';
      

const BlogPost8 = () => {

    // =========== Title ===========
    document.title = "Cybersecurity in 2024 - agencyAadu";

    const isMobile = useMediaQuery("(max-width:430px)");

    // // =========== List of Topics ========
    // const topics: Topic [] = [
    //   {
    //       id: 'AI-pocalypse-or-AI-liance?',
    //       name: 'AI-pocalypse or AI-liance?',
    //   },
    //   {
    //       id: 'Quantum-Conundrum:-When-Encryption-Gets-Shaky',
    //       name: 'Quantum Conundrum: When Encryption Gets Shaky',
    //   },
    //   {
    //       id: 'The-Metaverse:-Playground-or-Minefield?',
    //       name: 'The Metaverse: Playground or Minefield?',
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
            threshold: isMobile ? 0.5 : 0.7,
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
        inView1 ? 'The Metaverse: Playground' :
        inView ? 'Quantum Conundrum' :
        inView0 ? 'AI-pocalypse or AI-liance?' : '') : '';

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
                    <h1>Cybersecurity in 2024</h1>
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
                                <div className="paragraph" topic-id="AI-pocalypse-or-AI-liance?" ref={ref0}>
                                    &nbsp; &nbsp; &nbsp; &nbsp;
                                    <strong>Buckle Up, Buttercup, It's Gonna Be a Bumpy Ride!</strong><br /><br />
                                    
                                    &nbsp; &nbsp; &nbsp; &nbsp;
                                    Hold onto your hard drives, folks, because 2024 is shaping up to be a wild ride in the cybersecurity rodeo. Hackers are upping their game, slinging code like Wyatt Earp slinging lead, and our precious data is smack dab in the middle of the dusty saloon. But fear not, brave netizens! We've got the lowdown on the hottest cyber trends, and some nifty tips to keep your digital doors bolted shut.<br /><br />
                                </div>
                                <div className="paragraph" topic-id="Quantum-Conundrum:-When-Encryption-Gets-Shaky" ref={ref}>
                                    &nbsp; &nbsp; &nbsp; &nbsp;
                                    Remember that Terminator movie where robots took over? Yeah, let's not let that happen. Artificial intelligence is making waves in the cybersecurity scene, but whether it's a trusty six-shooter or a Gatling gun in the wrong hands depends on who's using it. Hackers are employing AI to craft hyper-personalized phishing attacks, automate malware deployment, and even predict your next online move. But the good guys are using AI too, building intelligent defense systems that can sniff out threats faster than a bloodhound on a steak trail. It's a technological arms race, folks, and the future of our data hangs in the balance.Remember that Terminator movie where robots took over? Yeah, let's not let that happen. Artificial intelligence is making waves in the cybersecurity scene, but whether it's a trusty six-shooter or a Gatling gun in the wrong hands depends on who's using it. Hackers are employing AI to craft hyper-personalized phishing attacks, automate malware deployment, and even predict your next online move. But the good guys are using AI too, building intelligent defense systems that can sniff out threats faster than a bloodhound on a steak trail. It's a technological arms race, folks, and the future of our data hangs in the balance.<br />
                                </div>
                                <div className="paragraph" topic-id="The-Metaverse:-Playground-or-Minefield?" ref={ref1}>
                                    &nbsp; &nbsp; &nbsp; &nbsp;
                                    Remember that feeling when you finally finished that super hard Sudoku puzzle? Imagine someone coming along and solving it in 0.2 seconds with a rusty spoon. That's kind of what quantum computers are doing to traditional encryption. These bad boys could crack the codes that keep our online lives safe, like a bank robber with a laser cutter. Don't panic just yet, though. Quantum tech is still in its infancy, and experts are scrambling to develop "quantum-proof" encryption methods. It's a race against the clock, folks, and the finish line is our digital privacy.<br />
                                </div>
                                <div className="paragraph" topic-id="Conclusion" ref={ref2}>
                                    &nbsp; &nbsp; &nbsp; &nbsp;
                                    So, how do we stay safe in this digital dustbowl?<br /><br />

                                    Fear not, intrepid web surfers! Here are some trusty steeds to help you navigate the cyber plains: <br /><br />
                                    <ul>
                                        <li>Patch it up, buttercup! Update your software regularly, from your phone to your fridge (yes, even your fridge!). Hackers love outdated systems like vultures love roadkill.</li>
                                        <li>Password power-up! Ditch the "123456"s and embrace complex, unique passwords for every account. Think of them like personalized suits of armor for your digital self.</li>
                                        <li>Phishing phantoms beware! Double-check email addresses, links, and sender info before clicking anything. If something smells fishy, it probably is.</li>
                                        <li>Backup like a boss! Regularly back up your important data, like a squirrel stockpiling nuts for winter. You never know when a cyber-blizzard might hit.</li>
                                        <li>Be a security savvy citizen! Stay informed about the latest cyber threats and educate others. Knowledge is power, and in the digital world, it's your kryptonite shield.</li>
                                    </ul> <br /><br />
                                    Remember, cybersecurity is a team effort. By being smart, vigilant, and a little bit paranoid, we can keep our data safe and sound in this ever-evolving digital landscape. So saddle up, partners, and let's ride this cyber rodeo together! And don't forget to wear your digital chaps – things are about to get buck wild.
                                    <br />
                                    Bonus Tip: Install a reputable antivirus and anti-malware software. It's like having a trusty cyber-sheriff guarding your digital town. <br />With a little caution and a lot of common sense, we can navigate the treacherous terrain of 2024 cybersecurity and emerge victorious, data intact and spirits high. Now go forth and conquer, brave netizens! Just remember, in the digital West, the only good hacker is a white hat hacker.
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

export default BlogPost8;