// BlogList 5 : "INTERN OF AGENCY AADU"

import {AiOutlineUser} from "react-icons/ai";
import {LiaTagSolid} from "react-icons/lia";
import "../Blog.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Post5() {
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
           <Link to='/blog/intern-of-agency-aadu' onClick={scrollToTop} className="link">
                <div className="title">
                <h3>Intern of Agency Aadu</h3>
                </div>
            </Link>
            <p className="summary">As a content developer at AADU, my days are filled with pouring over client briefs, brainstorming ideas, and using my incredible writing skills to craft engaging and effective content. And let me tell you, it’s not an easy job. Content writing requires a unique blend of creativity, research, and a touch of insanity. Okay, maybe more than just a touch, especially when it’s a Monday morning and you have a deadline looming over your head. But hey, that’s what caffeine is for, am I right?</p>
            <div className="info">
            <p className="author"><AiOutlineUser className="info-icon"/>  Prashant Rawat</p>
            <p><LiaTagSolid className="info-icon"/>  Work</p>
            </div>
        </motion.div>
      </>
    )
};