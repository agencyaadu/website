import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import BlogPost1 from "./components/BlogPage/BlogPost/BlogPost1";
import BlogPost2 from "./components/BlogPage/BlogPost/BlogPost2";
import BlogPost3 from "./components/BlogPage/BlogPost/BlogPost3";
import Verification from "./Pages/Verification";
import Portfolio from "./Pages/Work";
import BlogPost4 from "./components/BlogPage/BlogPost/BlogPost4";
import BlogPost5 from "./components/BlogPage/BlogPost/BlogPost5";
import BlogPost6 from "./components/BlogPage/BlogPost/BlogPost6";
import BlogPost7 from "./components/BlogPage/BlogPost/BlogPost7";


const App: React.FC = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work" element={<Portfolio />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/verification" element={<Verification />} />
      <Route path="/blog/portfolio" element={<BlogPost1 />} />
      <Route path="/blog/meta-mayhem" element={<BlogPost2 />} />
      <Route path="/blog/navigating-the-cloud" element={<BlogPost3 />} />
      <Route path="/blog/expectations-with-tech-in-2040" element={<BlogPost4 />} />
      <Route path="/blog/intern-of-agency-aadu" element={<BlogPost5 />} />
      <Route path="/blog/life-of-a-blogger" element={<BlogPost6 />} />
      <Route path="/blog/web-development" element={<BlogPost7 />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
