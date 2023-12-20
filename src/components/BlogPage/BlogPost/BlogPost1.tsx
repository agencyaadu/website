// Blog Post - 1 "Unlock Creative Potential"

import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { useMediaQuery } from 'usehooks-ts';
import { useInView } from 'react-intersection-observer';

import Response from '../../Response';
import BlogPostHeader from './Header/BlogPostHeader';
// import BlogPostFooter from './Footer/BlogPostFooter';
import './Style/BlogPost.scss';


const BlogPost1: React.FC = () => {

    // =========== Media Query ===========
    const isTab = useMediaQuery("(max-width:768px)");


    // // =========== List of Topics ========
    // const topics: Topic [] = [
    //   {
    //       id: 'introduction',
    //       name: 'Introduction',
    //   },
    //   {
    //       id: 'power-of-portfolio',
    //       name: 'Power of Portfolio',
    //   },
    //   {
    //       id: 'inspiring-portfolios',
    //       name: 'Inspiring Portfolios',
    //   },
    //   {
    //       id: 'visual-storytelling',
    //       name: 'Visual Storytelling',
    //   },
    //   {
    //       id: 'user-experience',
    //       name: 'Navigating User Experience',
    //   },
    //   {
    //       id: 'power-of-personal-brand',
    //       name: 'Power of Personal Brand',
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
            threshold: 0.7,
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

    const maxScrollPosition = 410;
    const isOverflowVisible = scrollPosition >= maxScrollPosition;


    // Topic Name
    const topicName = mainInView ? 
        (inView5 ? 'Conclusion' :
        inView4 ? 'Power of Personal Brand' :
        inView3 ? 'Navigating User Experience' :
        inView2 ? 'Visual Storytelling' :
        inView1 ? 'Inspiring Portfolios' :
        inView ? 'Power of Portfolio' :
        inView0 ? 'Introduction' : '') : '';



      return (
          <div>
            {!isTab ? (
                <>
                <div className="BlogPost-wrapper">
                    {/* ======= Nav Bar ========= */}
                    <BlogPostHeader />

                    {/* ===== BLOG PAGE ===== */}
                    <motion.div
                        className='BlogPostContent'
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0, transition: { delay: 1, duration: 2 } }}
                        >
                        <div className="title">
                            <h2>Unlock Creative Potential</h2>
                        </div>
                        {/* === From where the static page starts === */}
                        <div className="static-page">
                            <div className="topic">
                                <div className="topic-name">
                                    {topicName}
                                </div>
                            </div>
                            <div className='scrolled-content' ref={mainRef}>
                                <div className='content'>
                                    <div className='paragraphs' style={{overflowY: isOverflowVisible ? 'auto' : 'hidden'}}>
                                        <div className="paragraph" topic-id='introduction' ref={ref0}>
                                            A Journey Through Inspiring Portfolios. I am thrilled to take you on a journey to explore the captivating world of portfolio websites. As an enthusiast of all things creative, I believe that showcasing one's work is an important aspect of every artist, designer, writer, or professional's career. Along the way, I'll also seize the opportunity to subtly market my own portfolio website, providing you with a glimpse of what awaits. <br />
                                            In this digital age, a well-designed and carefully curated portfolio can leave a lasting impact on potential clients, employers, or collaborators. With countless platforms available, it becomes essential to highlight your unique talents, skills, and achievements through an engaging website. Building my own portfolio has been an enriching journey, and I'd love to share the insights I've gathered.
                                        </div>
                                        <div className="paragraph" topic-id="power-of-portfolio" ref={ref}>
                                            To spark your creativity and offer guidance for building your own portfolio, I've curated a collection of outstanding examples from various fields. From stunning photography to elegant web design, each portfolio demonstrates the power of clear branding, thoughtful organization, and striking visuals that captivate the viewer's attention. <br />
                                            A successful portfolio uses visuals to convey a narrative that resonates with the audience. Emphasizing the power of visual storytelling, I will discuss the importance of selecting high-quality images, organizing them effectively, and showcasing your work in a way that creates an immersive experience for potential clients. Through my own portfolio website (www.aadu.agency), I've embraced this approach, allowing me to connect with like-minded individuals and cultivate meaningful collaborations.
                                        </div>
                                        <div className="paragraph" topic-id="inspiring-portfolios" ref={ref1}>
                                            To spark your creativity and offer guidance for building your own portfolio, I've curated a collection of outstanding examples from various fields. From stunning photography to elegant web design, each portfolio demonstrates the power of clear branding, thoughtful organization, and striking visuals that captivate the viewer's attention.
                                        </div>
                                        <div className="paragraph" topic-id="visual-storytelling" ref={ref2} >
                                            A successful portfolio uses visuals to convey a narrative that resonates with the audience. Emphasizing the power of visual storytelling, I will discuss the importance of selecting high-quality images, organizing them effectively, and showcasing your work in a way that creates an immersive experience for potential clients. Through my own portfolio website (www.aadu.agency), I've embraced this approach, allowing me to connect with like-minded individuals and cultivate meaningful collaborations.
                                        </div>
                                        <div className="paragraph" topic-id="user-experience" ref={ref3} >
                                            A user-friendly and intuitive interface is key to ensuring that visitors can seamlessly navigate through your portfolio. By exploring the journeys of other professionals, I will delve into the significance of designing a website that provides easy access to information, emphasizes your best work, and encourages visitors to engage and connect with you.
                                        </div>
                                        <div className="paragraph" topic-id="power-of-personal-brand" ref={ref4} >
                                            Beyond your work, your portfolio website also serves as a gateway to your personal brand. I will delve into the importance of incorporating your unique personality, values, and style. Balancing professionalism with authenticity, through my own portfolio, I have been able to connect with clients who resonate with my vision, creating partnerships that go beyond mere transactions.
                                        </div>
                                        <div className="paragraph" topic-id="conclusion" ref={ref5} >
                                            Creating a captivating and influential portfolio website is not only a showcase of your talent, but also a gateway to unleashing your creative potential. By thoughtfully curating examples from various disciplines and subtly marketing my own portfolio website, I hope to inspire and empower you to embark on your own journey towards a unique and impactful digital presence. Remember, your portfolio is a testament to your creative prowess; seize this chance to unlock new professional opportunities. <br /><br />Feel free to explore my own portfolio website at www.aadu.agency and let's connect to further discuss your vision and goals.
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

export default BlogPost1;