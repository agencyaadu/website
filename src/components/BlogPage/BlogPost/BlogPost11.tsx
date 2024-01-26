// Blog Post - 11 "Hidden Benefits of Learning a New Language"

import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { useMediaQuery } from 'usehooks-ts';
import { useInView } from 'react-intersection-observer';

import BlogPostHeader from './Header/BlogPostHeader';
import BlogPostFooter from './Footer/BlogPostFooter';
import './Style/BlogPost.scss';
import Cursor from '../../Cursor';
      

const BlogPost11 = () => {

    // =========== Title ===========
    document.title = "Hidden Benefits of Learning a New Language - agencyAadu";

    const isMobile = useMediaQuery("(max-width:430px)");

    // // =========== List of Topics ========
    // const topics: Topic [] = [
    //   {
    //       id: 'introduction',
    //       name: 'Introduction',
    //   },
    //   {
    //       id: 'benefits',
    //       name: 'Benefits',
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
        ( inView1 ? 'Conclusion' :
        inView ? 'Benefits' :
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
                    <h1>Hidden Benefits of Learning a New Language</h1>
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
                                    <strong>The Hidden Benefits of Learning a New Language: Beyond Bonjour and Hola</strong><br /><br />
                                    
                                    &nbsp; &nbsp; &nbsp; &nbsp;
                                    Learning a new language is often seen as a way to communicate with more people and travel more easily. But there are many hidden benefits to learning a new language that go beyond the practical. In this blog post, we will explore some of these hidden benefits.<br /><br />
                                </div>
                                <div className="paragraph" topic-id="benefits" ref={ref}>
                                    <ul>
                                        <li><strong>Improved cognitive function</strong><br /> Every mango from Mexico, every diamond from Dubai, tracked seamlessly from farm to finger, eliminating counterfeits and shady middlemen. Think avocado toast with guaranteed ethical sourcing!</li><br />
                                        <li><strong>Increased empathy and cultural understanding</strong><br /> When you learn a new language, you also learn about the culture of the people who speak that language. This can help you to develop a greater appreciation for different cultures and to see the world from a different perspective. Learning a new language can also help you to develop empathy for people from different cultures.</li><br />
                                        <li><strong>Reduced risk of dementia</strong><br /> Some studies have shown that learning a new language can help to reduce the risk of dementia. This is because it helps to keep your brain active and engaged.</li><br />
                                        <li><strong>Improved job prospects</strong><br /> Being able to speak more than one language can give you a competitive edge in the job market. Many employers are looking for employees who can speak multiple languages.</li><br />
                                        <li><strong>Increased confidence</strong><br /> Learning a new language can be a challenging but rewarding experience. When you successfully learn a new language, it can give you a great sense of accomplishment. This can boost your confidence and self-esteem.</li><br />
                                        <li><strong>New friendships and connections</strong><br /> Learning a new language can help you to meet new people and make new friends. You can connect with people from all over the world who share your interest in learning languages.</li><br />
                                        <li><strong>Enhanced creativity</strong><br /> Learning a new language can help you to think more creatively. This is because it forces you to think in new ways and to come up with new solutions to problems.</li><br />
                                        <li><strong>A richer travel experience</strong><br /> When you can speak the language of the country you are visiting, you will have a much richer travel experience. You will be able to communicate with the locals, learn about their culture, and experience the country in a way that is not possible if you cannot speak the language.</li><br />
                                        <li><strong>A new way to express yourself</strong><br /> Learning a new language can give you a new way to express yourself. You will be able to learn new words and phrases that you can use to express yourself in ways that you were not able to before.</li><br />
                                        <li><strong>A lifelong challenge</strong><br /> Learning a new language is a lifelong challenge. It is something that you can always be working on and improving. This can be a great way to keep your mind active and engaged throughout your life.</li><br />
                                    </ul>
                                </div>
                                <div className="paragraph" topic-id="Conclusion" ref={ref1}>
                                    &nbsp; &nbsp; &nbsp; &nbsp;
                                    In conclusion, there are many hidden benefits to learning a new language. These benefits go beyond the practical and can have a positive impact on your cognitive function, your cultural understanding, your job prospects, your confidence, your creativity, and your travel experiences. If you are thinking about learning a new language, I encourage you to go for it! You will not be disappointed.<br /><br />

                                    I hope this blog post has given you some food for thought. If you have any questions, please feel free to leave a comment below<br />
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

export default BlogPost11;