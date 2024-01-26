// Blog Post - 15 "Apps for the Modern Entrepreneur"

import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { useMediaQuery } from 'usehooks-ts';
import { useInView } from 'react-intersection-observer';

import BlogPostHeader from './Header/BlogPostHeader';
import BlogPostFooter from './Footer/BlogPostFooter';
import './Style/BlogPost.scss';
import Cursor from '../../Cursor';
      

const BlogPost15 = () => {

    // =========== Title ===========
    document.title = "Apps for the Modern Entrepreneur - agencyAadu";

    const isMobile = useMediaQuery("(max-width:430px)");

    // // =========== List of Topics ========
    // const topics: Topic [] = [
    //   {
    //       id: 'introduction',
    //       name: 'Introduction',
    //   },
    //   {
    //       id: 'productivity-powerhouses',
    //       name: 'Productivity Powerhouses',
    //   },
    //   {
    //       id: 'financial-finesse',
    //       name: 'Financial Finesse',
    //   },
    //   {
    //       id: 'marketing-mavens',
    //       name: 'Marketing Mavens',
    //   },
    //   {
    //       id: 'focus-and-flow',
    //       name: 'Focus and Flow',
    //   },
    //   {
    //       id: 'bonus-tools',
    //       name: 'Bonus Tools',
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
    const [ref3, inView3] = useInView(
        {
            threshold: 1,
            delay: 100,
        }
    );
    const [ref4, inView4] = useInView(
        {
            threshold: 1,
            delay: 100,
        }
    );
    const [ref5, inView5] = useInView(
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
        ( inView5 ? 'Conclusion' :
        inView4 ? 'Bonus Tools' :
        inView3 ? 'Focus and Flow' :
        inView2 ? 'Marketing Mavens' :
        inView1 ? 'Financial Finesse' :
        inView ? 'Productivity Powerhouses' :
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
                    <h1>Apps for the Modern Entrepreneur</h1>
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
                                    <strong>Must-Have Apps for the Modern Entrepreneur: Power Up Your Day</strong><br /><br />
                                    
                                    &nbsp; &nbsp; &nbsp; &nbsp;
                                    In the hustle and bustle of entrepreneurship, every minute counts. That's why having the right apps in your arsenal can be a game-changer, streamlining tasks, boosting productivity, and keeping you connected wherever you roam. So, ditch the scattered spreadsheets and overflowing inboxes, and check out these must-have apps for the modern entrepreneur:<br /><br />
                                </div>
                                <div className="paragraph" topic-id="productivity-powerhouses" ref={ref}>
                                    <ul>
                                        <li><strong>Todoist:</strong>&nbsp;Manage your to-do list with laser focus, prioritizing tasks, setting deadlines, and collaborating with your team.</li><br />
                                        <li><strong>Evernote:</strong>&nbsp;Capture fleeting ideas, organize notes and research, and access them across all your devices, keeping your brain clutter-free.</li><br />
                                        <li><strong>Trello:</strong>&nbsp;Visualize your workflows with intuitive boards and cards, collaborating with your team on projects in real-time.</li><br />
                                        <li><strong>Slack:</strong>&nbsp;Stay connected with your team through instant messaging, video calls, and file sharing, all in one unified platform.</li><br />
                                    </ul>
                                </div>
                                <div className="paragraph" topic-id="financial-finesse" ref={ref1}>
                                    <ul>
                                        <li><strong>Mint:</strong>&nbsp;Track your income and expenses with ease, set budgets, and get automated insights to keep your finances on track.</li><br />
                                        <li><strong>Xero:</strong>&nbsp;Simplify accounting with this intuitive platform, generating invoices, sending reminders, and tracking your financial health.</li><br />
                                        <li><strong>Paypal:</strong>&nbsp;Accept payments easily from anywhere, send invoices, and manage your financial transactions, even across borders.</li><br />
                                    </ul>
                                </div>
                                <div className="paragraph" topic-id="marketing-mavens" ref={ref2}>
                                    <ul>
                                        <li><strong>Canva:</strong>&nbsp;Create stunning social media graphics, presentations, and marketing materials without graphic design skills.</li><br />
                                        <li><strong>Hostsuite:</strong>&nbsp;Schedule and publish social media posts across multiple platforms, track engagement, and manage your online presence effortlessly.</li><br />
                                        <li><strong>Mailchimp:</strong>&nbsp;Design and send email newsletters to your audience, manage subscriber lists, and track campaign performance.</li><br />
                                    </ul>
                                </div>
                                <div className="paragraph" topic-id="Focus and Flow" ref={ref3}>
                                    <ul>
                                        <li><strong>Headspace:</strong>&nbsp;Take a mini-meditation break whenever you need it, reducing stress and improving focus throughout your day.</li><br />
                                        <li><strong>Forest:</strong>&nbsp;Stay away from distractions by planting virtual trees that grow as you resist the urge to check your phone.</li><br />
                                        <li><strong>Focus Keeper:</strong>&nbsp;Utilize the Pomodoro Technique for concentrated work sessions, maximizing your productivity and minimizing procrastination.</li><br />
                                    </ul>
                                </div>
                                <div className="paragraph" topic-id="bonus-tools" ref={ref4}>
                                    <ul>
                                        <li><strong>Dropbox:</strong>&nbsp;Take a mini-meditation break whenever you need it, reducing stress and improving focus throughout your day.</li><br />
                                        <li><strong>Grammarly:</strong>&nbsp;Polish your writing with real-time grammar and spelling checks, ensuring professional communication.</li><br />
                                        <li><strong>Calendly:</strong>&nbsp;Schedule meetings and appointments seamlessly, eliminating back-and-forth emails and saving precious time</li><br />
                                    </ul>
                                </div>
                                <div className="paragraph" topic-id="conclusion" ref={ref5}>
                                    &nbsp; &nbsp; &nbsp; &nbsp;
                                    Remember, the best apps are the ones you actually use. Experiment, find what works for you, and build your own customized tech toolbox to empower your entrepreneurial journey. And hey, if you discover a game-changing app we missed, shout it out in the comments!<br /><br />
                                    So, go forth, fellow entrepreneurs, and conquer your day, one app at a time!
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

export default BlogPost15;