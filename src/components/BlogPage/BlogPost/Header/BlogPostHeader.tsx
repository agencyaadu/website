import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Logohover from "../../../../assets/icons/Logohover.svg";
import Moon from "../../../../assets/icons/moon.svg";


const BlogPostHeader: React.FC = () => {
    const [isActive, setIsActive] = useState("Blog");

    // ====== Dark Mode =======
    const [theme, setTheme] = useState("light-theme");
    const toggleTheme = () => {
        if (theme === "dark-theme") {
        setTheme("light-theme");
        } else {
        setTheme("dark-theme");
        }
    }
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);
    return (
        <>
            <motion.div
                className="header-wrapper header-blog"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 1, duration: 2 } }}
            >
            <div className="logo">
                <Link to="/">
                    <img className="logo1" src={Logohover} alt="" />
                </Link>
            </div>
            <div className="navbar-content">
                <div
                    onClick={() => setIsActive("Blog")}
                    className={`nav ${isActive === "Blog" ? "active" : ""}`}
                >
                    <Link to="/blog">
                    <p>BLOG</p>
                    </Link>
                </div>
                    <img src={Moon} className="moon-nav" alt="" onClick={() => toggleTheme()} />
            </div>
            </motion.div>
        </>
    )
}

export default BlogPostHeader;