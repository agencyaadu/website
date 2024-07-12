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
import BlogPost8 from "./components/BlogPage/BlogPost/BlogPost8";
import BlogPost9 from "./components/BlogPage/BlogPost/BlogPost9";
import BlogPost10 from "./components/BlogPage/BlogPost/BlogPost10";
import BlogPost11 from "./components/BlogPage/BlogPost/BlogPost11";
import BlogPost12 from "./components/BlogPage/BlogPost/BlogPost12";
import BlogPost13 from "./components/BlogPage/BlogPost/BlogPost13";
import BlogPost14 from "./components/BlogPage/BlogPost/BlogPost14";
import BlogPost15 from "./components/BlogPage/BlogPost/BlogPost15";
import BlogPost16 from "./components/BlogPage/BlogPost/BlogPost16";

const App: React.FC = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work" element={<Portfolio />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/verification" element={<Verification />} />
      <Route path="/blog/transforming-your-cryptocurrency-initiative-expanding-horizons-for-enhanced-success-rebranding-crypto-project" element={<BlogPost1 />} />
      <Route path="/blog/the-necessity-of-rebranding-in-crypto-amplifying-visibility-and-interaction-rebranding-crypto-project" element={<BlogPost2 />} />
      <Route path="/blog/revamping-crypto-ventures-elevate-market-impact-and-broaden-reach-rebranding-crypto-project" element={<BlogPost3 />} />
      <Route path="/blog/expectations-with-tech-in-2040" element={<BlogPost4 />} />
      <Route path="/blog/intern-of-agency-aadu" element={<BlogPost5 />} />
      <Route path="/blog/life-of-a-blogger" element={<BlogPost6 />} />
      <Route path="/blog/web-development" element={<BlogPost7 />} />
      <Route path="/blog/cybersecurity-in-2024" element={<BlogPost8 />} />
      <Route path="/blog/buttercup" element={<BlogPost9 />} />
      <Route path="/blog/blockchain-beyond-bitcoin" element={<BlogPost10 />} />
      <Route path="/blog/hidden-benefits-of-learning-a-new-language" element={<BlogPost11 />} />
      <Route path="/blog/crafting-winning-social-media" element={<BlogPost12 />} />
      <Route path="/blog/building-your-personal-brand" element={<BlogPost13 />} />
      <Route path="/blog/conquering-your-fears" element={<BlogPost14 />} />
      <Route path="/blog/apps-for-the-modern-entrepreneur" element={<BlogPost15 />} />
      <Route path="/blog/the-future-of-work" element={<BlogPost16 />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
