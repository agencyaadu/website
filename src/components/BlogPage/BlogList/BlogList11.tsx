// BlogList 11 : "Hidden Benefits of Learning a New Language"

import {AiOutlineUser} from "react-icons/ai";
import {LiaTagSolid} from "react-icons/lia";
import "../Blog.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Post11() {
    // ============================ REDIRECT TO Top(0, 0) ============================
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }
    return (
        <>
        <motion.div
        className="post"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 1, duration: 2 } }}
        >
           <Link to='/blog/hidden-benefits-of-learning-a-new-language' onClick={scrollToTop} className="link">
                <div className="title">
                <h3>Hidden Benefits of Learning a New Language</h3>
                </div>
            </Link>
            <p className="summary">Learning a new language is often seen as a way to communicate with more people and travel more easily. But there are many hidden benefits to learning a new language that go beyond the practical. In this blog post, we will explore some of these hidden benefits. When you learn a new language, you also learn about the culture of the people who speak that language. This can help you to develop a greater appreciation for different cultures and to see the world from a different perspective.</p>
            <div className="info">
            <p className="author"><AiOutlineUser className="info-icon"/>  Prashant Rawat</p>
            <p><LiaTagSolid className="info-icon"/>  Skills</p>
            </div>
        </motion.div>
      </>
    )
};