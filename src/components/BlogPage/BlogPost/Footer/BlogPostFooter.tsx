import React from 'react';
import back from "../../../../assets/images/backblog.png";
import "../Style/BlogPost.scss";

const BlogPostFooter:React.FC = () => {

    // ======= REDIRECT TO Top(0, 0) ======
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }
  return (
    <>
        <div className='backToBlog-wrapper'>
            <a href="/blog" onClick={scrollToTop}>
                <div className="rectangle">
                    <div className="text">
                        <div className="main-text">
                            <span>BACKSPACE</span>
                        </div>
                        <div className="back-text">
                            <span>To go back</span>
                        </div>
                    </div>
                    <div className="icon">
                        <img src={back} alt="" />
                    </div>
                </div>
            </a>
        </div>
    </>
  )
}

export default BlogPostFooter;