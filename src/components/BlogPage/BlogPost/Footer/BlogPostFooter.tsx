import React from 'react';
import { Link } from "react-router-dom";
import Goat from "../../../../assets/icons/goattracks.svg";
import "../Style/BlogPost.scss";

const BlogPostFooter:React.FC = () => {
    // ======= REDIRECT TO Top(0, 0) ======
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }
  return (
    <>
        <div className='backToBlog-wrapper'>
            <p><span>CLICK</span> THE BUTTON BELOW TO  HEAD BACK</p>
            <Link to='/blog' onClick={scrollToTop} className='link'>
                <div className="button-to-blog">
                    <img className="goat-icon" src={Goat} alt="back to blog section" />
                </div>
            </Link>
        </div>
    </>
  )
}

export default BlogPostFooter;