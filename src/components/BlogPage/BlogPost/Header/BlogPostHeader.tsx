import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Logohover from "../../../../assets/icons/Logohover.svg";


const BlogPostHeader: React.FC = () => {
    const [isActive, setIsActive] = useState("Blog");

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    return (
        <>
            <motion.div
                className="header-wrapper header-blog"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 1, duration: 2 } }}
            >
            <div className="logo" onClick={scrollToTop}>
                <Link to="/">
                    <img className="logo1" src={Logohover} alt="" />
                </Link>
            </div>
            <div className="navbar-content blogNavbar-content">
                <div
                    onClick={() => setIsActive("Blog")}
                    className={`nav ${isActive === "Blog" ? "active" : ""}`}
                >
                    <Link to="/blog" onClick={scrollToTop}>
                    <p>BLOG</p>
                    </Link>
                </div>
            </div>
            </motion.div>
        </>
    )
}

export default BlogPostHeader;